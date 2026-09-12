function warning(entity, message, condition) {
    condition = this.condition;
    message = this.message;
    if (condition) {
        if (PackLoader.getSide() == "SERVER") {
            entity.as("PLAYER").addChatMessage(message);
        } else if (PackLoader.getSide() == "CLIENT") {
            entity.playSound("minecraft:random.orb", 4, 1);
        }
    }
}
class Warning {
  constructor(entity, message, condition) {
    this.entity = entity;
    this.message = message;
    this.condition = condition;
  }

  sendMessage() {
    if (condition) {
        if (PackLoader.getSide() == "SERVER") {
            entity.as("PLAYER").addChatMessage(message);
        } else if (PackLoader.getSide() == "CLIENT") {
            entity.playSound("minecraft:random.orb", 4, 1);
        }
    }
  }
}

// Instantiating new objects from the class
const car1 = new Car("Toyota", 2024);
const car2 = new Car("Honda", 2025);

car1.displayInfo(); // Output: This is a 2024 Toyota.
const damageWarning = new Warning(entity, "\u00A73P.I.X.A.L>" + " \u00A74!WARNING! \u00A7lDAMAGE DETECTED!", entity.getData("fiskheroes:time_since_damaged") < 5);
