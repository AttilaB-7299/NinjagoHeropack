extend("nin:jay_basic");
loadTextures({
    "layer1": "nin:jay/s3-rebooted-jay",
    "layer2": "nin:jay/s3-rebooted-jay",
    "mask": "nin:jay/ninjagojay_mask",
    "nunchuck": "nin:jay/nunchuck",
    "null": "nin:null",
    "spinjitzu": "nin:jay/spinjitzu_jay",
    "nunhand": "nin:jay/nunhand",
    "airjitzu":"nin:jay/airjitzujay",
    "technoblade": "nin:jay/technoblade-jay-off"
});
function isGolden(entity) {
    return false;
}
function hasDefault(entity){
    return false;
}
function hasTechnoblade(entity){
    return true;
}
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("jay/jay_rebooted_0", "jay/jay_rebooted_1", "jay/jay_rebooted_2", "jay/jay_rebooted_3");
}
