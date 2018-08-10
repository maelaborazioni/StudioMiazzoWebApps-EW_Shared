/**
 * @properties={typeid:35,uuid:"7EB3DF29-F7A2-4EDD-B7FB-9F9EC623CAEE",variableType:-4}
 */
var software_rp = null;

/**
 * @properties={typeid:35,uuid:"395A5B9C-7CA4-4E04-9818-DB55478412EE",variableType:-4}
 */
var TipoGiornaliera = { NORMALE: 'N', BUDGET: 'B' };

/**
 * @properties={typeid:35,uuid:"E52A328F-2B73-4839-B4F2-A2E6725A74C8",variableType:-4}
 */
var EventoClasse = { INFORTUNIO: 85, MALATTIA: 89, MATERNITA: 91, MATRIMONIALE: 79, PARENTALE: 90, PARENTALE_PATERNO : 130 };

/**
 * @properties={typeid:35,uuid:"82FA24BB-60F4-47C4-B65E-10A34DB633BE",variableType:-4}
 */
var TipoUtilizzoGiornalieraPannello = { RIEPILOGO_EVENTI : 0, ANOMALIE_EVENTI_PANNELLO : 1, EVENTI_GIORNALIERA_PANNELLO : 2, ANOMALIE_TIMBRATURE_PANNELLO : 3};

/**
 * @properties={typeid:35,uuid:"2123C214-F277-4156-B5FE-3E31EE2D5F28",variableType:-4}
 */
var TipoEvento = { ORDINARIO: 'O', SOSTITUTIVO: 'S', AGGIUNTIVO: 'A', STATISTICO: 'T', FESTIVITA: 'F' };

/**
 * @properties={typeid:35,uuid:"AFD550EC-3BF4-40A7-9637-CEC855126E45",variableType:-4}
 */
var TipoFestivita = { ACCANTONATA: 'FA', RETRIBUITA: 'FR', GODUTA: 'FG' };

/**
 * @properties={typeid:35,uuid:"B4821269-9250-4B70-8FF9-F8CD8D1BBD10",variableType:-4}
 */
var TipoVisualizzazione = { DISABLED: 2, INVISIBLE: 3 };

/**
 * @properties={typeid:35,uuid:"B5CBCC7E-171D-4935-8101-07A4714E62E1",variableType:-4}
 */
var AttivitaDitta =
{
	IMPORTAZIONE_TIMBRATURE  : 'C1',
	ATTIVAZIONE_MESE         : 'A0',
	CHIUSURA_FORZATA         : 'CF',
	IMPORTAZIONE_GIORNALIERA : 'SO',
	CHIUSURA_PRESUNTA        : 'CP'
};

/**
 * @properties={typeid:35,uuid:"8A03BF86-BC1E-408C-BB0C-DFF8D0C86B1A",variableType:-4}
 */
var AttivitaDip = 
{
	PREDISPOSIZIONE_INVIO   : 'C3',
	TRASMISSIONE_GIORNALIERA : 'C4'
};

/**
 * @properties={typeid:35,uuid:"2A950B02-4354-4FF6-B5BC-25386C0C42E7",variableType:-4}
 */
var ProprietaEvento =
{
	LAVORATIVO_DIURNO: 'DL',
	LAVORATIVO_NOTTURNO: 'NL',
	FESTIVO_DIURNO: 'DF',
	FESTIVO_NOTTURNO: 'NF',
	PREFESTIVO_DIURNO: 'DP',
	PREFESTIVO_NOTTURNO: 'NP'
}

/**
 * @properties={typeid:35,uuid:"F29F5EE5-107C-4BFB-9787-8401D6E25CA8",variableType:-4}
 */
var ProprietaEventoBase =
{
	DIURNO   : 'D',
	NOTTURNO : 'N'
}

/**
 * @properties={typeid:35,uuid:"646B64A6-39A8-4083-857F-D1F32219F2E7",variableType:-4}
 */
var _gecoUUID = null;

/**
 * @type {Boolean}
 * 
 *
 * @properties={typeid:35,uuid:"5E6515A8-7198-4E44-845E-481E4EE6E8CE",variableType:-4}
 */
var _isSede = false;

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"CED64B18-C77B-4970-917A-75F4EC7B1DDC",variableType:-4}
 */
var _arrIdEvSelezionabili = [];

/**
 * @type {Array}
 *
 *
 * @properties={typeid:35,uuid:"579B7FAC-BEFB-443F-A27A-6611E8E2ACE2",variableType:-4}
 */
var _arrIdEvSelezionabiliRP = [];

/**
 * @type {Array}
 * 
 * @properties={typeid:35,uuid:"9B2AF497-FA3B-4DB2-A96F-046B23DD0157",variableType:-4}
 */
var _arrIdEvSelezionabiliCE = [];

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E3533A9B-CC02-4486-A83B-2932B5B342F1"}
 */
var _serverGeco = 'MA_Geco';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"10EEC933-C040-4BFF-A029-6572CD20633D",variableType:8}
 */
var offsetGg = 4.0;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CB4B225B-6A68-4580-9A76-6F701773E4F5",variableType:4}
 */
var fieldsGg = 4;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"6AAC1FAC-1FAD-4B86-A51D-4303F8C21BAB",variableType:4}
 */
var fieldsTimbr = 17;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"035F5325-40EF-42BD-9494-DC984000B0E2",variableType:4}
 */
var stdColGg = 6;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AD3BF4FA-0052-4DE0-A7DB-839A237A1E7D",variableType:4}
 */
var stdColTimbr = 6;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"DAFE7CAF-1813-400D-8F89-72C808B846EE",variableType:8}
 */
var nullValue = null;

/**
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"2C847D3D-F97E-493F-9182-D407FBCE5B83"}
 */
function getDittaTab()
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].idditta;
	return null;
}

/**
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"0648F8DC-944F-4F4C-AD56-AF715B05C5F2"}
 */
function getPeriodo()
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].periodo;
	return null; 
}

/**
 * @param {Number} periodo
 *
 * @properties={typeid:24,uuid:"4A2FC78A-04C8-4DC6-9E9B-4615057C6479"}
 */
function getAnnoDaPeriodo(periodo)
{
	return parseInt(utils.stringLeft(periodo.toString(),4),10);
}

/**
 * @param {Number} periodo
 *
 * @properties={typeid:24,uuid:"1E1A5120-764A-45DD-94CE-E304B799F243"}
 */
function getMeseDaPeriodo(periodo)
{
	return parseInt(utils.stringRight(periodo.toString(),2),10);
}

/**
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"A4BCAAA0-52FC-46BB-9215-D6E0F1640441"}
 */
function getPeriodoAttivo()
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].periodo_attivo;
	
    return null;
}

/**
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"AB91C385-C743-4B4B-85D1-7E901D7BF153"}
 */
function getGruppoLavoratori()
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
	   return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].gruppo_lav;
	else
		return null;
}

/**
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"CDCC3FFA-01C8-4672-8A5C-A1DF4615F388"}
 */
function getGruppoInstallazione()
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].gruppo_inst;
	else 
		return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce true se la ditta ha gestione mese precedente, false altrimenti
 * 
 * @param {Number} idditta
 *
 * @properties={typeid:24,uuid:"83972518-A299-4277-BE6D-7D6FF565B91D"}
 */
function isMesePrecedente(idditta)
{
	/** @type {JSFoundSet<db:/ma_anagrafiche/ditte>}*/
	var fsDitta = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fsDitta.find())
    {
    	fsDitta.ditte_to_ditte_presenze.idditta = idditta;
    	if(fsDitta.search())
    	   return fsDitta.ditte_to_ditte_presenze.ore_gestionemp;	
    }
    return 0;
}

/**
 * @properties={typeid:24,uuid:"E0FF8237-485F-421F-86D2-E76B0B233004"}
 * 
 * @return {Array<Number>}
 */
function getGiorniSelezionatiEv()
{
//	var frm = forms.svy_nav_fr_openTabs;
//	var selection_form = forms['giorn_selezione_multipla_clone'];
//	if (frm.vSelectedTab != null
//			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]]
//			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].giorni_sel)
//	{
//		/** @type {Array}*/
//		var giorniSelezionati = selection_form.getGiorniSelezionati() || globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].giorni_sel;
//		if (giorniSelezionati) 
//		{
//			if (giorniSelezionati.length > 0)
//				return globals.mergeSort(giorniSelezionati);
//			else if (selection_form && selection_form.foundset.getSelectedIndex() - globals.offsetGg > 0)
//				return [selection_form.foundset.getSelectedIndex() - globals.offsetGg];
//			else
//				return [];
//		}
//	}
//	
//	return [];

	var giorni_sel = forms['giorn_selezione_multipla_clone'] ? forms['giorn_selezione_multipla_clone'].getGiorniSelezionati() : [];
	return giorni_sel;
}

/**
 * @return {Array<Number>}
 * 
 * @properties={typeid:24,uuid:"3F38BEA2-8A12-4702-97C9-645045C17F36"}
 */
function getGiorniSelezionatiTimbr()
{
//	var frm = forms.svy_nav_fr_openTabs;
//	var frmTemp = forms['giorn_timbr_temp'];
//	if (frm.vSelectedTab != null 
//			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]]
//			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].giorni_sel)
//	{
//		/** @type {Array}*/
//		var giorniSelezionati = globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].giorni_sel;
//		if (giorniSelezionati) {
//			if (giorniSelezionati.length > 0)
//				return globals.mergeSort(giorniSelezionati);
//			else if (frmTemp && frmTemp.foundset.getSelectedIndex() - globals.offsetGg > 0)
//				return [frmTemp.foundset.getSelectedIndex() - globals.offsetGg];
//			else
//				return [];
//		}
//	}
//	return [];

	var giorni_sel = forms['giorn_selezione_multipla_clone'].getGiorniSelezionati();
	return giorni_sel;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Array<Date>} arrGiorni
 *
 * @properties={typeid:24,uuid:"C39C5F5D-97A6-4BE3-BBBB-5BE970A94F11"}
 */
function getGiorniSelezionatiFromDates(arrGiorni)
{
	var arrGiorniDates = [];
	for(var g = 0; g < arrGiorni.length; g++)
		arrGiorniDates.push(arrGiorni[g].getDate());
	
	return arrGiorniDates;
}

/**
 * @properties={typeid:24,uuid:"862AB4EF-778B-4243-85C7-166AD3E6A749"}
 * @AllowToRunInFind
 */
function needsCertificate(idEventoClasse)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2eventiclassi>} */
	var eventiClasseFs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, 'e2eventiclassi');
	if(eventiClasseFs.find())
	{
		eventiClasseFs.ideventoclasse = idEventoClasse;
		if(eventiClasseFs.search() > 0);
			return eventiClasseFs.getSize() > 0 && eventiClasseFs.gestitoconstorico === 1;
	}
	
	return false;
}

/**
 * Setta i parametri per l'utilizzo di una sola toolbar e la modifica di una particolare
 * form nella parte di viewer
 * 
 * @param {JSEvent} event
 * @param {String} triggerForm
 * @param {String} forceForm
 * @param {String} functionToCall
 *
 * @properties={typeid:24,uuid:"4FF0D2A0-E118-4410-ADD6-834D84199EC6"}
 */
function setEditOnViewer(event, triggerForm, forceForm, functionToCall){
	
	globals._editOnViewer = true
	globals._forcedFormOnViewer = forceForm
	
	forms.svy_nav_base[functionToCall](event,triggerForm,forceForm)
	
	forms.svy_nav_fr_buttonbar_browser.elements.btn_save.enabled = true
	forms.svy_nav_fr_buttonbar_browser.elements.btn_cancel.enabled = true

}

/**
 * @properties={typeid:24,uuid:"269DE7C2-BBAB-4131-9B78-F42B296A9FCF"}
 */
function getAnno() 
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].anno;
	else
	    return null;
}

/**
 * @properties={typeid:24,uuid:"BC80220E-EAB0-4902-9185-7DD720206355"}
 */
function getAnnoAttivo()
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].anno_attivo;
	else
	    return null;
}

/**
 * @param {Number} data
 *
 * @properties={typeid:24,uuid:"3B9EB319-3FF1-47A2-A93C-FEE2EFA936CF"}
 */
function getStrFromNumber(data)
{
	if(data < 10)
		return '0' + data.toString();
	else return data.toString();
}

/**
 * @properties={typeid:24,uuid:"861FA412-B89D-479A-AE13-A89FEE1C79BE"}
 */
function getMese() 
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].mese;
	else
	    return null;
}

/**
 * @properties={typeid:24,uuid:"CE57DEA8-624B-4803-A984-9F945E822960"}
 */
function getMeseAttivo()
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].mese_attivo;
	else
	    return null;
}

/**
 * @param {Number} anno
 *
 * @properties={typeid:24,uuid:"4DCB09FD-F8EE-4D4B-AD0C-17F88C63EFE0"}
 */
function setAnno(anno)
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
	   globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].anno = anno;
	
}

/**
 * @properties={typeid:24,uuid:"031A0AF0-75E9-441E-8330-DB7A263CE4AB"}
 */
function setAnnoAttivo(anno)
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
	   globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].anno_attivo = anno;
	
}

/**
 * @param {Number} mese (1-12)
 *
 * @properties={typeid:24,uuid:"EF4F14E4-82C1-4F9B-9DAE-39A5291716EF"}
 */
function setMese(mese)
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
	   globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].mese = mese;
	
}

/**
 * @properties={typeid:24,uuid:"BB2D2B01-AED3-4DEB-8217-C58401BBF397"}
 */
function setMeseAttivo(mese)
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
	   globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].mese_attivo = mese;
	
}

/**
 * @properties={typeid:24,uuid:"BB3F4E69-2FCF-4100-8269-4CDB3E702F9E"}
 */
function getIdLavoratoreProgTurni() 
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].idlavoratore;
	else
	    return null;
}

/**
 * @param {Number} idLavoratore
 *
 * @properties={typeid:24,uuid:"0799D893-38E9-4D97-8E92-25953C4B594C"}
 */
function setIdLavoratoreProgTurni(idLavoratore)
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
	   globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].idlavoratore = idLavoratore;
	
}

/**
 * Restituisce l'ultimo periodo per il quale è già stata effettuata l'operazione
 * di attivazione mese per la ditta selezionata
 *  
 * @param {Number} idDitta
 *
 * @return Number
 * 
 * @properties={typeid:24,uuid:"F0BC0587-8BFF-40E8-8414-0DD996D5C86E"}
 */
function getUltimoPeriodoAttivato(idDitta)
{
	var sqlUP = "SELECT MAX(Periodo) FROM E2Wk_AttivitaEseguiteDitta WHERE idDitta = ? AND idTabAttivita = 6";
    var arrUP = [idDitta];
    var dsUP = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlUP,arrUP,-1);
    return dsUP.getValue(1,1);
}

/**
 * Restituisce true se per la ditta selezionata è già stata effettuata l'operazione
 * di attivazione per il periodo richiesto
 * 
 * @param {Number} idDitta
 * @param {Number} periodo
 *
 * @return Boolean
 * 
 * @properties={typeid:24,uuid:"E6898E8A-65EB-4013-9579-5A5D312186C1"}
 */
function isPeriodoAttivato(idDitta,periodo)
{
	var sqlUP = "SELECT * FROM E2Wk_AttivitaEseguiteDitta WHERE idDitta = ? AND Periodo = ? AND idTabAttivita = 6";
    var arrUP = [idDitta,periodo];
    var dsUP = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlUP,arrUP,-1);
    if(dsUP.getMaxRowIndex())
       return true;
    else
       return false;
}



/**
 * Restituisce il codice dell'evento passato come parametro
 * 
 * @param {Number} idEvento
 *
 * @properties={typeid:24,uuid:"7757509D-2602-498F-921F-161B9479F8AE"}
 * @AllowToRunInFind
 */
function getCodiceEvento(idEvento)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2eventi>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.EVENTI);
    if(fs.find())
    {
    	fs.idevento = idEvento;
    	if(fs.search())
    		return fs.evento;
    }
	
    return null;
}

/**
 * Restituisce l'identificativo della classe dell'evento richiesto
 * 
 * @param {Number} idEvento
 *
 * @properties={typeid:24,uuid:"20F28428-6DB3-4C68-8ECB-27167808C321"}
 * @AllowToRunInFind
 */
function getClasseEvento(idEvento)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2eventi>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.EVENTI);
    if(fs.find())
    {
    	fs.idevento = idEvento;
    	if(fs.search())
    		return fs.ideventoclasse;
    }
	
    return null;
}

/**
 * Restituisce la descrizione della proprietà relativa alla classe di eventi richiesta
 * 
 * @param {Number} idEventoClasse
 * @param {String} proprieta
 *
 * @properties={typeid:24,uuid:"C0AD09FF-26B3-4A6A-A1C2-FA10DD61456D"}
 * @AllowToRunInFind
 */
function getDescrizioneProprietaEvento(idEventoClasse,proprieta)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2eventiclassiproprieta>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.EVENTI_CLASSI_PROPRIETA);
    if(fs.find())
    {
    	fs.ideventoclasse = idEventoClasse;
    	fs.codiceproprieta = proprieta;
    	
    	if(fs.search())
    		return fs.descrizione;
    }
	
    return null;
}

/**
 * Restituisce il record relativo alla tabella e2regole con la regola associata al lavoratore nel giorno indicato
 * 
 * @param {Number} idLav
 * @param {Date} giorno
 *
 * @return {JSRecord<db:/ma_presenze/e2regole>}
 * 
 * @properties={typeid:24,uuid:"B084EF7C-2077-428A-B1E9-6F2708421EE8"}
 * @AllowToRunInFind
 */
function getRegolaLavoratoreGiorno(idLav,giorno)
{
	var sqlReg = 'SELECT [dbo].[F_Lav_DecAllaDataValore](?,?,?)';
	var arrReg = [idLav,3,utils.dateFormat(giorno,globals.ISO_DATEFORMAT)];
	var dsReg = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlReg,arrReg,1);
    
	var idRegola = dsReg.getValue(1,1);
	
	if(idRegola)
	{
		/** @type {JSFoundSet<db:/ma_presenze/e2regole>}*/
		var fsRegola = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.REGOLE);
		if(fsRegola.find())
		{
			fsRegola.idregole = idRegola;
			if(fsRegola.search())
				return fsRegola.getSelectedRecord();
		}
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il giorno nel quale è avvenuto l'ultimo cambio di regola
 * 
 * @param {Number} idLav
 * 
 * @return Date
 * 
 * @properties={typeid:24,uuid:"59EA9B86-941D-44B7-81D1-178383EB7E31"}
 */
function getGiornoUltimaRegola(idLav)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2dcg_decorrenza>}*/
	var fsDec = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,'e2dcg_decorrenza');
	if(fsDec.find())
	{
		fsDec.iddcg_campi = 3;
		fsDec.id_legato_int = idLav;
		if(fsDec.search())
		{			
			fsDec.sort('decorrenza desc');
			return fsDec.getRecord(1).decorrenza;
		}
	}
	
	return null;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param idlavoratore
 * @param giorno
 *
 * @properties={typeid:24,uuid:"2B239BFF-FFDF-4B89-94DF-683BB293AC4C"}
 */
function ma_ew_getDatiGiornaliera(idlavoratore, giorno)
{
	var sqlQuery = "SELECT G.* FROM dbo.E2Giornaliera G WHERE idDip = ? AND Giorno = ?;";
	var dataset = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, sqlQuery, [idlavoratore, giorno], -1);
	
	return dataset && dataset.getRowAsArray(1);
}

/**
 * Recupera l'elenco dei giorni festivi per il dato dipendente
 * 
 * @param {Number} idDipendente
 * @param {Number} periodo
 * @param {Number} idDitta
 * 
 * @return {Array<Number>}
 *
 * @properties={typeid:24,uuid:"ADEBCE46-6553-404B-9F9A-DDF60B3B2D1C"}
 */
function getFestivitaDipendente(idDitta, idDipendente, periodo)
{
	var url = WS_URL + '/Giornaliera/FestivitaDipendente';
	var params = { idditta: idDitta, iddipendenti: [idDipendente], periodo: periodo,tipoconnessione : globals._tipoConnessione };
	var response = getWebServiceResponse(url, params);
	
	if(response && response['returnValue'] === true)
	{
		return response['festivita'];
	}
	else
	{
		globals.ma_utl_showErrorDialog(response.message || 'Errore durante il calcolo delle festività', 'Festività dipendente');
		return null;
	}
}

/**
 * @properties={typeid:35,uuid:"4D93B9D0-4AFC-4A47-B24E-25EEF0923CFC",variableType:-4}
 */
var TipoAttivazione = 
{
	AUTORIZZATA	: 2,
	NEGATA		: 0,
	NON_NECESSARIA: 1
}


/**
 * Inizializza i parametri per l'attivazione del mese
 * 
 * @param {Number} _idditta
 * @param {Number} _periodo
 * @param {Number} _gruppoinst
 * @param {String} _gruppolav
 * @param {Number} [_tipoconnessione]
 * @param {Number} [_idlavcurr]
 * 
 * @properties={typeid:24,uuid:"821DCDA6-B161-4325-83F8-C27172087733"}
 */
function inizializzaParametriAttivaMese(_idditta, _periodo, _gruppoinst, _gruppolav,_tipoconnessione,_idlavcurr)
{
	var params = {
		user_id                 : security.getUserName(), 
		client_id               : security.getClientID(),
		idditta					: _idditta,
		periodo					: _periodo, 
		gruppoinstallazione	    : _gruppoinst || -1,
		idgruppoinstallazione	: _gruppoinst || -1, // TODO da eliminare
		codgruppogestione		: _gruppolav,
		iddipendenti			: _idlavcurr ? [_idlavcurr] : []
	};
	
	if(_tipoConnessione)
		params.tipoconnessione = _tipoConnessione;
	
	return params;
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
 * @properties={typeid:24,uuid:"788B1903-F259-4611-AFB7-BF01DF6DD8BB"}
 */
function preAttivaMese(params, nonInteractive)
{
	var response = isMeseDaAttivare(params);
    if (response && response.returnValue && response['returnValue'] === true) 
    {
	   if(response.activate && response['activate'] === true)
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
    else if(response)
    {
    	globals.ma_utl_showErrorDialog(response['message'], 'Errore');
    	return -1;
    }
    return -1;
}

/**
 * Ritorna true se il mese è ancora da attivare, false altrimenti
 * 
 * @param {Object} params
 * 
 * @return Object
 * 
 * @properties={typeid:24,uuid:"A12D446D-89C3-46D4-9396-B530AC2A2EFE"}
 */
function isMeseDaAttivare(params)
{		
	var url = WS_URL + "/Trattamenti/DittaDaAttivare";	
	return getWebServiceResponse(url, params);		
}

/**
 * Ottiene l'array deì dipendenti senza regole associate
 * 
 * @param {Object} params
 * @return {Array} 
 * 
 * @properties={typeid:24,uuid:"BE310127-83A8-44A0-84FC-EB21743CBC93"}
 */
function getElencoDipendentiSenzaRegoleAssociateWS(params)
{
	var url = WS_URL + "/Trattamenti/ElencoDipendentiSenzaRegoleAssociate";
	var _responseObj = getWebServiceResponse(url, params);
	
	if(_responseObj != null)
	{
		if(_responseObj['returnValue'] == true && _responseObj['dipArray'] != null)					
			return _responseObj['dipArray'];
		else
			return null;
	}
	else				
		globals.ma_utl_showErrorDialog('Il server non risponde, si prega di riprovare','Errore di comunicazione');
	
	return null;
}

/**
 * Ottiene l'array deì dipendenti senza regole associate (senza ricorrere al web service, non tiene conto 
 * del filtro derivante dall'indicazione del gruppo lavoratori)
 * 
 * @param {Object} params
 * @return {Array}
 * 
 * @properties={typeid:24,uuid:"495229DA-846D-4DA7-985D-69E3F69F1166"}
 */
function getElencoDipendentiSenzaRegoleAssociate(params)
{
   var arrElencoDip = [];
   var aSqlSel = "SELECT D.Codice AS CodDitta, D.RagioneSociale, L.CodDipendente, ISNULL(P.Cognome, 'Dati mancanti') AS Cognome"
   aSqlSel += ", ISNULL(P.Nome, 'C.F.: ' + L.CodiceFiscale) AS Nome, L.Assunzione, L.Cessazione, L.CodQualifica AS Qualifica"
   aSqlSel += " , L.idLavoratore";
   
   var aSqlFrom = " FROM dbo.F_Gio_ControlloRegoleOrarie_ID(?,?,?) R"
   aSqlFrom += " INNER JOIN V_Lavoratori L ON R.idLavoratore = L.idLavoratore"
   aSqlFrom += " LEFT OUTER JOIN Persone P ON L.CodiceFiscale = P.CodiceFiscale"
   aSqlFrom += " INNER JOIN Ditte D ON L.idDitta = D.idDitta"
   aSqlFrom += " WHERE D.idDitta = ?"
   aSqlFrom += " ORDER BY P.Cognome, P.Nome, L.CodDipendente"
   var aSql = aSqlSel + aSqlFrom;	   
   var arrPars = [params['idditta'],
                  params['idgruppoinstallazione'] ? params['idgruppoinstallazione'] : -1,
                  params['periodo'],
				  params['idditta']];
   var ds = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE,
	                                          aSql,
											  arrPars,
											  -1);
   var numDip = ds.getMaxRowIndex(); 
   if(numDip)
   {
	   for(var l = 1; l <= numDip; l++)
	   {
		   var jsonDip = {  
			   codice_ditta : ds.getValue(l,1),
			   ragione_sociale : ds.getValue(l,2),
			   cod_lavoratore : ds.getValue(l,3),
			   cognome : ds.getValue(l,4),
			   nome : ds.getValue(l,5),
			   assunzione : globals.dateFormat(ds.getValue(l,6),globals.EU_DATEFORMAT),
			   cessazione : ds.getValue(l,7) != null ? globals.dateFormat(ds.getValue(l,6),globals.EU_DATEFORMAT) : ds.getValue(l,7),
			   qualifica : ds.getValue(l,8),
			   id_lavoratore : ds.getValue(l,9)
		   }
		   
		   arrElencoDip.push(jsonDip);
	   }	       
   }
   
   return arrElencoDip;
}

/**
 * Ottiene l'array deì dipendenti senza regole associate per tutto il gruppo di ditte
 * (senza ricorrere al web service, non tiene conto del filtro derivante dall'indicazione del gruppo lavoratori)
 * Serve per verificare l'eventuale presenze di dipendenti senza regole in fase di acquisizione timbrature
 * 
 * @param {Object} params
 * @return {Array}
 * 
 * @properties={typeid:24,uuid:"6A05D95B-0DC7-4192-9408-AD1B11FC4F47"}
 */
function getElencoDipendentiSenzaRegoleAssociateGruppoDitte(params)
{
   var arrElencoDip = [];
   var aSqlSel = "SELECT D.Codice AS CodDitta, D.RagioneSociale, L.CodDipendente, ISNULL(P.Cognome, 'Dati mancanti') AS Cognome"
   aSqlSel += ", ISNULL(P.Nome, 'C.F.: ' + L.CodiceFiscale) AS Nome, L.Assunzione, L.Cessazione, L.CodQualifica AS Qualifica"
   aSqlSel += " , L.idLavoratore";
   
   var aSqlFrom = " FROM dbo.F_Gio_ControlloRegoleOrarie_ID(?,?,?) R"
   aSqlFrom += " INNER JOIN V_Lavoratori L ON R.idLavoratore = L.idLavoratore"
   aSqlFrom += " LEFT OUTER JOIN Persone P ON L.CodiceFiscale = P.CodiceFiscale"
   aSqlFrom += " INNER JOIN Ditte D ON L.idDitta = D.idDitta"
   //aSqlFrom += " WHERE D.idDitta = ?"
   aSqlFrom += " ORDER BY P.Cognome, P.Nome, L.CodDipendente"
   var aSql = aSqlSel + aSqlFrom;	   
   var arrPars = [
	                  -1,
	                  params['idgruppoinstallazione'] ? params['idgruppoinstallazione'] : -1,
	                  params['periodo']
                  ];
   var ds = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE,
	                                          aSql,
											  arrPars,
											  -1);
   var numDip = ds.getMaxRowIndex(); 
   if(numDip)
   {
	   for(var l = 1; l <= numDip; l++)
	   {
		   var jsonDip = {  
			   codice_ditta : ds.getValue(l,1),
			   ragione_sociale : ds.getValue(l,2),
			   cod_lavoratore : ds.getValue(l,3),
			   cognome : ds.getValue(l,4),
			   nome : ds.getValue(l,5),
			   assunzione : globals.dateFormat(ds.getValue(l,6),globals.EU_DATEFORMAT),
			   cessazione : ds.getValue(l,7) != null ? globals.dateFormat(ds.getValue(l,6),globals.EU_DATEFORMAT) : ds.getValue(l,7),
			   qualifica : ds.getValue(l,8),
			   id_lavoratore : ds.getValue(l,9)
		   }
		   
		   arrElencoDip.push(jsonDip);
	   }	       
   }
   
   return arrElencoDip;
}

/**
 * Controlla se vi sono dipendenti da attivare per il periodo selezionato
 * 
 * @return {Object}
 *
 * @properties={typeid:24,uuid:"0A238200-98E9-408C-BB74-E59C29203E45"}
 */
function checkDipendentiDaAttivare(params)
{
	var url = globals.WS_DOTNET_CASE == globals.WS_DOTNET.CORE ? globals.WS_URL + "/Trattamenti/DipendentiDaAttivare" : globals.WS_URL + "/Giornaliera/DipendentiDaAttivare";
	var _responseObj = getWebServiceResponse(url, params);
	return _responseObj;
}

/**
 * Lancia l'operazione di attivazione nuovo mese (operazione lunga)
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"4FCC9E00-4AB3-491C-A855-C6F5C125B6F6"}
 */
function attivazioneMese(params)
{	
	setPeriodoAttivo(params.periodo);
    
	var url = WS_MULTI_URL + "/Trattamenti/AttivazioneMese";
    if(params.sync)
    {
    	url += 'Sync';
    	return getWebServiceResponse(url,params);
    }
    
	addJsonWebServiceJob(url,params);
	return { returnValue: true, message: '' };
}

/**
 * Lancia l'operazione di attivazione nuovo mese
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"439A79F8-1D74-4A1D-9950-3EEE183A491F"}
 */
function attivazioneMeseSync(params)
{	
	setPeriodoAttivo(params.periodo);
	var url = WS_URL + "/Trattamenti/AttivazioneMese";
	return getWebServiceResponse(url,params);
}

/**
 * @param {Number} periodo
 *
 * @properties={typeid:24,uuid:"5AEEC022-4861-4276-99C8-B1AF18D5B77D"}
 */
function setPeriodoAttivo(periodo)
{
	if(globals.objGiornParams[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]])
	{
		if(globals.objGiornParams[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].periodo_attivo)
	       globals.objGiornParams[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].periodo_attivo = periodo;
	    else
	       globals.objGiornParams[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]] = { periodo_attivo: periodo };
		
	    // aggiorniamo di conseguenza i valori di anno e mese
	    globals.objGiornParams[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].anno_attivo = globals.trunc(periodo / 100);
	    globals.objGiornParams[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].mese_attivo = periodo % 100;
    }
}

/**
 * Ottiene la descrizione relativa al codice del gruppo di gestione della ditta
 * 
 * @param {Number} idDitta
 * @param {String} codGruppo
 *
 * @properties={typeid:24,uuid:"2CE38F52-D8DC-4CD6-A326-28BB3A7E2A3A"}
 * @AllowToRunInFind
 */
function getDescGruppoLavoratori(idDitta,codGruppo)
{
	/** @type {JSFoundSet<db:/ma_anagrafiche/ditte_presenzegruppigestione>} */
	var fsGruppi = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_PRESENZE_GRUPPI);
	
	if(fsGruppi.find())
	{
		fsGruppi.idditta = idDitta;
		fsGruppi.codice = codGruppo;
		
		if(fsGruppi.search())
			return fsGruppi.descrizione;
	}
	
	return '';
}

/**
 * @properties={typeid:24,uuid:"01566A0F-455C-4F0A-9398-803A14FA5141"}
 */
function getTipoGestoreReteImpresa()
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].tipogestorereteimpresa;
	else
	    return null;
}

/**
 * @AllowToRunInFind
 * 
 * Ritorna il codice della proprieta corrispondente al record avente campo 'predefinito'
 * tra quelli selezionabili per gli identificativi passati
 * 
 * @param {Array<Number>} arrIdEventoClasseProprieta
 *
 * @properties={typeid:24,uuid:"EABEB501-F649-430E-8BF6-E5AA04D7D085"}
 */
function getCodiceProprieta(arrIdEventoClasseProprieta)
{
	/** @type{JSFoundSet<db:/ma_presenze/e2eventiclassiproprieta>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.EVENTI_CLASSI_PROPRIETA);
	if(fs.find())
	{
		fs.ideventoclasseproprieta = arrIdEventoClasseProprieta;
		if(fs.search())
		{
			fs.sort('predefinito desc');
			return fs.codiceproprieta;
		}
	}
	
	return '';
}

/**
 * Callback method for when solution is opened.
 * 
 * @param _startArgs
 *
 * @properties={typeid:24,uuid:"068AA202-2304-4164-B59E-A69FF6AE36B4"}
 * @AllowToRunInFind
 */
function ma_rp_onSolutionOpen(_startArgs)
{
	software_rp = globals.ma_utl_getSoftware(globals.Module.RILEVAZIONE_PRESENZE);
	
	switch(software_rp)
	{
		case globals.ModuleSoftware.PRESENZA_SEMPLICE:
		case globals.ModuleSoftware.EPI2_ESTERNO_NO_JOB:	
			 globals['ma_ew_onSolutionOpen'](_startArgs);
			 break;
		case globals.ModuleSoftware.PRESENZA_SEMPLICE_LITE:
			 if(globals.getOrganizationName(globals.svy_sec_lgn_organization_id) == 'Utenti EW')
				 globals['ma_ew_onSolutionOpen'](_startArgs);
			 break;
		default:
			 break;
	}
}

/**
 * @properties={typeid:24,uuid:"2E72408D-A72B-460A-BB45-8ADEC95409D4"}
 */
function getSettimana() 
{
	var frm = forms.svy_nav_fr_openTabs;
	if(frm.vSelectedTab != null 
			&& globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]])
		return globals.objGiornParams[frm.vTabNames[frm.vSelectedTab]].settimana;
	else
	    return null;
}

/**
 * Restituisce l'identificativo dell'attività avente il codice indicato
 * 
 * @param {String} codAttivita
 *
 * @properties={typeid:24,uuid:"3E97981D-6589-45E5-A47C-91825EB6C743"}
 * @AllowToRunInFind
 */
function getIdTabAttivita(codAttivita)
{
   /** @type {JSFoundSet<db:/ma_presenze/e2wk_tabattivita>} */ 
   var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.TAB_ATTIVITA);	
   if(fs.find())
   {
	   fs.codice = codAttivita;
	   if(fs.search())
		   return fs.idtabattivita;
   }
   
   return null;
}

/**
 * Inizializza i parametri per la funzione di invio delle giornaliera
 * 
 * @param {Number} _idditta
 * @param {Array}  _iddipendenti
 * @param {Number} _periodo
 * @param {Number} _gruppoinst
 * @param {String} _gruppolav
 * @param {Number} _tipoconnessione
 * 
 * @return {{
 * 				user_id : String,
 * 				client_id : String,
 *				idditta : Number,
 *              codiceditta : Number,
 *				iddipendenti : Array,
 *				periodo : Number,
 *				gruppoinstallazione : Number,
 *				idgruppoinstallazione : Number,
 *			    codgruppogestione : String,
 *				tipogiornaliera : String,
 *				tipoconnessione : Number,
 *				tracciatoore : Number
 *		   }}
 *
 * @properties={typeid:24,uuid:"2220162A-3D92-47C7-B112-0205F0B5AB31"}
 */
function inizializzaParametriInvioGiornaliera(_idditta, _iddipendenti, _periodo, _gruppoinst, _gruppolav,_tipoconnessione)
{
    return {
    	user_id                 : security.getUserName(), 
		client_id               : security.getClientID(),
		idditta                 : _idditta,
        codiceditta             : globals.getCodDitta(_idditta),
		iddipendenti            : _iddipendenti,
		periodo                 : _periodo,
		gruppoinstallazione	    : _gruppoinst,
		idgruppoinstallazione   : _gruppoinst, // TODO da eliminare
	    codgruppogestione       : _gruppolav,
		tipogiornaliera         : globals.TipoGiornaliera.NORMALE,
		tipoconnessione         : _tipoconnessione,
		tracciatoore            : globals.getTipologiaDitta(_idditta) == globals.Tipologia.GESTITA_UTENTE ? 
				                  globals.getTracciatoConversione(_idditta) : -1
	};
}

/** 
 * @param {Number} _idditta
 * @param {Number} _periodo
 * @param {String} _tipoGiornaliera
 * @param {Number} _tipoConn
 * @param {Array} _giornisel
 * @param {Array} _iddip
 * @param {Number} [_idEvento]
 * 
 * @properties={typeid:24,uuid:"21570A73-1AF7-4AB6-882C-7ADDFD810565"}
 */
function inizializzaParametriFiltroEvento(_idditta, _periodo, _tipoGiornaliera, _tipoConn,
								   _giornisel, _iddip, _idEvento){
	
	return {
		user_id             : security.getUserName(), 
		client_id           : security.getClientID(),
		idditta				: _idditta,
		periodo 			: _periodo,
		tipooperazione		: 1,
		tipogiornaliera		: _tipoGiornaliera,
		tipoconnessione		: _tipoConn,
		idevento			: _idEvento,
		iddipendenti		: _iddip,
		giorniselezionati	: _giornisel
	};
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce l'identificativo del tracciato di conversione per la ditta specificata, -1 se non presente
 * 
 * @param {Number} idDitta
 *
 * @properties={typeid:24,uuid:"DF5C513B-DC95-4314-B683-BFBD260F8D9E"}
 */
function getTracciatoConversione(idDitta)
{
	/** @type {JSFoundSet<db:/ma_anagrafiche/ditte_gestioneesterna>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,'ditte_gestioneesterna');
	if(fs.find())
	{
		fs.idditta = idDitta;
		if(fs.search())
			return fs.idtracciatoconversione; 
	}
	
	return -1;
}

/**
 * Restituisce il codice della regola a partire dall'identificativo della regola
 * 
 * @param {Number} idRegola
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"E0985006-F04C-4686-B2B0-5D37434064E5"}
 * @AllowToRunInFind
 */
function getCodRegola(idRegola)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2regole>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.REGOLE);
	if(fs.find())
	{
		fs.idregole = idRegola;
		if(fs.search())
			return fs.codiceregola;
	}
	
	return null;
}

/**
 * Restituisce la descrizione della regola a partire dall'identificativo della regola
 * 
 * @param {Number} idRegola
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"AD2755EE-9B8A-456B-9B02-94C321225FF4"}
 * @AllowToRunInFind
 */
function getDescrizioneRegola(idRegola)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2regole>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.REGOLE);
	if(fs.find())
	{
		fs.idregole = idRegola;
		if(fs.search())
			return fs.descrizioneregola;
	}
		return null;
}

/**
 * Restituisce la descrizione della regola a partire dal codice della regola ed alla ditta a cui è associata
 * 
 * @param {Number} idDitta
 * @param {Number} codRegola
 * 
 * @return {String}
 * 
 * @properties={typeid:24,uuid:"DFCDD71E-D5EB-491F-BF86-B5B35EB4CA25"}
 * @AllowToRunInFind
 */
function getDescrizioneRegolaDaCodice(idDitta,codRegola)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2regole>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.REGOLE);
	if(fs.find())
	{
		fs.idditta = idDitta;
		fs.codiceregola = codRegola;
		
		if(fs.search())
			return fs.descrizioneregola;
	}
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il record della tabella e2regole 
 * 
 * @param {Number} idDitta
 * @param {Number} codRegola
 * 
 * @return {JSRecord<db:/ma_presenze/e2regole>}
 * 
 * @properties={typeid:24,uuid:"5B0363D9-44C6-4039-B6AD-A4AC2F78F6E1"}
 */
function getRegolaDaCodice(idDitta,codRegola)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2regole>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.REGOLE);
	if(fs.find())
	{
		fs.idditta = idDitta;
		fs.codiceregola = codRegola;
		
		if(fs.search())
			return fs.getRecord(1);
	}
	return null;
}

/**
 * Restituisce un oggetto con le informazioni sulla fascia assegnata al lavoratore nel determinato giorno
 * (idfascia, inizio_orario,inizio_pausa,fine_pausa,fine_orario,totale_ore_fascia,descr_auto_generata,codice_fascia,descrizione)
 * L'ordine di ricerca della fascia effetivamente assegnata è il seguente:
 * 1 - forzata
 * 2 - programmata
 * 3 - assegnata
 * (4 - teorica)
 * 
 * Nel caso di fasce senza timbrature o con una sola timbratura, vengono considerati gli orari fittizi (che devono in tal caso essere compilati!!!)
 * 
 * @AllowToRunInFind
 *
 * @return {{
			    idfascia : Number,
			    inizioorario : Number,
				iniziopausa : Number,
				finepausa : Number,
				fineorario : Number,
				totaleorefascia : Number,
				totaleorepausa : Number,
				descrautogenerata : String,
				codicefascia : String,
				descrizione : String,
				codalternativo : String
			   }}
 * 
 * @properties={typeid:24,uuid:"AED20066-2CAC-4EB9-8E0C-4D2B6814F379"}
 */
function ottieniInformazioniFasciaGiorno(idLav,giorno)
{
	var idFascia = null;
    var inizio_orario = null;
    var inizio_pausa = null;
    var fine_pausa =  null;
    var fine_orario = null;
    var totale_ore_fascia = 0;
    var totale_ore_pausa = null;
    var descr_auto_generata = null;
    var codice_fascia = null;
    var descrizione = null;
    var cod_alternativo = null;
       
	/** @type {JSFoundset <db:/ma_presenze/e2giornaliera>} */
	var fsGiorn = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.GIORNALIERA);
	if(fsGiorn.find())
	{
		fsGiorn.iddip = idLav;
		fsGiorn.giorno = giorno;
		fsGiorn.tipodirecord = globals.TipoGiornaliera.NORMALE;
		if(fsGiorn.search())
		{
			// verifica update di cambiamenti ottenuti all'esterno di Servoy (ad es. nuova regola,etc...) 
			databaseManager.refreshRecordFromDatabase(fsGiorn,-1);
			
			// nel caso che per il giorno sia stata inserita una fascia forzata
			if(fsGiorn.idfasciaorariaforzata)
			{
				idFascia = fsGiorn.idfasciaorariaforzata;
				inizio_orario = fsGiorn.e2giornaliera_to_e2fo_fasceorarie_forzata.inizioorario;
				inizio_pausa = fsGiorn.e2giornaliera_to_e2fo_fasceorarie_forzata.iniziopausa;
				fine_pausa = fsGiorn.e2giornaliera_to_e2fo_fasceorarie_forzata.finepausa; 
				fine_orario = fsGiorn.e2giornaliera_to_e2fo_fasceorarie_forzata.fineorario;
				totale_ore_fascia = fsGiorn.e2giornaliera_to_e2fo_fasceorarie_forzata.totaleorefascia;
				totale_ore_pausa = fsGiorn.e2giornaliera_to_e2fo_fasceorarie_forzata.totpausa;
				descr_auto_generata = fsGiorn.e2giornaliera_to_e2fo_fasceorarie_forzata.descrizautogenerata;
				codice_fascia = fsGiorn.e2giornaliera_to_e2fo_fasceorarie_forzata.codicefascia;
				descrizione = fsGiorn.e2giornaliera_to_e2fo_fasceorarie_forzata.descrizione;
				cod_alternativo = fsGiorn.e2giornaliera_to_e2fo_fasceorarie_forzata.codalternativo;
			}
			// nel caso non ci sia una fascia forzata assegnata
			else 
			{
				// verifica prima la presenza di una fascia oraria programmata per il giorno in questione 
				// se esiste è la fascia sulla quale effettuare i controlli
				/** @type {JSFoundset <db:/ma_presenze/e2giornalieraprogfasce>} */
				var fsProg = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.GIORNALIERA_PROGFASCE);
				if(fsProg.find())
				{
					fsProg.iddip = idLav;
					fsProg.giorno = giorno;
					if(fsProg.search())
					{
						idFascia = fsProg.idfasciaoraria;
						inizio_orario = fsProg.e2giornalieraprogfasce_to_e2fo_fasceorarie.inizioorario;
						inizio_pausa = fsProg.e2giornalieraprogfasce_to_e2fo_fasceorarie.iniziopausa;
						fine_pausa = fsProg.e2giornalieraprogfasce_to_e2fo_fasceorarie.finepausa;
						fine_orario = fsProg.e2giornalieraprogfasce_to_e2fo_fasceorarie.fineorario;
						totale_ore_fascia = fsProg.e2giornalieraprogfasce_to_e2fo_fasceorarie.totaleorefascia;
						totale_ore_pausa = fsProg.e2giornalieraprogfasce_to_e2fo_fasceorarie.totpausa;
						descr_auto_generata = fsProg.e2giornalieraprogfasce_to_e2fo_fasceorarie.descrizautogenerata;
						codice_fascia = fsProg.e2giornalieraprogfasce_to_e2fo_fasceorarie.codicefascia;
						descrizione = fsProg.e2giornalieraprogfasce_to_e2fo_fasceorarie.descrizione;
						cod_alternativo = fsProg.e2giornalieraprogfasce_to_e2fo_fasceorarie.codalternativo;
					}
					// gestione fascia oraria assegnata standard
					else
					{
						idFascia = fsGiorn.idfasciaorariaassegnata;
						inizio_orario = fsGiorn.e2giornaliera_to_e2fo_fasceorarie.inizioorario;
						inizio_pausa = fsGiorn.e2giornaliera_to_e2fo_fasceorarie.iniziopausa;
						fine_pausa = fsGiorn.e2giornaliera_to_e2fo_fasceorarie.finepausa;
						fine_orario = fsGiorn.e2giornaliera_to_e2fo_fasceorarie.fineorario;
						totale_ore_fascia = fsGiorn.e2giornaliera_to_e2fo_fasceorarie.totaleorefascia;
						totale_ore_pausa = fsGiorn.e2giornaliera_to_e2fo_fasceorarie.totpausa;
						descr_auto_generata = fsGiorn.e2giornaliera_to_e2fo_fasceorarie.descrizautogenerata;
						codice_fascia = fsGiorn.e2giornaliera_to_e2fo_fasceorarie.codicefascia;
						descrizione = fsGiorn.e2giornaliera_to_e2fo_fasceorarie.descrizione;
						cod_alternativo = fsGiorn.e2giornaliera_to_e2fo_fasceorarie.codalternativo;
					}
				}
				else
				    globals.ma_utl_showWarningDialog('Cannot go to find mode','Informazioni fascia giorno');
				
				// inserito per testare funzionamento casi senza timbrature o con una sola timbratura
				if(inizio_orario == null)
				{
					var recFittizio = ottieniDatasetOrariFittizi(idFascia);
					if(recFittizio)
					{
						inizio_orario = recFittizio.inizioorario;
						inizio_pausa = recFittizio.iniziopausa;
						fine_pausa = recFittizio.finepausa;
						fine_orario = recFittizio.fineorario;
						totale_ore_pausa = recFittizio.finepausa - recFittizio.iniziopausa;
					}
				}
			}
			
		}
		// se non è stato ancora attivato il mese per il dipendente consideriamo la fascia teorica a cui sarebbe assegnato
		else
		{
			var sqlFascia = "SELECT dbo.F_Lav_IDFasciaTeorica(?,?)";
			var arrFascia = [idLav,giorno];
			var dsFascia = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlFascia,arrFascia,-1);
			
			/** @type {JSFoundset <db:/ma_presenze/e2fo_fasceorarie>} */
			var fsFascia = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.FASCE_ORARIE);
			if(fsFascia.find())
			{
				fsFascia.idfasciaoraria = dsFascia.getValue(1,1);
				fsFascia.search();
			}
			
			idFascia = fsFascia.idfasciaoraria;
			inizio_orario = fsFascia.inizioorario;
			inizio_pausa = fsFascia.iniziopausa;
			fine_pausa = fsFascia.finepausa;
			fine_orario = fsFascia.fineorario;
			totale_ore_fascia = fsFascia.totaleorefascia;
			totale_ore_pausa = fsFascia.totpausa;
			descr_auto_generata = fsFascia.descrizautogenerata;
			codice_fascia = fsFascia.codicefascia;
			descrizione = fsFascia.descrizione;
			cod_alternativo = fsFascia.codalternativo;
		}
		
		// ottenimento informazioni sulle compensazioni per la fascia
		var objInfoComp = globals.ottieniInformazioniCompensazioniFascia(idFascia);
		if(objInfoComp != null)
		{
		   if(objInfoComp['asseam'])
		   {
			  fine_orario += objInfoComp['maxmineam'];
		   }
		   if(objInfoComp['assepm'])
		   {
			  fine_orario += objInfoComp['maxminepm'];
		   }
		   if(objInfoComp['assuam'])
		   {
			  inizio_orario =- objInfoComp['maxminuam'];
		   }
		   if(objInfoComp['assupm'])
		   {
			  inizio_orario =- objInfoComp['maxminupm'];
		   }
		}
		// costruzione dell'oggetto da ritornare
		return {
			    idfascia : idFascia,
			    inizioorario : inizio_orario,
				iniziopausa : inizio_pausa,
				finepausa : fine_pausa,
				fineorario : fine_orario,
				totaleorefascia : totale_ore_fascia,
				totaleorepausa : totale_ore_pausa,
				descrautogenerata : descr_auto_generata,
				codicefascia : codice_fascia,
				descrizione : descrizione,
				codalternativo : cod_alternativo
			   };
	}
	else
		globals.ma_utl_showWarningDialog('Cannot go to find mode','Informazioni fascia giorno');
	return null;
}

/**
 * Recupera le informazioni relative alle eventuali compensazioni di orario della fascia richiesta
 * 
 * @param {Number} idFascia
 *
 * @return {Object}
 * 
 * @properties={typeid:24,uuid:"954570B5-F545-4514-950B-C6BE7338EC3E"}
 * @AllowToRunInFind
 */
function ottieniInformazioniCompensazioniFascia(idFascia)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2fo_fasceorarie>}*/
	var fsFo = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.FASCE_ORARIE);
	if(fsFo.find())
	{
		fsFo.idfasciaoraria = idFascia;
		if(fsFo.search())
		{
			/** @type {JSFoundSet<db:/ma_presenze/e2fo_compensazioni>}*/
			var fsComp = fsFo.e2fo_fasceorarie_to_e2fo_compensazioni;
			if(fsComp)
			return {
				asseam : fsComp.asseam,
				assuam : fsComp.assuam,
				assepm : fsComp.assepm,
				assupm : fsComp.assupm,
				maxmineam : fsComp.maxmineam,
				maxminuam : fsComp.maxminupm,
				maxminepm : fsComp.maxminepm,
				maxminupm : fsComp.maxminupm
			};
			
		}
	}
	else
		globals.ma_utl_showWarningDialog('Cannot go to find mode','Informazioni compensazioni fascia');
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param idFasciaOraria
 * 
 * @return JSRecord<db:/ma_presenze/e2fo_fasceorariefittizie>
 *
 * @properties={typeid:24,uuid:"FC6AF23D-9545-4B85-A700-4764D42BDF96"}
 */
function ottieniDatasetOrariFittizi(idFasciaOraria)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2fo_fasceorariefittizie>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,'e2fo_fasceorariefittizie');
	if(fs.find())
	{
		fs.idfasciaoraria = idFasciaOraria;
		if(fs.search())
			return fs.getSelectedRecord();
	}
	
	return null;
}

/**
 * Restituisce il numero di ore teoriche nella giornata per il lavoratore indicati 
 * (non tiene conto di eventuali festività in mesi non ancora attivati)
 * 
 * @param {Number} idLav
 * @param {Date} giorno
 *
 * @properties={typeid:24,uuid:"848DA9FA-4B43-4DA1-8A8A-9C5530D6D834"}
 */
function ottieniOreTeoricheGiorno(idLav,giorno)
{
	var sqlOtg = "SELECT dbo.F_Lav_OreTeoricheAl(?, ?);";
	var argsOtg = [idLav, giorno];
	var dsOtg = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlOtg,argsOtg,-1);

	return dsOtg.getValue(1,1);
}

/**
 * Recupera le richieste del lavoratore per il giorno selezionato
 *  
 * @param {Number} idLavoratore
 * @param {Date} giorno
 *
 * @properties={typeid:24,uuid:"5C59549B-808E-4888-84EF-7779F5B4AD64"}
 * @AllowToRunInFind
 */
function ottieniRichiesteSospeseGiorno(idLavoratore,giorno)
{
	/** @type {JSFoundSet<db:/ma_anagrafiche/lavoratori_giustificativirighe>}*/
	var fsRighe = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.RP_RIGHE);
    
	if(fsRighe.find())
	{
		fsRighe.idlavoratore = idLavoratore;
		fsRighe.giorno = utils.dateFormat(giorno,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
		fsRighe.lavoratori_giustificativirighe_to_lavoratori_giustificativitesta.stato = '^';
		if(fsRighe.search())
		   return fsRighe;
	}
	
	return null;
}

/**
 * Recupera il numero di ore di assenza (confermate ed esclusi gli storici) per il dipendente nel giorno specificato
 * 
 * @param {Number} idLavoratore
 * @param {Date} giorno
 * @param {String} tipoGiornaliera
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"FDEE406F-48B1-47DA-A724-7369C0D476D2"}
 * @AllowToRunInFind
 */
function ottieniOreAssenzaConfermateGiorno(idLavoratore,giorno,tipoGiornaliera)
{
	var totOreEvSost = null;
	
	/** @type {JSFoundSet<db:/ma_presenze/e2giornaliera>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.GIORNALIERA);
	if(fs.find())
	{
		fs.giorno = giorno;
		fs.iddip = idLavoratore;
		fs.tipodirecord = tipoGiornaliera;
		
		if(fs.search())
		{
			var recs = fs.e2giornaliera_to_e2giornalieraeventi;
			var recsSize = recs.getSize();
			var recGiornEv = null;
			
			for(var r = 1; r <= recsSize; r++)
			{
				recGiornEv = recs.getRecord(r);
				if(recGiornEv 
					&& recGiornEv.e2giornalieraeventi_to_e2eventi.e2eventi_to_e2eventiclassi.tipo == 'S'
					&& recGiornEv.e2giornalieraeventi_to_e2eventi.e2eventi_to_e2eventiclassi.gestitoconperiodi == 0
					&& recGiornEv.e2giornalieraeventi_to_e2eventi.e2eventi_to_e2eventiclassi.gestitoconstorico == 0)
			    totOreEvSost += recGiornEv.ore; 
			}
		}
	}
	
	if(totOreEvSost)
	   return totOreEvSost / 100;
	else
	   return null;
}

/**
 * Recupera il numero di ore di assenza (confermate) per il dipendente nel giorno specificato
 * 
 * @param {Number} idLavoratore
 * @param {Date} giorno
 *
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"D2DB4E83-8E5F-4367-89E6-2C30F5795D04"}
 * @AllowToRunInFind
 */
function ottieniOreAssenzaCertificazioniGiorno(idLavoratore,giorno)
{
	var totOreEvSto = 0;
	
	/** @type {JSFoundSet<db:/ma_presenze/e2giornaliera>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.GIORNALIERA);
	if(fs.find())
	{
		fs.giorno = giorno//globals.dateFormat(giorno,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
		fs.iddip = idLavoratore;
		
		if(fs.search() && fs.e2giornaliera_to_e2giornalieraeventi.loadAllRecords())
		{
			var recs = fs.e2giornaliera_to_e2giornalieraeventi;
			var recsSize = recs.getSize();
			var recGiornEv = null;
			
			for(var r = 1; r <= recsSize; r++)
			{
				recGiornEv = recs.getRecord(r);
				if(recGiornEv 
					&& recGiornEv.e2giornalieraeventi_to_e2eventi.e2eventi_to_e2eventiclassi.tipo == 'S'
					&& recGiornEv.e2giornalieraeventi_to_e2eventi.e2eventi_to_e2eventiclassi.gestitoconperiodi == 0
					&& recGiornEv.e2giornalieraeventi_to_e2eventi.e2eventi_to_e2eventiclassi.gestitoconstorico == 1)
			    totOreEvSto += recGiornEv.ore; 
			}
		}
	}
	
	if(totOreEvSto)
	    return totOreEvSto / 100;
	else
		return null;
}

/**
 * Recupera il numero di ore di assenza (richieste ed esclusi gli storici) per il dipendente nel giorno specificato
 * 
 * @param {Number} idLavoratore
 * @param {Date} giorno
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"2894560D-4F10-41ED-A96A-35E8B73BA941"}
 * @AllowToRunInFind
 */
function ottieniOreAssenzaRichiesteGiorno(idLavoratore,giorno)
{
	var totOreAssRich = 0;
	
	/** @type {JSFoundSet<db:/ma_anagrafiche/lavoratori_giustificativirighe>}*/
	var fsRighe = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.RP_RIGHE);
    
	if(fsRighe.find())
	{
		fsRighe.idlavoratore = idLavoratore;
		fsRighe.giorno = utils.dateFormat(giorno,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
		fsRighe.lavoratori_giustificativirighe_to_lavoratori_giustificativitesta.stato = '^';
		if(fsRighe.search())
		{
			var fsRigheSize = fsRighe.getSize();
			for(var rs = 1; rs <= fsRigheSize; rs++)
			{
				totOreAssRich += fsRighe.getRecord(rs).ore;
			}
		}

	}
	
	return totOreAssRich;
}

/**
 * Ritorna true se il giorno passato come parametro è già stato conteggiato,
 * false altrimenti
 * 
 * @param {Date} giorno
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"F81FF90C-153B-4108-BBD1-FDF4A3441B83"}
 * @AllowToRunInFind
 */
function isGiornoConteggiato(idlavoratore,giorno)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2giornaliera>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.GIORNALIERA);
	
	if(fs.find())
	{
		fs.iddip = idlavoratore;
		fs.giorno = giorno;
		fs.tipodirecord = globals.TipoGiornaliera.NORMALE;
		
		if(fs.search() == 1)
		{
			databaseManager.refreshRecordFromDatabase(fs,1);
			if((fs.anomalie == 0 || fs.anomalie >= 16) || fs.danonconteggiare == 1)
			   return true;
	
		}
	}
	return false;
}

/**
 * Ritorna la prima lettera del nome del giorno
 * 
 * @param {Date} giorno
 *
 * @properties={typeid:24,uuid:"BFE8D1BB-035B-48B0-83BF-15999D43FECC"}
 */
function getSiglaGiorno(giorno)
{
	/** @type {Date} */
	var dgiorno = giorno 
	
    switch (dgiorno.getDay()){
     
        case 0 : return 'D'
                 break
        case 1 : return 'L'
                 break
        case 2 : return 'M'
                 break                      
        case 3 : return 'M'
                 break
        case 4 : return 'G'
                 break                      
        case 5 : return 'V'
                 break                      
        case 6 : return 'S'
                 break                      
        default : return 'default'
    }
}

/**
 * 
 * @param {Number} _idditta
 * @param {Number} _periodo
 * @param {String} _tipoGiornaliera
 * @param {Number} _tipoconnessione
 * @param {Array} _giornisel
 * @param {Array} _idDipsel
 * @param {Boolean} [_soloNonConteggiati]
 * 
 * @properties={typeid:24,uuid:"3F30F2D2-7287-4AB2-99D8-F9380ACE69B0"}
 */
function inizializzaParametriCompilaConteggio(_idditta, _periodo, _tipoGiornaliera, _tipoconnessione, _giornisel, _idDipsel,_soloNonConteggiati)
{
	return {
		user_id             : security.getUserName(), 
		client_id           : security.getClientID(),
		idditta				: _idditta,
		periodo				: _periodo,
		tipogiornaliera		: _tipoGiornaliera,
		tipoconnessione		: _tipoConnessione,
		giorniselezionati	: _giornisel,
		iddipendenti		: _idDipsel,
		solononconteggiati  : _soloNonConteggiati != null ? _soloNonConteggiati : false
	};
}

/**
 * @param {Number} _idditta
 * @param {Array<Number>} _giornisel
 * @param {Number} _periodo
 * @param {Number} _tipoOperazione
 * @param {String} _tipoGiornaliera
 * @param {Number} _tipoconnessione
 * @param {Array<Number>} _idDipsel
 * @param {Number} _idevento
 * @param {String} _codpropevento
 * @param {Number} _oreevento
 * @param {Number} _importoevento
 * @param {Number} _ideventomodificato
 * @param {String} _codpropmodificato
 * @param {Number} _coperturaOrarioTeorico
 * @param {Boolean} [_ricalcolaProprieta]
 * @param {Number} [_idTabSW]
 * 
 * @properties={typeid:24,uuid:"1B7FC4FD-1F71-481D-A269-8F103CE6668C"}
 */
function inizializzaParametriEvento(_idditta, _periodo, _tipoOperazione, _giornisel, _tipoGiornaliera, _tipoconnessione,
									_idDipsel, _idevento, _codpropevento, _oreevento, _importoevento, _ideventomodificato,
									_codpropmodificato, _coperturaOrarioTeorico, _ricalcolaProprieta,_idTabSW){
	
   return {										
	   user_id                  : security.getUserName(), 
	   client_id                : security.getClientID(),
	   idditta				    : _idditta,
	   periodo				    : _periodo,
	   tipooperazione		    : _tipoOperazione,
	   tipogiornaliera		    : _tipoGiornaliera,
	   tipoconnessione		    : _tipoConnessione,
	   giorniselezionati	    : _giornisel,
	   iddipendenti			    : _idDipsel,
	   idevento				    : _idevento, 
	   codproprieta			    : _codpropevento,
	   ore					    : _oreevento,
	   importo				    : _importoevento,
	   ideventomod			    : _ideventomodificato != null ? _ideventomodificato : -1,
	   codproprietamod			: _codpropmodificato,
	   coperturaorarioteorico	: _coperturaOrarioTeorico,
	   ricalcolaproprieta       : _ricalcolaProprieta != null ? _ricalcolaProprieta : false,
	   idtabcategoriasw         : _idTabSW != null ? _idTabSW : -1		   

   };
}

/**
 * @param {Object} _evParams
 * 
 * @return {Boolean} bReturn
 * 
 * @properties={typeid:24,uuid:"BB69E5EE-4672-4722-97C0-69223EFC5DCB"}
 */
function salvaEvento(_evParams)
{	
	var url = WS_URL + "/Eventi/Salva";
	var responseObj = getWebServiceResponse(url,_evParams);
	return responseObj['returnValue'];
}

/**
 * Ottieni le proprietà selezionabili per l'evento del lavoratore nel giorno indicato
 * 
 * @param {Number} idEvento
 * @param {Number} [idLav]
 * @param {Number} [periodo]
 * @param {Number} [gg]
 * @param {String} [tipoGiorn]
 *
 * @properties={typeid:24,uuid:"42ED854C-049E-49A7-BBFB-F04EB1D4C6A3"}
 */
function getProprietaSelezionabili(idEvento,idLav,periodo,gg,tipoGiorn)
{
	var url = globals.WS_URL + "/Eventi/FiltraProprieta";
	var giorno = gg ? gg : forms['giorn_list_temp'].foundset.getSelectedIndex() - globals.offsetGg;
	var iddip = idLav ? idLav : forms['giorn_header'].idlavoratore;
		
	var params = inizializzaParametriFiltroEvento(
					 idLav ? globals.getDitta(idLav) : forms['giorn_header'].idditta
					,periodo ? periodo : globals.getPeriodo()
					,tipoGiorn ? tipoGiorn : globals.TipoGiornaliera.NORMALE
					,globals._tipoConnessione
					,[giorno]
					,[iddip]
					,idEvento
					);
	
	var response = globals.getWebServiceResponse(url, params);
	
	return response['proprieta'];
}

/**
 * Calcola la somma degli eventi sostitutivi inseriti nella giornaliera di budget per il periodo
 * indicato
 * 
 * @param {Number} idLav
 * @param {Date} dal
 * @param {Date} al
 * @param {Array} [arrFasceOrarie]
 * 
 * @properties={typeid:24,uuid:"B4A26383-4CE3-4D9F-86DC-62D9DF63BC60"}
 */
function getTotaleOreSostitutiveInBudget(idLav,dal,al,arrFasceOrarie)
{
	var sqlOreBudget =
		"SELECT RTRIM(CAST(EP.Evento AS Varchar)) AS Evento\
		       , RTRIM(ISNULL(GE.CodiceProprieta, '')) AS Prop\
		       , RTRIM(EP.descriz) + ' ' + RTRIM(ISNULL(EP.Descrizione, '')) AS Descrizione\
		       , G.TipoDiRecord , EP.OrdineStampa , EP.OrdineDiEsposizione , EP.Tipo , EP.RilevanteMesePrecedente\
	           , SUM(CAST(GE.Ore AS MONEY) / 100) AS Ore, SUM(GE.Valore) AS Importo\
	          FROM E2Giornaliera G	INNER JOIN E2GiornalieraEventi GE\
			  ON G.IdGiornaliera = GE.IdGiornaliera\
			  LEFT OUTER JOIN EventiProprieta EP\
			  ON GE.IdEvento = EP.idEvento AND (ISNULL(GE.CodiceProprieta,'') = EP.CodiceProprieta) ";
	
	if(arrFasceOrarie && arrFasceOrarie.length)
		sqlOreBudget += "LEFT OUTER JOIN E2FO_FasceOrarie FO \
		                ON FO.idFasciaOraria = G.idFasciaOrariaAssegnata "; 
		
	sqlOreBudget += " WHERE \
	          (G.Giorno BETWEEN ? AND ?) AND (G.TipoDiRecord = 'B') AND (G.IdDip = ?) "
	
	if(arrFasceOrarie && arrFasceOrarie.length)
		sqlOreBudget += "AND FO.idFasciaOraria IN (" + arrFasceOrarie.map(function (fo){return fo}).join(',')+") ";
	
	sqlOreBudget += " GROUP BY\
		      RTRIM(CAST(EP.Evento AS Varchar))\
		      , RTRIM(ISNULL(GE.CodiceProprieta, ''))\
		      , RTRIM(EP.descriz) + ' ' + RTRIM(ISNULL(EP.Descrizione, ''))\
		      , G.TipoDiRecord\
		      , EP.OrdineStampa\
		      , EP.OrdineDiEsposizione\
		      , EP.Tipo\
		      , EP.RilevanteMesePrecedente";
	var arrOreBudget = [utils.dateFormat(dal,globals.ISO_DATEFORMAT),
	                    utils.dateFormat(al,globals.ISO_DATEFORMAT),
	                    idLav];
	var dsOreBudget = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlOreBudget,arrOreBudget,-1);
	var totOreBudget = 0.00;
	for(var i=1; i<= dsOreBudget.getMaxRowIndex(); i++)
		totOreBudget += dsOreBudget.getValue(i,9);
	
	return totOreBudget;
}

/**
 * @AllowToRunInFind
 * 
 * Verifica se la ditta utilizza o meno lo smaltimento automatico dei ratei
 * 
 * @param {Number} idDitta
 *
 * @return {Boolean}
 * 
 * @properties={typeid:24,uuid:"7D37E0AC-0E42-4D3A-A0B3-2AF0D6B31C6B"}
 */
function utilizzaSmaltimentoRatei(idDitta)
{
	var usaSmaltimento = false;
	/** @type {JSFoundSet<db:/ma_anagrafiche/ditte>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE);
    if(fs.find())
    {
    	fs.idditta = idDitta;
    	if(fs.search())
    		usaSmaltimento = fs.ditte_to_ditte_presenze.ratei_smaltimento;
    }
    return usaSmaltimento;
}

/**
 * Recupera gli eventi selezionabili per il particolare dipendente nel periodo richiesto
 * 
 * @param {Number} idLav
 * @param {Number} periodo
 * @param {String} tipoGiorn
 * 
 * @properties={typeid:24,uuid:"B9752055-1B9D-4FD1-A040-541208BD651E"}
 */
function FiltraEventiSelezionabili(idLav,periodo,tipoGiorn)
{	
	var bReturn = false
	var url = globals.WS_URL + "/Eventi/FiltraEventi"
	var params = globals.inizializzaParametriFiltroEvento(
			 globals.getDitta(idLav)
			,periodo
			,tipoGiorn
			,globals._tipoConnessione
			,[]
			,[idLav]
			,-1
			);
	
	var _responseObj = globals.getWebServiceResponse(url, params);
	bReturn = _responseObj['returnValue'];
	if (bReturn === true)
	{
		/** @type {Array} */
		_arrIdEvSelezionabili = _responseObj['eventi'];
		if (_arrIdEvSelezionabili.length == 0)
			globals.ma_utl_showErrorDialog('Non esistono eventi selezionabili, riprovare o verificare','Nessun evento selezionabile in giornaliera')
    }	
	else
	  globals.ma_utl_showErrorDialog('Filtraggio eventi selezionabili non riuscito','Nessun evento selezionabile in giornaliera');
	
	return bReturn;
}

/**
 * @properties={typeid:24,uuid:"71AD2AB6-BD3F-4521-9B0F-1AB76D4F2527"}
 */
function FiltraEventiSelezionabiliDittaPeriodo(idDitta,periodo)
{
	var url = globals.WS_URL + "/Eventi/FiltraEventiDitta"
	
	var params = globals.inizializzaParametriInvioGiornaliera(idDitta
		                                                  ,[]
		                                                  ,periodo
														  ,globals.getGruppoInstallazioneDitta(idDitta)
														  ,''
														  ,globals.TipoConnessione.CLIENTE);
	
	var response = globals.getWebServiceResponse(url, params);
	if (response['returnValue'] === true)
	{
		/** @type {Array} */
		globals._arrIdEvSelezionabili = response['eventi'];
		if (globals._arrIdEvSelezionabili.length > 0)
			globals.ma_utl_showWarningDialog('Non esistono eventi selezionabili, riprovare o verificare','i18n:hr.msg.attention');
				
	}	
	
	return response['returnValue'];
}

/**
 * @param {Number} idLavoratore
 * @param {Number} idTabSW
 * 
 * @properties={typeid:24,uuid:"7DE86AC3-7329-4D3D-A3DB-23EDD231369A"}
 * @SuppressWarnings(wrongparameters)
 */
function FiltraEventiSelezionabiliModulo(idLavoratore,idTabSW)
{	
	var url = globals.WS_RFP_URL + "/Eventi/FiltraEventiModulo"
	
	var params = globals.inizializzaParametriEvento(
		         globals.getDitta(idLavoratore),
				 globals.toPeriodo(globals.TODAY.getFullYear(),globals.TODAY.getMonth() + 1),
				 0,
				 [],
				 globals.TipoGiornaliera.BUDGET,
				 globals.TipoConnessione.CLIENTE,
				 [idLavoratore],
				 -1,
				 '',
				 -1,
				 -1,
				 -1,
				 '',
				 false,
				 false,
				 idTabSW)
	
	var _responseObj = globals.getWebServiceResponse(url, params);
	if (_responseObj['returnValue'] === true)
		/** @type {Array} */
		globals._arrIdEvSelezionabiliRP = _responseObj['eventi'];
	else
	    globals._arrIdEvSelezionabiliRP = [];
	
	return _responseObj['returnValue'];
}

/**
 * Restituisce true se tra gli eventi passati ve ne è  almeno uno appartenente ad una classe
 * di eventi che consente delle ore a zero, false altrimenti
 * 
 * @param {Array<Number>} arrIdEventi
 *
 * @properties={typeid:24,uuid:"FBE00700-AE72-4A94-92E5-BEF1C6327037"}
 * @AllowToRunInFind
 */
function haEventiAZeroOre(arrIdEventi)
{
	/** @type { JSFoundset<db:/ma_presenze/e2eventi> }*/
	var fsEventi = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.EVENTI);
	if(fsEventi.find())
	{
		fsEventi.idevento = arrIdEventi;
		fsEventi.e2eventi_to_e2eventiclassi.consentioreazero = 1;
		
		if(fsEventi.search())
			return true;
	}
	return false;
}

/**
 * Restituisce true se tra l'evento passato è appartenente ad una classe
 * di eventi che consente delle ore a zero, false altrimenti
 *
 * @properties={typeid:24,uuid:"5931E7D5-B67B-4B5F-9ED7-AA808F252F2B"}
 * @AllowToRunInFind
 */
function isEventoAZeroOre(idEvento)
{
	/** @type { JSFoundset<db:/ma_presenze/e2eventi> }*/
	var fsEventi = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.EVENTI);
	if(fsEventi.find())
	{
		fsEventi.idevento = idEvento;
		fsEventi.e2eventi_to_e2eventiclassi.consentioreazero = 1;
		
		if(fsEventi.search())
			return true;
	}
	return false;
}

/**
 * Restituisce true se l'evento abilitato per il ferie e permessi è da autorizzare,
 * false altrimenti
 * 
 * @param {Number} idDitta
 * @param {Number} idEvento
 * 
 * @return Boolean
 *
 * @properties={typeid:24,uuid:"528492C6-0222-406D-869E-58E477FB2861"}
 * @AllowToRunInFind
 */
function isEventoDaAutorizzare(idDitta,idEvento)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2eventiabilitazioni>}*/
	var fsEvAbil = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.EVENTI_ABILITAZIONI);
	
	fsEvAbil.find();
	fsEvAbil.idditta = idDitta;
	fsEvAbil.idevento = idEvento;
	fsEvAbil.idtabcategoriasw = globals.CategoriaSW.RFP;
	
	if(fsEvAbil.search())
		return fsEvAbil.daautorizzare ? true : false;
	
	return true;
}

/**
 * @param {Date} orario
 * @param {Boolean} [m30] conteggio a mezzore 
 *
 * @properties={typeid:24,uuid:"A6B27D24-B54F-4F41-A8BB-2B74631FF6CE"}
 */
function validaOrarioInserito(orario,m30)
{
	var hh = orario.getHours();
	var mm = orario.getMinutes();
	
	if (hh > 24)
		return false;
	switch (mm)
	{
		case 0:
		case 30:
			return true;
			break;
		case 15:
		case 45:
			if(m30 != undefined && m30)
			   return false;	
			else
			   return true;
			break;
		default:
			return false;
			break;
	}
}

/**
 * Calcola il numero di ore per l'evento in giornaliera in funzione delle ore
 * inserite, delle ore di inizio e fine e di eventuali periodi di pausa
 *  
 * @param {Number} dalleOre
 * @param {Number} alleOre
 * @param {Number} inizioOrario
 * @param {Number} inizioPausa
 * @param {Number} finePausa
 * @param {Number} fineOrario
 * @param {Number} totOreFascia
 * @param {Number} totOrePausa
 * 
 * @return Number
 * 
 * @properties={typeid:24,uuid:"C69E4893-67E4-4E0B-8737-6A81F39C93E9"}
 */
function calcolaOreEvento(dalleOre,alleOre,inizioOrario,inizioPausa,finePausa,fineOrario,totOreFascia,totOrePausa)
{
	var vDalleOre = dalleOre;
	var vAlleOre = alleOre;
	var vTotale;
	var vTotaleOre;
	var vTotaleMinuti;
	var vTotaleMinutiFormat;
	inizioPausa += totOrePausa;
	finePausa -= totOrePausa;
	var vPausa = inizioPausa && finePausa;
	
	if(dalleOre < inizioOrario)
	   vDalleOre = inizioOrario;
	else if(vPausa 
			&& inizioPausa < dalleOre 
			&& dalleOre < finePausa)
	   vDalleOre = finePausa;
	       
	if(fineOrario != null && alleOre > fineOrario)
	   vAlleOre = fineOrario;
	else if(vPausa
			&& inizioPausa < alleOre
			&& alleOre < finePausa)
	   vAlleOre = inizioPausa;
	
	if(vPausa && dalleOre <= inizioPausa && alleOre >= finePausa)
	{
	   if(totOrePausa == null)
	   {
		   switch(finePausa - inizioPausa)
		   {
				case 15:
				case 55:
					totOrePausa = 25;
					break;
				case 30:
				case 50:	
				case 70:
				    totOrePausa = 50;
					break;
				case 45:
				case 85:
				    totOrePausa = 75;
				    break;
				default:
				    totOrePausa = finePausa - inizioPausa;
					break;
			}
	   }
	   vTotale = vAlleOre - vDalleOre - totOrePausa; //e non il precedente (finePausa - inizioPausa);
	}
	else
	   vTotale = vAlleOre - vDalleOre;
	
	vTotaleOre = Math.floor(vTotale/100);
	vTotaleMinuti = vTotale - vTotaleOre * 100;
	switch(vTotaleMinuti)
	{
		case 15:
		case 55:
			vTotaleMinutiFormat = 0.25;
			break;
		case 30:
		case 50:	
		case 70:
		    vTotaleMinutiFormat = 0.50;
			break;
		case 45:
		case 85:
		    vTotaleMinutiFormat = 0.75;
		    break;
		default:
		    vTotaleMinutiFormat = 0;
			break;
	}
	return vTotaleOre + vTotaleMinutiFormat;  
}

/**
* Calcola il numero di ore per l'evento in giornaliera in modo diretto 
* dalle ore di inizio e fine indicate
*  
* @param {Number} dalleOre
* @param {Number} alleOre
* 
* @return {Number}
*
*
 * @properties={typeid:24,uuid:"B92EA423-DAE5-41B8-BB40-6C5F76AD6343"}
 */
function calcolaOreEventoDiretto(dalleOre,alleOre)
{
	var vTotale;
	var vTotaleOre;
	var vTotaleMinuti;
	var vTotaleMinutiFormat;
	
    vTotale = alleOre - dalleOre;
	
	vTotaleOre = Math.floor(vTotale/100);
	vTotaleMinuti = vTotale - vTotaleOre * 100;
	switch(vTotaleMinuti)
	{
		case 15:
		case 55:
			vTotaleMinutiFormat = 0.25;
			break;
		case 30:
		case 50:	
		case 70:
		    vTotaleMinutiFormat = 0.50;
			break;
		case 45:
		case 85:
		    vTotaleMinutiFormat = 0.75;
		    break;
		default:
		    vTotaleMinutiFormat = 0;
			break;
	}
	
	return vTotaleOre + vTotaleMinutiFormat;
}

/**
 * Ottieni le informazioni sulla fascia assegnata in giornaliera per il giorno selezionato
 *  
 * @param {Number} idLav
 * @param {Date} giorno
 *
 * @return {JSRecord<db:/ma_presenze/e2fo_fasceorarie>}
 * 
 * @properties={typeid:24,uuid:"D3A06D24-765C-4B56-A574-146DDB3D056C"}
 * @AllowToRunInFind
 */
function getFasciaAssegnataGiorno(idLav,giorno)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2giornaliera>} */
	var fsGiorn = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.GIORNALIERA);
	if(fsGiorn.find())
	{
		fsGiorn.iddip = idLav;
		fsGiorn.giorno = utils.dateFormat(giorno,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
		
		if(fsGiorn.search())
			return fsGiorn.e2giornaliera_to_e2fo_fasceorarie.getSelectedRecord();
	}
	
	return null;
}

/**
 * Recupera le richieste del lavoratore per il periodo indicato
 * 
 * @properties={typeid:24,uuid:"CA6A7EFE-CF4B-4C12-BEB9-FB77662C499E"}
 * @AllowToRunInFind
 */
function ottieniRichiesteDalAl(idLavoratore,dal,al)
{
	/** @type {JSFoundSet<db:/ma_anagrafiche/lavoratori_giustificativirighe>}*/
	var fsRighe = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.RP_RIGHE);
    
	if(fsRighe.find())
	{
		fsRighe.idlavoratore = idLavoratore;
		fsRighe.giorno = utils.dateFormat(dal,globals.ISO_DATEFORMAT) + '...' + utils.dateFormat(al,globals.ISO_DATEFORMAT) + '|yyyyMMdd';
		if(fsRighe.search())
		   return fsRighe;
	}
	
	return null;
}