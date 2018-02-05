dataSource:"db:/ma_anagrafiche/lavoratori",
extendsID:"E1B6951E-8C22-4464-9B19-707548D2B2DE",
items:[
{
formIndex:13,
labelFor:"fld_anno",
location:"501,282",
mediaOptions:14,
name:"lbl_anno",
size:"40,20",
text:"Anno",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_tab_dati.label_1073742125.toolTipText",
transparent:true,
typeid:7,
uuid:"08D29AF7-662E-4E6B-9BA6-72FA74E79805",
visible:false
},
{
anchors:6,
imageMediaID:"50A78C6F-AD31-4B43-A999-25CD232D2EC6",
location:"525,160",
mediaOptions:2,
mnemonic:"",
name:"btn_annullaselgiorn",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"30,30",
styleClass:"btn_cancel_40",
tabSeq:7,
transparent:true,
typeid:7,
uuid:"18905CB9-62AA-403D-89FC-75B9D4AFDE2C"
},
{
formIndex:17,
labelFor:"fld_cod_gr_lav",
location:"10,110",
mediaOptions:14,
name:"lbl_cod_gr_lav",
size:"110,20",
text:"Gruppo di lavoratori",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_tab_dati.label_1073742125.toolTipText",
transparent:true,
typeid:7,
uuid:"1DB37253-21CA-4D11-A86E-AF625044EAD4"
},
{
height:195,
partType:5,
typeid:19,
uuid:"22186773-3F13-4737-8938-3938B6A1716A"
},
{
dataProviderID:"_descgrlav",
editable:false,
enabled:false,
formIndex:4,
location:"76,130",
name:"fld_gr_lav",
size:"309,20",
tabSeq:-2,
typeid:4,
uuid:"56E6B51D-A16E-4944-9D98-C9AB44C07614"
},
{
formIndex:18,
labelFor:"fld_mese",
location:"405,10",
name:"lbl_periodo_presenze",
size:"144,20",
text:"Periodo presenze",
transparent:true,
typeid:7,
uuid:"5BBCD8E8-56C9-4483-84C7-BA0C68602AB0"
},
{
formIndex:15,
labelFor:"fld_cod_ditta",
location:"10,10",
mediaOptions:14,
name:"lbl_codice",
size:"45,20",
text:"Codice",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_tab_dati.label_1073742125.toolTipText",
transparent:true,
typeid:7,
uuid:"5CB437A3-44BB-4209-83B5-F50C2412DCCF"
},
{
dataProviderID:"_annoCed",
displayType:10,
editable:false,
enabled:false,
formIndex:10,
format:"####",
location:"497,80",
name:"fld_anno_ced",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
size:"53,20",
typeid:4,
uuid:"5CEFCD69-295B-4F7F-B6F4-6290CEE12742",
valuelistID:"72FFB8D9-5B17-4622-9470-5A3AD7C82F8A"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'_codgrlav'\",\
\"'LEAF_Lkp_Gruppigestione'\",\
\"'AggiornaGruppiLavoratori'\",\
\"'FiltraGruppiLavoratori'\",\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:2,
horizontalAlignment:0,
location:"56,130",
mediaOptions:2,
name:"btn_selgruppolav",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"68BE43BE-D6DC-4055-A71E-E6D9766E940F",
verticalAlignment:0
},
{
dataProviderID:"_meseCed",
displayType:10,
editable:false,
enabled:false,
formIndex:11,
location:"405,80",
name:"fld_mese_ced",
onActionMethodID:"-1",
onDataChangeMethodID:"-1",
size:"81,20",
typeid:4,
uuid:"6C69D62A-E370-432E-8E4B-E64557CDF182",
valuelistID:"089DE2F1-65F4-4CEE-8A51-610E033D20DB"
},
{
dataProviderID:"_descgruppoinst",
editable:false,
enabled:false,
formIndex:8,
location:"76,80",
name:"fld_gruppo_inst",
size:"309,20",
tabSeq:-2,
typeid:4,
uuid:"8907A39F-0E4E-4D36-93C2-F854FB28F75B"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'_idgruppoinst'\",\
\"'LEAF_Lkp_GruppoInst'\",\
\"'AggiornaSediInstallazione'\",\
\"'FiltraSediInstallazione'\",\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
enabled:false,
formIndex:3,
horizontalAlignment:0,
location:"56,80",
mediaOptions:2,
name:"btn_selgruppoinst",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"92A47017-4F9B-4340-8182-7BF9BA727AFD",
verticalAlignment:0
},
{
formIndex:12,
labelFor:"fld_cod_gr_inst",
location:"10,60",
mediaOptions:14,
name:"lbl_cod_gr_inst",
size:"170,20",
text:"Gruppo di installazione",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_tab_dati.label_1073742125.toolTipText",
transparent:true,
typeid:7,
uuid:"97395FA3-E133-415E-AAED-F519F5A2280D"
},
{
dataProviderID:"_idgruppoinst",
editable:false,
enabled:false,
formIndex:9,
horizontalAlignment:0,
location:"10,80",
name:"fld_cod_gr_inst",
onActionMethodID:"-1",
onDataChangeMethodID:"ADDEF498-DCBD-4B21-B162-2EF7B24BE272",
size:"45,20",
tabSeq:4,
typeid:4,
uuid:"A17F8A8E-6BFF-4E87-AB04-668D02E78F91"
},
{
formIndex:16,
labelFor:"fld_mese",
location:"410,282",
mediaOptions:14,
name:"lbl_mese",
size:"60,20",
text:"Mese",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_tab_dati.label_1073742125.toolTipText",
transparent:true,
typeid:7,
uuid:"B17FF11A-4812-42F4-9A66-6D7EA8259A00",
visible:false
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'_idditta'\",\
\"'LEAF_Lkp_Ditte'\",\
\"'AggiornaSelezioneDitta'\",\
\"'filterDitta'\",\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
formIndex:7,
horizontalAlignment:0,
location:"55,30",
mediaOptions:2,
name:"btn_selditta",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"B93336E5-9339-4267-BD1C-86C0B430FF3B",
verticalAlignment:0
},
{
anchors:6,
location:"495,160",
mediaOptions:2,
name:"btn_confermaselgiorn",
onActionMethodID:"-1",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"30,30",
styleClass:"btn_confirm_40",
tabSeq:6,
transparent:true,
typeid:7,
uuid:"B9EA6F22-A4C4-4A98-93FD-56EB2C067DFA"
},
{
dataProviderID:"_anno",
displayType:10,
formIndex:10,
format:"####",
location:"497,30",
name:"fld_anno",
onActionMethodID:"-1",
onDataChangeMethodID:"7524B1E9-3CE7-4877-BCA3-868B168F33CC",
size:"53,20",
tabSeq:3,
typeid:4,
uuid:"BA0965EC-874C-4CD0-8183-2BC728B88698",
valuelistID:"72FFB8D9-5B17-4622-9470-5A3AD7C82F8A"
},
{
dataProviderID:"_mese",
displayType:10,
formIndex:11,
location:"405,30",
name:"fld_mese",
onActionMethodID:"-1",
onDataChangeMethodID:"EEF01E32-E74A-484B-8215-1DEB09CE93C1",
size:"81,20",
tabSeq:2,
typeid:4,
uuid:"BEF2F740-98DB-4BB4-BBF6-4F9015872438",
valuelistID:"089DE2F1-65F4-4CEE-8A51-610E033D20DB"
},
{
formIndex:18,
labelFor:"fld_mese",
location:"405,60",
name:"lbl_periodo_cedolino",
size:"144,20",
text:"Periodo cedolino",
transparent:true,
typeid:7,
uuid:"D4F513EC-0D34-40A6-9532-42B18E528191"
},
{
dataProviderID:"_codgrlav",
editable:false,
enabled:false,
formIndex:1,
horizontalAlignment:0,
location:"11,130",
name:"fld_cod_gr_lav",
onActionMethodID:"-1",
onDataChangeMethodID:"1A5369EC-C55B-46AA-B839-5FD8D68954F9",
size:"45,20",
tabSeq:5,
typeid:4,
uuid:"E5D06CC3-B8A5-4DF3-A0AC-ED5502D37EF9"
},
{
formIndex:14,
labelFor:"fld_ragionesociale",
location:"76,10",
mediaOptions:14,
name:"lbl_ragione_sociale",
size:"100,20",
text:"Ragione sociale",
toolTipText:"i18n:sampleuse_navigation.anagrafica_ditta_tab_dati.label_1073742125.toolTipText",
transparent:true,
typeid:7,
uuid:"F529E3AC-1631-4E2D-AE43-FB1E939E9196"
},
{
dataProviderID:"_codditta",
formIndex:5,
horizontalAlignment:0,
location:"10,30",
margin:"0,1,0,1",
name:"fld_cod_ditta",
onActionMethodID:"-1",
onDataChangeMethodID:"78692620-292B-47F7-99BC-79E2A2EFF14D",
onFocusGainedMethodID:"-1",
selectOnEnter:true,
size:"45,20",
tabSeq:1,
text:"Cod Ditta",
typeid:4,
uuid:"F6E35B2A-C6AB-419A-BBD2-97D0539CA2E0"
},
{
dataProviderID:"_ragionesociale",
editable:false,
formIndex:6,
location:"75,30",
name:"fld_ragionesociale",
size:"310,20",
tabSeq:-2,
text:"Ragionesociale",
typeid:4,
uuid:"FBAF80FD-9B2A-4805-A627-7727704E9E29"
}
],
name:"ew_selezione",
namedFoundSet:"separate",
navigatorID:"-1",
onHideMethodID:"64731208-426B-47F7-914C-5BDC3A7D373A",
scrollbars:36,
showInMenu:true,
size:"560,145",
styleName:"leaf_style",
typeid:3,
uuid:"9E0996E1-CA3C-450A-BE9D-2F05401021A5"