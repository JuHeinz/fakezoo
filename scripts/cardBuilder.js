console.log("CardBuilder.js connected")

const elementsToBeCreated1 = [
    document.createElement("div"),
    //in imgContainer
    document.createElement("div"),
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("img"),
    document.createElement("div"),
    document.createElement("p"),
    document.createElement("i"),
    document.createElement("div"),
    document.createElement("h5"),
    document.createElement("p"),
    document.createElement("span"),
    document.createElement("span"),
    document.createElement("div"),
    document.createElement("div"),
    document.createElement("div")

]

const elementsToBeCreated2 = [
    document.createElement("div"),
    document.createElement("p"),
    document.createElement("button"),
    document.createElement("i")
]

const cardArray = [];
//Stat Bars are created this way:
let progressRowDiv = [];
let statNameDiv = [];
let statBarDiv = [];
let progressDiv = [];
let actualBarDiv = [];
let barLabelSpan = [];

function buildCard() {
    // um manuelles zuweisen zig Elemente zu vermeiden destructure ich das Array elementsToBeCreated1 bzw 2
    // Dann weise ich den inhalt eines Array den folgenden neu zu erstellenden Variablen zu
    let [card, imgContainer, conserWarn, fertWarn, img, placeOverlay, overlayText, overlayIcon, cardBody, nameh5, sexSpeciesP, sexSpan, speciesSpan, divName, divPills, row] = elementsToBeCreated1;
    let [lowerCardBody, bioP, adoptionButton, adoptionIcon] = elementsToBeCreated2;


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
    card.classList.add("card");
    imgContainer.classList.add("imgContainer");
    conserWarn.classList.add("badge", "badge-pill", "badge-danger")
    conserWarn.innerText = "Critically endangered!"
    fertWarn.classList.add("badge", "badge-pill", "badge-secondary")
    fertWarn.innerText = "No offspring."
    img.classList.add("card-img-top", "pic")
    placeOverlay.classList.add("placeOverlay");

    //in placeOverlay in imgContainer
    overlayText.classList.add("overlayText")
    overlayText.innerText = "Adopted!"
    overlayIcon.classList.add("fas", "fa-heart")

    //cardBody
    cardBody.classList.add("card-body", "bgDarkG");
    divName.classList.add("col");
    divPills.classList.add("col");
    row.classList.add("row");

    //Name & Species
    nameh5.classList.add("card-title", "text-white", "mb-0")
    sexSpeciesP.classList.add("card-text", "text-white")

    //Set Styles for Stat Elements
    for (let e of progressRowDiv) {
        e.classList.add("col-4", "text-muted");
    }

    for (let e of statNameDiv) {
        e.classList.add("row", "align-items-center", "progressRow");
        e.innerText = "Stat Name"
    }

    for (let e of statBarDiv) {
        e.classList.add("col-8");
    }

    for (let e of progressDiv) {
        e.classList.add("progress");
    }

    for (let e of actualBarDiv) {
        e.classList.add("progress-bar")
        e.setAttribute("role", "progressbar")
        e.setAttribute("style", "width: 25%")
    }

    //lowerCardBody
    lowerCardBody.classList.add("card-body")

    //Bio
    bioP.classList.add("card-text")

    //Adoption Button
    adoptionButton.classList.add("btn", "btn-outline-primary", "float-l")
    adoptionButton.setAttribute("type", "button")
    adoptionButton.innerText = "Adopt me!"
    adoptionIcon.classList.add("fas", "fa-heart")


    //APPEND APPEND APPEND
    // vom kleinsten zum größten Element
    //lowerCardBody
    adoptionButton.append(adoptionIcon);
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
    divPills.append(conserWarn, fertWarn);
    row.append(divName, divPills);
    cardBody.append(row);
    //imgContainer
    overlayText.append(overlayIcon);
    placeOverlay.append(overlayText);
    imgContainer.append(img, placeOverlay);
    card.append(imgContainer, cardBody, lowerCardBody);

    for (let index = 0; index < 4; index++) {
        card.append = progressRowDiv[index];
    }

    cardArray.push(card);
    // combine();
}

function appendCard() {
    cardDeck.append(cardArray[0]);
}