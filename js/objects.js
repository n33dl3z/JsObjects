//Objects lesson goes here.
//commit is a go.

var Robot = {
    fuel: 100,
    weapon: "lazer",
    speed: 10,
    strength: 5,
    armor: "light",

    AddFuel: function (tank){
        fuel += tank;
    },

    UpgradeArmor: function (don){
        armor = don;
    },

    ChangeWeapon: function (equip){
        weapon = equip;
    },

}

Robot.speed += parseInt(prompt("Increase Robot speed."));
alert("Robot now has a speed of " + Robot.speed);

//this next line for the armor is broken. still needs to be fixed.
Robot.UpgradeArmor(prompt("What should we upgrade the armor to?"));
alert("Robot armor is now " + Robot.armor);