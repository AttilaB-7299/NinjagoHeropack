extend("nin:kai_basic");
loadTextures({
    "layer1": "nin:kai/s2-lotgn",
    "layer2": "nin:kai/s2-lotgn",
    "mask": "nin:null",
    "sword": "nin:kai/sword",
    "null": "nin:null",
    "spinjitzu": "nin:kai/spinjitzu_kai",
    "airjitzu":"nin:kai/airjitzukai"
});
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("kai/kai_lotgn_0", "kai/kai_lotgn_1", "kai/kai_lotgn_2", "kai/kai_lotgn_3");
}
function isBasic(entity) {
    return true;
}
