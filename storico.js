/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"1541308F-1901-411D-ACFF-DB1A904C8A77"}
 */
function confermaCertificati(params, modificato)
{
	var url = globals.WS_MULTI_URL + '/Storico/ConfermaCertificati';
	if(params.sync)
	{
		var    response = globals.getWebServiceResponse(url + 'Sync', params);
		return response.returnValue;
	}
	else
		globals.addJsonWebServiceJob(url,
			                         params,
									 globals.vUpdateOperationStatusFunction);
        
    return true;
}

/**
 * 
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F03AF5BC-E5DF-49AC-8B9A-6ED34B98BEA3"}
 */
function compilaGiornaliera(params)
{
	var url = globals.WS_MULTI_URL + '/Storico/CompilaGiornalieraSync';
	var response = globals.getWebServiceResponse(url, params);

	return response;
}

/**
 * Recupera l'elenco dei giorni coperti da certificati (opzionalmente relativi ad una classe particolare)
 * 
 * @param {Number} idlavoratore
 * @param {Number} periodo
 * @param {Number} [eventoClasse]
 * 
 * @return {Array<{datainizio : Date, datafine : Date, codice : String, descrizione : String}>} 
 * 
 * @properties={typeid:24,uuid:"D2672317-AE68-49AB-A0D9-82A9F76D168D"}
 */
function GiorniCopertiDaCertificato(idlavoratore, periodo, eventoClasse)
{
	eventoClasse = eventoClasse || -1;
	
	var periodo_date = scopes.date.FromIntMonth(periodo);
	if(!periodo_date)
		throw new Error(globals.from_i18n('ma.err.dateformat', [periodo]));
	
	var firstDay     = scopes.date.FirstDayOfMonth(periodo_date);
	var lastDay      = scopes.date.LastDayOfMonth(periodo_date);

	var sqlQuery = "select distinct\
						  CASE WHEN boverlap.DataInizio is null OR RC.DataInizio < boverlap.DataInizio THEN RC.DataInizio ELSE boverlap.DataInizio END AS DataInizio\
						, CASE WHEN foverlap.DataFine   is null OR RC.DataFine   > foverlap.DataFine   THEN RC.DataFine   ELSE foverlap.DataFine   END AS DataFine\
						, EC.CodEvento\
						, EC.descrizioneClasseEvento\
					from\
						V_RiepilogoCertificati RC\
						outer apply\
						(\
							select DataInizio, DataFine\
							from   V_RiepilogoCertificati\
							where  DataInizio > RC.DataInizio AND DataInizio < RC.DataFine and idLavoratore = ?\
						) as foverlap\
						outer apply\
						(\
							select DataInizio, DataFine\
							from   V_RiepilogoCertificati\
							where  DataFine > RC.DataInizio AND DataFine < RC.DataFine and idLavoratore = ?\
						) as boverlap\
						left outer join E2EventiClassi EC\
							on EC.idEventoClasse = RC.idEventoClasse\
					where\
						RC.idLavoratore = ?\
						and\
						RC.DataInizio <= ? and RC.DataFine >= ?\
						and\
						(RC.idEventoClasse = ? or -1 = ?)\
					order by\
						DataInizio, DataFine;";
		
	var dataset = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, sqlQuery, [idlavoratore, idlavoratore, idlavoratore, lastDay, firstDay, eventoClasse, eventoClasse], -1);
	if(!dataset)
		throw new Error(globals.from_i18n('ma.err.query_error', [sqlQuery, globals.Server.MA_PRESENZE]));
	
	var result = [];
	for(var row = 1; row <= dataset.getMaxRowIndex(); row++)
		result.push({ datainizio: dataset.getValue(row, 1), datafine: dataset.getValue(row, 2), codice: dataset.getValue(row, 3), descrizione: dataset.getValue(row, 4) });

	return result;
}