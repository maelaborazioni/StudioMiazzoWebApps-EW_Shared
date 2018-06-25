/**
 * @type {{
 * 			anno: Number,
 * 			mese: Number,
 * 			giorniSelGiorn: Array<Number>,
 *          giorniSelTimbr: Array<Number>,
 *          lastSelIndex: Number,
 *          lastSelIndTimbr: Number,
 *          selectedTab: Number,
 *          annoAttivo: Number,
 *          meseAttivo: Number
 * }}
 *
 * @properties={typeid:35,uuid:"EB76FBCE-EF57-48A7-AD72-6A5D35A18693",variableType:-4}
 */
var _params = {	anno:0,
				mese:0,
				giorniSelGiorn:[],
				giorniSelTimbr:[],
				lastSelIndGiorn:0,
				lastSelIndTimbr:0,
				selectedTab:2,
				annoAttivo:0,
				meseAttivo:0
			  };

/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"47CE8417-F955-462F-9F01-2F7147E86439",variableType:-4}
 */
var _arrDsAnag = new Array();

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"CB9910F2-592D-46CF-BD83-317CB924AEE7",variableType:8}
 */
var _vNrBadge = null;

/**
 * @properties={typeid:35,uuid:"F102CE8F-63A3-4933-9ACF-B294A00F330C",variableType:-4}
 */
var companyId = null;

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param _form
 * @param {Boolean} [_soloCartolina]
 * 
 * @properties={typeid:24,uuid:"96FE3D5A-56A1-48C7-86C8-6E0E0BB25DE6"}
 * @AllowToRunInFind
 */
function onRecordSelection(event, _form,_soloCartolina)
{
	_super.onRecordSelection(event, _form);		
}

/**
 * Filtra i lavoratori che hanno avuto presenze e quindi una giornaliera 
 * nel periodo richiesto
 * 
 * @param {JSFoundset} _fs
 * 
 * @return {JSFoundset}
 *
 * @properties={typeid:24,uuid:"E3DD7633-0736-4032-B16A-9F0711CAF492"}
 */
function FiltraAnagraficaLavoratoriGiorn(_fs) 
{
	var filters = foundset.getFoundSetFilterParams();	
	for (var i = 0; i < filters.length; i++)
		_fs.addFoundSetFilterParam(filters[i][1], filters[i][2], filters[i][3], filters[i][4]);
		
	return _fs;
}

/** 
 * @param event
 *
 * @properties={typeid:24,uuid:"7AC353B9-724E-40EB-8443-A544FE5CF042"}
 */
function onHide(event)
{
	return _super.onHide(event)
}

/** 
 * @param _firstShow
 * @param _event
 * @param {Boolean} _soloCartolina
 * 
 * @properties={typeid:24,uuid:"6518DAF7-F670-487B-B831-F914A54F69D4"}
 */
function onShowForm(_firstShow, _event,_soloCartolina) {
	
	_super.onShowForm(_firstShow, _event);
	
	plugins.busy.prepare();
	
	if(!_soloCartolina)
	{
		if(lavoratori_to_ditte.tipologia == globals.Tipologia.ESTERNA)
		{
			elements.nominativo.visible = false;
			elements.nominativo_esterni.visible = true;
		}
		else
		{
		    elements.nominativo.visible = true;
	  	    elements.nominativo_esterni.visible = false;
		}
	}
}

/**
 * Passa all'ultimo dipendente e ne ricostruisce giornaliera, timbrature e voci
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0683CAF8-1BAF-43F2-8024-6F01E9710D11"}
 */
function vaiAllUltimoDip(event)
{
	dc_rec_last_browser(event);
}

/**
 * Passa al dipendente precedente e ne ricostruisce giornaliera, timbrature e voci
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"B7FC3FF0-F375-40EF-AA23-2CCCDDED2DDD"}
 */
function vaiAlDipPrec(event)
{
	dc_rec_prev_browser(event);
}

/**
 * Passa al primo dipendente e ne ricostruisce giornaliera, timbrature e voci
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"973FBD71-1CF1-4305-A0DE-60ADEE200B54"}
 */
function vaiAlPrimoDip(event) 
{
	dc_rec_first_browser(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"60BB29A8-9EFB-451C-B698-C95A17C21DEF"}
 */
function apriPopUpDitta(event) {
	
    globals.apriPopupAnaDitta(event,idditta);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EABE16F4-2493-4B37-9017-27FBED0ADA2F"}
 */
function apriPopUpLav(event) {
	
    globals.apriPopupAnaLav(event,idditta,idlavoratore,foundset);
}

/**
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"37084EE2-EEAA-470B-AFB9-A1B6B93E65DD"}
 */
function apriLkpElencoDipendenti(_event)
{
	var program;
	
	if(lavoratori_to_ditte.tipologia == 1)
    	program = 'AG_Lkp_LavoratoriEsterni';
	else
	    program = 'AG_Lkp_Lavoratori';
	
	globals.ma_utl_showLkpWindow({
		event : _event
		,lookup : program
		,methodToAddFoundsetFilter : 'FiltraAnagraficaLavoratoriGiorn'
		,methodToExecuteAfterSelection : (_event.getFormName() == 'comm_lav_header_dtl' ? 'CercaLavoratoreComm' : 'CercaLavoratoreGiorn')
		,allowInBrowse : true
	});
}
