var energySource = {
    "Hydraulic Power" : {
        "energySource":[], 
        "spaceAirport":[], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    },

    "Electrical Energy" : {
        "energySource":[], 
        "spaceAirport":[], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    }, 

    "Bio Mass" : {
        "energySource":[], 
        "spaceAirport":[], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    }
};

var spaceAirport = {
    "aqua aerodrome" : {
        "energySource":["Electrical Energy", "Bio Mass"], 
        "spaceAirport":[], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    },

    "warm cosmos" : {
        "energySource":["Hydraulic Power"], 
        "spaceAirport":[], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    }, 

    "Galvanostat Pathway" : {
        "energySource":["Hydraulic Power", "Bio Mass"], 
        "spaceAirport":[], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    }
};

var spaceShip = {
    "Thunder Runner" : {
        "energySource":["Hydraulic Power" ,"Bio Mass"], 
        "spaceAirport":["aqua aerodrome"], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    },

    "Sailing Ship" : {
        "energySource":["Bio Mass", "Electrical Energy"], 
        "spaceAirport":["warm cosmos", "Galvonostat Pathway"], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    }, 

    "Giant Tic Tac" : {
        "energySource":[], 
        "spaceAirport":["aqua aerodrome"], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    }
};

var spaceSuits = {
    "Explorer's Suit" : {
        "energySource":["Bio Mass"], 
        "spaceAirport":[], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    },

    "Water Repellent" : {
        "energySource":["Hydraulic Power"], 
        "spaceAirport":["aqua aerodrome"], 
        "spaceShip":["Sailing Ship"], 
        "spaceSuits":[], 
        "weapons":[]
    }, 

    "Precaution Piece" : {
        "energySource":["Electrical Energy"], 
        "spaceAirport":["warm cosmos"], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    }
};

var weapons = {
    "Water Blaster" : {
        "energySource":["Electrical Energy", "Bio Mass"], 
        "spaceAirport":[], 
        "spaceShip":["Thunder Runner", "Giant Tic Tac"], 
        "spaceSuits":[], 
        "weapons":[]
    },

    "Flame Thrower" : {
        "energySource":["Hydraulic Power"], 
        "spaceAirport":[], 
        "spaceShip":["Sailing Ship"], 
        "spaceSuits":[], 
        "weapons":[]
    }, 

    "Electric Shock" : {
        "energySource":["Hydraulic Power", "Bio Mass"], 
        "spaceAirport":[], 
        "spaceShip":[], 
        "spaceSuits":[], 
        "weapons":[]
    }
};

