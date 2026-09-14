extend("nin:cole_basic");
loadTextures({
    "layer1": "nin:cole/s2-lotgn",
    "layer2": "nin:cole/s2-lotgn",
    "mask": "nin:null",
    "scythe": "nin:cole/scythe",
    "null": "nin:null",
    "spinjitzu": "nin:cole/spinjitzu_cole",
    "airjitzu": "nin:cole/airjitzucole",
    "spikes": "nin:cole/dirttexture",
    "soq_back": "nin:cole/soq_texture",
    "arms": "nin:cole/cole_arms",
});
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("cole/cole_lotgn_0", "cole/cole_lotgn_1", "cole/cole_lotgn_2", "cole/cole_lotgn_3");
}
function isBasic(entity) {
    return true;
}
