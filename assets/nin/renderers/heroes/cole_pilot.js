extend("nin:cole_zx");
loadTextures({
    "layer1": "nin:cole/pilot",
    "layer2": "nin:cole/pilot",
    "mask": "nin:null",
    "scythe": "nin:cole/scythe",
    "null": "nin:null",
    "spinjitzu": "nin:cole/spinjitzu_cole",
    "airjitzu": "nin:cole/airjitzucole",
    "spikes": "nin:cole/dirttexture",
    "soq_back": "nin:cole/soq_texture",
    "arms": "nin:cole/cole_arms",
});
function isGolden(entity) {
    return true;
}
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("cole/cole_pilot_0", "cole/cole_pilot_1", "cole/cole_pilot_2", "cole/cole_pilot_3");
}