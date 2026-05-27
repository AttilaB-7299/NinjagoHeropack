extend("fiskheroes:hero_basic");
loadTextures({
    "layer1": "nin:samx/pixalskin",
    "layer2": "nin:samx/pixalskin",
    "mask": "nin:null",
    "mech": "nin:samx/samurai_remapped_v5",
    "pixal": "nin:samx/pixalskin",
    "blue_glass": "nin:samx/blue_glass",
    // "staff": "nin:samx/staff",
    // "hat": "nin:samx/hat",
    "null": "nin:null",
    "cubes": "nin:samx/spincubes"
    // "spinjitzu": "nin:samx/golden_spinjitzu",
    // "flute": "nin:samx/flute",
    // "dragon": "nin:samx/doe",
    // "dragonflying": "nin:samx/derg2",
    // "overlay": "nin:samx/wu"
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
        // if (dragonflying(entity)) {
        //     return "null";
        // }
        // if (dragon(entity)) {
        //     return "ull";
        // }
        return "layer1";
    });
    //renderer.setLights((entity, renderLayer) => renderLayer == "CHESTPLATE" ? "lights" : null);

    renderer.showModel("CHESTPLATE", "head", "headwear", "body", "rightArm", "leftArm", "rightLeg", "leftLeg");
    renderer.fixHatLayer("HELMET", "CHESTPLATE");
}

function initEffects(renderer) {

    /*var wudragon = renderer.createResource("MODEL", "nin:wu_dragon");
    wudragon.texture.set("dragon", null);
    wudragon.bindAnimation("nin:wu_dragon_moving").setData((entity, data) => {
		data.load((entity.exists()));
	  });
    wusdragon = renderer.createEffect("fiskheroes:model").setModel(wudragon);
    wusdragon.anchor.set("body");*/
    //wusdragon.setOffset(1.0, 10.0, 1.0);

    // wingstate1 = renderer.createEffect("fiskheroes:model");
    // wingstate1.setModel(utils.createModel(renderer, "nin:wingstate1", null, "dragonflying"));
    // wingstate1.anchor.set("rightArm");
    // wingstate1.setOffset(0.0, 25.0, 0.0);
    // wingstate1.setRotation(90.0, 90.0, 90.0)
    // wingstate1.opacity = 0.9;
    // wingstate1.mirror = false

    // wingstate2 = renderer.createEffect("fiskheroes:model");
    // wingstate2.setModel(utils.createModel(renderer, "nin:wingstate2", null, "dragonflying"));
    // wingstate2.anchor.set("rightArm");
    // wingstate2.setOffset(0.0, 25.0, 0.0);
    // wingstate2.setRotation(90.0, 90.0, 90.0)
    // wingstate2.opacity = 0.9;
    // wingstate2.mirror = false

    // wingstate3 = renderer.createEffect("fiskheroes:model");
    // wingstate3.setModel(utils.createModel(renderer, "nin:wingstate3", null, "dragonflying"));
    // wingstate3.anchor.set("rightArm");
    // wingstate3.setOffset(0.0, 25.0, 0.0);
    // wingstate3.setRotation(90.0, 90.0, 90.0)
    // wingstate3.opacity = 0.9;
    // wingstate3.mirror = false

    // wingstate4 = renderer.createEffect("fiskheroes:model");
    // wingstate4.setModel(utils.createModel(renderer, "nin:wingstate4", null, "dragonflying"));
    // wingstate4.anchor.set("rightArm");
    // wingstate4.setOffset(0.0, 25.0, 0.0);
    // wingstate4.setRotation(90.0, 90.0, 90.0)
    // wingstate4.opacity = 0.9;
    // wingstate4.mirror = false

    // wudragonflying = renderer.createEffect("fiskheroes:model");
    // wudragonflying.setModel(utils.createModel(renderer, "nin:wudragonflying", null, "dragonflying"));
    // wudragonflying.setOffset(0.0, 25.0, 0.0);
    // wudragonflying.setRotation(90.0, 90.0, 90.0)
    // wudragonflying.anchor.set("rightArm");
    // wudragonflying.opacity = 0.9;
    // wudragonflying.mirror = false

    // pixalflying = renderer.createEffect("fiskheroes:model");
    // pixalflying.setModel(utils.createModel(renderer, "nin:pixalflying", null, "dragonflying"));
    // pixalflying.setOffset(0.0, 25.0, 0.0);
    // pixalflying.setRotation(90.0, 90.0, 90.0)
    // pixalflying.anchor.set("rightArm");
    // pixalflying.opacity = 0.9;
    // pixalflying.mirror = false

    // wuridingdragon = renderer.createEffect("fiskheroes:model");
    // wuridingdragon.setModel(utils.createModel(renderer, "nin:wuridingdragon", null, "dragonflying"));
    // wuridingdragon.setOffset(0.0, 5.0, 0.0);
    // wuridingdragon.setRotation(0.0, 0.0, 0.0)
    // wuridingdragon.anchor.set("body");
    // wuridingdragon.opacity = 0.9;
    // wuridingdragon.mirror = false

    // rightwing = renderer.createEffect("fiskheroes:model");
    // rightwing.setModel(utils.createModel(renderer, "nin:rightwing", null, "dragonflying"));
    // rightwing.anchor.set("body");
    // rightwing.setOffset(0.0, 0.0, 0.0);
    // rightwing.setRotation(0.0, 0.0, 0.0)
    // rightwing.opacity = 0.9;
    // rightwing.mirror = false

    // leftwing = renderer.createEffect("fiskheroes:model");
    // leftwing.setModel(utils.createModel(renderer, "nin:leftwing", null, "dragonflying"));
    // leftwing.anchor.set("body");
    // leftwing.setOffset(0.0, 0.0, 0.0);
    // leftwing.setRotation(0.0, 0.0, 0.0)
    // leftwing.opacity = 0.9;
    // leftwing.mirror = false
    var pixalModel = utils.createModel(renderer,"nin:pixalmodel", "pixal");
    // pixalModel.bindAnimation("nin:samxhit").setData((entity, data) => data.load(entity.getPunchTimerInterpolated()));
    // pixalModel.bindAnimation("nin:samxblock").setData((entity, data) => data.load(entity.getData("fiskheroes:shield_blocking")));
    // pixalModel.bindAnimation("nin:samxlower").setData((entity, data) => data.load(entity.isSneaking()));
    // pixalModel.bindAnimation("nin:samxwalk").setData((entity, data) => data.load(entity.motionInterpolated() * 4));
//blueglass
    blueglass = renderer.createEffect("fiskheroes:model");
    blueglass.setModel(utils.createModel(renderer, "nin:blueglass", "blue_glass"));
    blueglass.setOffset(0.0, -18.0, 5.0);
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
    samxbodymodel.bindAnimation("nin:samxwalk").setData((entity, data) => data.load(entity.getData("fiskheroes:moving")));

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
    //utils.bindCloud(renderer, "nin:dyn/dragon_timer", "pkg:teleport_morgana").setCondition(entity => entity.getData('nin:dyn/dragon_timer') > 0.125 && entity.getData('nin:dyn/dragon_timer') > 0);
    // utils.bindParticles(renderer, "nin:wu_dragon_background").setCondition(entity => entity.getInterpolatedData('nin:dyn/dragon_timer') > 0 && entity.getInterpolatedData('nin:dyn/dragon_timer') < 1);

        //utils.bindParticles(renderer, "nin:fire_hands").setCondition(entity => (entity.getInterpolatedData("fiskheroes:shield_timer") > 0 && entity.getInterpolatedData("fiskheroes:shield_timer") < 1));
        //utils.bindParticles(renderer, "nin:fire_hands").setCondition(entity => entity.getData("fiskheroes:shield") && (entity.getInterpolatedData("fiskheroes:shield_timer") > 0.5 && entity.getInterpolatedData("fiskheroes:shield_timer") < 1));
    // var sprint = renderer.bindProperty("fiskheroes:trail");
    // sprint.setTrail(renderer.createResource("TRAIL", "nin:wu"));
    // sprint.setCondition(entity => invis(entity));
        renderer.bindProperty("fiskheroes:opacity").setOpacity((entity, renderLayer) => {
            return invis(entity) ? 0.9 : 1;
    });
    //utils.bindParticles(renderer, "nin:testhands").setCondition(entity => invis2(entity));

}

function initAnimations(renderer) {
    parent.initAnimations(renderer);
}

function render(entity, renderLayer, isFirstPersonArm) {
        if (entity.isWearingFullSuit() && !entity.isSneaking()) {
            samxsuit.anchor.ignoreAnchor(false);
            samxsuit.setOffset(0, 1.75, 0)
            samxsuit.render();
            pixal.setOffset(0, 0, 0)
            pixal.anchor.ignoreAnchor(false);
            pixal.render();
        }
        if (entity.isWearingFullSuit() && entity.isSneaking()) {
            samxsuit.anchor.ignoreAnchor(true);
            samxsuit.setOffset(0, 0.25, 0)
            samxsuit.render();
            pixal.setOffset(0, 3.25, 0)
            pixal.anchor.ignoreAnchor(true);
            pixal.render();
        }
        if (isFirstPersonArm){
            blueglass.anchor.ignoreAnchor(true);
            blueglass.render();
        }

}
