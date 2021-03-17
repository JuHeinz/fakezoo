console.log("map.js connected!");
var mapcells = document.querySelectorAll(".mapcell");
const cellHolder = document.querySelector("#cellHolder")
// Eventlistener all cells
for (let cell of mapcells){
    cell.addEventListener("click",displayInfo)
}


function displayInfo(){
    this.style.border ="3px solid black"
    /// Für jeder Mapcell soll ein tooltip mit dem tiernamen gezeigt werden.
    // create Tooltip in HTML
}

// functionen via keyboard commands aktivieren
// switch macht eigentlich nur sinn wenn es mehrere wären
window.addEventListener("keydown", event =>{
    switch(event.key){
        case "e":
        expandZoo()
        break;
    }
}
)


// diese Function fügt eine neue Mapcell hinzu
function expandZoo(){
    const newCell = document.createElement("div")
    newCell.classList.add("mapcell", "col-sm-4")
    const newImg = document.createElement("img")
    newImg.setAttribute("src", "./images/placeholderanimal.png")
    newImg.classList.add("img-fluid")
    newCell.append(newImg)
    cellHolder.append(newCell);
}

// Problem: Der oben definierte EventListener bezieht sich nicht auf neu erstellte Objekte, deshalb:
cellHolder.addEventListener("click",function(event){
    console.dir(event.target)
    if (event.target.className === "img-fluid"){
        event.target.style.border ="3px solid red"
    }
})