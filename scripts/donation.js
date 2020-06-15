// GENERATE ANIMAL
var anim = ["Aardvark", "African Buffalo", "African Elephant", "African Wild Dog", "Aldabra Giant Tortoise", "Amazonian Giant Centipede", "American Bison", "Arctic Wolf", "Bactrian Camel", "Baird's Tapir", "Bengal Tiger", " Black Wildebeest ", " Boa Constrictor ", " Bongo ", " Bonobo ", " Bornean Orangutan ", " Brazilian Salmon Pink Tarantula ", " Brazilian Wandering Spider ", " Cheetah ", " Chinese Pangolin ", " Colombian White-Faced Capuchin Monkey", "Common Death Adder", "Common Ostrich", "Common Warthog", "Dall Sheep", "Eastern Brown Snake", "Formosan Black Bear", "Galapagos Giant Tortoise", "Gemsbok", "Gharial", "Giant Anteater", "Giant Burrowing Cockroach", "Giant Desert Hairy Scorpion", "Giant Forest Scorpion", "Giant Panda", "Giant Tiger Land Snail", "Gila Monster", "Golden Poison Frog", "Goliath Beetle", "Goliath Birdeater", "Goliath Frog", "Greater Flamingo", "Green Iguana", "Grizzly Bear", "Himalayan Brown Bear", "Hippopotamus", "Indian Elephant", "Indian Peafowl", "Indian Rhinoceros", "Jaguar", "Japanese Macaque", "Komodo Dragon", "Lehmann's Poison Frog", "Lesser Antillean Iguana", "Llama", "Mandrill", "Mexican Redknee Tarantula", "Nile Monitor", "Nyala", "Okapi", "Plains Zebra", "Polar Bear", "Pronghorn Antelope", "Puff Adder", "Pygmy Hippo", "Red-Eyed Tree Frog", "Red Panda", "Red Ruffed Lemur", "Reindeer", "Reticulated Giraffe", "Ring Tailed Lemur", "Sable Antelope", "Saltwater Crocodile", "Siberian Tiger", "Snow Leopard", "Spotted Hyena", "Springbok", "Thomson's Gazelle", "Timber Wolf", "Titan Beetle", "West African Lion", "Western Chimpanzee", "Western Diamondback Rattlesnake", "Western Lowland Gorilla", "Yellow Anaconda"];
var named = [" Abominable Snowman ", " Acer ", " A.J. ", " Al McWhiggin ", " Alec Azam ", " Alfredo Linguini ", " Aliens ", " Alpha ", " Anchor ", " Andy Davis ", " Andy's Mom ", " Anger ", " Anton Ego ", " Arlo ", " Art ", " Auguste Gusteau ", " Augustus Jones ", " AUTO ", " Baboso Gortega ", " Babs ", " Baby Smitty ", " Babyface ", " Bailey ", " Barbie ", " Bass ", " Becky ", " Benson ", " Bernie Kropp ", " Berto Rivera ", " Beta ", " Billy ", " Bing Bong ", " BIRD-E ", " Bloat ", " Bob Gunderson ", " Bonnie ", " Bonnie's Mom ", " Bo Peep ", " Bomb Voyage ", " Boo ", " Bookworm ", " Prof. Brandywine ", " Brent Mustangburger ", " Brian ", " Britney Davis ", " BRL-A ", " Brock Pearson ", " Bruce ", " Brynn Larson ", " Bubbles ", " Buck ", " BUF-4 ", " Bullseye ", " Bunny ", " BURN-E ", " Buster ", " Butch ", " Buttercup ", " Buzz Lightyear ", " CA-E ", " Cal Weathers ", " Captain B. McCrea ", " Capn Suds ", " Carl Fredricksen ", " Carla 'Killer Claws' Benitez ", " Carla Delgado ", " Carrie Williams ", " CARSTIC ", " CART-IS ", " CDA agents ", " Celia Mae ", " Charles F. Muntz ", " Charlie Proctor ", " Chatter Telephone ", " Chet Alexander ", " Chicharrón ", " Chick Hicks ", " Chip Goff ", " Chuck E. Duck ", " Chuckles ", " Chunk ", " Chum ", " Charlie ", " Claire Wheeler ", " Coco Rivera ", " Collette Tatou ", " Condorman ", " Coral ", " Crabby the Boat ", " Crow, The ", " Crush ", " Cuddles ", " Cruz Ramirez ", " Crystal Du Bois ", " D-FIB ", " Dad ", " Dante ", " Darla Sherman ", " Darrell Cartrip ", " Dash Parr ", " David Hobbscap ", " Dean Hardscrabble ", " Deb (and Flo) ", " Debbie Gabler ", " Destiny ", " Dim ", " Dirk Pratt ", " Disgust ", " DJ Blu-Jay ", " Django ", " Doc Hudson ", " Dolly ", " Don Carlton ", " Donna Soohoo ", " Dory ", " Dr. Flora ", " Drips ", " Ducky ", " Ducky ", " Dug ", " Duke Caboom ", " Dusty ", " Earl ", " Earl 'The Terror'' Thompson ", " Edith ", " Edna Mode ", " Elastigirl/Helen Parr ", " Elena Rivera ", " Elinor ", " Ellie Fredricksen ", " Emile ", " Emmet ", " Emperor Zurg ", " Epsilon ", " Ernesto de la Cruz ", " Ernie ", " EVE ", " Evelyn Deavor ", " Felipe and Oscar Rivera ", " Fear ", " FIL-R ", " Fillmore ", " Finn McMissile ", " FIX-IT ", " Flik ", " Flo ", " Fluke ", " FM-AD ", " Forrest Woodbush ", " Forky ", " Francesco Bernoulli ", " Francis ", " Franklin ", " Fred ", " 'Frightening' Frank McCay ", " Miss Fritter ", " Fritz ", " Frog ", " Frozone/Lucius Best ", " Fungus ", " Funky Monk ", " GA-FO ", " Gabby Gabby ", " Gamma ", " Gary Grappling Hook ", " George ", " George Sanderson ", " GER-8 ", " Geri ", " Gerald ", " Ghost Burger ", " Giggle McDimples ", " Gilbert Huph ", " Gill ", " GO-4 ", " Gordon ", " GRAB-E ", " Grem ", " Guido ", " Gurgle ", " Gustavo ", " Gypsy ", " Hal ", " Hamm ", " HAN-S ", " Hank ", " Hank 'The Tank' Knapp ", " Hannah Phillips ", " Harv ", " He-Lectrix ", " Heather Olson ", " Héctor Rivera ", " Heimlich ", " Henry J. Waternoose III ", " HLM-T ", " Holley Shiftwell ", " Hopper ", " Imelda Rivera ", " Jack-Jack Parr ", " Jackson Storm ", " Jacques ", " James P. Sullivan ", " Jangles the Clown ", " Javier Rios ", " Jeff Gorvette ", " Jenny ", " Jerry ", " Jerry Recycled Batteries ", " Jessie ", " John ", " John Lassetire ", " Johnny Worthington ", " Joy ", " Juan Ortodoncia ", " Julio Rivera ", " Karen Graves ", " Kari McKeen ", " Ken ", " Kevin ", " King Fergus ", " Knick ", " KO-PS ", " Koala Kopter ", " Krushauer ", " KY-LE ", " L-T ", " LA-NS ", " Lanky Schmidt ", " Legs ", " Lele ", " Lenny ", " Lewis Hamilton ", " Lightning McQueen ", " Lizard Wizard ", " Lizzie ", " LO-A ", " Lord MacGuffin ", " Lord Macintosh ", " Lord Dingwall ", " LOTD ", " Lots-O'-Huggin' Bear ", " Louise Nash ", " Luigi ", " Lumpy ", " Luxo Jr. ", " Luxo Sr. ", " M-O ", " Mabel ", " Mack ", " Magic 8-Ball ", " Mamá Rivera ", " Mama Topolino ", " Manny ", " Maria Garcia ", " Marlin ", " Martin ", " Mary ", " Mater ", " Maudie ", " Meg ", " Merida ", " Mia ", " Miguel ", " Mike Wazowski ", " Miles Axlerod ", " Mini Buzz Lightyear ", " Mini Zurg ", " Minny ", " Mirage ", " MO-NS ", " MOEA-E ", " Molly Davis ", " Molt ", " Mom ", " Momma Ida ", " Moonfish, School of ", " Mr. B ", " Mr. Incredible/Robert Parr ", " Mr. Potato Head ", " Mr. Pricklepants ", " Mr. Ray ", " Mr. Shark ", " Mr. Soil ", " Mr. Spell ", " Mrs. Potato Head ", " Ms. Flint ", " Mustafa ", " MVR-A ", " NAN-E ", " Nadya Petrov ", " Nancy Kim ", " Naomi Jackson ", " Nash ", " Natalie Certain ", " Needleman and Smitty ", " Nemo ", " Neptuna ", " Nervous Sys-Tim ", " Nigel ", " Omar Harris ", " Omega ", " Otis ", " PCA-R ", " Papá Rivera ", " Peach ", " Peas-in-a-Pod ", " Peter 'Claws' Ward ", " Percy Boleslaw ", " Pizza Bot ", " Poppa Henry ", " POW-R ", " PR-T ", " PRL-S ", " Presto DiGiotagione ", " Princess Atta ", " Princess Dot ", " Professor Knight ", " Professor Zündapp ", " P.T. Flea ", " Queen, The ", " The Queen of England ", " Ramone ", " Ramsey ", " Randall Boggs ", " RC ", " Recycle Ben ", " Red ", " Red ", " Referee ", " REM-E ", " REM-O ", " Remy ", " Rex ", " Rhonda Boyd ", " Rick Dicker ", " Ricky Plesuski ", " Riley Anderson ", " Riley's Dad ", " Riley's Mom ", " River Scott ", " Robot ", " Rocky Gibraltar ", " Rod 'Torque'' Redline ", " Roller Bob ", " Rosie ", " Rosie Levin ", " Rosita Rivera ", " Roxy Boxy ", " Roy 'Big Red' O'Growlahan ", " Roz ", " Rudder ", " Russell ", " Rusty ", " Sadness ", " Sally Carrera ", " Sanjay ", " Sarge ", " Sarge ", " SAUT-A ", " Scott 'Squishy' Squibbles ", " SCRDA-R ", " SECUR-T ", " Shelby Forthright, BnL CEO ", " Sheriff ", " Sheriff Woody ", " Sherri Squibbles ", " Sid Phillips ", " Siddeley ", " Skinner ", " Slim ", " Slinky Dog ", " Slug ", " Smokey ", " Snake ", " Sonia Lewis ", " Sparks ", " Spot ", " SPR-A ", " Squirt ", " SR-V ", " Steve ", " Stinky Pete the Prospector ", " Stretch ", " Strip Weathers ", " Stu ", " Super Pirate ", " SUPPLY-R ", " Susan Jensen ", " Syndrome/Buddy Pine ", " T-Bone ", " TA-NK ", " Tae-Kwon Doe ", " Taylor Holbook ", " Terri Perry ", " Terry Perry ", " Thaddeus Bile ", " THIRST-E ", " Thunderclap ", " Tia ", " Timmy ", " Tinny ", " Tippy ", " Tom ", " Tomber ", " Tony ", " Tony Rydinger ", " Tony Trihull ", " Totoro ", " Tour Guide Barbie ", " Treble ", " Trixie ", " Troikas ", " Troll ", " Tuck and Roll ", " Twitch ", " TYP-E ", " Uku ", " Uncle Topolino ", " The Underminer ", " Van ", " VAQ-M ", " VEND-R ", " Victoria Rivera ", " Violet Parr ", " Violet Steslicki ", " Vlad the Engineer ", " VN-GO ", " Voyd ", " VRE-S ", " WALL-A ", " WALL-E ", " WALL-O ", " Waxford ", " Wee Dingwall ", " Wheezy ", " Winston Deavor ", " The Witch ", " Young Andy ", " Young Carl ", " Young MacGuffin ", " Young Macintosh ", " Young Merida ", " Young Mike"];
var sex = ['♀️', '♂️'];

var boxes = document.querySelectorAll(".animal");
for (var i =0; i < boxes.length; i++) {
    basics();
}

function basics(){
    let animResult = anim[Math.floor(Math.random() * anim.length)];
    let namedResult = named[Math.floor(Math.random() * named.length)];
    let sexResult = sex[Math.floor(Math.random() * sex.length)];


    document.querySelector(".idSpecies").innerHTML = animResult;
    document.querySelector(".idName").innerHTML = namedResult;
    document.querySelector(".idSex").innerHTML = sexResult;
}




// Set random bank account 
let accountBalance =  Math.floor(Math.random() * 100.1);
document.getElementById("idAccount").innerHTML = accountBalance;


// Chose feed cost of displayed animal at random
// The +1 is there so cost is never 0
function howmuchistheFish() {
        let cost = Math.floor(Math.random() * 10.1) + 1;
        document.getElementById("idCost").innerHTML = cost;
        console.log(cost);
}


// Donation via input field
function pwyw (){
    var inputForm = document.getElementById("inputForm");
    let spende = parseInt(inputForm.elements[0].value, 10);
    console.log("Donated " + spende);
    // increment account by that number
    accountBalance += spende;
    document.getElementById("idAccount").innerHTML = accountBalance;
    
    // update animals fed and sobstory
    var animalsFed = accountBalance / 5.98;
    document.getElementById("idFed").innerHTML = Math.trunc(animalsFed);
    var sobstory = Math.trunc((animalsFed /534)*100);
    document.getElementById("idSobstory").innerHTML = sobstory;

    // updated alert color
    if (sobstory > 100) {
        var x = document.getElementById("x");
        x.classList.add("alert-success");
        x.classList.remove("alert-danger");
    }

}

// donation via Button
function addtoCounter(spende) {
    console.log(accountBalance += spende);
    document.getElementById("idAccount").innerHTML = accountBalance;

    // update animals fed and sobstory
    var animalsFed = accountBalance / 5.98;
    document.getElementById("idFed").innerHTML = Math.trunc(animalsFed);
    var sobstory = Math.trunc((animalsFed /534)*100);
    document.getElementById("idSobstory").innerHTML = sobstory;

    // updated alert color
    if (sobstory > 100) {
        var x = document.getElementById("x");
        x.classList.add("alert-success");
        x.classList.remove("alert-danger");
    }
}


// Show how many animals were fed with account balance
var animalsFed = accountBalance / 5.98;
document.getElementById("idFed").innerHTML = Math.trunc(animalsFed);
document.getElementById("idSobstory").innerHTML = Math.trunc((animalsFed /534)*100);

// Change Alert Color when 100% animals fed



// PSEUDO TRACKING: Do something any time donationBtn was clicked
var button = document.querySelectorAll(".donationBtn")          
// Bei mehreren Elementen mit der selben Klasse muss man einen For-Loop einbauen um alle abzudecken
for  (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", tracking)
}
function tracking() {
        console.log("Tracked that shit")
    }       