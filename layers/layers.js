var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental'
            });var format_CedulacionyPorcentajeporDepartamento_1 = new ol.format.GeoJSON();
var features_CedulacionyPorcentajeporDepartamento_1 = format_CedulacionyPorcentajeporDepartamento_1.readFeatures(json_CedulacionyPorcentajeporDepartamento_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CedulacionyPorcentajeporDepartamento_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CedulacionyPorcentajeporDepartamento_1.addFeatures(features_CedulacionyPorcentajeporDepartamento_1);var lyr_CedulacionyPorcentajeporDepartamento_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CedulacionyPorcentajeporDepartamento_1, 
                style: style_CedulacionyPorcentajeporDepartamento_1,
    title: 'Cedulacion y Porcentaje por Departamento<br />\
    <img src="styles/legend/CedulacionyPorcentajeporDepartamento_1_0.png" />  0 - 700 <br />\
    <img src="styles/legend/CedulacionyPorcentajeporDepartamento_1_1.png" />  700 - 1500 <br />\
    <img src="styles/legend/CedulacionyPorcentajeporDepartamento_1_2.png" />  1500 - 2200 <br />\
    <img src="styles/legend/CedulacionyPorcentajeporDepartamento_1_3.png" />  2200 - 3000 <br />\
    <img src="styles/legend/CedulacionyPorcentajeporDepartamento_1_4.png" />  3000 - 3700 <br />'
        });var format_JuntaDirectivayComitesporDepartamentos_2 = new ol.format.GeoJSON();
var features_JuntaDirectivayComitesporDepartamentos_2 = format_JuntaDirectivayComitesporDepartamentos_2.readFeatures(json_JuntaDirectivayComitesporDepartamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JuntaDirectivayComitesporDepartamentos_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JuntaDirectivayComitesporDepartamentos_2.addFeatures(features_JuntaDirectivayComitesporDepartamentos_2);var lyr_JuntaDirectivayComitesporDepartamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JuntaDirectivayComitesporDepartamentos_2, 
                style: style_JuntaDirectivayComitesporDepartamentos_2,
    title: 'Junta Directiva y Comites por Departamentos <br />\
    <img src="styles/legend/JuntaDirectivayComitesporDepartamentos_2_0.png" />  3 - 7 <br />\
    <img src="styles/legend/JuntaDirectivayComitesporDepartamentos_2_1.png" />  7 - 11 <br />\
    <img src="styles/legend/JuntaDirectivayComitesporDepartamentos_2_2.png" />  11 - 15 <br />\
    <img src="styles/legend/JuntaDirectivayComitesporDepartamentos_2_3.png" />  15 - 19 <br />\
    <img src="styles/legend/JuntaDirectivayComitesporDepartamentos_2_4.png" />  19 - 23 <br />'
        });var format_CeduladosporMUNICIPIO_3 = new ol.format.GeoJSON();
var features_CeduladosporMUNICIPIO_3 = format_CeduladosporMUNICIPIO_3.readFeatures(json_CeduladosporMUNICIPIO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CeduladosporMUNICIPIO_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CeduladosporMUNICIPIO_3.addFeatures(features_CeduladosporMUNICIPIO_3);var lyr_CeduladosporMUNICIPIO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CeduladosporMUNICIPIO_3, 
                style: style_CeduladosporMUNICIPIO_3,
    title: 'Cedulados por MUNICIPIO<br />\
    <img src="styles/legend/CeduladosporMUNICIPIO_3_0.png" />  1.0 - 42.8 <br />\
    <img src="styles/legend/CeduladosporMUNICIPIO_3_1.png" />  42.8 - 84.6 <br />\
    <img src="styles/legend/CeduladosporMUNICIPIO_3_2.png" />  84.6 - 126.4 <br />\
    <img src="styles/legend/CeduladosporMUNICIPIO_3_3.png" />  126.4 - 168.2 <br />\
    <img src="styles/legend/CeduladosporMUNICIPIO_3_4.png" />  168.2 - 210.0 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_CedulacionyPorcentajeporDepartamento_1.setVisible(true);lyr_JuntaDirectivayComitesporDepartamentos_2.setVisible(true);lyr_CeduladosporMUNICIPIO_3.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_CedulacionyPorcentajeporDepartamento_1,lyr_JuntaDirectivayComitesporDepartamentos_2,lyr_CeduladosporMUNICIPIO_3];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_CedulacionyPorcentajeporDepartamento_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'No Cedulad': 'No Cedulad', '%': '%', });
lyr_JuntaDirectivayComitesporDepartamentos_2.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'No Cedulad': 'No Cedulad', 'Presidente': 'Presidente', 'Vicepresid': 'Vicepresid', 'No_Comites': 'No_Comites', });
lyr_CeduladosporMUNICIPIO_3.set('fieldAliases', {'Id': 'Id', 'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'No_Cedulad': 'No_Cedulad', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_CedulacionyPorcentajeporDepartamento_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'No Cedulad': 'TextEdit', '%': 'TextEdit', });
lyr_JuntaDirectivayComitesporDepartamentos_2.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'No Cedulad': 'TextEdit', 'Presidente': 'TextEdit', 'Vicepresid': 'TextEdit', 'No_Comites': 'TextEdit', });
lyr_CeduladosporMUNICIPIO_3.set('fieldImages', {'Id': 'TextEdit', 'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'No_Cedulad': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_CedulacionyPorcentajeporDepartamento_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'No Cedulad': 'inline label', '%': 'inline label', });
lyr_JuntaDirectivayComitesporDepartamentos_2.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'No Cedulad': 'inline label', 'Presidente': 'inline label', 'Vicepresid': 'inline label', 'No_Comites': 'inline label', });
lyr_CeduladosporMUNICIPIO_3.set('fieldLabels', {'Id': 'no label', 'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'No_Cedulad': 'inline label', });
lyr_CeduladosporMUNICIPIO_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});