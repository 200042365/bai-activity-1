function changeColour() {
    let colour = document.getElementById("colour");
    let pageBody = document.getElementById("pageBody");
    pageBody.style.backgroundColor = colour.value;
    let colourName = document.getElementById("colourNamee");
    colourName.innerText = colour.value.toUpperCase();
    if (colour.value.toLowerCase() === "red" || colour.value.toLowerCase() === "#ff0000") {
        console.log("You chose RED");
    }
}

function resetColour() {
    let pageBody = document.getElementById("pageBody");
    pageBody.style.backgroundColor = "unset";
    let colourName = document.getElementById("colourNamee");
    colourName.innerText = "";

}

function randomColour() {
    
}