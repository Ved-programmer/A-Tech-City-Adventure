function validateOption(option) {
    console.log(option);

    let conditions = templateItems[option];
    var categories = JSON.parse(localStorage['categories']);

    let checkTrue = true;
    let statusTag = document.getElementById("choosingStatus")

    for(category of categories){
        // console.log(category)
        currentlyChosen = localStorage[category]
        toBeChosenRequirement = conditions[category]

        for(requirement of toBeChosenRequirement){
            if (currentlyChosen == requirement) {
                console.log("failed")
                statusTag.innerHTML = option  + " is not compatible with the " + requirement + " " + category
                checkTrue = false;
            }
        }
    }

    if(checkTrue){
        statusTag.innerHTML = "You successfully bought " + option
    }

}

