//Bereits existierendes Card Deck
const cardDeck = document.querySelector("#holder");
console.log("CardBuilder.js connected")



const cardArray = [];



class Card {
    constructor() {
        let col = document.createElement("div");
        let card = document.createElement("div");
        let imgContainer = document.createElement("div");
        let conserWarn = document.createElement("span");
        let img = document.createElement("img");
        let adoptedOverlay = document.createElement("div");
        let overlayText = document.createElement("p");
        let overlayIcon = document.createElement("i");
        let cardBody = document.createElement("div");
        let nameh5 = document.createElement("h5");
        let sexSpeciesP = document.createElement("p");
        let sexSpan = document.createElement("span");
        let speciesSpan = document.createElement("span");
        let divName = document.createElement("div");
        let divPills = document.createElement("div");
        let row = document.createElement("div");
        let lowerCardBody = document.createElement("div");
        let bioP = document.createElement("p");
        let adoptionButton = document.createElement("button");
        let adoptionIcon = document.createElement("i");
        let placeOverlay = document.createElement("div");


        //Stat Bars are created this way:
        let progressRowDiv = [];
        let statNameDiv = [];
        let statBarDiv = [];
        let progressDiv = [];
        let actualBarDiv = [];
        let barLabelSpan = [];

        for (let i = 0; i < 4; i++) {
            let prd = document.createElement("div");
            let a = document.createElement("div");
            let b = document.createElement("div");
            let c = document.createElement("div");
            let d = document.createElement("div");
            let e = document.createElement("span");
            progressRowDiv.push(prd)
            statNameDiv.push(a);
            statBarDiv.push(b);
            progressDiv.push(c);
            actualBarDiv.push(d);
            barLabelSpan.push(e);

        }

        //SET STYLES
        col.classList.add("col-sm-12", "col-md-4", "mb-4");
        card.classList.add("card", "boxshadow");
        imgContainer.classList.add("imgContainer");
        conserWarn.classList.add("badge", "badge-pill", "badge-danger", "hidden")
        conserWarn.innerText = "Critically endangered!"
        img.classList.add("card-img-top", "pic")
        img.src = "./images/animals/undefined.jpg"
        placeOverlay.classList.add("placeOverlay");
        divPills.classList.add("divPills");


        //in adoptedOverlay in imgContainer
        overlayText.classList.add("overlayText")
        overlayText.innerText = "Adopted! ♥"

        //cardBody
        cardBody.classList.add("card-body", "bgDarkG");
        divName.classList.add("col");
        divPills.classList.add("col", "hidden");
        row.classList.add("row");

        //Name & Species
        nameh5.classList.add("card-title", "text-white", "mb-0")
        sexSpeciesP.classList.add("card-text", "text-white")

        //Set Styles for Stat Elements
        for (let e of statNameDiv) {
            e.classList.add("col-4", "text-muted", "text-truncate");
            e.innerText = "Stat Name";

        }

        for (let e of progressRowDiv) {
            e.classList.add("row", "align-items-center", "progressRow");
        }

        for (let e of statBarDiv) {
            e.classList.add("col-8");
        }

        for (let e of progressDiv) {
            e.classList.add("progress");
        }

        for (let e of actualBarDiv) {
            e.classList.add("progress-bar");
            e.setAttribute("role", "progressbar");
            e.setAttribute("style", "width: 25%");
        }
        for (let e of barLabelSpan) {
            e.classList.add("geneticStat");
        }

        //lowerCardBody
        lowerCardBody.classList.add("card-body")

        //Bio
        bioP.classList.add("card-text")

        //Adoption Button
        adoptionButton.classList.add("btn", "btn-outline-primary", "float-l", "adoptionButton")
        adoptionButton.setAttribute("type", "button")
        adoptionButton.innerText = "♥ Adopt me!"


        //APPEND APPEND APPEND
        // vom kleinsten zum größten Element
        //lowerCardBody
        lowerCardBody.append(bioP, adoptionButton);

        for (let i = 0; i < 4; i++) {
            actualBarDiv[i].append(barLabelSpan[i]);
            progressDiv[i].append(actualBarDiv[i]);
            statBarDiv[i].append(progressDiv[i]);
            progressRowDiv[i].append(statNameDiv[i], statBarDiv[i])
        }


        //card body
        sexSpeciesP.append(sexSpan, speciesSpan);
        divName.append(nameh5, sexSpeciesP)
        divPills.append(conserWarn);
        row.append(divName, divPills);
        cardBody.append(row);
        // //imgContainer
        overlayText.append(overlayIcon);
        placeOverlay.append(overlayText);
        imgContainer.append(img, placeOverlay);
        card.append(imgContainer, cardBody);
        //

        for (let index = 0; index < 4; index++) {
            card.append(progressRowDiv[index]);
        }
        card.append(lowerCardBody);
        col.append(card);
        return col
    }
}



function buildCard() {
        let myCard = new Card();
        cardArray.push(myCard);
    
}


