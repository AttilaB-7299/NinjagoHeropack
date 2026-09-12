class ChatMessage {
  constructor(entity, message, condition, name) {
    this.entity = entity;
    this.message = message;
    this.condition = condition;
    this.name = name;
  }
}
function CreateMessage(entity, message, condition, name) {
    var chatMessage = new ChatMessage(entity, message, condition, name);
    messages.push(chatMessage);
    return chatMessage;
}
var level = (entity.getData("fiskheroes:speed"))
CreateMessage(entity, "\u00A73P.I.X.A.L>" + " \u00A74!WARNING! \u00A7lDAMAGE DETECTED!", entity.getData("fiskheroes:time_since_damaged") < 5, "damageWarning")
CreateMessage(entity, "\u00A73P.I.X.A.L>" + " Internal suit temperature nearing critical levels. \u00A7b", entity.getData("fiskheroes:metal_heat") > 0.75, "heatWarning")
CreateMessage(entity, "\u00A73P.I.X.A.L>" + " \u00A7bFlight is now set to level " + level, entity.getData("fiskheroes:speed") == level && entity.getData("fiskheroes:speeding"), "mach")
CreateMessage(entity, "\u00A73P.I.X.A.L>" + " Altitude approaching outer atmosphere. \u00A7b", entity.posY() > 900, "spacewarning")
CreateMessage(entity, "\u00A73P.I.X.A.L>" + " \u00A74!WARNING! \u00A7lLOW VITALS!", entity.getHealth() < 6, "lowHealthWarning")
CreateMessage(entity, "\u00A73P.I.X.A.L>" + " There is a potentially fatal build up of ice occuring. \u00A7b", entity.posY() >= 175, "iceWarning")
function sendMessages() {
    messages.forEach(printMessage)
}
function printMessage(message) {
    if (message.condition) {
        if (PackLoader.getSide() == "SERVER") {
            message.entity.as("PLAYER").addChatMessage(message.message);
        } else if (PackLoader.getSide() == "CLIENT") {
            message.entity.playSound("minecraft:random.orb", 4, 1);
        }
    }
}
