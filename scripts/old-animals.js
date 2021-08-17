/// ADOPTION
const placeOverlay = document.querySelectorAll(".placeOverlay")
const overlayText = document.querySelectorAll(".overlayText");
function adoptionEffect(id) {

    // give image overlay when button in modal pressed
    placeOverlay[id].classList.add("adoptedOverlay");

    // overlay text also appears
    overlayText[id].style.opacity = "100%"

    // // also disable adoption button
    // document.querySelectorAll("adoptionButton").disabled = true;
}



// Array wo alles aus der Funktion Basics rein returned wird
// erstmal leer, erst nach basics werden dort die i gAnimal Objects reinge-returned
var animList = []

function animals() {
    console.log("animals.js connected");

    /// ARRAYS
    const anim = ["Aardvark", "African Elephant", "Aldabra Giant Tortoise", "American Bison", "Arctic Wolf", "Bactrian Camel", "Baird's Tapir", "Bengal Tiger", " Black Wildebeest ", " Bongo ", " Bonobo ", " Bornean Orangutan ", " Cheetah ", " Chinese Pangolin ", " Colombian White-Faced Capuchin Monkey", "Common Ostrich", "Dall Sheep", "Formosan Black Bear", "Galapagos Giant Tortoise", "Gemsbok", "Gharial", "Giant Anteater", "Giant Panda", "Greater Flamingo", "Grizzly Bear", "Himalayan Brown Bear", "Hippopotamus", "Indian Elephant", "Indian Peafowl", "Indian Rhinoceros", "Jaguar", "Japanese Macaque", "Lesser Antillean Iguana", "Llama", "Mandrill", "Nile Monitor", "Nyala", "Okapi", "Plains Zebra", "Polar Bear", "Pronghorn Antelope", "Pygmy Hippo", "Red Panda", "Reindeer", "Reticulated Giraffe", "Ring Tailed Lemur", "Sable Antelope", "Saltwater Crocodile", "Siberian Tiger", "Snow Leopard", "Spotted Hyena", "Springbok", "Thomson's Gazelle", "Timber Wolf", "West African Lion", "Western Chimpanzee", "Western Lowland Gorilla",];
    var sex = ['♀️', '♂️'];
    var named = [" Abominable Snowman ", " Acer ", " A.J. ", " Al McWhiggin ", " Alec Azam ", " Alfredo Linguini ", " Aliens ", " Alpha ", " Anchor ", " Andy Davis ", " Andy's Mom ", " Anger ", " Anton Ego ", " Arlo ", " Art ", " Auguste Gusteau ", " Augustus Jones ", " AUTO ", " Baboso Gortega ", " Babs ", " Baby Smitty ", " Babyface ", " Bailey ", " Barbie ", " Bass ", " Becky ", " Benson ", " Bernie Kropp ", " Berto Rivera ", " Beta ", " Billy ", " Bing Bong ", " BIRD-E ", " Bloat ", " Bob Gunderson ", " Bonnie ", " Bonnie's Mom ", " Bo Peep ", " Bomb Voyage ", " Boo ", " Bookworm ", " Prof. Brandywine ", " Brent Mustangburger ", " Brian ", " Britney Davis ", " BRL-A ", " Brock Pearson ", " Bruce ", " Brynn Larson ", " Bubbles ", " Buck ", " BUF-4 ", " Bullseye ", " Bunny ", " BURN-E ", " Buster ", " Butch ", " Buttercup ", " Buzz Lightyear ", " CA-E ", " Cal Weathers ", " Captain B. McCrea ", " Capn Suds ", " Carl Fredricksen ", " Carla 'Killer Claws' Benitez ", " Carla Delgado ", " Carrie Williams ", " CARSTIC ", " CART-IS ", " CDA agents ", " Celia Mae ", " Charles F. Muntz ", " Charlie Proctor ", " Chatter Telephone ", " Chet Alexander ", " Chicharrón ", " Chick Hicks ", " Chip Goff ", " Chuck E. Duck ", " Chuckles ", " Chunk ", " Chum ", " Charlie ", " Claire Wheeler ", " Coco Rivera ", " Collette Tatou ", " Condorman ", " Coral ", " Crabby the Boat ", " Crow, The ", " Crush ", " Cuddles ", " Cruz Ramirez ", " Crystal Du Bois ", " D-FIB ", " Dad ", " Dante ", " Darla Sherman ", " Darrell Cartrip ", " Dash Parr ", " David Hobbscap ", " Dean Hardscrabble ", " Deb (and Flo) ", " Debbie Gabler ", " Destiny ", " Dim ", " Dirk Pratt ", " Disgust ", " DJ Blu-Jay ", " Django ", " Doc Hudson ", " Dolly ", " Don Carlton ", " Donna Soohoo ", " Dory ", " Dr. Flora ", " Drips ", " Ducky ", " Ducky ", " Dug ", " Duke Caboom ", " Dusty ", " Earl ", " Earl 'The Terror'' Thompson ", " Edith ", " Edna Mode ", " Elastigirl/Helen Parr ", " Elena Rivera ", " Elinor ", " Ellie Fredricksen ", " Emile ", " Emmet ", " Emperor Zurg ", " Epsilon ", " Ernesto de la Cruz ", " Ernie ", " EVE ", " Evelyn Deavor ", " Felipe and Oscar Rivera ", " Fear ", " FIL-R ", " Fillmore ", " Finn McMissile ", " FIX-IT ", " Flik ", " Flo ", " Fluke ", " FM-AD ", " Forrest Woodbush ", " Forky ", " Francesco Bernoulli ", " Francis ", " Franklin ", " Fred ", " 'Frightening' Frank McCay ", " Miss Fritter ", " Fritz ", " Frog ", " Frozone/Lucius Best ", " Fungus ", " Funky Monk ", " GA-FO ", " Gabby Gabby ", " Gamma ", " Gary Grappling Hook ", " George ", " George Sanderson ", " GER-8 ", " Geri ", " Gerald ", " Ghost Burger ", " Giggle McDimples ", " Gilbert Huph ", " Gill ", " GO-4 ", " Gordon ", " GRAB-E ", " Grem ", " Guido ", " Gurgle ", " Gustavo ", " Gypsy ", " Hal ", " Hamm ", " HAN-S ", " Hank ", " Hank 'The Tank' Knapp ", " Hannah Phillips ", " Harv ", " He-Lectrix ", " Heather Olson ", " Héctor Rivera ", " Heimlich ", " Henry J. Waternoose III ", " HLM-T ", " Holley Shiftwell ", " Hopper ", " Imelda Rivera ", " Jack-Jack Parr ", " Jackson Storm ", " Jacques ", " James P. Sullivan ", " Jangles the Clown ", " Javier Rios ", " Jeff Gorvette ", " Jenny ", " Jerry ", " Jerry Recycled Batteries ", " Jessie ", " John ", " John Lassetire ", " Johnny Worthington ", " Joy ", " Juan Ortodoncia ", " Julio Rivera ", " Karen Graves ", " Kari McKeen ", " Ken ", " Kevin ", " King Fergus ", " Knick ", " KO-PS ", " Koala Kopter ", " Krushauer ", " KY-LE ", " L-T ", " LA-NS ", " Lanky Schmidt ", " Legs ", " Lele ", " Lenny ", " Lewis Hamilton ", " Lightning McQueen ", " Lizard Wizard ", " Lizzie ", " LO-A ", " Lord MacGuffin ", " Lord Macintosh ", " Lord Dingwall ", " LOTD ", " Lots-O'-Huggin' Bear ", " Louise Nash ", " Luigi ", " Lumpy ", " Luxo Jr. ", " Luxo Sr. ", " M-O ", " Mabel ", " Mack ", " Magic 8-Ball ", " Mamá Rivera ", " Mama Topolino ", " Manny ", " Maria Garcia ", " Marlin ", " Martin ", " Mary ", " Mater ", " Maudie ", " Meg ", " Merida ", " Mia ", " Miguel ", " Mike Wazowski ", " Miles Axlerod ", " Mini Buzz Lightyear ", " Mini Zurg ", " Minny ", " Mirage ", " MO-NS ", " MOEA-E ", " Molly Davis ", " Molt ", " Mom ", " Momma Ida ", " Moonfish, School of ", " Mr. B ", " Mr. Incredible/Robert Parr ", " Mr. Potato Head ", " Mr. Pricklepants ", " Mr. Ray ", " Mr. Shark ", " Mr. Soil ", " Mr. Spell ", " Mrs. Potato Head ", " Ms. Flint ", " Mustafa ", " MVR-A ", " NAN-E ", " Nadya Petrov ", " Nancy Kim ", " Naomi Jackson ", " Nash ", " Natalie Certain ", " Needleman and Smitty ", " Nemo ", " Neptuna ", " Nervous Sys-Tim ", " Nigel ", " Omar Harris ", " Omega ", " Otis ", " PCA-R ", " Papá Rivera ", " Peach ", " Peas-in-a-Pod ", " Peter 'Claws' Ward ", " Percy Boleslaw ", " Pizza Bot ", " Poppa Henry ", " POW-R ", " PR-T ", " PRL-S ", " Presto DiGiotagione ", " Princess Atta ", " Princess Dot ", " Professor Knight ", " Professor Zündapp ", " P.T. Flea ", " Queen, The ", " The Queen of England ", " Ramone ", " Ramsey ", " Randall Boggs ", " RC ", " Recycle Ben ", " Red ", " Red ", " Referee ", " REM-E ", " REM-O ", " Remy ", " Rex ", " Rhonda Boyd ", " Rick Dicker ", " Ricky Plesuski ", " Riley Anderson ", " Riley's Dad ", " Riley's Mom ", " River Scott ", " Robot ", " Rocky Gibraltar ", " Rod 'Torque'' Redline ", " Roller Bob ", " Rosie ", " Rosie Levin ", " Rosita Rivera ", " Roxy Boxy ", " Roy 'Big Red' O'Growlahan ", " Roz ", " Rudder ", " Russell ", " Rusty ", " Sadness ", " Sally Carrera ", " Sanjay ", " Sarge ", " Sarge ", " SAUT-A ", " Scott 'Squishy' Squibbles ", " SCRDA-R ", " SECUR-T ", " Shelby Forthright, BnL CEO ", " Sheriff ", " Sheriff Woody ", " Sherri Squibbles ", " Sid Phillips ", " Siddeley ", " Skinner ", " Slim ", " Slinky Dog ", " Slug ", " Smokey ", " Snake ", " Sonia Lewis ", " Sparks ", " Spot ", " SPR-A ", " Squirt ", " SR-V ", " Steve ", " Stinky Pete the Prospector ", " Stretch ", " Strip Weathers ", " Stu ", " Super Pirate ", " SUPPLY-R ", " Susan Jensen ", " Syndrome/Buddy Pine ", " T-Bone ", " TA-NK ", " Tae-Kwon Doe ", " Taylor Holbook ", " Terri Perry ", " Terry Perry ", " Thaddeus Bile ", " THIRST-E ", " Thunderclap ", " Tia ", " Timmy ", " Tinny ", " Tippy ", " Tom ", " Tomber ", " Tony ", " Tony Rydinger ", " Tony Trihull ", " Totoro ", " Tour Guide Barbie ", " Treble ", " Trixie ", " Troikas ", " Troll ", " Tuck and Roll ", " Twitch ", " TYP-E ", " Uku ", " Uncle Topolino ", " The Underminer ", " Van ", " VAQ-M ", " VEND-R ", " Victoria Rivera ", " Violet Parr ", " Violet Steslicki ", " Vlad the Engineer ", " VN-GO ", " Voyd ", " VRE-S ", " WALL-A ", " WALL-E ", " WALL-O ", " Waxford ", " Wee Dingwall ", " Wheezy ", " Winston Deavor ", " The Witch ", " Young Andy ", " Young Carl ", " Young MacGuffin ", " Young Macintosh ", " Young Merida ", " Young Mike"];
    var flavor = ["is sweet and kind. The best animal you will ever meet.", "is a nasty little asshole. Avoid at all cost.", "ate a man once, but he deserved it.", "only wants the best for you.", "only cares about food.", "wants be break free, but we have guns.", "will only accept food served on solid gold bars. This is the reason we need donations.", "once faced god and walked backwards into hell.", "once saved my life by giving me CPR.", "is really amazing and should be the leader of your country.", "is someone you'd want to grab a beer with.", "is just kinda...there.", "is so boring that I don't even know what to write here."];
    var danger = ["Aardvark", "Antillean Iguana", "Bornean Orangutan", "Chinese Pangolin", "Gharial", "Himalayan Brown Bear", "Lehmann’s Poison Frog", "Red Ruffed Lemur", "West African Lion", "Western Chimpanzee", "Western Lowland Gorilla"]

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
    var generation = document.querySelectorAll(".generation")




    // so oft, wie es elemente mit der class 'generation' gibt, wird die funktion basics ausgeführt, 
    //in das Objekt gAnimal gespeichert und das Objekt im Array animList gespeichert
    for (var i = 0; i < generation.length; i++) {
        var gAnimal = basics();
        animList.push(gAnimal);
    }

    /// BASICS
    //Biografie und genetische Informationen generieren und schreiben
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
            score: (immu + fert + life + size) / 4,
        };

        console.log(gAnimal);

        return gAnimal;
    }


    /// get bars
    var sizebar = document.querySelectorAll(".sizebar");
    var lifebar = document.querySelectorAll(".lifebar");
    var immubar = document.querySelectorAll(".immubar");
    var fertbar = document.querySelectorAll(".fertbar");

    for (i = 0; i < generation.length; i++) {
        bars();
    }

    function bars() {
        console.log("Function bars is running!")
        for (var i = 0; i < generation.length; i++) {

            // Weite der Bar ändern je nach Stat
            immubar[i].setAttribute("style", 'width: ' + animList[i].immunity + '%');
            sizebar[i].setAttribute("style", 'width: ' + animList[i].size + '%');
            lifebar[i].setAttribute("style", 'width: ' + animList[i].longevity + '%');
            fertbar[i].setAttribute("style", 'width: ' + animList[i].fertility + '%');

        }
        // Farbe der Bar ändern je nach Stat

        for (var j = 0; j < generation.length; j++) {
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


    // get HTML
    var pillF = document.querySelectorAll(".idWarning");
    var pillC = document.querySelectorAll(".idConservation");
    var idInfo = document.querySelectorAll(".idInfo");
    var pic = document.querySelectorAll(".pic");
    var pronoun
    var verdict

    //die folgenden Funktionen werden so oft ausgeführt, wie es generationen (HTML-animals) gibt
    for (i = 0; i < generation.length; i++) {
        info();
        bild();
    }

    function info() {
        console.log("info running");

        // FERTILITY WARNING
        if (animList[i].fertility > 10) { pillF[i].hidden = true; };

        // // CONSERVATION WARNING
        if (danger.includes(animList[i].species)) {
            pillC[i].hidden = false;
        }
        else {
            pillC[i].hidden = true;

        }

        //PRONOUN
        if (animList[i].sex === "♀️") {
            pronoun = "her";
        }
        else { pronoun = "his" }

        //VERDICT
        if (animList[i].score > 80) {
            verdict = "Because of " + pronoun + " great genetics, " + animList[i].name + " will play an important role in re-populating the" + animList[i].species + "."
        }
        else if (animList[i].score > 50) {
            verdict = animList[i].name + "will be released into the wild to re-populate " + pronoun + " species one day.";;
        }
        else {
            verdict = "While" + animList[i].name + "'s genetics may not contribute to a healthy re-population of the " + animList[i].species + ", hopefully " + pronoun + " presence can still bring joy to you!";
        }


        // FLAVOR
        var flavorResult = flavor[Math.floor(Math.random() * flavor.length)];

        //WRITE INFO
        idInfo[i].innerHTML = animList[i].name + flavorResult + " " + verdict;

    }

    /// PIC REPLACEMENT
    function bild() {
        // für jedes erstellte Tier wird der Speciesname aus dem Objekt geholt, dann werden alle Leerzeichen ' und - entfernt mit replace
        let speciesName = animList[i]["species"].replace(/\s/g, '').replace(/'/g, '').replace(/-/g, '')
        // im HTML Objekt pic wird die Quelle durch den SpeciesNamen erstetzt
        pic[i].src = "./images/animals/" + [speciesName] + ".jpg"
    }


    /// Beispiel für Filter Method & Arrow Function
    var goodAnims = animList.filter(anim => anim.score > 50)


    console.log(goodAnims);

    // Gibt an wie viele Elemente im Array sind  
    document.getElementById("animLenght").innerHTML = anim.length;
    document.getElementById("namedLenght").innerHTML = named.length;
    document.getElementById("sexLenght").innerHTML = sex.length;
    document.getElementById("combinations").innerHTML = anim.length * named.length * sex.length;
}

// Run animals() on
animals();






