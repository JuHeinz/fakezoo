console.log("Connected");

// get how many tickets were ordered
// total ticket prices










var form = document.getElementById("ticketForm");
var sumA = document.querySelector("#sumA");


function order(){
        
        // Get input from Form
        var ticketsA = form.elements[0].value;
        var priceA = ticketsA * 20;

        var ticketsB = form.elements[1].value;
        var priceB = ticketsB * 15;

        var ticketsC = form.elements[2].value;
        var priceC = ticketsC * 10;

        // Sum up totals
        var ticketsTotal = parseInt(ticketsA, 10) + parseInt(ticketsB, 10) + parseInt(ticketsC, 10);
        var priceTotal = priceA + priceB + priceC;

        // Output Order Summary Table
        var sumA = document.querySelector("#sumA");
        sumA.innerHTML = "Adult Entry (" +ticketsA + "): " + priceA +"€";

        var sumB = document.querySelector("#sumB");
        sumB.innerHTML = "Child Entry (" +ticketsB + "): " + priceB +"€";

        var sumC = document.querySelector("#sumC");
        sumC.innerHTML = "Discounted Entry (" +ticketsC + "): " + priceC +"€";

        // Output Confirmation Request
        var orderMessage = document.querySelector(".orderMessage");
        orderMessage.innerHTML = "Do you want to order " + ticketsTotal + " Tickets for a total of " + priceTotal + "€ ?";
        console.log("Do you want to order " + ticketsTotal + " Tickets for a total of " + priceTotal + "€ ?")

    
}


   

