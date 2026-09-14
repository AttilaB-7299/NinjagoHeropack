loadTextures({
    "base": "nin:technoblade-jay-off",
    "powered_on": "nin:technoblade-jay"
});

var utils = implement("fisktag:external/utils");
var model;

function init(renderer, entity) {
    model = utils.createModel(renderer, "nin:technoblade-jay", "powered_on", null);

    // model.bindAnimation("nin:earthspikesup").setData((entity, data) => {
    //     if (cancelAnimations) {
	// 		data.load(0);
    //         return;
    //     }
	// 	data.load(entity.getInterpolatedData("fiskheroes:beam_shooting_timer"));
    // });
    renderer.setModel(model);
}

function render(renderer, entity, glProxy, renderType, scopeTimer, recoil, isLeftSide) {
    cancelAnimations = false;
    if (renderType === "INVENTORY") {
        glProxy.rotate(0, 0, 0, 0);
        //third num if right if positive left if netative
        //second num is up/down negative is up
        glProxy.translate(0, 0.0, -0.5)
        glProxy.scale(0.7);
    }
    //first and third number have to be changed together
    glProxy.rotate(180, 0, 180, 0);
    //third num is up/down "-" is up
    //second num is forward/backward - is forward
    glProxy.translate(0, 0.65, 0)


    if (entity.getData("nin:dyn/technoblade_on")) {
        model.texture.set("powered_on", "powered_on");
    }
    if (!entity.getData("nin:dyn/technoblade_on")) {
        model.texture.set("base", "base");
    }
    //spinjitzu case
    if (entity.getData("nin:dyn/spinning") && !(renderType === "INVENTORY")) {
        glProxy.scale(0.001);
    }
    // if (renderType === "EQUIPPED_FIRST_PERSON" && entity.getData("nin:dyn/technoblade_on")) {
    //     model.texture.set("powered_on", "powered_on");
    //     glProxy.rotate(0, 0, 0, 0);
    // }
    // if (renderType === "EQUIPPED_FIRST_PERSON") {
    //     if (entity.getData("nin:dyn/powered_on")) {
    //         model.texture.set("powered_on", "powered_on");
    //         glProxy.translate(0.0, 0, 0);
    //         glProxy.rotate(0, 0, 0, 0);
    //         glProxy.scale(1);
    //     }
    //     else{
    //         model.texture.set("powered_on", "powered_on");
    //         glProxy.translate(0.0, 0, 0);
    //         glProxy.scale(1);
    //     }
    // } else if (renderType === "ENTITY") {
    //     glProxy.rotate(0, 0, 0, 0);
    //     glProxy.translate(0, 0, 0.0)
    // } else if (renderType === "EQUIPPED") {
    //     glProxy.translate(0.0, 0, 0);
    //     glProxy.rotate(0, 0, 0, 0);
    //     glProxy.scale(1);
    // }

    glProxy.scale(0.35);
}
