function validateOption(option, optionCategory) {
    console.log(option);

    let conditions = templateItems[option];
    var categories = JSON.parse(localStorage['categories']);

    let checkTrue = true;
    let statusTag = document.getElementById("choosingStatus")

    for(category of categories){
        console.log(category)
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

    allowenceCheck = checkIfAllowed(option);
    if(!(allowenceCheck[0])){
        checkTrue = false;
        statusTag.innerHTML = "You have bought " + allowenceCheck[1]  + " which is not compatible with " + option
    }

    if(checkTrue){
        statusTag.innerHTML = "You successfully bought " + option
        localStorage[optionCategory] = option
    }
}

var currentFile = location.pathname.substring(location.pathname.lastIndexOf("/") + 1).slice(0, -5);

console.log(currentFile);


var files = {
    
    "energySource" : {
        "title" : "Buy Feul/Energy",
        "titleAction" : "Choose the Feul/Energy you want",
        
        "firstOption" : "Hydraulic Power",
        "firstDescription" : "no compatibility requirements",
        
        "secondOption" : "Electrical Energy",
        "secondDescription" : "no compatibility requirements",
        
        "thirdOption" : "Bio Mass",
        "thirdDescription" : "no compatibility requirements",
    },
    
    "spaceAirport" : {
        "title" : "Buy Space Airports",
        "titleAction" : "Choose the Space Airport you want",
        
        "firstOption" : "aqua aerodrome",
        "firstDescription" :  `doesn't work with "Electrical Energy" and "Bio Mass"`,
        
        "secondOption" : "warm cosmos",
        "secondDescription" : `doesn't work with "Hydraulic Power"`,
        
        "thirdOption" : "Galvanostat Pathway",
        "thirdDescription" : `doesn't work with "Hydraulic Power" and "Bio Mass"`,
    },
    
    "spaceShip" : {
        "title" : "Buy Space Ships",
        "titleAction" : "Choose the Space Ship you want",
        
        "firstOption" : "Thunder Runner",
        "firstDescription" : `doesn't work with "Hydraulic Power", "Bio Mass" and "aqua aerodrome`,
        
        "secondOption" : "Sailing Ship",
        "secondDescription" : `doesn't work with "Bio Mass", "Electrical Energy", "warm cosmos" and "Galvonostat Pathway"`,
        
        "thirdOption" : "Giant Tic Tac",
        "thirdDescription" : `doesn't work with "aqua aerodrome"`,
    },
    
    "spaceSuits" : {
        "title" : "Buy Space Suits",
        "titleAction" : "Choose the Space Suit you want",
        
        "firstOption" : "Explorer's Suit",
        "firstDescription" : `doesn't work with "Bio Mass"`,
        
        "secondOption" : "Water Repellent",
        "secondDescription" : `doesn't work with "Hydraulic Power", "aqua aerodrome" and "Sailing Ship"`,
        
        "thirdOption" : "Precaution Piece",
        "thirdDescription" : `doesn't work with "Electrical Energy" and "warm cosmos`,
    },
    
    "weapons" : {
        "title" : "Buy Weapons",
        "titleAction" : "Choose the weapon you want",
        
        "firstOption" : "Water Blaster",
        "firstDescription" : `doesn't work with "Bio Mass", "Electrical Energy", "Thunder Runner" and "Giant Tic Tac"`,
        
        "secondOption" : "Flame Thrower",
        "secondDescription" : `doesn't work with "Hydraulic Power" and "Sailing Ship"`,
        
        "thirdOption" : "Electric Shock",
        "thirdDescription" : `doesn't work with "Hydraulic Power" and "Bio Mass"`,
        
        
    }, 
    
    "template" : {
        "title" : "template",
        "titleAction" : "templateAction",
        
        "firstOption" : "firstOption",
        "firstDescription" : "firstDescription",
        
        "secondOption" : "secondOption",
        "secondDescription" : "secondDescription",
        
        "thirdOption" : "thirdOption",
        "thirdDescription" : "thirdDescription",
    }
    
}

var currentData = files[currentFile];
document.getElementsByTagName("title")[0].innerHTML = currentData["title"];


var code = `

<h1 class = "header"><u>&nbsp;&nbsp;${currentData["title"]}&nbsp;&nbsp;</u></h1>

<br>

<div align = "center">
<p id = "choosingStatus">${currentData["titleAction"]}</p>
</div>

<br>
    <br>
    
    <div align = "center">
    
    <div class = "infoContainer">
    <p>${currentData["firstOption"]}, ${currentData["firstDescription"]}</p>
        </div>
        <button type="button" onclick="validateOption('${currentData["firstOption"]}', '${currentFile}')">Buy ${currentData["firstOption"]}</button>

        
        <div class = "infoContainer">
            <p>${currentData["secondOption"]}, ${currentData["secondDescription"]}</p>
        </div>
        <button type="button" onclick="validateOption('${currentData["secondOption"]}', '${currentFile}')">Buy ${currentData["secondOption"]}</button>

        
        <div class = "infoContainer">
            <p>${currentData["thirdOption"]}, ${currentData["thirdDescription"]}</p>
        </div>
        <button type="button" onclick="validateOption('${currentData["thirdOption"]}', '${currentFile}')">Buy ${currentData["thirdOption"]}</button>


        
        <div>
            <a href = "../marketPlace.html">
                Go Back
            </a>
        </div>

    </div>

    <br>
    <br>
    <br>

`


document.getElementsByTagName("body")[0].innerHTML = code
