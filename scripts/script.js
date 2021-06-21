var allCompleted = "All Completed! You have finished the game!";

// console.log(localStorage)

var categories = JSON.parse(localStorage['categories']);
// console.log(categories)

for (const collectedCategory of categories) {
    
    let currentTag = document.getElementById(collectedCategory)
    collectedItem = localStorage[collectedCategory]
    
    // console.log()
    if (collectedItem == "null"){
        collectedItem = "Not Collected"
        allCompleted = "There are materials you need to collect, you should go to the market"
    }
    currentTag.innerHTML = collectedItem
}
document.getElementById("completionStatus").innerHTML = allCompleted


