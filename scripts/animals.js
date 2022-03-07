const animalList = [];

//CLASS DEFINITION
//Die Klasse animal definieren anhand derer alle anderen animal-Objects erstellt werden
class Animal {
    constructor(nameSex, species, stats, bio) {
        this.nameSex = nameSex;
        this.species = species;
        this.stats = stats;
        this.bio = bio;
        //Species-Namen nehmen und Leerzeichen, ' und - entfernen. Für Bild Src wichtig.
        this.cleanSpecies = this.species.replace(/\s/g, '').replace(/'/g, '').replace(/-/g, '')
    }
}


//BUTTON EVENT
// Button to generate new Animals
const newAnimalsButton = document.querySelectorAll(".newAnimalsButton")
for (const button of newAnimalsButton) {
    button.addEventListener("click", createThree)
}

function createThree() {
    for (let i = 0; i < 3; i++) {
        create()
    }
    window.scrollTo(0,document.body.scrollHeight);

}

//CREATE
function create() {
    //Instanciate Animal
    let animal = new Animal(fetchNameSex(), pickSpecies(), pickStats(), "Bio")
    animalList.push(animal);
    //siehe cardBuilder.js
    buildCard();
    //siehe combiner.js
    combine();
}



//FUNKTIONEN, DIE ATTRIBUTE BESTIMMEN
// 1.1 Generate Name & Fitting Sex via API
const fetchNameSex = async () => {
    let myArr = [];
    try {
        let apiResponse = await axios.get("https://randomuser.me/api/")
        let name = apiResponse.data.results[0].name.first
        let sex = apiResponse.data.results[0].gender;
        myArr.push(name, sex);
        return myArr;

    }
    catch (error) {
        console.log("Api was not able to fetch Name", error)
        myArr.push("Unnamed", "?");
        return myArr;
    }
}



// 1.2. Species via Random Index of Array
const speciesArray = ["Aardvark", "African Elephant", "Aldabra Giant Tortoise", "American Bison", "Arctic Wolf", "Bactrian Camel", "Baird's Tapir", "Bengal Tiger", " Black Wildebeest ", " Bongo ", " Bonobo ", " Bornean Orangutan ", " Cheetah ", " Chinese Pangolin ", " Colombian White-Faced Capuchin Monkey", "Common Ostrich", "Dall Sheep", "Formosan Black Bear", "Galapagos Giant Tortoise", "Gemsbok", "Gharial", "Giant Anteater", "Giant Panda", "Greater Flamingo", "Grizzly Bear", "Himalayan Brown Bear", "Hippopotamus", "Indian Elephant", "Indian Peafowl", "Indian Rhinoceros", "Jaguar", "Japanese Macaque", "Lesser Antillean Iguana", "Llama", "Mandrill", "Nile Monitor", "Nyala", "Okapi", "Plains Zebra", "Polar Bear", "Pronghorn Antelope", "Pygmy Hippo", "Red Panda", "Reindeer", "Reticulated Giraffe", "Ring Tailed Lemur", "Sable Antelope", "Saltwater Crocodile", "Siberian Tiger", "Snow Leopard", "Spotted Hyena", "Springbok", "Thomson's Gazelle", "Timber Wolf", "West African Lion", "Western Chimpanzee", "Western Lowland Gorilla",];
const endangeredAnimals = ["Aardvark", "Antillean Iguana", "Bornean Orangutan", "Chinese Pangolin", "Gharial", "Himalayan Brown Bear", "Lehmann’s Poison Frog", "Red Ruffed Lemur", "West African Lion", "Western Chimpanzee", "Western Lowland Gorilla"]

const pickSpecies = () => {
    let num = Math.trunc((Math.random() * (speciesArray.length - 0) + 0))
    return speciesArray[num]
}


//1.4. Fetch random Biography via API
// const fetchBio = async () => {
//     try {
//         let apiResponse = await axios.get("https://www.randomtext.me/api/lorem/ul-5/5-15");
//         return apiResponse.data.text_out;
//     }
//     catch (error) {
//         return "Let's not talk about this one...";
//     }
// }


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

//GENERATE ON LOAD
//Makes it so 9 Animals are generated on page load
window.onload = () => {
    for (let i = 0; i < 9; i++) {
        create();
    }
}