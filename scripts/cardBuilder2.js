//Bereits existierendes Card Deck


class Cardo {
    constructor() {
       //CREATE HTML ELEMENTS
       let nameh5 = document.createElement("h5");
       let myDiv = document.createElement("div");
       nameh5.innerHTML = "Name"
       myDiv.classList.add("jumbotron")
       myDiv.append(nameh5)
       return myDiv;
    }
}



function buildCardo() {
    for(var i = 0; i<3; i++){
        let myCard = new Cardo();
        cardArray.push(myCard);
    }
    appendCardo()
   }


function appendCardo(){
    for (let e of cardArray){
        cardDeck.append(e);
        randomChange();
    }
}

function randomChange(){
    for (let e of cardArray){
        e.children[0].innerHTML = Math.random();
    }
}