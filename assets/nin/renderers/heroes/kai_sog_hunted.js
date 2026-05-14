extend("nin:kai_sog");
loadTextures({
    "layer1": "nin:kai/s9-hunted-kai",
    "layer2": "nin:kai/s9-hunted-kai",
    "mask": "nin:null",
    "sword": "nin:kai/sword",
    "null": "nin:null",
    "spinjitzu": "nin:kai/spinjitzu_kai",
    "sof": "nin:katana",
});
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("kai/kai_hunted_0", "kai/kai_hunted_1", "kai/kai_hunted_2", "kai/kai_hunted_3");
}
function isBasic(entity) {
    return true;
}
