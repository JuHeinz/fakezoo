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



for (var i =0; i < idSpecies.length; i++) {
    basics();
}

 //Stats generieren und schreiben
function basics(){

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
    }

    
// figure out how to use the results from the above function for another function and then do the rest of the code



    
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

    // /// DEFINIERE STATS
// // Genetic Stats


// /// WRITE ALL INFO
// function write() {


//    
// }

// /// get bars
// var sizebar = document.querySelector("#sizebar")
// var lifebar = document.querySelector("#lifebar")
// var immubar = document.querySelector("#immubar")
// var fertbar = document.querySelector("#fertbar")

// // Gibt an wie viele Elemente im Array sind  
// document.getElementById("animLenght").innerHTML = anim.length;
// document.getElementById("namedLenght").innerHTML = named.length;
// document.getElementById("sexLenght").innerHTML = sex.length;
// document.getElementById("combinations").innerHTML = anim.length * named.length * sex.length;


// function write2 (){
    
//     /// Weite der Bar ändern je nach Stat
//     immubar.setAttribute("style", 'width: ' + immu + '%');
//     sizebar.setAttribute("style", 'width: ' + size + '%');
//     lifebar.setAttribute("style", 'width: ' + life + '%');
//     fertbar.setAttribute("style", 'width: ' + fert + '%');

//     // Farbe der Bar ändern je nach Stat
//     if (size < 25) {
//         sizebar.classList.add("statusRed");
//     }
//         else if (size < 50) {
//             sizebar.classList.add("statusOrange");
//         }
//             else {
//                 sizebar.classList.add("statusGreen");
//             }

//     if (immu < 25) {
//         immubar.classList.add("statusRed");
//     }
//         else if (immu < 50) {
//             immubar.classList.add("statusOrange");
//         }
//             else {
//                 immubar.classList.add("statusGreen");
//             }

//     if (fert < 25) {
//         fertbar.classList.add("statusRed");
//     }
//         else if (fert < 50) {
//             fertbar.classList.add("statusOrange");
//         }

//             else {
//                 fertbar.classList.add("statusGreen");
//             }

        
//     if (life < 25) {
//         lifebar.classList.add("statusRed");
//     }
//         else if (life < 50) {
//             lifebar.classList.add("statusOrange");
//         }
//             else {
//                 lifebar.classList.add("statusGreen");
//             }

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























// /// ADOPTION
// function adoptionEffect() {

//     // give image overlay when button in modal pressed
//     var adoptionOverlay = document.querySelector(".overlayHere");
//     adoptionOverlay.classList.add("adoptedOverlay");

//     // overlay text also appears
//     var appearText = document.querySelector(".overlayText");
//     appearText.classList.add("overlayTextAppear");

//     // also disable adoption button
//     document.querlySelectorAll("adoptionButton").disabled = true;

//     //verstecke Modal Button
//     var adoptionconfirm = document.querlySelectorAll("adoptionconfirm");
//     adoptionconfirm.classList.add("diappearButton");

//     // ändert Text in Modal
//     document.querlySelectorAll("adoptionModalText").innerHTML = "Thank you so much!";


// }


