/**
 * @properties={type:12,typeid:36,uuid:"858EC6A7-D22C-4AC7-9A62-1B98EE67CFE6"}
 */
function riepilogo_oremin()
{
	if(iniziopausa && finepausa)
		return inizio_orario_oremin + '-' + inizio_pausa_oremin + ',' + fine_pausa_oremin + '-' + fine_orario_oremin;
	else
		return inizio_orario_oremin + '-' + fine_orario_oremin;
}

/**
 * @properties={type:8,typeid:36,uuid:"2AD9FC19-62E1-46E9-ADAA-F3EAF8C843BC"}
 */
function fineorario_number()
{
	return (fineorario / 100);
}

/**
 * @properties={type:8,typeid:36,uuid:"79F801BB-5DE4-4B83-A82F-0170B1E2EDE2"}
 */
function finepausa_number()
{
	return (finepausa / 100);
}

/**
 * @properties={type:8,typeid:36,uuid:"74000845-04CA-40AA-8E4A-EA0474BECFE2"}
 */
function inizioorario_number()
{
	return (inizioorario / 100);
}

/**
 * @properties={type:8,typeid:36,uuid:"216BB519-D0E1-4FE7-BFCC-8B0D6EBFB720"}
 */
function iniziopausa_number()
{
	return (iniziopausa / 100);
}

/**
 * @properties={type:8,typeid:36,uuid:"56DA84DB-D0B5-44E5-9698-E6DA2C4BC200"}
 */
function scalopausa_number()
{
	return 1;
}

/**
 * @properties={type:12,typeid:36,uuid:"124E0540-20B4-45D5-BCEE-47033FBDF2AE"}
 */
function inizio_orario_oremin()
{
	if(inizioorario == null)
		return null;
	var hh = Math.floor(inizioorario / 100);
	if(hh <= 9)
		return '0' + hh + '.' + utils.stringRight(inizioorario.toString(),2);
	else
		return hh + '.' + utils.stringRight(inizioorario.toString(),2);
}

/**
 * @properties={type:12,typeid:36,uuid:"6034F6D4-543F-4A84-AC3B-8606A7E36153"}
 */
function inizio_pausa_oremin()
{
	if(iniziopausa == null)
		return null;
	var hh = Math.floor(iniziopausa / 100);
	if(hh <= 9)
		return '0' + hh + '.' + utils.stringRight(iniziopausa.toString(),2);
	else
		return hh + '.' + utils.stringRight(iniziopausa.toString(),2);
}

/**
 * @properties={type:12,typeid:36,uuid:"0C40CAC0-15E7-41A9-8199-36A25B1B8DEF"}
 */
function fine_pausa_oremin()
{
	if(finepausa == null)
		return null;
	var hh = Math.floor(finepausa / 100);
	if(hh <= 9)
		return '0' + hh + '.' + utils.stringRight(finepausa.toString(),2);
	else
		return hh + '.' + utils.stringRight(finepausa.toString(),2);
}

/**
 * @properties={type:12,typeid:36,uuid:"970534AE-D263-45EA-A6BE-63705F6FA21A"}
 */
function fine_orario_oremin()
{
	if(fineorario == null)
		return null;
	var hh = Math.floor(fineorario / 100);
	if(hh <= 9)
		return '0' + hh + '.' + utils.stringRight(fineorario.toString(),2);
	else
		return hh + '.' + utils.stringRight(fineorario.toString(),2);
}

