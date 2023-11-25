var wms_layers = [];


        var lyr_EsriGraylight_0 = new ol.layer.Tile({
            'title': 'Esri Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Cilandak_1 = new ol.format.GeoJSON();
var features_Cilandak_1 = format_Cilandak_1.readFeatures(json_Cilandak_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cilandak_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cilandak_1.addFeatures(features_Cilandak_1);
var lyr_Cilandak_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cilandak_1, 
                style: style_Cilandak_1,
                interactive: false,
    title: 'Cilandak<br />\
    <img src="styles/legend/Cilandak_1_0.png" /> Cilandak Barat<br />\
    <img src="styles/legend/Cilandak_1_1.png" /> Cipete Selatan<br />\
    <img src="styles/legend/Cilandak_1_2.png" /> Gandaria Selatan<br />\
    <img src="styles/legend/Cilandak_1_3.png" /> Lebakbulus<br />\
    <img src="styles/legend/Cilandak_1_4.png" /> Pondoklabu<br />'
        });
var format_CilandakJalan_2 = new ol.format.GeoJSON();
var features_CilandakJalan_2 = format_CilandakJalan_2.readFeatures(json_CilandakJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CilandakJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CilandakJalan_2.addFeatures(features_CilandakJalan_2);
var lyr_CilandakJalan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CilandakJalan_2, 
                style: style_CilandakJalan_2,
                interactive: false,
    title: 'Cilandak Jalan<br />\
    <img src="styles/legend/CilandakJalan_2_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/CilandakJalan_2_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/CilandakJalan_2_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/CilandakJalan_2_3.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />\
    <img src="styles/legend/CilandakJalan_2_4.png" /> Jalan Tol Dua Jalur Tanpa Pemisah Fisik<br />'
        });
var format_Restoran24Jam_3 = new ol.format.GeoJSON();
var features_Restoran24Jam_3 = format_Restoran24Jam_3.readFeatures(json_Restoran24Jam_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restoran24Jam_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restoran24Jam_3.addFeatures(features_Restoran24Jam_3);cluster_Restoran24Jam_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Restoran24Jam_3
});
var lyr_Restoran24Jam_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Restoran24Jam_3, 
                style: style_Restoran24Jam_3,
                interactive: true,
                title: '<img src="styles/legend/Restoran24Jam_3.png" /> Restoran 24 Jam'
            });

lyr_EsriGraylight_0.setVisible(true);lyr_Cilandak_1.setVisible(true);lyr_CilandakJalan_2.setVisible(true);lyr_Restoran24Jam_3.setVisible(true);
var layersList = [lyr_EsriGraylight_0,lyr_Cilandak_1,lyr_CilandakJalan_2,lyr_Restoran24Jam_3];
lyr_Cilandak_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CilandakJalan_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_Restoran24Jam_3.set('fieldAliases', {'Nama': 'Nama', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Alamat': 'Alamat', 'No Telp': 'No Telp', 'Jumlah Rev': 'Jumlah Rev', 'Rating': 'Rating', 'Dine In': 'Dine In', 'Delivery': 'Delivery', 'Take Away': 'Take Away', 'Drive Thru': 'Drive Thru', });
lyr_Cilandak_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_CilandakJalan_2.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'osm_id': 'TextEdit', 'class': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'address': 'TextEdit', 'extratags': 'TextEdit', });
lyr_Restoran24Jam_3.set('fieldImages', {'Nama': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Alamat': 'TextEdit', 'No Telp': 'TextEdit', 'Jumlah Rev': 'TextEdit', 'Rating': 'TextEdit', 'Dine In': 'TextEdit', 'Delivery': 'TextEdit', 'Take Away': 'TextEdit', 'Drive Thru': 'TextEdit', });
lyr_Cilandak_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_CilandakJalan_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'inline label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'inline label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_Restoran24Jam_3.set('fieldLabels', {'Nama': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Alamat': 'inline label', 'No Telp': 'inline label', 'Jumlah Rev': 'inline label', 'Rating': 'inline label', 'Dine In': 'inline label', 'Delivery': 'inline label', 'Take Away': 'inline label', 'Drive Thru': 'inline label', });
lyr_Restoran24Jam_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});