/**
 * Reimposta a 0 il campo TimbEliminata
 * 
 * @param idtimbratura
 *
 * @properties={typeid:24,uuid:"A797C5AE-ED3E-405B-9BE5-D27AFAE50D3C"}
 */
function RipristinaTimbraturaEliminata(idtimbratura)
{
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.TIMBRATURE);
	if (fs && fs.loadRecords(idtimbratura))
	{
		try
		{
			fs.timbeliminata = 0;
			return true;
		}
		catch(ex)
		{
			databaseManager.rollbackTransaction();
			globals.ma_utl_logError(ex);
			
			return false;
		}
	}
	else
	{
		globals.ma_utl_logError(new Error("Errore durante il ripristino della timbratura con id: " + idtimbratura), LOGGINGLEVEL.ERROR);
		return false;
	}
}

/**
 * @properties={typeid:24,uuid:"494C8368-5A13-4B16-A736-43FD6293361F"}
 */
function attivaMese(ditta, periodo, gruppoInstallazione, gruppoLavoratori, sync, nonInteractive)
{	
	var params = globals.inizializzaParametriAttivaMese(ditta, periodo, gruppoInstallazione, gruppoLavoratori, globals.getTipoConnessione());
		params.sync = sync;
	
	var result = { error: false, message: 'Attivazione completata con successo' };
	
	var response = scopes.giornaliera.preAttivaMese(params, nonInteractive != null ? nonInteractive : true);
	if (response !== globals.TipoAttivazione.NEGATA)
	{
		//controlliamo la presenza di dipendenti senza regole associate
		var dipendentiSenzaRegola = gruppoLavoratori != "" ? globals.getElencoDipendentiSenzaRegoleAssociateWS(params) : globals.getElencoDipendentiSenzaRegoleAssociate(params);
		if (dipendentiSenzaRegola && dipendentiSenzaRegola.length > 0)
		{
			globals.ma_utl_logError(new Error('Attivazione Mese: cliente ' + globals.customer_db_name + ', dipendenti senza regole associate - ' + dipendentiSenzaRegola.map(function(d){ return d.id_lavoratore; })));
			result = { error: true, message: 'Esistono dipendenti senza regole associate, contattare lo studio' };
		}
	}
	
	if (response !== globals.TipoAttivazione.NON_NECESSARIA) // attivazione implicita
	{
		// Controlla se vi siano o meno dipendenti da attivare
		var responseChkDip = globals.checkDipendentiDaAttivare(params);
		if(!responseChkDip)
		{
			globals.ma_utl_logError(new Error('checkDipendentiDaAttivare: nessuna risposta dal server'));
			result = { error: true, message: 'Errore durante l\'attivazione del mese, contattare lo studio' };
		}

		if(!responseChkDip.StatusCode == globals.HTTPStatusCode.OK || !responseChkDip.ReturnValue)
		{
			globals.ma_utl_logError(new Error('checkDipendentiDaAttivare: check non riuscito'));
			result = { error: true, message: 'Errore durante l\'attivazione del mese, contattare lo studio' };
		}		

			// add new operation info for future updates
			var operation = scopes.operation.create(ditta,gruppoInstallazione,periodo,globals.OpType.AM);
			if(operation == null || operation.operationId == null)
			{
				globals.ma_utl_showErrorDialog('Errore durante la preparazione dell\'operazione lunga. Riprovare o contattare il  servizio di Assistenza.');
				return null;
			}
			
			params.operationid = operation.operationId;
			params.operationhash = operation.operationHash;

			globals.attivazioneMese(params);
	}
	
	return result;
}

/**
 * @param params
 * @param {Function} [continueWithCallback]
 * @param {Function} [handlePrintCallback]
 *
 * @properties={typeid:24,uuid:"CBE7113B-2B8A-4E99-B742-B1D49EACB1FC"}
 */
function controlliPreliminari(params, continueWithCallback, handlePrintCallback) 
{
	if(!cancellaChiusuraDipPerOperazione(params.iddipendenti, params.idditta, params.periodo)) 
		return { error: true, message: 'Errore in cancellazione chiusura operazione, contattare lo studio' };

	// add new operation info for future updates
	/** @type {{statusCode : Number, returnValue: Object, message : String, operationId : String, operationHash : String, status : Number, start : Date, end : Date, progress : Number, lastProgress : Date}} */
	var operation = scopes.operation.create(params['idditta'],globals.getGruppoInstallazioneDitta(params['idditta']),params['periodo'],globals.OpType.CP);
	if(operation == null || operation.operationId == null)
	{
		globals.ma_utl_showErrorDialog('Errore durante la preparazione dell\'operazione lunga. Riprovare o contattare il  servizio di Assistenza.');
		return { error : true, message: 'Errore durante la preparazione dell\'operazione lunga.'};
	}
	params.operationid = operation.operationId;
	params.operationhash = operation.operationHash;	
		
    var url = globals.WS_CALENDAR + "/Control32/ControlliPreliminari";
    	
    // nel caso cliente va verificato che il flusso sia completo quindi che abbia
    // scaricato la giornaliera del mese precedente
	if(globals.isCliente())
	{
		// controllaAcquisizione ritorna un numero a seconda della situazione
		var response = controllaAcquisizioneCP(params);
    	if (response && response.ReturnValue)
    	{
		    if(!response.ReturnValue)
		    {
		    	// acquisizioni periodi precedenti non completate
		    	var periodoPrecedente = scopes.date.AddMonths(scopes.date.FromIntMonth(params.periodo), -1);
				
		    	response = importaTracciatoDaFtp(params.idditta, scopes.date.ToIntMonth(periodoPrecedente), params.idgruppoinstallazione, params.codgruppogestione);
		    	if(!response || !response.ReturnValue)
		    		return{error : true, message : 'Errore durante l\'importazione della giornaliera di ' + utils.dateFormat(periodoPrecedente, 'MMMM YYYY') + ', contattare lo studio.'};
		    			
		    	response = controllaAcquisizioneCP(params);
		    	if(!response || !response.ReturnValue)
		    	   	return{error : true, message : 'Errore in controllo acquisizione, contattare lo studio'};
		    }
		    
		    if(params.sync)
	    	{
	    		url += 'Sync';
	    		response = globals.getWebServiceResponse(url, params);
	    		
	    		if(handlePrintCallback && response.files)
	    			for(var f = 0; f < response.files.length; f++)
	    				handlePrintCallback(response.files[f]);
	    		
	    		return {error : !response.ReturnValue, message : response.Message};
	    	}
	    	else
		    	// acquisizione precedente ok, procedere con i controlli preliminari
		    	return globals.addJsonWebServiceJob(url += 'Async', params, globals.vUpdateOperationStatusFunction, null, continueWithCallback);
	    } 
    	else
    		return null;
	}
	else
		return globals.addJsonWebServiceJob(url,
				                         params,
										 globals.vUpdateOperationStatusFunction,
										 null,
										 continueWithCallback);
}

/** 
 * Controlla se è possibile effettuare la chiusura mese cliente, in caso affermativo
 * procede con la chiusura chiamando chiudiMeseSelezionato
 * 
 * @param 				params
 * @param {Function} 	continueWithCallback
 * @param {Boolean} 	[nonInteractive]
 * 
 * @properties={typeid:24,uuid:"27E20526-74B6-4D34-808E-7F713E2385EA"}
 */
function chiusuraMeseCliente(params, continueWithCallback, nonInteractive) 
{
	nonInteractive = nonInteractive == true;
	
	var periodo = scopes.date.FromIntMonth(params.periodo);
	var anno = periodo.getFullYear(), mese = periodo.getMonth() + 1;
	
	if (globals.ma_utl_hasKey(globals.Key.AUTORIZZAZIONI)) 
	{
		/** @type {Array<Number>}*/
		var arrRicSosp = scopes.anagrafiche.getRichiesteInSospeso(params.idditta, anno, mese);
		if (arrRicSosp.length > 0) 
			return { error: true, message: 'Ci sono ancora in sospeso richieste di ferie e permessi per la ditta nel periodo indicato.<br/>Procedere confermandole o rifiutandole prima di proseguire.' };
	}
	
	/** @type {Array} */
	var dipendentiSenzaRegole = params.codgruppogestione != "" ? globals.getElencoDipendentiSenzaRegoleAssociateWS(params) : globals.getElencoDipendentiSenzaRegoleAssociate(params);
	if (dipendentiSenzaRegole && dipendentiSenzaRegole.length > 0)
		return { error: true, message: 'Ci sono nuovi dipendenti senza regola associata non presenti in fase di apertura della giornaliera.<br/><strong>Contattare lo studio</strong>' };
	
	var response = controllaAcquisizioneCM(params);
	if (response) 
	{
		// risposta ottenuta
		if(response) 
		{
			// acquisizioni precedenti ok, proseguire con i controlli chiusura
			if(response.ReturnValue)
			{
				var categorieBloccanti = ottieniCategorieBloccanti(params.idditta, params.periodo, params.iddipendenti);
				if (categorieBloccanti.bloccante)
				{	
				    globals.ma_utl_logError(new Error('Invio giornaliera bloccato: ' + categorieBloccanti.toString()));
				    return { error: true, message: 'Sono presenti eventi bloccanti, contattare lo studio.' };
				}
				else
				{
					if(categorieBloccanti.messaggio)
					{
						//la chiusura è consentita ma all'utente viene notificato un messaggio che lo
						//responsabilizza sull'esito finale dell'operazione
						var msg  = "Ci sono ancora timbrature errate e/o giorni non conteggiati in giornaliera <br/>";
							msg += "Tale situazione non è bloccante per lo studio, tuttavia potrebbero verificarsi incongruenze. <br/>";
							msg += "<strong>Procedere comunque?</strong>";
							
						var answer = nonInteractive || globals.ma_utl_showYesNoQuestion(msg, 'Chiusura mese');
						if(!answer)
							return { error: false, message: 'Operazione interrotta dall\'utente' };
				    }
					
					chiudiMeseSelezionato(params, continueWithCallback);
					return { error: false, message : ''};
			    }
			}
			// acquisizioni precedenti non ok, verificare se necessario chiedere scarico timbrature
			else 
			{
			   //se c'è il blocco viene mostrato il messaggio con la domanda circa l'acquisizione delle timbrature del periodo
			   var importaPerPrecResponse = nonInteractive || globals.ma_utl_showYesNoQuestion(response['message'], 'Chiusura mese cliente');
			   
			   if(importaPerPrecResponse)
			   {
				   // acquisizioni periodi precedenti non completate
			       var periodoPrecedente = scopes.date.AddMonths(scopes.date.FromIntMonth(params.periodo), -1);
					
			    	response = importaTracciatoDaFtp(params.idditta, scopes.date.ToIntMonth(periodoPrecedente), params.idgruppoinstallazione, params.codgruppogestione);
			    	if(!response || !response.ReturnValue)
			    		return { error: true, message: 'Errore durante l\'importazione della giornaliera di ' + utils.dateFormat(periodoPrecedente, globals.EU_DATEFORMAT) + ', contattare lo studio.' };
				   
			    }
			    else
			    	return { error: false, message: 'Operazione interrotta dall\'utente' };
				
			}
		} 
		else
			return { error: true, message: 'Completare l\'importazione dei periodi precedenti prima di proseguire. Contattare lo studio.' };
	} 
	else
		return { error: true, message: 'i18n:ma.msg.server_error' };
		
	return { error: false, message: 'Chiusura mese terminata correttamente' };
}

/**
 * Ottiene l'array dei dipendenti non ancora chiusi
 * 
 * @param {Object} params
 * 
 * @return {Object} 
 * 
 * @properties={typeid:24,uuid:"4AAB3823-F707-4673-8509-7B6DBD21D990"}
 */
function getDipendentiDaChiudere(params)
{
	/** @type Object */
	var objMancanti = { response: false, iddipendenti: [] };
			
	var url      = globals.WS_CALENDAR + "/Consolidating32/ElencoDipendentiMancanti";
	var response = globals.getWebServiceResponse(url, params);
	
	if (response && response.ReturnValue)
	{
		objMancanti.response     = true;
		objMancanti.iddipendenti = response['dipArray'];
	}
	else
		return { error: true, message: 'i18n:ma.msg.server_error' };
	
	return objMancanti;
}

/**
 * Lancia la procedura di chiusura del mese
 * 
 * @properties={typeid:24,uuid:"234DF9DD-5052-4165-B16F-5B3AD7E5C007"}
 */
function chiudiMeseSelezionato(params, continueWithCallback)
{
	// add new operation info for future updates
	/** @type {{statusCode : Number, returnValue: Object, message : String, operationId : String, operationHash : String, status : Number, start : Date, end : Date, progress : Number, lastProgress : Date}} */
	var operation = scopes.operation.create(params['idditta'],globals.getGruppoInstallazioneDitta(params['idditta']),params['periodo'],globals.OpType.CM);
	if(operation == null || operation.operationId == null)
	{
		globals.ma_utl_showErrorDialog('Errore durante la preparazione dell\'operazione lunga. Riprovare o contattare il  servizio di Assistenza.');
		return null;
	}
	params.operationid = operation.operationId;
	params.operationhash = operation.operationHash;
	
	//otteniamo l'array dei dipendenti mancanti
	if(params.iddipendenti && params.iddipendenti.length > 0)
		return chiusuraMese(params, continueWithCallback);
	
	return null;
}

/**
 * Lancia l'operazione d chiusura del mese (operazione lunga)
 * 
 * @properties={typeid:24,uuid:"7E63C72F-3303-482B-BFB3-255BE289FDC3"}
 * 
 * @AllowToRunInFind
 */
function chiusuraMese(params, continueWithCallback)
{
	var url = globals.WS_CALENDAR + "/Consolidating32/ChiusuraMese";
	if(params.sync)
	{
		url += 'Sync';
		return globals.getWebServiceResponse(url, params);
	}
	
	// add new operation info for future updates
	var operation = scopes.operation.create(params['idditta'],globals.getGruppoInstallazioneDitta(params['idditta']),params['periodo'],globals.OpType.IT);
	if(operation == null || operation.operationId == null)
	{
		globals.ma_utl_showErrorDialog('Errore durante la preparazione dell\'operazione lunga. Riprovare o contattare il  servizio di Assistenza.');
		return { StatusCode: globals.HTTPStatusCode.INTERNAL_ERROR , ReturnValue : false, Message : 'Errore durante la preparazione dell\'operazione lunga.'}; 
	}
	params.operationid = operation.operationId;
	params.operationhash = operation.operationHash;
	return globals.addJsonWebServiceJob(url + 'Async',
				                        params,
										globals.vUpdateOperationStatusFunction,
										null,
										continueWithCallback);	
}

/**
 * Lancia l'operazione lunga di creazione ed upload del file di giornaliera
 * sul folder ftp
 * 
 * @param {Object} params
 *
 * @properties={typeid:24,uuid:"94C6FA12-8F1D-441F-8287-CC3C6E21DAD8"}
 */
function inviaGiornalieraSuFtp(params)
{
	var ftpUrl = globals.WS_LU + "/Lu32/InviaGiornalieraSuFtp";
	if(params.sync)
		return globals.getWebServiceResponse(ftpUrl + 'Sync', params);
	
	// add new operation info for future updates
	var operation = scopes.operation.create(params['idditta'],globals.getGruppoInstallazioneDitta(params['idditta']),params['periodo'],globals.OpType.IG);
	if(operation == null || operation.operationId == null)
	{
		globals.ma_utl_showErrorDialog('Errore durante la preparazione dell\'operazione lunga. Riprovare o contattare il  servizio di Assistenza.');
		return { StatusCode : globals.HTTPStatusCode.INTERNAL_ERROR, ReturnValue : false, Message : 'Errore durante la preparazione dell\'operazione lunga' };
	}
	params.operationid = operation.operationId;
	params.operationhash = operation.operationHash;
	return globals.addJsonWebServiceJob(ftpUrl + 'Async', params);
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il nome dell'orologio relativo alla timbratura desiserata
 * 
 * @param {Number} idTimbratura
 *
 * @properties={typeid:24,uuid:"00708AC9-5DF6-4EE1-BCD8-696A71C39806"}
 */
function getOrologioTimbratura(idTimbratura)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2timbratura>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.TIMBRATURE);
	if(fs.find())
	{
		fs.idtimbrature = idTimbratura;
		if(fs.search())
			return fs.indirizzo;
	}
	return null;
}

/**
 * Controlla lo stato delle acquisizioni delle giornaliere precedenti per verificare
 * la fattibilità o meno della chiusura del mese selezionato
 * 
 * @param {Object} params
 * 
 * @return {{ReturnValue: Object, StatusCode: Number, Message: String}}
 * 
 * @properties={typeid:24,uuid:"F8790161-C403-403A-9804-E6D606AF02BE"}
 */
function controllaAcquisizioneCM(params)
{
   var url = globals.WS_CALENDAR + '/Calendar32/ControlloAcquisizioneCM';
   return globals.getWebServiceResponse(url, params);	
 }

/**
 * Recupera l'oggetto relativo alle info sulle categorie bloccanti
 * 
 * @param {Number} idditta
 * @param {Number} periodo
 * @param {Array<Number>} [iddipendenti]
 *
 * @return {Object}
 * 
 * @properties={typeid:24,uuid:"E421A31C-A4F5-4678-B2CA-614FCEC443A9"}
 */
function ottieniCategorieBloccanti(idditta,periodo,iddipendenti)
{
	// array di id dei lavoratori appartenenti alla selezione (devo considerare un eventuale filtro su gruppo di lavoro,etc)
	var _arrDip = iddipendenti ? iddipendenti : null;
	// recuperiamo gli idlavoratori interessati e le tipologie di categoria 
	var _catSql = "SELECT idDip,Categoria FROM F_Gio_ControlliChiusura(?,?,?) ";
	if(_arrDip && _arrDip.length > 0) 
		_catSql += "WHERE idDip IN (" + _arrDip.join(',') + ")";
	var _catArr = [idditta,periodo,globals._tipoConnessione];
	var _catDs = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, _catSql, _catArr, -1);
	var _bloccante = false;
	var _messaggio = false;
    var _objCat = { eventi_lunghi: 0, eventi_bloccanti: 0, giornate_squadrate: 0, timbrature_errate: 0, non_conteggiati: 0 };
	
    //todo ritornare un oggetto con categorie fisse
	if (_catDs.getMaxRowIndex() > 0) 
	{
		for (var i = 1; i <= _catDs.getMaxRowIndex(); i++) 
		{
			switch (_catDs.getValue(i, 2)) 
			{
				//caso eventi lunghi esclusivo del caso sede
				case 'EL':
					_objCat.eventi_lunghi = 1;
					_bloccante = true;
					break;
				case 'EB':
					_objCat.eventi_bloccanti = 1;
					_bloccante = true;
					break
				case 'GS':
					_objCat.giornate_squadrate = 1;
					_bloccante = true;
					break;
				case 'TE':
					_objCat.timbrature_errate = 1;
					_messaggio = true;
					break;
				case 'NC':
					_objCat.non_conteggiati = 1;
					_messaggio = true;
					break;
			}
		}
	}
	
	_objCat.bloccante = _bloccante;
	_objCat.messaggio = _messaggio;
	_objCat.toString  = function(){ 
		return 'eventi lunghi: '      + this.eventi_lunghi      + ', ' +
		       'eventi bloccanti: '   + this.eventi_bloccanti   + ', ' +
		       'giornate squadrate: ' + this.giornate_squadrate + ', ' +
		       'timbrature errate: '  + this.timbrature_errate  + ', ' +
		       'non conteggiati: '    + this.non_conteggiati
	}
    
	return _objCat;
}

/**
 * Controlla lo stato delle acquisizioni delle giornaliere precedenti per verificare
 * la fattibilità o meno del lancio dei controlli preliminari
 *  
 * @param {Object} params
 * 
 * @return {{ReturnValue: Object, StatusCode: Number, Message: String}}
 * 
 * @properties={typeid:24,uuid:"BDFF3AD4-CEDD-4935-A600-CF87F314CF45"}
 */
function controllaAcquisizioneCP(params)
{
	if(globals._tipoConnessione == globals.Connessione.SEDE)
		   return null;
	
	var url = globals.WS_CALENDAR + '/Calendar32/ControlloAcquisizioneCP';
	return globals.getWebServiceResponse(url, params);	
}

/**
 * Importa il tracciato della ditta selezionata (non essendoci il percorso 
 * selezionato il tracciato verrà automaticamente recuperato dall'ftp)
 *
 * @param {Number} [idditta]
 * @param {Number} [periodo]
 * @param {Number} [gruppoinstallazione]
 * @param {String} [gruppolavoratori]
 *
 * @properties={typeid:24,uuid:"34E4ECD6-2798-4D50-B314-604B74B16C25"}
 * @SuppressWarnings(wrongparameters)
 */
function importaTracciatoDaFtp(idditta,periodo,gruppoinstallazione,gruppolavoratori) 
{
	gruppoinstallazione = gruppoinstallazione || globals.getGruppoInstallazione();
	gruppolavoratori    = gruppolavoratori    || globals.getGruppoLavoratori();
	
	var params = globals.inizializzaParametriAcquisizioneGiornaliera(idditta,
																	 [-1],															 
																	 periodo || globals.getPeriodo(),
							                                         gruppoinstallazione,
							                                         gruppolavoratori,
																	 globals.getTipoConnessione());
        
	params.sync = true;
	return importaDaFtpSync(params);
}

/**
 * Lancia l'importazione della giornaliera da ftp sincrona (operazione lunga)
 * 
 * @param {Object} params
 * 
 * @return {{ReturnValue: Object, StatusCode: Number, Message: String}}
 *
 * @properties={typeid:24,uuid:"DFDC8A9E-6420-4BF3-A03D-AD8F6A1B911D"}
 */
function importaDaFtpSync(params)
{
	var ftpUrl = globals.WS_LU + "/Lu32/ImportaDaFtpSync";
	return globals.getWebServiceResponse(ftpUrl, params);
}

/**
 * Lancia l'importazione della giornaliera da ftp asincrona (operazione lunga)
 * 
 * @param {Object} params
 * 
 * @return {{statusCode : Number, returnValue: Object, message : String, operationId : String, operationHash : String, status : Number, start : Date, end : Date, progress : Number, lastProgress : Date}}
 * 
 * @properties={typeid:24,uuid:"EBB62843-E9E9-4EB3-BE41-7404B4535114"}
 */
function importaDaFtpAsync(params)
{
	var ftpUrl = globals.WS_LU + "/Lu32/ImportaDaFtpAsync";
	// add new operation info for future updates
	var operation = scopes.operation.create(params['idditta'],globals.getGruppoInstallazioneDitta(params['idditta']),params['periodo'],globals.OpType.IT);
	if(operation == null || operation.operationId == null)
	{
		globals.ma_utl_showErrorDialog('Errore durante la preparazione dell\'operazione lunga. Riprovare o contattare il  servizio di Assistenza.');
		return { statusCode: globals.HTTPStatusCode.INTERNAL_ERROR , returnValue : false, message : 'Errore durante la preparazione dell\'operazione lunga.',
			     operationId : null, operationHash: '', status : -1, start : null, end : null, progress : null, lastProgress : null}; 
	}
	params.operationid = operation.operationId;
	params.operationhash = operation.operationHash;
	
	globals.addJsonWebServiceJob(ftpUrl,
        	                     params,
								 globals.vUpdateOperationStatusFunction);
	return operation;
}

/**
 * Inizializza i parametri per l'importazione del tracciato del mese
 * 
 * @param {Number} _idditta
 * @param {Number} _periodo
 * @param {Number} _gruppoinst
 * @param {String} _gruppolav
 * @param {Array} _iddipendenti
 * @param {Number} _tracciatoOre
 * 
 * @properties={typeid:24,uuid:"26250C72-93AF-471E-B841-30C1F64B1A18"}
 */
function inizializzaParametriTracciatoMese(_idditta, _periodo, _gruppoinst, _gruppolav, _iddipendenti,_tracciatoOre)
{
	return {
		userid                  : security.getUserName(), 
		clientid                : security.getClientID(),
		server                  : globals.server_db_name,
		databasecliente         : globals.customer_dbserver_name,
		idditta					: _idditta,
		periodo					: _periodo,
		idgruppoinstallazione	: _gruppoinst,
		codgruppogestione		: _gruppolav,
		iddipendenti            : _iddipendenti,
		idtracciatoore          : _tracciatoOre		
	};
}

/**
 * @param params
 * @param [nonInteractive]
 * 
 * 
 * @return {Number}
 * 		<ul>
 *		<li>0	se si può procedere direttamente al calcolo della giornaliera,</li>
 * 		<li>1	se è necessario attivare silenziosamente prima del calcolo della giornaliera,</li>
 * 		<li>2	se è necessario presentare l'elenco delle festività,</li>
 * 	   	<li>-1	errore</li>
 * 		</ul>
 * 
 * @properties={typeid:24,uuid:"0F5CB62D-42DF-41F3-8A05-7A6AAB279624"}
 */
function preAttivaMese(params, nonInteractive)
{
	var response = isMeseDaAttivare(params);
    if (response && response.StatusCode == globals.HTTPStatusCode.OK) 
    {
	   if(response.ReturnValue === true)
	   {				   
	   	 var answer = nonInteractive == true || globals.ma_utl_showYesNoQuestion('Attivare il mese in giornaliera?', 'Mese non ancora attivato');
		 if (answer)
			 return globals.TipoAttivazione.AUTORIZZATA; // attivazione autorizzata 
		 else
			 return globals.TipoAttivazione.NEGATA; // attivazione negata
	   }
	   else
	   	   return globals.TipoAttivazione.NON_NECESSARIA;  // attivazione non necessaria
    }
    else 
    {
    	globals.ma_utl_showErrorDialog(response['message'], 'Errore');
    	return -1;
    }
}

/**
 * Ritorna true se il mese è ancora da attivare, false altrimenti
 * 
 * @param {Object} params
 * 
 * @return {{ReturnValue: Object, StatusCode: Number, Message: String}}
 * 
 * @properties={typeid:24,uuid:"6FC94872-5B39-4B9C-B465-35E3AE4CACE1"}
 */
function isMeseDaAttivare(params)
{		
	var url = globals.WS_CALENDAR + "/Calendar32/DittaDaAttivare";	
	return globals.getWebServiceResponse(url, params);		
}

/**
 * Lancia l'importazione della giornaliera da ftp (operazione sincrona)
 * 
 * @param {Object}    params
 * @param {Function} [callback]
 * 
 * @properties={typeid:24,uuid:"A38FC715-D774-4339-8F81-777F4903415D"}
 */
function importaGiornaliera(params, callback)
{
	var response = { returnValue: true, message: '' };
	var url      = globals.WS_LU + "/Lu32/ImportaDaFtp";
	
	if(params.sync)
	{
		url += 'Sync';
		response = globals.getWebServiceResponse(url, params);
	}
	else
	{
		// add new operation info for future updates
		var operation = scopes.operation.create(params['idditta'],globals.getGruppoInstallazioneDitta(params['idditta']),params['periodo'],globals.OpType.IT);
		if(operation == null || operation.operationId == null)
		{
			globals.ma_utl_showErrorDialog('Errore durante la preparazione dell\'operazione lunga. Riprovare o contattare il  servizio di Assistenza.');
			response.ReturnValue = false;
			response.Message = 'Errore durante la preparazione dell\'operazione lunga';
			response.StatusCode = globals.HTTPStatusCode.INTERNAL_ERROR;
			return response;
		}
		params.operationid = operation.operationId;
		params.operationhash = operation.operationHash;
		globals.addJsonWebServiceJob(url + 'Async',
			                         params,
									 globals.vUpdateOperationStatusFunction,
									 null,
									 callback);
	}
	return response;
}

/**
 * Importa le tabelle relative ai dati ditta e dipendente. Poiché queste richiedono
 * l'importazione delle tabelle generali, queste sono acquisite preventivamente.
 * 
 * @param params
 * @param callback
 *
 * @properties={typeid:24,uuid:"0C0772E8-F9BF-46DD-A472-DD46B30EFC21"}
 * @AllowToRunInFind
 */
function importaDatiDittaDipendenti(params, callback)
{
	var response = { returnValue: true, message: '' };
	var url      = globals.WS_LU + "/Lu32/RiceviTabelleGeneraliAsync";
	// add new operation info for future updates
	var operation = scopes.operation.create(params['idditta'],params['idgruppoinstallazione'],params['periodo'],globals.OpType.RTG);
	if(operation == null || operation.operationId == null)
	{
		globals.ma_utl_showErrorDialog('Errore durante la preparazione dell\'operazione lunga. Riprovare o contattare il  servizio di Assistenza.');
		response.returnValue = false;
		response.message = 'Errore durante la preparazione dell\'operazione lunga';
		return response;
	}
	params.operationid = operation.operationId;
	params.operationhash = operation.operationHash;
	globals.addJsonWebServiceJob(url,
		                         params,
								 null,
								 null,
								 function(status) 
										{
											if (status.operation.op_status == globals.OpStatus.SUCCESS)
												importaDatiDitta(params);
											
											callback &&	callback(status);
										});
	
	return response;
}

/**
 * @param params
 *
 * @properties={typeid:24,uuid:"03B5C6D2-2F4A-46A6-9F6A-4ED153DD6B51"}
 */
function importaDatiDitta(params)
{
	// add new operation info for future updates
	var operation = scopes.operation.create(params['idditta'],globals.getGruppoInstallazioneDitta(params['idditta']),params['periodo'],globals.OpType.RTDD);
	if(operation == null || operation.operationId == null)
	{
		globals.ma_utl_showErrorDialog('Errore durante la preparazione dell\'operazione lunga. Riprovare o contattare il  servizio di Assistenza.');
		return;
	}
	params.operationid = operation.operationId;
	params.operationhash = operation.operationHash;
	
	var url = globals.WS_LU + "/Lu32/RiceviTabelleDittaAsync";
	globals.addJsonWebServiceJob(url, params);
}

/**
 * @param params
 *
 * @properties={typeid:24,uuid:"4A10AC37-B1B5-4D94-AFC7-3E2EA081AFE7"}
 */
function importaDatiSync(params)
{
	return importaDatiGeneraliSync(params) && importaDatiDittaDipendentiSync(params);
}

/**
 * @AllowToRunInFind
 * 
 * @param params
 *
 * @properties={typeid:24,uuid:"23D98F79-87A2-4571-95B0-7EA347000816"}
 */
function importaDatiGeneraliSync(params)
{
	var prints = datasources.db.ma_log.operationfile.getFoundSet();
	var url    = globals.WS_LU + "/Lu32/RiceviTabelleGeneraliSync";
	
	var response = globals.getWebServiceResponse(url, params);
	if(!response)
		throw new Error('i18n:ma.err.network');
	
	if(!response['success'])
		throw new Error(response['message']);
	
	if(prints.find() && (prints.op_id = response['operationid']) && prints.search() > 0)
		plugins.file.writeFile(
			prints.operationfile_to_filelog.file_name, 
			prints.operationfile_to_filelog.file_bytes, 
			prints.operationfile_to_filelog.file_type);
	
	return true;
}

/**
 * @AllowToRunInFind
 * 
 * @param params
 *
 * @properties={typeid:24,uuid:"04DC3C5B-EB54-43B6-9104-DCC954C6AD8B"}
 */
function importaDatiDittaDipendentiSync(params)
{
	var prints = datasources.db.ma_log.operationfile.getFoundSet();
	var url    = globals.WS_LU + "/Lu32/RiceviTabelleDittaSync";

	var response = globals.getWebServiceResponse(url, params);
	if(!response)
		throw new Error('i18n:ma.err.network');
	
	if(!response['success'])
		throw new Error(response['message']);
	
	if(prints.find() && (prints.op_id = response['operationid']) && prints.search() > 0)
		plugins.file.writeFile(
			prints.operationfile_to_filelog.file_name, 
			prints.operationfile_to_filelog.file_bytes, 
			prints.operationfile_to_filelog.file_type);
	
	return true;
}

/**
 * @param {Number} idditta
 * @param {Number} idlavoratore
 * @param {Number} periodo
 * @param {Boolean} [includiAccantonate]
 * 
 * @return {Array<{ data: Date, tipo: String }>}
 *
 * @properties={typeid:24,uuid:"64792225-6201-4B90-B521-AA8ED67BAE7F"}
 */
function RiepilogoFestivita(idditta, idlavoratore, periodo, includiAccantonate)
{
	includiAccantonate = includiAccantonate || false;
	
	var params = { idditta: idditta, periodo: periodo };
	
	var url = globals.WS_CALENDAR + '/Holiday32/RiepilogoFestivitaDittaPeriodo';
	var response = globals.getWebServiceResponse(url, params);
	
	/** @type {Array<{ data: Date, tipo: String }>} */
	var festivita = [];
	
	if(response.ReturnValue)
	{
		/** @type {Array}*/
		var riepilogo = response.ReturnValue;
		if(!includiAccantonate)
			riepilogo = riepilogo.filter(function(_){ return _[1] == false; });
		
		riepilogo.forEach(function(festa)
						  {
							  var festaDipendente = festa[2].filter(function(_){ return _[0] == idlavoratore; })[0];
							  if (festaDipendente)
								  festivita.push({ data: utils.parseDate(festa[0], globals.ISO_DATEFORMAT), tipo: festaDipendente[2] });
						  });
	}
	
	return festivita;
}


/**
 * Converte un numero rappresentante l'orario di lavoro espresso in centesimi
 * nel formato ##,##
 * 
 * @param {Number} totaleOrario
 * 
 * @return Number
 * 
 * @properties={typeid:24,uuid:"6FA99F72-0624-4C7C-8F41-A8386A6A58EE"}
 */
function convertiOrarioInOreCentesimi(totaleOrario)
{
	var totaleMinutiFormat;
	var totaleOre = Math.floor(totaleOrario/100);
	var totaleMinuti = totaleOrario - totaleOre * 100;
	
	switch(totaleMinuti)
	{
		case 15:
		case 55:
			totaleMinutiFormat = 0.25;
			break;
		case 30:
		case 50:	
		case 70:
		    totaleMinutiFormat = 0.50;
			break;
		case 45:
		case 85:
		    totaleMinutiFormat = 0.75;
		    break;
		default:
		    totaleMinutiFormat = 0;
			break;
	}
	
	return totaleOre + totaleMinutiFormat;
}

/**
 * Converte un numero rappresentante l'orario di lavoro espresso dal formato ##.##
 * in centesimi
 * 
 * @param {Number} ore
 *
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"D8ADEF25-D656-45F6-B4DC-87726C88C212"}
 */
function convertiOrarioInNumero(ore)
{
	var totaleMinuti;
	var totaleOre = Math.floor(ore);
	var totaleMinutiFormat = ore % totaleOre;
	
	switch(totaleMinutiFormat)
	{
		case 0.25:
			totaleMinuti = 15;
			break;
		case 0.50:
			totaleMinuti = 30;
			break;
		case 0.75:
			totaleMinuti = 45;
			break;
		default:
			totaleMinuti = 0;
			break;
	}
	
	return totaleOre * 100 + totaleMinuti;
}

/**
 * @param {Number} idditta
 * @param {Number} periodo
 *
 * @properties={typeid:24,uuid:"518BE90C-791C-46D8-A964-21638449BAF3"}
 */
function ElencoFestivita(idditta, periodo)
{
	var gruppoInstallazione = globals.getGruppoInstallazioneDitta(idditta);
	
	var _pars = {
		tipoconnessione : globals.TipoConnessione.CLIENTE,
		userid                  : security.getUserName(), 
		clientid                : security.getClientID(),
		server                  : globals.server_db_name,
		databasecliente         : globals.customer_dbserver_name, 
		periodo : periodo,
		idditta : idditta,
		iddipendenti : [],
		gruppolavoratori : [],
		idgruppoinstallazione : gruppoInstallazione
		}
	var url    = globals.WS_CALENDAR + "/Holiday32/ElencoFestivita";

	var response = globals.getWebServiceResponse(url, _pars);
	if(!response || !response.ReturnValue)
		throw new Error('Errore durante la richiesta al server. Contattare lo studio');

	if(response)
		return response.ReturnValue;
	
	return [];
}

/**
 * Verifica se è già stato effettuato o meno un tentativo di invio della giornaliera per l'elenco di 
 * dipendenti selezionati 
 * 
 * @param {Array<Number>} arrIdDip
 * @param {Number} periodo
 *
 * @properties={typeid:24,uuid:"3B32020C-CAC5-4035-9399-60DF3CA86AD8"}
 * @AllowToRunInFind
 */
function isPrimoInvioGiornaliera(arrIdDip,periodo)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2wk_attivitaeseguitedip>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.ATTIVITA_DIP);
	if(fs.find())
	{
	   fs.iddip = arrIdDip;	
	   fs.periodo = periodo;
	   fs.e2wk_attivitaeseguitedip_to_e2wk_tabattivita.codice = globals.AttivitaDip.TRASMISSIONE_GIORNALIERA;
	   
	   if(fs.search())
		   return false;
	}
	
	return true;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'eventuale record dell'ultima operazione dell'attività effettuata per la ditta nel periodo indicato
 * 
 * @param {Number} idDitta
 * @param {Number} idGruppoInst
 * @param {String} codGruppoGestione
 * @param {Number} periodo
 * @param {Number} idTabAttivita
 *
 * @type {JSRecord<db:/ma_presenze/e2wk_attivitaeseguiteditta>}
 * 
 * @properties={typeid:24,uuid:"2477D970-5BDE-461A-97EC-1D96A1102F7A"}
 */
function getUltimaOperazioneDitta(idDitta,idGruppoInst,codGruppoGestione,periodo,idTabAttivita)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2wk_attivitaeseguiteditta>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.ATTIVITA_DITTA);
	if(fs.find())
	{
		fs.idditta = idDitta;
		if(idGruppoInst)
			fs.idgruppoinst = idGruppoInst;
		if(codGruppoGestione)
			fs.codgruppogestione = codGruppoGestione;
		fs.periodo = periodo;
		fs.idtabattivita = idTabAttivita;
		
		if(fs.search())
		{
			fs.sort('ultimaesecuzioneil desc');
			return fs.getRecord(1);
		}
	}
	
	return null;
}

/**
 * Restituisce l'eventuale record dell'ultima operazione dell'attività effettuata per il dipendente nel periodo indicato
 * 
 * @param {Number} idDip
 * @param {Number} periodo
 * @param {String} codAttivita
 * 
 * @return {JSRecord<db:/ma_presenze/e2wk_attivitaeseguitedip>}
 *
 * @properties={typeid:24,uuid:"79EC13FF-7096-411A-8326-8FCD5E682ACF"}
 * @AllowToRunInFind
 */
function getUltimaOperazioneDipendente(idDip,periodo,codAttivita)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2wk_attivitaeseguitedip>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.ATTIVITA_DIP);
	if(fs.find())
	{
		fs.iddip = idDip;
		fs.periodo = periodo;
		fs.e2wk_attivitaeseguitedip_to_e2wk_tabattivita.codice = codAttivita;
		
		if(fs.search())
		{
			fs.sort('ultimaesecuzioneil desc');
			return fs.getRecord(1);
		}
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Verifica se è stata già effettuata la prima attivazione del periodo indicato per la ditta 
 * 
 * @param {Number} idDitta
 * @param {Number} periodo
 *
 * @properties={typeid:24,uuid:"737C709E-CF66-44FD-94D6-D530904C909F"}
 */
function isPrimaAttivazione(idDitta,periodo)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2wk_attivitaeseguiteditta>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.ATTIVITA_DITTA);
	if(fs.find())
	{
	   fs.idditta = idDitta;	
	   fs.periodo = periodo;
	   fs.e2wk_attivitaeseguiteditta_to_e2wk_tabattivita.codice = globals.AttivitaDitta.ATTIVAZIONE_MESE;
	   
	   if(fs.search())
		   return false;
	}
	
	return true;
}

/**
 * @AllowToRunInFind
 * 
 * Determina se per la ditta specificata la causale richiesta segua o meno la timbratura in presenza
 * (timbrature causalizzate aventi questa causale devono venire aggiunte alle timbrature effettive)
 * 
 * @param {Number} idDitta
 * @param {Number} causale
 *
 * @properties={typeid:24,uuid:"D1F0D7D8-6296-4B85-8629-1F3375CF3F7C"}
 */
function segueTimbraturaPresenza(idDitta,causale)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2timbratureserviziogestione>}*/
	var fsTimbServGest = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.TIMBRATURE_SERVIZIOGESTIONE);
	if(fsTimbServGest.find())
	{
		fsTimbServGest.idditta = idDitta;
		fsTimbServGest.causale = causale;
		
		if(fsTimbServGest.search())
			return fsTimbServGest.seguelatimbraturapresenza;
	}
	
	return null;
}

/**
 * @param {Number} idLav
 * @param {Date} giorno
 * 
 * @return {JSRecord<db:/ma_presenze/e2giornalieraprogfasce>}
 * 
 * @properties={typeid:24,uuid:"85BF7ECF-72AF-42B1-8217-94947D12E9FB"}
 * @AllowToRunInFind
 */
function getProgrammazioneFasce(idLav,giorno)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2giornalieraprogfasce>} */
	var fsFasceProg = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.GIORNALIERA_PROGFASCE);
	if(fsFasceProg.find())
	{
		fsFasceProg.iddip = idLav;
		fsFasceProg.giorno = giorno;
		
		if(fsFasceProg.search())
			return fsFasceProg.getSelectedRecord();
	}
	
	return null;
}

/**
 * Restituisce il codice della ditta per la determinazione del repository ftp per le timbrature 
 * 
 * @param {Number} idGruppoInstallazione
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"C8DA2CB5-35E8-4C22-BA68-7FF6845EFBE0"}
 * @AllowToRunInFind
 */
function getCodDittaSedeInstallazione(idGruppoInstallazione)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2sediinstallazione>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.SEDI_INSTALLAZIONE);
	if(fs.find())
	{
		fs.idgruppoinst = idGruppoInstallazione;
		if(fs.search())
			return fs.cod_ditta;
	}
	
	return null;
}

/**
 * 
 * @param {Array} _arrDip
 * @param {Number} _idDitta
 * @param {Number} [_periodo]
 * 
 * @properties={typeid:24,uuid:"9901DB76-AFAC-482E-9C8D-D53919B21A57"}
 */
function cancellaChiusuraDipPerOperazione(_arrDip,_idDitta,_periodo)
{
	var _length = _arrDip.length;
	var params = new Object();
	    params.idditta = _idDitta;
	    params.iddipendenti = -1;
	    params.periodo = _periodo ? _periodo : globals.getPeriodo();
		params.tipoconnessione = globals.getTipoConnessione();
	var url = globals.WS_CALENDAR + "/Calendar32/EliminaRegistrazione";
		
	for (var i=0; i<_length; i++)
	{	
		params.iddipendenti = [_arrDip[i]];		
		var response = globals.getWebServiceResponse(url,params);
		if(response.ReturnValue === false)
			return false;		
	}
	return true;
}

/**
 * Segna i dipendenti richiesti come da inviare per il periodo
 * 
 * @param {Array<Number>} arrLavoratori
 * @param {Number} periodo
 *
 * @properties={typeid:24,uuid:"1E09711A-E90B-49AC-814D-7EABDC9CF8B8"}
 */
function eliminaRegistrazione(arrLavoratori,periodo)
{
	var params = globals.inizializzaParametriRegistrazione(globals.getDitta(arrLavoratori[0]),
		                                                   arrLavoratori,
														   periodo,
														   globals.getGruppoInstallazioneLavoratore(arrLavoratori[0]),
														   globals.TipoConnessione.CLIENTE);
	
	var url = globals.WS_CALENDAR + "/Calendar32/EliminaRegistrazione";
	
	var response = globals.getWebServiceResponse(url,params);
	if(response.ReturnValue === false)
		globals.ma_utl_showErrorDialog(response.Message);
	
	return response.ReturnValue;
}

/**
 * Verifica l'esistenza di una giornaliera del periodo da importare per la ditta
 * inviata dallo studio sull'ftp
 *  
 * @param {Number} idDitta
 * @param {Number} periodo
 * @param {Number} gruppoinst
 * @param {String} gruppolav
 *
 * @return {{ReturnValue: Object, StatusCode: Number, Message: String}}
 * 
 * @properties={typeid:24,uuid:"F2BBA95F-2E89-4786-BB18-92E5180F2473"}
 */
function esisteGiornalieraDaImportare(idDitta,periodo,gruppoinst,gruppolav)
{
	try
	{
		var paramsFtp = globals.inizializzaParametriFtpGiornaliera(idDitta,
															       gruppoinst || globals.getGruppoInstallazioneDitta(idDitta),
																   periodo
																   );
		var ctrlUrl = globals.WS_LU + "/Ftp32/ControlloGioInviateSede";
		var ctrlRes = globals.getWebServiceResponse(ctrlUrl,paramsFtp);
		
		return ctrlRes;
	}
	catch (ex)
	{
		globals.ma_utl_showErrorDialog('Errore durante la verifica dell\'esistenza di giornaliere da importare','Verifica esistenza giornaliere da importare');
		return null;
	}
}

/**
 * Verifica l'esistenza di una giornaliera del periodo già inviata per la ditta
 * e non ancora acquisita dallo studio sull'ftp
 *  
 * @param {Number} idDitta
 * @param {Number} periodo
 * @param {Number} gruppoinst
 * @param {String} gruppolav
 *
 * @return Boolean
 * 
 * @properties={typeid:24,uuid:"97A600CA-D7D8-4201-9A20-5223DD380277"}
 */
function esisteGiornalieraInviata(idDitta,periodo,gruppoinst,gruppolav)
{
	try
	{		
		var _params = globals.inizializzaParametriInvioGiornaliera(idDitta,
															       [],
																   periodo,
																   gruppoinst || globals.getGruppoInstallazioneDitta(idDitta),
																   gruppolav || '',
																   globals.TipoConnessione.CLIENTE);
		var ctrlUrl = globals.WS_LU + "/Ftp32/ControlloGioInviate";
		var ctrlRes = globals.getWebServiceResponse(ctrlUrl,_params);
		
		if(ctrlRes)
		   return ctrlRes.ReturnValue;
	}
	catch (ex)
	{
		globals.ma_utl_showErrorDialog('Errore durante la verifica dell\'esistenza di giornaliere già inviate allo Studio','Verifica esistenza giornaliere già inviate');
		return false;
	}
	
	return false;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce true se la ditta ha associato dei gruppi di lavoratori, false altrimenti
 * 
 * @param {Number} idDitta
 *
 * @return Boolean
 * @properties={typeid:24,uuid:"38766978-8C86-4230-8823-01971F21B32B"}
 */
function haGruppiLavoratori(idDitta)
{
	/** @type {JSFoundSet<db:/ma_anagrafiche/ditte_presenzegruppigestione> }*/
	var fsGruppi = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_PRESENZE_GRUPPI);
	if(fsGruppi.find())
	{
		fsGruppi.idditta = idDitta;
		if(fsGruppi.search())
			return true;
	}
	
	return false;
}


/**
 * @AllowToRunInFind
 * 
 * Restituisce il foundset dei gruppi di lavoratori della ditta richiesta
 * 
 * @param {Number} idDitta
 * 
 * @properties={typeid:24,uuid:"9C12312F-36F0-4D5D-8BE7-4C345828FA96"}
 */
function getGruppiLavoratori(idDitta)
{
	/** @type {JSFoundSet<db:/ma_anagrafiche/ditte_presenzegruppigestione> }*/
	var fsGruppi = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_PRESENZE_GRUPPI);
	if(fsGruppi.find())
	{
		fsGruppi.idditta = idDitta;
		if(fsGruppi.search())
			return fsGruppi;
	}
	
	return null;
}

/**
 * Ottieni le informazioni sulla fascia programmata per l'utente associata al giorno selezionato 
 * 
 * @param {Number} idLav
 * @param {Date} giorno
 *
 * @return {JSRecord<db:/ma_presenze/e2giornalieraprogfasce>}
 * 
 * @properties={typeid:24,uuid:"0F7DA164-CDEF-4675-83E6-A3D54B98BBAA"}
 * @AllowToRunInFind
 */
function getProgrammazioneFasceGiorno(idLav,giorno)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2giornalieraprogfasce>} */
	var fsProgFasce = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.GIORNALIERA_PROGFASCE);
	if(fsProgFasce.find())
	{
		fsProgFasce.iddip = idLav;
		fsProgFasce.giorno = giorno;
		
		if(fsProgFasce.search())
			return fsProgFasce.getSelectedRecord();
	}
	
	return null;
}

/**
 * Esegue l'operazione di eliminazione del dipendente
 * 
 * @param {Number} idLavoratore
 *
 * @properties={typeid:24,uuid:"41D2C262-370B-435E-B098-162AC7185367"}
 */
function eliminazioneDipendente(idLavoratore)
{
	if(!idLavoratore)
    	return;
    
    var params = {
	          idditta : globals.getDitta(idLavoratore),
	          periodo : new Date().getFullYear() *100 + new Date().getMonth() + 1,
	          tipogiornaliera : globals.TipoGiornaliera.NORMALE,
	          tipoconnessione : globals.TipoConnessione.CLIENTE,
	          giorno : new Date().getDate(),
	          iddipendenti : [idLavoratore]};

    var url = globals.WS_CALENDAR + "/Calendar32/EliminaDipendente";
    var response = globals.getWebServiceResponse(url,params);
    if(response && response.ReturnValue)
    	globals.ma_utl_showInfoDialog('Dipendente eliminato correttamente.','Eliminazione dipendente');
    else
        globals.ma_utl_showInfoDialog('Dipendente non eliminato, verificare.','Eliminazione dipendente');
}

/**
 * Verifica se la ditta utilizza o meno le timbrature causalizzate in modo da poter gestire 
 * la visualizzazione dello specifico tab in vista mensile
 * 
 * @param {Number} idDitta
 *
 * @properties={typeid:24,uuid:"295908F7-C2E0-4151-A71E-2A05AA728F35"}
 * @AllowToRunInFind
 */
function haTimbratureCausalizzate(idDitta)
{
	/** @type {JSFoundset <db:/ma_presenze/e2timbratureserviziogestione>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.TIMBRATURE_SERVIZIOGESTIONE);
	if(fs.find())
	{
		fs.idditta = idDitta;
		if(fs.search())
			return true;
	}
	
	return false;
}