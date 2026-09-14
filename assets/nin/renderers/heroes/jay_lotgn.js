extend("nin:jay_basic");
loadTextures({
    "layer1": "nin:jay/s2-lotgn",
    "layer2": "nin:jay/s2-lotgn",
    "mask": "nin:jay/ninjagojay_mask",
    "nunchuck": "nin:jay/nunchuck",
    "null": "nin:null",
    "spinjitzu": "nin:jay/spinjitzu_jay",
    "nunhand": "nin:jay/nunhand",
    "airjitzu":"nin:jay/airjitzujay",
});
function isGolden(entity) {
    return false;
}
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("jay/jay_lotgn_0", "jay/jay_lotgn_1", "jay/jay_lotgn_2", "jay/jay_lotgn_3");
}
function isBasic(entity) {
    return true;
}
