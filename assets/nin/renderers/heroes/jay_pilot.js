extend("nin:jay_basic");
loadTextures({
    "layer1": "nin:jay/pilot",
    "layer2": "nin:jay/pilot",
    "mask": "nin:jay/ninjagojay_mask",
    "nunchuck": "nin:jay/nunchuck",
    "null": "nin:null",
    "spinjitzu": "nin:jay/spinjitzu_jay",
    "nunhand": "nin:jay/nunhand",
    "airjitzu":"nin:jay/airjitzujay",
});
function isGolden(entity) {
    return true;
}
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("jay/jay_pilot_0", "jay/jay_pilot_1", "jay/jay_pilot_2", "jay/jay_pilot_3");
}