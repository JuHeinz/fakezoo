
//ADOPTION
//Eventlistener must sit on element that is present on page load and not created via js

cardDeck.addEventListener("click", (event) => {
    if (event.target.className === "btn btn-outline-primary float-l adoptionButton") {
        console.log("Adopted");


        let button = event.target;
        //Disable Button
        button.disabled = true
        button.parentElement.parentElement.parentElement.querySelector(".overlayText").classList.add("appear");
        button.parentElement.parentElement.parentElement.querySelector(".placeOverlay").classList.add("adoptedOverlay");
        button.innerText = "Thank you!";
    }

    
}) 
