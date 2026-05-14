extend("nin:kai_basic");
loadTextures({
    "layer1": "nin:kai/pilot",
    "layer2": "nin:kai/pilot",
    "mask": "nin:null",
    "sword": "nin:kai/sword",
    "null": "nin:null",
    "spinjitzu": "nin:kai/spinjitzu_kai",
    "airjitzu":"nin:kai/airjitzukai"
});
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("kai/kai_pilot_0", "kai/kai_pilot_1", "kai/pilot_2", "kai/pilot_3");
}
function isBasic(entity) {
    return false;
}
