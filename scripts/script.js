var result = document.getElementById("completionStatus")
result.innerHTML = "Not Completed!"

collected = {
    "energySource":null,
    "spaceAirport":null,
    "spaceShip":null,
    "spaceSuits":null,
    "weapons":null,
}

for (const collectedCategory in collected) {
    let currentTag = document.getElementById(collectedCategory)
    collectedItem = collected[collectedCategory]
    if (collectedItem == null){
        collectedItem = "Not Collected"
    }
    currentTag.innerHTML = collectedItem
  }

