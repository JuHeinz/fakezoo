//Bereits existierendes Card Deck
const cardDeck = document.querySelector(".card-deck");




//Die Klasse animal definieren anhand derer alle anderen animal-Objects erstellt werden
class Animal {
    constructor(name, species, sex, stats, bio) {
        this.name = name;
        this.species = species;
        this.sex = sex;
        this.stats = stats;
        this.bio = bio;
        //Species-Namen nehmen und Leerzeichen, ' und - entfernen. Für Bild Src wichtig.
        this.cleanSpecies = this.species.replace(/\s/g, '').replace(/'/g, '').replace(/-/g, '')
    }
    adopt() {

        console.log("adopted")
        // // give image overlay when button in modal pressed
        // placeOverlay[index].classList.add("adoptedOverlay");

        // // overlay text also appears
        // overlayText[index].style.opacity = "100%"

        // // // also disable adoption button
        // document.querySelectorAll("adoptionButton").disabled = true;
    }

}

//Problem: All die oben definierten variablen beziehen sich nur auf EIN HTML Object, nicht ein Array aus verwandten HTML objecten.
//Entweder all diese Elemente als Array gedefinieren oder hoffen dass das HTML template Chapter dieses Problem löst







const animalList = [];


// Button to generate new Animals
const newAnimalsButton = document.querySelectorAll(".newAnimalsButton")
for (const button of newAnimalsButton) {
    button.addEventListener("click", create)
}

function create() {
    for (let index = 0; index < 3; index++) {
        //Ein animal wird auf Basis der Klasse Animal erstellt
        //Dessen Attribute sind das, was die jeweiligen Funktionen returnen
        let animal = new Animal(fetchName(), pickSpecies(), pickSex(), pickStats(), fetchBio())
        console.log("Animal was created:" + animal);

        //dann wird das animal in ein array gepushed
        animalList.push(animal);
    }

    buildCard();
}

function combine() {

    img.src = "./images/animals/" + this.cleanSpecies + ".jpg"

    bioP.innerText = "fsdafas";



    cardArray[0].nameh5.innerText = animalList[0].name;
    cardDeck.append(cardArray[0])

}








//FUNKTIONEN, DIE ATTRIBUTE BESTIMMEN
// 1.1 Generate Name via API
const fetchName = () => {
    // try {
    //     let apiResponse = await axios.get("https://randomuser.me/api/")

    //     return apiResponse.data.results[0].name.first

    // }
    // catch (error) {
    //     console.log("Api was not able to fetch Name", error)
    //     return "Missingno";
    // }
    return "Karl"
}

// 1.2. Species via Random Index of Array
const speciesArray = ["Aardvark", "African Elephant", "Aldabra Giant Tortoise", "American Bison", "Arctic Wolf", "Bactrian Camel", "Baird's Tapir", "Bengal Tiger", " Black Wildebeest ", " Bongo ", " Bonobo ", " Bornean Orangutan ", " Cheetah ", " Chinese Pangolin ", " Colombian White-Faced Capuchin Monkey", "Common Ostrich", "Dall Sheep", "Formosan Black Bear", "Galapagos Giant Tortoise", "Gemsbok", "Gharial", "Giant Anteater", "Giant Panda", "Greater Flamingo", "Grizzly Bear", "Himalayan Brown Bear", "Hippopotamus", "Indian Elephant", "Indian Peafowl", "Indian Rhinoceros", "Jaguar", "Japanese Macaque", "Lesser Antillean Iguana", "Llama", "Mandrill", "Nile Monitor", "Nyala", "Okapi", "Plains Zebra", "Polar Bear", "Pronghorn Antelope", "Pygmy Hippo", "Red Panda", "Reindeer", "Reticulated Giraffe", "Ring Tailed Lemur", "Sable Antelope", "Saltwater Crocodile", "Siberian Tiger", "Snow Leopard", "Spotted Hyena", "Springbok", "Thomson's Gazelle", "Timber Wolf", "West African Lion", "Western Chimpanzee", "Western Lowland Gorilla",];
const endangeredAnimals = ["Aardvark", "Antillean Iguana", "Bornean Orangutan", "Chinese Pangolin", "Gharial", "Himalayan Brown Bear", "Lehmann’s Poison Frog", "Red Ruffed Lemur", "West African Lion", "Western Chimpanzee", "Western Lowland Gorilla"]

const pickSpecies = () => {
    let num = Math.trunc((Math.random() * (speciesArray.length - 0) + 0))
    return speciesArray[num]
}

// 1.3. Sex via Random Array
const sexArray = ['♀️', '♂️']
const pickSex = () => {
    let num = Math.floor(Math.random() * 2);
    return sexArray[num];
}

//1.4. Fetch random Biography via API
const fetchBio = async () => {
    // try {
    //     let apiResponse = await axios.get("https://www.randomtext.me/api/lorem/ul-5/5-15");
    //     return apiResponse.data.text_out;
    // }
    // catch (error) {
    //     console.log("Api was not able to fetch Bio", error)
    //     return "Let's not talk about this one...";
    // }
    return "Lorem";
}

//1.5. Generate Stats via Math.random
const pickStats = () => {
    statArray = []
    // generate Array with 4 Random Values.
    for (let index = 0; index < 4; index++) {
        let num = Math.floor(Math.random() * 100);
        statArray.push(num);
    }
    return statArray;
}



