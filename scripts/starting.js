localStorage.clear()

localStorage["energySource"] = null;
localStorage["spaceAirport"] = null;
localStorage["spaceShip"] = null;
localStorage["spaceSuits"] = null;
localStorage["weapons"] = null;

items = ["energySource", "spaceAirport", "spaceShip", "spaceSuits", "weapons"]

localStorage['categories'] = JSON.stringify(items);



// console.log(localStorage)







