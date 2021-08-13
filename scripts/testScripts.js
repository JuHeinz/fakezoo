
class Poop{
    constructor(){
        let poop = document.createElement("h2");
        poop.innerHTML= "dsafasf";
        return poop;
    } 
}

const poopArray =[];
function buildPoop(){
   let myPoop = new Poop();
   poopArray.push(myPoop);

}

function appendPoop(){
for (var e of poopArray){
    cardDeck.append(e);
}
}