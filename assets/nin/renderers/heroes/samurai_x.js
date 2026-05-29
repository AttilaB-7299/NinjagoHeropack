extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "nin:samx/pixalskin",
    "layer2": "nin:samx/pixalskin",
    "mask": "nin:null",
    "mech": "nin:samx/samurai_remapped_v5",
    "pixal": "nin:samx/pixalskin",
    "blue_glass": "nin:samx/blue_glass",
    "null": "nin:null",
    "cubes": "nin:samx/spincubes"
});
var pixal;
var mech;
var overlay;
var utils = implement("fiskheroes:external/utils");
function invis(entity) {
    return entity.exists();
}
function invis2(entity) {
    return (entity.getData("fiskheroes:beam_charging"));
}
function dragonflying(entity) {
    return entity.getData("nin:dyn/dragon_timer") == 1 && entity.getData("fiskheroes:flying");
}
function dragon(entity) {
    return entity.getData("nin:dyn/dragon_timer") == 1 && !entity.getData("fiskheroes:flying");
}
function init(renderer) {
    parent.init(renderer);
    renderer.setItemIcons("samx/wu_0", "samx/wu_1", "samx/wu_2", "samx/wu_3");
    renderer.setTexture((entity, renderLayer) => {
        if (invis(entity)) {
            return "null";
        }
        return "layer1";
    });
    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.fixHatLayer("HELMET", "CHESTPLATE");
}

function initEffects(renderer) {

    var pixalModel = utils.createModel(renderer,"nin:pixalmodel", "pixal");

//blueglass
    blueglass = renderer.createEffect("fiskheroes:model");
    blueglass.setModel(utils.createModel(renderer, "nin:blueglass", "blue_glass"));
    blueglass.setOffset(0.0, -18.0, 10.0);
    blueglass.setRotation(0.0, 0.0, 0.0)
    blueglass.anchor.set("head");
    blueglass.opacity = 0.1;

    pixal = renderer.createEffect("fiskheroes:model").setModel(pixalModel);
    pixal.setOffset(0.0, 0.0, 0.0);
    pixal.setRotation(0.0, 0.0, 0.0)
    pixal.anchor.set("body");
    pixal.setScale(.25);
    pixal.mirror = false

    var samxbodymodel = utils.createModel(renderer,"nin:samuraix", "mech");
    samxbodymodel.bindAnimation("nin:samxhit").setData((entity, data) => data.load(entity.getPunchTimerInterpolated()));
    samxbodymodel.bindAnimation("nin:samxblock").setData((entity, data) => data.load(entity.getData("fiskheroes:shield_blocking")));
    samxbodymodel.bindAnimation("nin:samxlower").setData((entity, data) => data.load(entity.isSneaking()));
    samxbodymodel.bindAnimation("nin:samxwalk").setData((entity, data) => {
        data.load(0, entity.getData("fiskheroes:moving"));
        data.load(1, !entity.isSprinting());
    });
    samxbodymodel.bindAnimation("nin:samx_run").setData((entity, data) => {
        data.load(0, entity.getData("fiskheroes:moving"));
        data.load(1, entity.isSprinting());
    });

    samxsuit = renderer.createEffect("fiskheroes:model").setModel(samxbodymodel);
    samxsuit.setOffset(0.0, 1.75, 0.0);
    samxsuit.setRotation(0.0, 180.0, 0.0)
    samxsuit.anchor.set("body");
    // samxsuit.setScale(0.4)
    samxsuit.mirror = false

    utils.bindBeam(renderer, "fiskheroes:energy_projection", "nin:invisible", "rightArm", 0xdb472b, [{
                "firstPerson": [-4.5, 3.75, -8.0],
                "offset": [-0.5, 9.0, 0.0],
                "size": [2.0, 2.0]
            }
        ]);

    utils.bindBeam(renderer, "fiskheroes:charged_beam", "fiskheroes:charged_beam", "body", 0xFFE942, [
        { "firstPerson": [0.0, 30.0, 0.0], "offset": [0.0, -5.0, -54.0], "size": [3.0, 3.0] }
    ]).setCondition(entity => dragon(entity));

    utils.bindBeam(renderer, "fiskheroes:charged_beam", "fiskheroes:charged_beam", "body", 0xFFE942, [
        { "firstPerson": [0.0, 30.0, 0.0], "offset": [-5.0, 11.0, -54.0], "size": [3.0, 3.0] }
    ]).setCondition(entity => entity.getData("fiskheroes:flying"));

    utils.bindBeam(renderer, "fiskheroes:energy_manipulation", "fiskheroes:energy_discharge", "rightArm", 0xFFE942, [{
                "firstPerson": [-2.5, 0.0, -7.0],
                "offset": [-0.5, 19.0, -12.0],
                "size": [1.5, 1.5]
            }

        ]);
    var night_vision = renderer.bindProperty("fiskheroes:night_vision");
    night_vision.factor = 1;
    renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
        return invis(entity) ? 0.9 : 1;
    });

}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
}
function render(entity, renderLayer, isFirstPersonArm) {

    if (isFirstPersonArm){
            samxsuit.anchor.ignoreAnchor(true);
            blueglass.anchor.ignoreAnchor(true);
            blueglass.render();
            if (!entity.isSneaking()){
                samxsuit.setOffset(0, 5.25, 7)
            }
            if (entity.isSneaking()){
                // samxsuit.setOffset(0, 3.0, 5)
                samxsuit.setOffset(0, 0.0, 6)
            }
            samxsuit.render();
    }
    if (!isFirstPersonArm){
        if (!entity.isSneaking()){
            pixal.anchor.ignoreAnchor(false);
            samxsuit.anchor.ignoreAnchor(false);
            samxsuit.setOffset(0, 1.75, 0)
        }
        if (entity.isSneaking()){
            samxsuit.anchor.ignoreAnchor(true);
            pixal.anchor.ignoreAnchor(true);
            pixal.setOffset(0, 3.25, 0)
            samxsuit.setOffset(0, 0.25, 0)
        }
        pixal.render();
        samxsuit.render();
    }
        // if (entity.isWearingFullSuit() && !entity.isSneaking()) {
        //     samxsuit.anchor.ignoreAnchor(false);
        //     samxsuit.setOffset(0, 1.75, 0)
        //     samxsuit.render();
        //     if (!isFirstPersonArm){
        //         pixal.setOffset(0, 0, 0)
        //         pixal.anchor.ignoreAnchor(false);
        //     }
        // }
        // if (entity.isWearingFullSuit() && entity.isSneaking()) {
        //     if (isFirstPersonArm){
        //         samxsuit.setOffset(0, 3.0, 5)
        //         samxsuit.anchor.ignoreAnchor(true);
        //     }
        //     if (!isFirstPersonArm){
        //         pixal.setOffset(0, 3.25, 0)
        //         pixal.anchor.ignoreAnchor(true);
        //         pixal.render();
        //         samxsuit.setOffset(0, 0.25, 0)
        //     }
        //     samxsuit.anchor.ignoreAnchor(true);
        //     samxsuit.render();
        // }
        // if (isFirstPersonArm){
        //     samxsuit.anchor.ignoreAnchor(true);
        //     blueglass.anchor.ignoreAnchor(true);
        //     blueglass.render();
        //     if (!entity.isSneaking()){
        //         samxsuit.setOffset(0, 5.25, 7)
        //         samxsuit.render();
        //     }
        //     if (entity.isSneaking()){
        //         samxsuit.setOffset(0, 3.0, 5)
        //     }
        // }
        // if (!isFirstPersonArm){
        //     pixal.render();
        // }

}
