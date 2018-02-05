/**
 * Enumera le tipologie disponibili per l'importazione di dati tramite live update.
 * 
 * @properties={typeid:35,uuid:"CCB5F87D-4300-45EB-96E4-D49F71235149",variableType:-4}
 */
var Dati = 
{
	/**
	 * Tabelle generali, ad esempio banche, comuni, etc.
	 */
	GENERALI: 0,
	/**
	 * Tabelle ditta
	 */
	DITTA: 1,
	/**
	 * Tabelle lavoratori
	 */
	LAVORATORI: 2,
	/**
	 * Giornaliere
	 */
	GIORNALIERA: 3,
	/**
	 * Pannello Variazioni
	 */
	VARIAZIONI: 4
}

/**
 * @properties={typeid:24,uuid:"1BF106FE-F3F4-470B-B834-4489B561210F"}
 */
function InizializzaParametri(idditta, iddipendenti, periodo, idgruppoinstallazione, gruppolavoratori)
{
	return {
				idditta : idditta,
				iddipendenti : iddipendenti,
				periodo : periodo,
				idgruppoinstallazione : idgruppoinstallazione,
				codgruppogestione : gruppolavoratori
		   };
}

