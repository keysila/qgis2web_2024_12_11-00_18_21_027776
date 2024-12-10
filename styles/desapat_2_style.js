var size = 0;
var placement = 'point';
function categories_desapat_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'RW 01':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(107,148,220,0.19607843137254902)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 02':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(215,39,174,0.10588235294117647)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 03':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,18,92,0.14901960784313725)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 04':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(121,200,123,0.1803921568627451)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 05':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(188,74,211,0.10588235294117647)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 06':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,194,71,0.16862745098039217)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 07':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,74,68,0.08235294117647059)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 08':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(27,205,175,0.08235294117647059)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 09':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(212,98,16,0.07450980392156863)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 10':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(14,202,96,0.12549019607843137)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 11':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(103,239,24,0.12549019607843137)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 12':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(72,195,233,0.1803921568627451)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 13':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(33,27,206,0.08235294117647059)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'RW 14':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(183,219,63,0.10980392156862745)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(133,59,229,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.6479999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_desapat_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("RW");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("RW") !== null && resolution > 0 && resolution < 2) {
        labelText = String(feature.get("RW"));
    }
    
var style = categories_desapat_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
