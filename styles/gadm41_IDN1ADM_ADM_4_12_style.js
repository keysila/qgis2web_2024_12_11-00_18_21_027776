var size = 0;
var placement = 'point';

var style_gadm41_IDN1ADM_ADM_4_12 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "20.8px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("NAME_4") !== null && resolution > 0 && resolution < 28) {
        labelText = String(feature.get("NAME_4"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,17,111,0.5254901960784314)', lineDash: [19.759999999999998,9.879999999999999], lineCap: 'square', lineJoin: 'bevel', width: 4.9399999999999995}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
