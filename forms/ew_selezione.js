/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FCEB706E-413C-48BD-A360-FA4F31CCB943"}
 */
var _prova = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D304199-5DBD-4AC2-9F06-7BD8CAA2B99A",variableType:4}
 */
var _anno = null;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"A58EA1D4-1D7D-4855-A87F-86AD557EB52B",variableType:4}
 */
var _annoCed = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F8D77124-579F-44D3-B544-F72AA5DA47CE"}
 */
var _codditta = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1DEB2568-CB66-4841-BA3A-463C43F1A6F5"}
 */
var _codgrlav = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"B384945B-B8FC-456E-BD1F-594D3D6C3787"}
 */
var _descgrlav = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"9C76831A-C747-4DEE-8ED5-A680CF562D01"}
 */
var _descgruppoinst = '';

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"C9662623-83C8-4CBE-AB11-3FE13323D090",variableType:8}
 */
var _idditta = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5A9BFD35-00B7-4F69-B2C4-3F4465B54E6D",variableType:8}
 */
var _idgruppoinst = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"0FCE6A07-FDD4-4A3B-8730-59ACD1A5918A",variableType:4}
 */
var _mese = null;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"80F9F00A-F363-425E-918A-1FDF6902D154",variableType:4}
 */
var _meseCed = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"50D3D2AF-D626-4675-81E2-0B498BB4004F"}
 */
var _ragionesociale = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"CCB28FD4-8383-4D25-81E7-70E0DD8BC74C"}
 */
var _stringaFiltro = '';

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"FE336A24-2EB8-403C-B5F6-65E40EB7F039"}
 */
function FiltraSediInstallazione(_fs){		
	
	_fs.addFoundSetFilterParam('idditta','=', _idditta)

	return _fs
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"3D7ECC2A-895A-43A9-9BEB-A773C1A92AE4"}
 */
function FiltraGruppiLavoratori(_fs){		
	
	_fs.addFoundSetFilterParam('idDitta','=', _idditta)

	return _fs
}

/**
 * @param {JSRecord} _rec
 * 
 * @properties={typeid:24,uuid:"E1FFE62C-0951-4F1E-B678-DB03321EC430"}
 * @AllowToRunInFind
 */
function AggiornaSelezioneDitta(_rec) 
{		
	if (_idditta != -1)
	{
		_codditta = _rec['codice'];
		_ragionesociale = _rec['ragionesociale'];		
	
		onDataChangeDitta(-1,_codditta,new JSEvent);
		
		
		
		controller.focusField('fld_mese',false);
	}
	
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"AE62D148-FFDA-4485-93C1-0E8833C56704"}
 */
function AggiornaGruppiLavoratori(_rec)
{	
    _descgrlav = _rec['descrizione']
	_codgrlav = _rec['codice']
}

/**
 * @param {JSRecord} _rec
 *  *
 * @properties={typeid:24,uuid:"D54AF966-2F48-462E-9D7F-FBBB76957573"}
 */
function AggiornaSediInstallazione(_rec){
	
	_idgruppoinst = _rec['idgruppoinst']
	_descgruppoinst = _rec['descrizione']
		
}

/** 
 * @param _firstShow
 * @param _event
 *
 * @properties={typeid:24,uuid:"795462F9-6E76-4B89-AE78-4E2F1558E278"}
 * @AllowToRunInFind
 */
function onShowForm(_firstShow, _event) 
{
	plugins.busy.prepare();
	
	_super.onShowForm(_firstShow, _event)
	
	elements.fld_cod_ditta.readOnly = false
	elements.fld_mese.readOnly = false
	elements.fld_anno.readOnly = false
	elements.btn_selditta.enabled = true
	
	if(_to_sec_user$user_id.flag_super_administrator ||
			_to_sec_user$user_id.flag_system_administrator)
		return;
	
	var _foundset = databaseManager.getFoundSet(globals.nav.program['LEAF_Lkp_Ditte'].server_name,
                                                globals.nav.program['LEAF_Lkp_Ditte'].table_name)
		
	// se esiste salvata una selezione precedente
	if(databaseManager.getFoundSetCount(_to_sec_user$user_id.sec_user_to_sec_user_to_giornaliera) > 0)
	{				
		// se è attivo il filtro ditta, anno e mese rimangono quelli della selezione precedente
		// mentre il codice ditta è relativo alla ditta selezionata nel filtro
        if(globals._filtroSuDitta != null){
			
			var _codDitta = -1
			
			var _fs = _foundset.duplicateFoundSet()
			
			if(_fs.find()){
				
				_fs['idditta'] = globals._filtroSuDitta
				_fs.search()
				
				if(_fs.getSize() > 0){
				   
					_codDitta = _fs['codice']
					_codditta = _codDitta
				    onDataChangeDitta(-1,_codDitta,new JSEvent)
					
				}    
			}
			// se il filtro è attivo, la sola ditta selezionabile è quella indicata nel filtro
			elements.btn_selditta.enabled = false;
														
		}
        // se il filtro ditta non è attivo recupera i dati salvati
		else
        {
		   _codditta = _to_sec_user$user_id.sec_user_to_sec_user_to_giornaliera.codice_ditta
		   if(_to_sec_user$user_id.sec_user_to_sec_user_to_giornaliera.gruppo_installazione != null)
		      _idgruppoinst = _to_sec_user$user_id.sec_user_to_sec_user_to_giornaliera.gruppo_installazione
		   		   
		   if(_to_sec_user$user_id.sec_user_to_sec_user_to_giornaliera.gruppo_lavoratori != '')
		      _codgrlav = _to_sec_user$user_id.sec_user_to_sec_user_to_giornaliera.gruppo_lavoratori
		   		   
		   onDataChangeDitta(-1,_codditta,new JSEvent)
        
        }	
		
        // completa l'aggiornamento dei dati relativi al periodo del cedolino
        if(_event.getFormName() == 'pv_selezione')
        {
        	var periodoCed = globals.ma_utl_getUltimoCedolinoStampato(globals.convert_DitteCliente2Sede(_idditta));
        	if(periodoCed)
        	{
        		_annoCed = parseInt(utils.stringLeft(periodoCed.toString(),4),10);
        		_meseCed = parseInt(utils.stringRight(periodoCed.toString(),2),10);
        	
        	    if(_meseCed == 12)
        	    {
        	       _annoCed++;
        	       _meseCed = 1;
        	    }
        	    else
        	       _meseCed++;
        	    
        		aggiornaPeriodoGiornaliera(_annoCed,_meseCed);
        	}
        	else
        		_annoCed = _meseCed = _anno = _mese = null;
        	    		
        }
        else
        {
        	_anno = _to_sec_user$user_id.sec_user_to_sec_user_to_giornaliera.anno ? _to_sec_user$user_id.sec_user_to_sec_user_to_giornaliera.anno : globals.TODAY.getFullYear();
			_mese = _to_sec_user$user_id.sec_user_to_sec_user_to_giornaliera.mese ? _to_sec_user$user_id.sec_user_to_sec_user_to_giornaliera.mese : globals.TODAY.getMonth() + 1;
        	aggiornaPeriodoCedolino(_anno,_mese);
        }
	}
	else
	{
		// non esiste una seleziona salvata per l'utente ed è la prima volta che apre la giornaliera
		if (_firstShow) 
			_annoCed = _meseCed = _anno = _mese = null;
		
		// se il filtro ditta è attivo la selezione è legata a quel valore
        if(globals._filtroSuDitta != null)
        {
			var _codDittaFiltro = -1
			var _fsFiltro = _foundset.duplicateFoundSet()
			
			if(_fsFiltro.find()){
				
				_fsFiltro['idditta'] = globals._filtroSuDitta
				_fsFiltro.search()
				
				if(_fsFiltro.getSize() > 0){
				   
					_codDittaFiltro = _fsFiltro['cod_ditta']
					_codditta = _codDittaFiltro
				    onDataChangeDitta(-1,_codDitta,new JSEvent)
					
				}    
			}
			// se il filtro è attivo, la sola ditta selezionabile è quella indicata nel filtro
			elements.btn_selditta.enabled = false;
														
		}
		//altrimenti la maschera è tutta vuota
		else
		{
			_codditta = ''
			_descgruppoinst = ''
			_codgrlav = null
			_idditta = null
			_idgruppoinst = null
			_ragionesociale = ''
			_annoCed = _meseCed = _anno = _mese = null;
		}
		
	}
	
   controller.focusField('fld_cod_ditta',true);
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"78692620-292B-47F7-99BC-79E2A2EFF14D"}
 * @AllowToRunInFind
 */
function onDataChangeDitta(oldValue, newValue, event)
{
	_ragionesociale = ''
	
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte>} */
	var _foundset = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE)
	/** @type {JSFoundset<db:/ma_presenze/e2sediinstallazione>} */
	var _foundsetGrInst = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.SEDI_INSTALLAZIONE);
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_presenzegruppigestione>} */
	var _foundsetGruppi = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_PRESENZE_GRUPPI);				
			
	_foundset.addFoundSetFilterParam('ditte_to_ditte_presenze.ore_gestioneepi2', '=', 1);
	_foundset.addFoundSetFilterParam('codice', '=', newValue);
	_foundset.loadAllRecords();
	
	if (_foundset.getSize() == 1)
	{
		//aggiorniamo la parte di selezione ditta
		_codditta = newValue //_foundset.codice.toString();
		_idditta = _foundset.idditta;
		_ragionesociale = _foundset.ragionesociale;
		
		//aggiorniamo la parte delle sedi di installazione
		//controlliamo di non essere in presenza di ditte interinali/esterne senza alcuna sede
		if (_foundset.ditte_to_ditte_sedi.getSize() > 0) {

			_foundsetGrInst = _foundset.ditte_to_ditte_sedi_sedeoperativa.ditte_sedi_to_ditte_sedigruppiinst.ditte_sedigruppiinst_to_e2sediinstallazione;

			// se una ditta è installata (il foundset corrispondente al gruppo di installazione
			// sarà non nullo) e con più sedi, gestisci la selezione
			if (_foundsetGrInst != null 
					&& _foundsetGrInst.getSize() >= 1)
			{
				_idgruppoinst = _foundsetGrInst.idgruppoinst;
				_descgruppoinst = _foundsetGrInst.descrizione;

				if (_foundsetGrInst.getSize() > 1)
				{
					if(elements.btn_selgruppoinst)
					   elements.btn_selgruppoinst.enabled = true;
					if(elements.fld_cod_gr_inst)
					   elements.fld_cod_gr_inst.enabled = true;
					if(elements.fld_gruppo_inst)
					   elements.fld_gruppo_inst.enabled = true;

				}
				else 
				{
					if(elements.btn_selgruppoinst)
					   elements.btn_selgruppoinst.enabled = false;
					if(elements.fld_cod_gr_inst)
					   elements.fld_cod_gr_inst.enabled = false;
					if(elements.fld_gruppo_inst)
					   elements.fld_gruppo_inst.enabled = false;
				}

			} else {
				
				_idgruppoinst = null;
				_descgruppoinst = '';
				if(elements.btn_selgruppoinst)
				   elements.btn_selgruppoinst.enabled = false;
				if(elements.fld_cod_gr_inst)
				   elements.fld_cod_gr_inst.enabled = false;
				if(elements.fld_gruppo_inst)
				   elements.fld_gruppo_inst.enabled = false;
			
			}
		}
		else 
		{
			
			_idgruppoinst = null;
			_descgruppoinst = '';
			if(elements.btn_selgruppoinst)
			   elements.btn_selgruppoinst.enabled = false;
			if(elements.fld_cod_gr_inst)
			   elements.fld_cod_gr_inst.enabled = false;
			if(elements.fld_gruppo_inst)
			   elements.fld_gruppo_inst.enabled = false;
		
		}
    		
			_foundsetGruppi = _foundset.ditte_to_ditte_presenzegruppigestione;

			if (_foundsetGruppi.getSize() > 1) 
			{
				if(elements.btn_selgruppolav)
				   elements.btn_selgruppolav.enabled = true;
				if(elements.fld_cod_gr_lav)
				   elements.fld_cod_gr_lav.enabled = true;
				if(elements.fld_cod_gr_lav)
				   elements.fld_cod_gr_lav.editable = true;

			} else
			{
				if(elements.btn_selgruppolav)
				   elements.btn_selgruppolav.enabled = false;
				if(elements.fld_cod_gr_lav)
				   elements.fld_cod_gr_lav.enabled = false;
				if(elements.fld_cod_gr_lav)
				   elements.fld_cod_gr_lav.editable = false;
			}

			_codgrlav = ''
			_descgrlav = ''
        
			var periodoCed = globals.ma_utl_getUltimoCedolinoStampato(globals.convert_DitteCliente2Sede(_idditta));
        	if(periodoCed)
        	{
        		_annoCed = parseInt(utils.stringLeft(periodoCed.toString(),4),10);
        		_meseCed = parseInt(utils.stringRight(periodoCed.toString(),2),10);
        	
        	    if(_meseCed == 12)
        	    {
        	       _annoCed++;
        	       _meseCed = 1;
        	    }
        	    else
        	       _meseCed++;
        	    
        		aggiornaPeriodoGiornaliera(_annoCed,_meseCed);
        	}
        	else
        		_annoCed = _meseCed = _anno = _mese = null;	
			
		globals.ma_utl_setStatus(globals.Status.EDIT,controller.getName());	
			
	}
	else
	   globals.svy_nav_showLookupWindow(event, '_idditta', 'LEAF_Lkp_Ditte', 'AggiornaSelezioneDitta', 'filterDitta', null, null, '', true)
			
	return true;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"1A5369EC-C55B-46AA-B839-5FD8D68954F9"}
 */
function onDataChangeGruppoLav(oldValue, newValue, event) {
	
	var _foundsetGruppi = databaseManager.getFoundSet(globals.nav.program['LEAF_Lkp_Gruppigestione'].server_name,
		                                              globals.nav.program['LEAF_Lkp_Gruppigestione'].table_name)				

	_foundsetGruppi.removeFoundSetFilterParam('ftr_gruppiGestDaDitta')					
	_foundsetGruppi.removeFoundSetFilterParam('ftr_gruppiGestDaCodice')
	_foundsetGruppi.addFoundSetFilterParam('idditta','=',_idditta,'ftr_gruppiGestDaDitta')
    _foundsetGruppi.addFoundSetFilterParam('codice','=',newValue,'ftr_gruppiGestDaCodice')
	_foundsetGruppi.loadAllRecords()
	
	if(_foundsetGruppi.getSize() == 1){
		
		_codgrlav = _foundsetGruppi['codice']
		_descgrlav = _foundsetGruppi['descrizione']
		
	}else
	     globals.svy_nav_showLookupWindow(event, '_codgrlav', 'LEAF_Lkp_Gruppigestione', 'AggiornaGruppiLavoratori', '', null, null, '', true)
											
    return true;
}

/**
 * @return {Boolean} whether the form is filled correctly
 * 
 * @properties={typeid:24,uuid:"0679BE91-894C-4064-AB83-C40BDABBEB45"}
 */
function isFilled()
{
	return !(!_anno || !_mese || !_idditta); 
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"79607C6D-5102-4FFA-99C5-644469869E2B"}
 */
function showLkpSelDitta(event) {
	globals.svy_nav_showLookupWindow(event, '_idditta', 'LEAF_Lkp_Ditte', 'AggiornaSelezioneDitta', 'filterDitta', null, null, '', true)
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"EEF01E32-E74A-484B-8215-1DEB09CE93C1"}
 */
function onDataChangeMese(oldValue, newValue, event) 
{
	if(newValue && _anno)
		aggiornaPeriodoCedolino(_anno,newValue);
	return true;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"ADDEF498-DCBD-4B21-B162-2EF7B24BE272"}
 */
function onDataChangeGruppoInst(oldValue, newValue, event) {

	var _foundsetGruppi = databaseManager.getFoundSet(globals.nav.program['LEAF_Lkp_GruppoInst'].server_name,
		globals.nav.program['LEAF_Lkp_GruppoInst'].table_name)

	_foundsetGruppi.removeFoundSetFilterParam('ftr_gruppiGestDaGrInst')

	_foundsetGruppi.addFoundSetFilterParam('idditta', '=', _idditta, 'ftr_gruppiGestDagrInst')
	_foundsetGruppi.loadAllRecords()

	if (_foundsetGruppi.getSize() >= 1) {

		_idgruppoinst = _foundsetGruppi['idgruppoinst']
		_descgruppoinst = _foundsetGruppi['descrizione']

	} else
		globals.svy_nav_showLookupWindow(event, '_idgruppoinst', 'LEAF_Lkp_GruppoInst', 'AggiornaSediInstallazione', '', null, null, '', true)

	return true
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC35EAA7-EF35-4C28-850F-51DDE41C289C"}
 */
function annullaSelezione(event) {
	
	globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
    globals.svy_mod_closeForm(event);
}

/**
 * @AllowToRunInFind
 * 
 * Salva la selezione attuale per la prossima apertura della giornaliera
 * 
 * @param {String} codDitta
 * @param {Number} anno
 * @param {Number} mese
 * @param {Number} gruppo_inst
 * @param {String} gruppo_lav
 *
 * @properties={typeid:24,uuid:"AEE40D06-48B3-47C0-A95C-5F2A50A18CB7"}
 */
function salvaSelezione(codDitta,anno,mese,gruppo_inst,gruppo_lav)
{
	/** @type {JSFoundset} <db:/svy_framework/sec_user_to_giornaliera> */
	var _fsLeafGiorn = databaseManager.getFoundSet('svy_framework','sec_user_to_giornaliera')
	if(_fsLeafGiorn.find())
	{
	   _fsLeafGiorn['user_id'] = _to_sec_user$user_id.user_id
	  
	   var _result = _fsLeafGiorn.search()
	   if(_result > 0)
	   {
		   _fsLeafGiorn['codice_ditta'] = codDitta;
		   _fsLeafGiorn['mese'] = mese;
		   _fsLeafGiorn['anno'] = anno;
		   _fsLeafGiorn['gruppo_installazione'] = gruppo_inst;
		   _fsLeafGiorn['gruppo_lavoratori'] = gruppo_lav;
		   
	   }else
	   {
		  var _newRec = _fsLeafGiorn.newRecord(false)
		  if(_newRec != -1)
		  {
			  _fsLeafGiorn.user_id = _to_sec_user$user_id.user_id 
			  _fsLeafGiorn.codice_ditta = _codditta
			  _fsLeafGiorn.mese = _mese
			  _fsLeafGiorn.anno = _anno
			  _fsLeafGiorn.gruppo_installazione = _idgruppoinst
			  _fsLeafGiorn.gruppo_lavoratori = _codgrlav
			  
		  }
		   
	   }
	   
	   databaseManager.startTransaction()
	   
	   if(!databaseManager.commitTransaction())
	   {
		   databaseManager.revertEditedRecords(_fsLeafGiorn)
		   globals.svy_mod_dialogs_global_showErrorDialog('Errore durante l\'operazione', 'Si è verificato un errore...', 'Chiudi');
	   }
	}
}

/**
 * Handle hide window.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"64731208-426B-47F7-914C-5BDC3A7D373A"}
 */
function onHide(event) {
	globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
	return _super.onHide(event)
}

/**
 * Handle changed data.
 *
 * @param {Number} oldValue old value
 * @param {Number} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @properties={typeid:24,uuid:"7524B1E9-3CE7-4877-BCA3-868B168F33CC"}
 */
function onDataChangeAnno(oldValue, newValue, event) 
{
	if(newValue && _mese)
		aggiornaPeriodoCedolino(newValue,_mese);
	return true;
}

/**
 * Aggiorna mese ed anno del cedolino
 * 
 * @param {Number} anno
 * @param {Number} mese
 *
 * @properties={typeid:24,uuid:"7F24E4A8-BDC6-4C77-BEFE-BBFE38C836D5"}
 */
function aggiornaPeriodoCedolino(anno,mese)
{
	if(_idditta == null)
		return;
	
	if(globals.isDittaMesePrecedente(_idditta,anno * 100 + mese))
	{
		if(mese == 12)
		{
			_annoCed = anno + 1;
			_meseCed = 1;
		}
		else
		{
			_annoCed = _anno;
			_meseCed = mese + 1;
		}
	}
	else
	{
		_annoCed = anno;
		_meseCed = mese;
	}
}

/**
 * Aggiorna mese ed anno della giornaliera 
 * 
 * @param {Number} anno
 * @param {Number} mese
 *
 * @properties={typeid:24,uuid:"EA03165A-A835-45FD-8625-BDE9DD9121B0"}
 */
function aggiornaPeriodoGiornaliera(anno,mese)
{
	if(_idditta == null)
		return;
	
	if(globals.isDittaMesePrecedente(_idditta,anno * 100 + mese))
	{
		if(mese == 1)
		{
			_anno = anno - 1;
			_mese = 12;
		}
		else
		{
			_anno = anno;
			_mese = mese - 1;
		}
	}
	else
	{
		_anno = anno;
		_mese = mese;
	}
}
