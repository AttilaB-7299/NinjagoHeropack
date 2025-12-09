extend("nin:cole_basic");
loadTextures({
    "layer1": "nin:cole/s8-sog-cole",
    "layer2": "nin:cole/s8-sog-cole",
    "mask": "nin:null",
    "scythe": "nin:cole/scythe",
    "null": "nin:null",
    "spinjitzu": "nin:cole/spinjitzu_cole",
    // "airjitzu":"nin:cole/airjitzucole",
    "soq_back": "nin:cole/soq_texture"
});
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("cole/cole_sog_0", "cole/cole_sog_1", "cole/cole_sog_2", "cole/cole_sog_3");
}