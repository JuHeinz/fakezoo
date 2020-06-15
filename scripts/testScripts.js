// console.log("Test script is connected!")

// var display  = document.querySelector("h1");
// var answer = prompt("Do you want to turn the Title red?");
              
// if (answer === "y")
//     {
//         display.style.color ="red";
//         console.log("all right")
//     }
// else
// {
//     console.log("nope")
// }


var rollD
var dx
var finalResult = 0

//Debudgging
// for (var i = 0; i<20; i++)
// {
//     rollDice(4,5)
// }

function rollDice(dx, numD)
{
    for (var i = 0; i < numD; i++)
        {
            var result = Math.floor((Math.random() * 10) +1);
            console.log("You rolled a " + result);
            
        }
        
        console.log("You rolled a " + "d" + dx +" " + numD + " times. Your total is "   );
        
}


//// 0,2 * 1,1 

///d10
    /// let result = Math.floor(Math.random() * 10.1);

///d100  
    /// let result = Math.floor(Math.random() * 101);

///d4
    /// let result = Math.floor(Math.random() * (1.1*4);

///d8
///d20


