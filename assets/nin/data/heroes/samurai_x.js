var hud = implement("nin:external/hud");

function init(hero) {

    hero.setName("Samurai X/Ninjago");

    hero.setTier(6);

    hero.setHelmet("Mask");
    hero.setChestplate("Chestplate");
    hero.setLeggings("Leggings");
    hero.setBoots("Shoes");

    hero.setDefaultScale(4.0);
    hero.addPowers("nin:sam_x");
    hero.addAttribute("FALL_RESISTANCE", 6.0, 0);
    hero.addAttribute("JUMP_HEIGHT", 2.5, 0);
    hero.addAttribute("PUNCH_DAMAGE", 8.0, 0);
    hero.addAttribute("SPRINT_SPEED", 0.40, 1);
    hero.addAttribute("STEP_HEIGHT", 0.5, 0);
    hero.addAttribute("BASE_SPEED_LEVELS", 1.0, 0);
    hero.addAttribute("IMPACT_DAMAGE", 0.1, 1);


    hero.addKeyBind("SHIELD", "Shield", 1);
    // hero.addKeyBind("CHARGED_BEAM", "Dragon Breath", 1);
    hero.addKeyBind("SUPER_SPEED", "Enhanced Speed", 2);
    hero.addKeyBind("ENERGY_PROJECTION", "Spinjitzu", 3);
    // hero.addKeyBind("DRAGON", "Summon Dragon", 3);
    hero.addKeyBind("SLOW_MOTION", "Enhanced Perception", 4);
    // hero.addKeyBind("BLADE", "Sacred Flute", 5);


    // hero.setModifierEnabled(isModifierEnabled);
    // hero.setKeyBindEnabled(isKeyBindEnabled);
    hero.addAttributeProfile("STAFF", staffProfile);
    hero.addAttributeProfile("DRAGON", dragonProfile);
    hero.setAttributeProfile((entity) => {
        if (entity.getData("fiskheroes:shield")) {
            return "STAFF";
        }
        if (entity.getData("nin:dyn/dragon_timer") == 1) {
            return "DRAGON";
        }
        return null;
    });
    hero.setDamageProfile(getProfile);
    hero.addDamageProfile("ENERGY", {
        "types": {
            "ENERGY": 1.0
        }
    });
    hero.addDamageProfile("STAFF", {"types": {"SHARP": 1.0}});
    hero.setTickHandler((entity, manager) => {
        hud.tick(entity, manager);
        manager.incrementData(entity, "nin:dyn/blade", 8, entity.getData("fiskheroes:shield_timer"));
        manager.incrementData(entity, "nin:dyn/nonblade", 8, entity.getData("fiskheroes:blade_timer"));
        spinjitzuAttack(hero, entity, manager);
    });

}
function spinjitzuAttack(hero, entity, manager) {
    if (entity.getData("fiskheroes:energy_projection")) {
        var list = entity.world().getEntitiesInRangeOf(entity.pos(), 2.5);
        for (var i = 0; i < list.size(); ++i) {
            var other = list.get(i);
            if (other.isLivingEntity() && !entity.equals(other) && entity.world().isUnobstructed(entity.pos().add(0, 1, 0), other.pos().add(0, 1, 0))) {
                other.hurtByAttacker(hero, "ENERGY", "%s was ripped to shreads by %s's spinjitzu", 50, entity);
            }
        }
    }
}
function staffProfile(profile) {
    profile.inheritDefaults();
    profile.addAttribute("PUNCH_DAMAGE", 20.0, 0);

}
function dragonProfile(profile) {
    profile.inheritDefaults();
    profile.addAttribute("PUNCH_DAMAGE", 20.0, 0);
}
function getProfile(entity) {
    return entity.getData("fiskheroes:shield") ? "STAFF" : null;
}

function canAim(entity) {
    return entity.getHeldItem().isEmpty();
}
