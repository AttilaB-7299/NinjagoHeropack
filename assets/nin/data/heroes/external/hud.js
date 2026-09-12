function getDimension(id) {
    var dimensions = {
        "0" : "Overworld",
        "-1" : "Nether",
        "1": "The End",
        "2594": "Quantum Realm",
        "2595": "Moon"
    };
    id = String(id);
    return Object.keys(dimensions).indexOf(id) > -1 ? dimensions[id] : id;
}
function systemCheck(entity) {
    var temp = Math.round(entity.world().getLocation(entity.pos().add(0, 0, 0)).getTemperature() * 80);
    var integrity = 1024 - entity.getWornChestplate().damage();
    var percentage = Math.round(integrity / 1024 * 100);
    var condition = ((entity.getData("fiskheroes:ticks_since_sprinting") == 200));
    var dimension = getDimension(entity.world().getDimension());

    var message1 = "\u00A73P.I.X.A.L> " + "Hello, \u00A7b" + String(entity.getName()) + "! Your vitals read as follows: \u00A7b"
    var message2 = "\u00A73P.I.X.A.L> " + "Health: " + "\u00A7b" + String(Math.round(entity.getHealth()));
    var message3 = "\u00A73P.I.X.A.L> " + "Dimension: " + "\u00A7b" + String(dimension);
    var message4 = "\u00A73P.I.X.A.L> " + "Biome: " + "\u00A7b" + String(entity.world().getLocation(entity.pos().add(0, 0, 0)).biome());
    var message5 = "\u00A73P.I.X.A.L> " + "Overall Armor Integrity: " + "\u00A7b" + String(percentage) + " Percent";
    var message6 = "\u00A73P.I.X.A.L> " + "Temperature: " + "\u00A7b" + String(temp);
    if (condition) {
        if (PackLoader.getSide() == "SERVER") {
            entity.as("PLAYER").addChatMessage(message1);
            entity.as("PLAYER").addChatMessage(message2);
            entity.as("PLAYER").addChatMessage(message3);
            entity.as("PLAYER").addChatMessage(message4);
            entity.as("PLAYER").addChatMessage(message6);
            entity.as("PLAYER").addChatMessage(message5);
        } else if (PackLoader.getSide() == "CLIENT") {
            entity.playSound("minecraft:random.orb", 4, 1);
        }
    }
}
function heatwarning(entity) {
    var condition = (entity.getData("fiskheroes:metal_heat") > 0.75);

    var message1 = "\u00A73P.I.X.A.L>" + " Internal suit temperature nearing critical levels. \u00A7b";

    if (condition) {
        if (PackLoader.getSide() == "SERVER") {
            entity.as("PLAYER").addChatMessage(message1);
        } else if (PackLoader.getSide() == "CLIENT") {
            entity.playSound("minecraft:random.orb", 4, 1);
        }
    }
}
function spacewarning(entity) {
    var condition = (entity.posY() > 900);

    var message1 = "\u00A73P.I.X.A.L>" + " Altitude approaching outer atmosphere. \u00A7b";

    if (condition) {
        if (PackLoader.getSide() == "SERVER") {
            entity.as("PLAYER").addChatMessage(message1);
        } else if (PackLoader.getSide() == "CLIENT") {
            entity.playSound("minecraft:random.orb", 4, 1);
        }
    }
}
function damageWarning(entity) {
    var condition = entity.getData("fiskheroes:time_since_damaged") < 5;
    var message1 = "\u00A73P.I.X.A.L>" + " \u00A74!WARNING! \u00A7lDAMAGE DETECTED!";

    if (condition) {
        if (PackLoader.getSide() == "SERVER") {
            entity.as("PLAYER").addChatMessage(message1);
        } else if (PackLoader.getSide() == "CLIENT") {
            entity.playSound("minecraft:random.orb", 4, 1);
        }
    }
}
function lowhealth(entity) {
    var condition = (entity.getHealth() < 6);
    var message1 = "\u00A73P.I.X.A.L>" + " \u00A74!WARNING! \u00A7lLOW VITALS!";

    if (condition) {
        if (PackLoader.getSide() == "SERVER") {
            entity.as("PLAYER").addChatMessage(message1);
        } else if (PackLoader.getSide() == "CLIENT") {
            entity.playSound("minecraft:random.orb", 4, 1);
        }
    }
}
function icewarning(entity) {
    var condition = (entity.posY() >= 175);
    var message1 = "\u00A73P.I.X.A.L>" + " There is a potentially fatal build up of ice occuring. \u00A7b";

    if (condition) {
        if (PackLoader.getSide() == "SERVER") {
            entity.as("PLAYER").addChatMessage(message1);
        } else if (PackLoader.getSide() == "CLIENT") {
            entity.playSound("minecraft:random.orb", 4, 1);
        }
    }
}
function tick(entity, manager) {
    var flying = entity.getData("fiskheroes:flying");
    var nbt = entity.getWornChestplate().nbt();
    manager.incrementData(entity, "fiskheroes:dyn/booster_timer", 2, flying);

    var item = entity.getHeldItem();
    flying &= !entity.as("PLAYER").isUsingItem();
    manager.incrementData(entity, "fiskheroes:dyn/booster_r_timer", 2, flying)
}
function mach(entity, manager, level) {
    var condition = entity.getData("fiskheroes:speed") == level && entity.getData("fiskheroes:speeding");

    var message = "\u00A73P.I.X.A.L>" + " \u00A7bFlight is now set to level " + level;

    if (condition) {
        if (PackLoader.getSide() == "SERVER") {
            entity.as("PLAYER").addChatMessage(message);
        }
    }
}
