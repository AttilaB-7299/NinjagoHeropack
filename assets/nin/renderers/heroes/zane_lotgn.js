extend("nin:zane_basic");
loadTextures({
    "layer1": "nin:zane/s2-lotgn",
    "layer2": "nin:zane/s2-lotgn",
    "mask": "nin:zane/ninjagozane_mask",
    "shuriken": "nin:zane/shuriken",
    "null": "nin:null",
    "spinjitzu": "nin:zane/spinjitzu_zane",
    "st": "nin:zane/st",
    "airjitzu":"nin:zane/airjitzuzane"
});
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("zane/zane_lotgn_0", "zane/zane_lotgn_1", "zane/zane_lotgn_2", "zane/zane_lotgn_3");
}
function isBasic(entity) {
    return true;
}
