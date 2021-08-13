function combine() {
    let i = cardArray.length - 1;
    //IMAGE
    cardArray[i].querySelector("img").src = "./images/animals/" + animalList[i].cleanSpecies + ".jpg"

    let sexSymbol;

    //NAME & SEX
    fetchNameSex().then((text) => {
        cardArray[i].querySelector("h5").innerText = text[0];
        animalList[i].name = text[0];

        if (text[1] == "male") {
            sexSymbol = "♂️";
        }
        else {
            sexSymbol = "♀️";
        }
        cardArray[i].querySelectorAll("span")[0].innerText = sexSymbol;
        animalList[i].sex = text[1];
    }
    )


    //SPECIES
    cardArray[i].querySelectorAll("span")[1].innerText = animalList[i].species;

    //PILLS
    //remove hidden class from Pill if Animal is endangered.
    if (endangeredAnimals.includes(animalList[i].species)) {
        cardArray[i].querySelector(".badge").classList.remove("hidden");
    }
    //STATS
    //Stat Names
    cardArray[i].firstElementChild.childNodes[2].childNodes[0].innerText = "Fertility"
    cardArray[i].firstElementChild.childNodes[3].childNodes[0].innerText = "Size"
    cardArray[i].firstElementChild.childNodes[4].childNodes[0].innerText = "Longevity"
    cardArray[i].firstElementChild.childNodes[5].childNodes[0].innerText = "Immunity"

    for (let j = 2; j < 6; j++) {
        //Set width
        cardArray[i].firstElementChild.childNodes[j].querySelector(".progress-bar").setAttribute("style", 'width: ' + animalList[i].stats[j - 2] + '%')
        //Set label
        cardArray[i].firstElementChild.childNodes[j].querySelector(".geneticStat").innerText = animalList[i].stats[j - 2] + "%";
    }

    // Set Coloring
    for (let j = 2; j < 6; j++) {
        if (animalList[i].stats[j - 2] <= 25) {
            cardArray[i].firstElementChild.childNodes[j].querySelector(".progress-bar").classList.add("bg-danger");
        }
        else if (animalList[i].stats[j - 2] > 25 && animalList[i].stats[j - 2] <= 50)
            cardArray[i].firstElementChild.childNodes[j].querySelector(".progress-bar").classList.add("bg-warning");
        else {
            cardArray[i].firstElementChild.childNodes[j].querySelector(".progress-bar").classList.add("bg-success");
        }
    }
    //BIO
    //fetchBio returns a promise. 
    //as soon as that promise is resolved (with the value "text"), it is inputed.
    // fetchBio().then((text) => {
    //     cardArray[i].getElementsByClassName("card-text")[1].innerText = text;
    //     animalList[i].bio = text;
    // })








    //APEND CARD
    cardDeck.append(cardArray[i]);

}

