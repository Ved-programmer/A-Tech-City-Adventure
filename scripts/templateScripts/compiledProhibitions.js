var compiledProhibitions = {
    "null" : {},

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
    },

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
    },

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
    },

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
    },
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

function checkIfAllowed(option){
    var categories = JSON.parse(localStorage['categories']);

    console.log("start")

    for(category of categories){
        console.log(category)

        current = localStorage[category]

        console.log(current)

        currentRestrictions = compiledProhibitions[current]

        console.log(currentRestrictions)

        for(const currentCategory in currentRestrictions){
            if(currentRestrictions[currentCategory].includes(option)){
                return [false, current];
            }
        }

        
    }
    return [true];
}
