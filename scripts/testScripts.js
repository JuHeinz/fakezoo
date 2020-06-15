console.log("Test script is connected!")

// nodelist zu divs holen
var sizeHTML = document.querySelectorAll(".sizeClass");
var ageHTML = document.querySelectorAll(".ageClass");

var list = []


// für jedes element von div function numGen ausführen
for (var i = 0; i < sizeHTML.length; i++) {
    var animal = gen();
    list.push(animal);

}

//random nummer generieren und zu jeden element von div einfügen
// dieser code läuft i mal
function gen() {
    let age = Math.random();
    let size = Math.random();
    sizeHTML[i].innerHTML = age;
    ageHTML[i].innerHTML = size;


    // OBJEKT
    var animal = {
        Age: age,
        Size: size,
    };
    return animal
}

