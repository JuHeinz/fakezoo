console.log("animals.js connected");

/// ARRAYS
var anim = ["Aardvark", "African Buffalo", "African Elephant", "African Wild Dog", "Aldabra Giant Tortoise", "Amazonian Giant Centipede", "American Bison", "Arctic Wolf", "Bactrian Camel", "Baird's Tapir", "Bengal Tiger", " Black Wildebeest ", " Boa Constrictor ", " Bongo ", " Bonobo ", " Bornean Orangutan ", " Brazilian Salmon Pink Tarantula ", " Brazilian Wandering Spider ", " Cheetah ", " Chinese Pangolin ", " Colombian White-Faced Capuchin Monkey", "Common Death Adder", "Common Ostrich", "Common Warthog", "Dall Sheep", "Eastern Brown Snake", "Formosan Black Bear", "Galapagos Giant Tortoise", "Gemsbok", "Gharial", "Giant Anteater", "Giant Burrowing Cockroach", "Giant Desert Hairy Scorpion", "Giant Forest Scorpion", "Giant Panda", "Giant Tiger Land Snail", "Gila Monster", "Golden Poison Frog", "Goliath Beetle", "Goliath Birdeater", "Goliath Frog", "Greater Flamingo", "Green Iguana", "Grizzly Bear", "Himalayan Brown Bear", "Hippopotamus", "Indian Elephant", "Indian Peafowl", "Indian Rhinoceros", "Jaguar", "Japanese Macaque", "Komodo Dragon", "Lehmann's Poison Frog", "Lesser Antillean Iguana", "Llama", "Mandrill", "Mexican Redknee Tarantula", "Nile Monitor", "Nyala", "Okapi", "Plains Zebra", "Polar Bear", "Pronghorn Antelope", "Puff Adder", "Pygmy Hippo", "Red-Eyed Tree Frog", "Red Panda", "Red Ruffed Lemur", "Reindeer", "Reticulated Giraffe", "Ring Tailed Lemur", "Sable Antelope", "Saltwater Crocodile", "Siberian Tiger", "Snow Leopard", "Spotted Hyena", "Springbok", "Thomson's Gazelle", "Timber Wolf", "Titan Beetle", "West African Lion", "Western Chimpanzee", "Western Diamondback Rattlesnake", "Western Lowland Gorilla", "Yellow Anaconda"];
var sex = ['♀️', '♂️'];
var named = [" Abominable Snowman ", " Acer ", " A.J. ", " Al McWhiggin ", " Alec Azam ", " Alfredo Linguini ", " Aliens ", " Alpha ", " Anchor ", " Andy Davis ", " Andy's Mom ", " Anger ", " Anton Ego ", " Arlo ", " Art ", " Auguste Gusteau ", " Augustus Jones ", " AUTO ", " Baboso Gortega ", " Babs ", " Baby Smitty ", " Babyface ", " Bailey ", " Barbie ", " Bass ", " Becky ", " Benson ", " Bernie Kropp ", " Berto Rivera ", " Beta ", " Billy ", " Bing Bong ", " BIRD-E ", " Bloat ", " Bob Gunderson ", " Bonnie ", " Bonnie's Mom ", " Bo Peep ", " Bomb Voyage ", " Boo ", " Bookworm ", " Prof. Brandywine ", " Brent Mustangburger ", " Brian ", " Britney Davis ", " BRL-A ", " Brock Pearson ", " Bruce ", " Brynn Larson ", " Bubbles ", " Buck ", " BUF-4 ", " Bullseye ", " Bunny ", " BURN-E ", " Buster ", " Butch ", " Buttercup ", " Buzz Lightyear ", " CA-E ", " Cal Weathers ", " Captain B. McCrea ", " Capn Suds ", " Carl Fredricksen ", " Carla 'Killer Claws' Benitez ", " Carla Delgado ", " Carrie Williams ", " CARSTIC ", " CART-IS ", " CDA agents ", " Celia Mae ", " Charles F. Muntz ", " Charlie Proctor ", " Chatter Telephone ", " Chet Alexander ", " Chicharrón ", " Chick Hicks ", " Chip Goff ", " Chuck E. Duck ", " Chuckles ", " Chunk ", " Chum ", " Charlie ", " Claire Wheeler ", " Coco Rivera ", " Collette Tatou ", " Condorman ", " Coral ", " Crabby the Boat ", " Crow, The ", " Crush ", " Cuddles ", " Cruz Ramirez ", " Crystal Du Bois ", " D-FIB ", " Dad ", " Dante ", " Darla Sherman ", " Darrell Cartrip ", " Dash Parr ", " David Hobbscap ", " Dean Hardscrabble ", " Deb (and Flo) ", " Debbie Gabler ", " Destiny ", " Dim ", " Dirk Pratt ", " Disgust ", " DJ Blu-Jay ", " Django ", " Doc Hudson ", " Dolly ", " Don Carlton ", " Donna Soohoo ", " Dory ", " Dr. Flora ", " Drips ", " Ducky ", " Ducky ", " Dug ", " Duke Caboom ", " Dusty ", " Earl ", " Earl 'The Terror'' Thompson ", " Edith ", " Edna Mode ", " Elastigirl/Helen Parr ", " Elena Rivera ", " Elinor ", " Ellie Fredricksen ", " Emile ", " Emmet ", " Emperor Zurg ", " Epsilon ", " Ernesto de la Cruz ", " Ernie ", " EVE ", " Evelyn Deavor ", " Felipe and Oscar Rivera ", " Fear ", " FIL-R ", " Fillmore ", " Finn McMissile ", " FIX-IT ", " Flik ", " Flo ", " Fluke ", " FM-AD ", " Forrest Woodbush ", " Forky ", " Francesco Bernoulli ", " Francis ", " Franklin ", " Fred ", " 'Frightening' Frank McCay ", " Miss Fritter ", " Fritz ", " Frog ", " Frozone/Lucius Best ", " Fungus ", " Funky Monk ", " GA-FO ", " Gabby Gabby ", " Gamma ", " Gary Grappling Hook ", " George ", " George Sanderson ", " GER-8 ", " Geri ", " Gerald ", " Ghost Burger ", " Giggle McDimples ", " Gilbert Huph ", " Gill ", " GO-4 ", " Gordon ", " GRAB-E ", " Grem ", " Guido ", " Gurgle ", " Gustavo ", " Gypsy ", " Hal ", " Hamm ", " HAN-S ", " Hank ", " Hank 'The Tank' Knapp ", " Hannah Phillips ", " Harv ", " He-Lectrix ", " Heather Olson ", " Héctor Rivera ", " Heimlich ", " Henry J. Waternoose III ", " HLM-T ", " Holley Shiftwell ", " Hopper ", " Imelda Rivera ", " Jack-Jack Parr ", " Jackson Storm ", " Jacques ", " James P. Sullivan ", " Jangles the Clown ", " Javier Rios ", " Jeff Gorvette ", " Jenny ", " Jerry ", " Jerry Recycled Batteries ", " Jessie ", " John ", " John Lassetire ", " Johnny Worthington ", " Joy ", " Juan Ortodoncia ", " Julio Rivera ", " Karen Graves ", " Kari McKeen ", " Ken ", " Kevin ", " King Fergus ", " Knick ", " KO-PS ", " Koala Kopter ", " Krushauer ", " KY-LE ", " L-T ", " LA-NS ", " Lanky Schmidt ", " Legs ", " Lele ", " Lenny ", " Lewis Hamilton ", " Lightning McQueen ", " Lizard Wizard ", " Lizzie ", " LO-A ", " Lord MacGuffin ", " Lord Macintosh ", " Lord Dingwall ", " LOTD ", " Lots-O'-Huggin' Bear ", " Louise Nash ", " Luigi ", " Lumpy ", " Luxo Jr. ", " Luxo Sr. ", " M-O ", " Mabel ", " Mack ", " Magic 8-Ball ", " Mamá Rivera ", " Mama Topolino ", " Manny ", " Maria Garcia ", " Marlin ", " Martin ", " Mary ", " Mater ", " Maudie ", " Meg ", " Merida ", " Mia ", " Miguel ", " Mike Wazowski ", " Miles Axlerod ", " Mini Buzz Lightyear ", " Mini Zurg ", " Minny ", " Mirage ", " MO-NS ", " MOEA-E ", " Molly Davis ", " Molt ", " Mom ", " Momma Ida ", " Moonfish, School of ", " Mr. B ", " Mr. Incredible/Robert Parr ", " Mr. Potato Head ", " Mr. Pricklepants ", " Mr. Ray ", " Mr. Shark ", " Mr. Soil ", " Mr. Spell ", " Mrs. Potato Head ", " Ms. Flint ", " Mustafa ", " MVR-A ", " NAN-E ", " Nadya Petrov ", " Nancy Kim ", " Naomi Jackson ", " Nash ", " Natalie Certain ", " Needleman and Smitty ", " Nemo ", " Neptuna ", " Nervous Sys-Tim ", " Nigel ", " Omar Harris ", " Omega ", " Otis ", " PCA-R ", " Papá Rivera ", " Peach ", " Peas-in-a-Pod ", " Peter 'Claws' Ward ", " Percy Boleslaw ", " Pizza Bot ", " Poppa Henry ", " POW-R ", " PR-T ", " PRL-S ", " Presto DiGiotagione ", " Princess Atta ", " Princess Dot ", " Professor Knight ", " Professor Zündapp ", " P.T. Flea ", " Queen, The ", " The Queen of England ", " Ramone ", " Ramsey ", " Randall Boggs ", " RC ", " Recycle Ben ", " Red ", " Red ", " Referee ", " REM-E ", " REM-O ", " Remy ", " Rex ", " Rhonda Boyd ", " Rick Dicker ", " Ricky Plesuski ", " Riley Anderson ", " Riley's Dad ", " Riley's Mom ", " River Scott ", " Robot ", " Rocky Gibraltar ", " Rod 'Torque'' Redline ", " Roller Bob ", " Rosie ", " Rosie Levin ", " Rosita Rivera ", " Roxy Boxy ", " Roy 'Big Red' O'Growlahan ", " Roz ", " Rudder ", " Russell ", " Rusty ", " Sadness ", " Sally Carrera ", " Sanjay ", " Sarge ", " Sarge ", " SAUT-A ", " Scott 'Squishy' Squibbles ", " SCRDA-R ", " SECUR-T ", " Shelby Forthright, BnL CEO ", " Sheriff ", " Sheriff Woody ", " Sherri Squibbles ", " Sid Phillips ", " Siddeley ", " Skinner ", " Slim ", " Slinky Dog ", " Slug ", " Smokey ", " Snake ", " Sonia Lewis ", " Sparks ", " Spot ", " SPR-A ", " Squirt ", " SR-V ", " Steve ", " Stinky Pete the Prospector ", " Stretch ", " Strip Weathers ", " Stu ", " Super Pirate ", " SUPPLY-R ", " Susan Jensen ", " Syndrome/Buddy Pine ", " T-Bone ", " TA-NK ", " Tae-Kwon Doe ", " Taylor Holbook ", " Terri Perry ", " Terry Perry ", " Thaddeus Bile ", " THIRST-E ", " Thunderclap ", " Tia ", " Timmy ", " Tinny ", " Tippy ", " Tom ", " Tomber ", " Tony ", " Tony Rydinger ", " Tony Trihull ", " Totoro ", " Tour Guide Barbie ", " Treble ", " Trixie ", " Troikas ", " Troll ", " Tuck and Roll ", " Twitch ", " TYP-E ", " Uku ", " Uncle Topolino ", " The Underminer ", " Van ", " VAQ-M ", " VEND-R ", " Victoria Rivera ", " Violet Parr ", " Violet Steslicki ", " Vlad the Engineer ", " VN-GO ", " Voyd ", " VRE-S ", " WALL-A ", " WALL-E ", " WALL-O ", " Waxford ", " Wee Dingwall ", " Wheezy ", " Winston Deavor ", " The Witch ", " Young Andy ", " Young Carl ", " Young MacGuffin ", " Young Macintosh ", " Young Merida ", " Young Mike"];
var flavor = ["is sweet and kind. The best animal you will ever meet.", "is a nasty little asshole. Avoid at all cost.", "ate a man once, but he deserved it.", "only wants the best for you.", "only cares about food.", "wants be break free, but we have guns.", "will only accept food served on solid gold bars. This is the reason we need donations.", "once faced god and walked backwards into hell.", "once saved my life by giving me CPR.", "is really amazing and should be the leader of your country.", "is someone you'd want to grab a beer with.", "is just kinda...there.", "is so boring that I don't even know what to write here."];

// nodelist zu Merkmalen holen
var idSpecies = document.querySelectorAll(".idSpecies");
var idSex = document.querySelectorAll(".idSex");
var idName = document.querySelectorAll(".idName");
var idInfo = document.querySelectorAll(".idInfo");

var idSize = document.querySelectorAll(".idSize");
var idImmu = document.querySelectorAll(".idImmu");
var idFert = document.querySelectorAll(".idFert");
var idLife = document.querySelectorAll(".idLife");
var idScore = document.querySelectorAll(".idScore");



// Arrays, wo alles gespeichert wird
var animList = []


for (var i = 0; i < idSpecies.length; i++) {
    var gAnimal = basics();
    animList.push(gAnimal);
}

//Stats generieren und schreiben
// dieser code wird i-mal ausgeführt
function basics() {

    let namedResult = named[Math.floor(Math.random() * named.length)];
    idName[i].innerHTML = namedResult;

    let animResult = anim[Math.floor(Math.random() * anim.length)];
    idSpecies[i].innerHTML = animResult;

    let sexResult = sex[Math.floor(Math.random() * sex.length)];
    idSex[i].innerHTML = sexResult;

    var size = Math.floor(Math.random() * 101);
    idSize[i].innerHTML = size + "%";

    var immu = Math.floor(Math.random() * 101);
    idImmu[i].innerHTML = immu + "%";

    var fert = Math.floor(Math.random() * 101);
    idFert[i].innerHTML = fert + "%";

    var life = Math.floor(Math.random() * 101);
    idLife[i].innerHTML = life + "%";

    var gAnimal = {
        name: namedResult,
        sex: sexResult,
        species: animResult,
        size: size,
        immunity: immu,
        fertility: fert,
        longevity: life,
    };

    console.log(gAnimal);

    return gAnimal;
}


// figure out how to use the results from the above function for another function and then do the rest of the code

// auswählen mit list[0].size 

/// get bars
var sizebar = document.querySelectorAll(".sizebar");
var lifebar = document.querySelectorAll(".lifebar");
var immubar = document.querySelectorAll(".immubar");
var fertbar = document.querySelectorAll(".fertbar");

for (i = 0; i<sizebar.length; i++) {
    bars();
}

function bars() {
    console.log("Function bars is running!")

    // Weite der Bar ändern je nach Stat
    immubar[0].setAttribute("style", 'width: ' + animList[0].immunity + '%');
    immubar[1].setAttribute("style", 'width: ' + animList[1].immunity + '%');
    immubar[2].setAttribute("style", 'width: ' + animList[2].immunity + '%');

    sizebar[0].setAttribute("style", 'width: ' + animList[0].size + '%');
    sizebar[1].setAttribute("style", 'width: ' + animList[1].size + '%');
    sizebar[2].setAttribute("style", 'width: ' + animList[2].size + '%');

    lifebar[0].setAttribute("style", 'width: ' + animList[0].longevity + '%');
    lifebar[1].setAttribute("style", 'width: ' + animList[1].longevity + '%');
    lifebar[2].setAttribute("style", 'width: ' + animList[2].longevity + '%');

    fertbar[0].setAttribute("style", 'width: ' + animList[0].fertility + '%');
    fertbar[1].setAttribute("style", 'width: ' + animList[1].fertility + '%');
    fertbar[2].setAttribute("style", 'width: ' + animList[2].fertility + '%');

// Farbe der Bar ändern je nach Stat

    for (var j = 0; j < lifebar.length; j++) {
        //change sizebar color
        if (animList[j].size < 25) {
            sizebar[j].classList.add("statusRed");
        }

        else if (animList[j].size < 50) {
            sizebar[j].classList.add("statusOrange");
        }
        else {
            sizebar[j].classList.add("statusGreen");
        }

        //change lifebar color
        if (animList[j].longevity < 25) {
            lifebar[j].classList.add("statusRed");
        }

        else if (animList[j].longevity < 50) {
            lifebar[j].classList.add("statusOrange");
        }
        else {
            lifebar[j].classList.add("statusGreen");
        }

        //change immubar color
        if (animList[j].immunity < 25) {
            immubar[j].classList.add("statusRed");
        }

        else if (animList[j].immunity < 50) {
            immubar[j].classList.add("statusOrange");
        }
        else {
            immubar[j].classList.add("statusGreen");
        }

        //change fertbar color
        if (animList[j].fertility < 25) {
            fertbar[j].classList.add("statusRed");
        }

        else if (animList[j].fertility < 50) {
            fertbar[j].classList.add("statusOrange");
        }
        else {
            fertbar[j].classList.add("statusGreen");
        }
    }
}






// // ID INFO
// let flavorResult = flavor[Math.floor(Math.random() * flavor.length)];
// idInfo[i] = namedResult + flavorResult + " " + verdict; 
// }

//  Pronomen für Text
//     if (sexResult === "♀️") { pronoun = "her"; }
//     else {
//         pronoun = "his";
//     }

//     // Fazit aus  Score
//     if (score > 80) { verdict = "Because of " + pronoun + " great genetics, " + namedResult + " will play an important role in re-populating the" + animResult + "."; }
//     else if (score > 50) { verdict = namedResult + "will be released into the wild to re-populate " + pronoun + " species one day."; }
//     else {
//         verdict = "While " + namedResult + "'s genetics may not contribute to a healthy re-population of the" + animResult + ", hopefully " + pronoun + " presence can still bring joy to you!";
//     }








// function write2 (){

//    

//     // FERTILITY WARNING
//     if (fert < 10) { warning = "Do not expect offspring"; }
//     else {
//          warning = null;
//     }
//     document.querlySelectorAll("idWarning").innerHTML = warning;


//     // Pronomen für Text
//     if (sexResult === "♀️") { pronoun = "her"; }
//     else {
//         pronoun = "his";
//     }

//     // Fazit aus  Score
//     if (score > 80) { verdict = "Because of " + pronoun + " great genetics, " + namedResult + " will play an important role in re-populating the" + animResult + "."; }
//     else if (score > 50) { verdict = namedResult + "will be released into the wild to re-populate " + pronoun + " species one day."; }
//     else {
//         verdict = "While " + namedResult + "'s genetics may not contribute to a healthy re-population of the" + animResult + ", hopefully " + pronoun + " presence can still bring joy to you!";
//     }


//     // Zeigt Badge wenn bedroht
//     var conservation
//     if (animResult === "Aardvark" || animResult === "Antillean Iguana" || animResult === "Bornean Orangutan" || animResult === "Chinese Pangolin" || animResult === "Gharial" || animResult === "Himalayan Brown Bear" || animResult === "Lehmann’s Poison Frog" || animResult === "Red Ruffed Lemur" || animResult === "West African Lion" || animResult === "Western Chimpanzee" || animResult === "Western Lowland Gorilla") {
//         conservation = "Critically Endangered!";
//     }
//     else {
//         conservation = none;
//     }
//     document.querlySelectorAll("idConservation").innerHTML = conservation;

// }























/// ADOPTION
var adoptionOverlay = document.querySelectorAll('.overlayHere');
var appearText = document.querySelectorAll(".overlayText");

function adoptionEffect(id) {

    // give image overlay when button in modal pressed
    adoptionOverlay[id].classList.add("adoptedOverlay");

    // overlay text also appears
    appearText[id].classList.add("overlayTextAppear");

    // // also disable adoption button
    // document.querySelectorAll("adoptionButton").disabled = true;

}


// Gibt an wie viele Elemente im Array sind  
document.getElementById("animLenght").innerHTML = anim.length;
document.getElementById("namedLenght").innerHTML = named.length;
document.getElementById("sexLenght").innerHTML = sex.length;
document.getElementById("combinations").innerHTML = anim.length * named.length * sex.length;
