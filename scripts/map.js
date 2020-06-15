console.log("map.js connected!");
var mapcell = document.querySelectorAll(".mapcell");

// Eventlistener all cells
// wenn man bei vielen elementen der selben klasse einen eventlistener hinzufügen will braucht man einen for loop
for (var i = 0; i < mapcell.length; i++){
    mapcell[i].addEventListener("click", showAnimal);
}

function showAnimal() {
console.log("I clicked on a map cell.");
}


// Just one specific cell
var lo = document.querySelector("#lo");
lo.addEventListener("mouseover", test)

function test() {
    
    lo.classList.add("test")
    }


