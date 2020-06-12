$(document).ready(function () {
    var pluginOpts = {
        "designsJSON": '',
        "langJSON": 'lang/default.json',
        "editorMode": false,
        "smartGuides": true,
        "elementParameters": {
            "boundingBoxMode": 'clipping',
            "boundingBox": false,
            "autoCenter": true,
            "colorLinkgroup": true,
            "originX": 'center',
            "originY": 'center'
        },
        "boundingBoxProps": {
            "strokeWidth": 1
        },
        "imageParameters": {
            "padding": 0,
            "colorPrices": {},
            "replaceInAllViews": 0,
            "patterns": []
        },
        "textParameters": {
            "padding": 10,
            "fontFamily": "Arial",
            "colorPrices": {},
            "replaceInAllViews": 0,
            "patterns": []
        },    
        "facebookAppId": "",
        "instagramClientId": "",
        "zoomStep": 0.2,
        "maxZoom": 3,
        "hexNames": {},
        "replaceInitialElements": 1,
        "lazyLoad": 1,
        "improvedResizeQuality": 0,
        "uploadZonesTopped": 1,
        "responsive": 1,
        "priceFormat": {
            "currency": "%d&#8363;",
        },
        "templatesType": ['html'],
        "watermark": "",
        "loadFirstProductInStage": 1,
        "unsavedProductAlert": 1,
        "hideDialogOnAdd": 1,
        "snapGridSize": [50, 50],
        "fitImagesInCanvas": 1,
        "inCanvasTextEditing": 1,
        "openTextInputOnSelect": 0,
        "saveActionBrowserStorage": 0,
        "uploadAgreementModal": 0,
        "autoOpenInfo": 0,
        "allowedImageTypes": ["jpeg", "png", "svg"],
        "replaceColorsInColorGroup": 0,
        "pixabayApiKey": "",
        "pixabayHighResImages": true,
        "openModalInDesigner": 0,
        "imageSizeTooltip": 0,
        "applyFillWhenReplacing": 0,
        "highlightEditableObjects": "",
        "depositphotosApiKey": "",
        "depositphotosPrice": 0,
        "depositphotosLang": "en",
        "mainBarContainer": false,
        "layouts": ['Slide Bar Left'],
        "stageWidth": 900,
        "stageHeight": 847,
        "customTextParameters": {
            "left": 0,
            "y": 0,
            "z": -1,
            "fill": "#ffffff",
            "colors": "#000000",
            "price": 0,
            "replaceInAllViews": false,
            "autoCenter": true,
            "draggable": true,
            "rotatable": true,
            "resizable": true,
            "zChangeable": false,
            "autoSelect": true,
            "topped": false,
            "curvable": false,
            "curveSpacing": 10,
            "curveRadius": 80,
            "curveReverse": false,
            "boundingBoxMode": "clipping",
            "fontSize": 30,
            "minFontSize": 1,
            "maxFontSize": 1000,
            "maxLength": 0,
            "maxLines": 0,
            "textAlign": "left",
            "removable": true,
            "boundingBox": "upload"
        },
        "customImageParameters": {
            "left": 0,
            "y": 0,
            "z": -1,
            "minScaleLimit": "0.0100",
            "price": 0,
            "replaceInAllViews": false,
            "autoCenter": true,
            "draggable": true,
            "rotatable": true,
            "resizable": true,
            "zChangeable": false,
            "autoSelect": true,
            "topped": false,
            "uniScalingUnlockable": false,
            "boundingBoxMode": "clipping",
            "removable": true,
            "boundingBox": "upload",
            "minW": 1,
            "minH": 1,
            "maxW": 200000,
            "maxH": 200000,
            "resizeToW": 0,
            "resizeToH": 0,
            "maxSize": 30000,
            "minDPI": 1,
            "minScaleLimit": "0.0100",
            "advancedEditing": false,
            "filter": "none"
        },
        "gridColumns": "2",
        "initialActiveModule": "",
        "selectedColor": "#0070c9",
        "boundingBoxColor": "#ffffff",
        "outOfBoundaryColor": "#9e0000",
        "cornerIconColor": "#ffffff",
        "mainBarModules": ["images", "text", "products"],
        "mainBar": ["images", "text",],
        "actions": {
            "top": [],
            "right": [],
            "bottom": [],
            "left": ["undo", "redo", "reset-product"]
        },
        "toolbarPlacement": "smart",
        "toolbarTheme": "dark",
        "customImageAjaxSettings": {
            "url": '/FancyProduct/upload.php',
            "data": {
                "saveOnServer": 1
            }
        },
    };

    $selector = $('#myDesign');
    fancyProductDesigner = new FancyProductDesigner($selector, pluginOpts);
    $selector.on('ready', function () {
        fancyProductDesigner.setupProducts(fpdProductsJSON);
    });

    $(`#okconde`).on(`click`, () => {
        fancyProductDesigner.getProductDataURL(function (dataURL) {
            $(`#daylaconde`).attr(`src`, dataURL);
        }, `transparent`);
    })
});