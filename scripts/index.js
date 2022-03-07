window.onload = function () {
    // Get current Date
    let date = new Date()

    //Transform to dd/mm/yyyy
    let fullDate = new Intl.DateTimeFormat('en-GB').format(date);

    //Get hour (24h)
    let hour = date.getHours();
    
    //Get day of week (0 - 6)
    let dayOfWeek = date.getDay();


    //Get Month
    let month = date.getMonth()
    
    //Determine opening and closing times
    let openingTime;
    let closingTime;

    // if it is the summer or weekend long hours, else short
    if(month > 4 || dayOfWeek === 0 || dayOfWeek === 6){
        openingTime = 9;
        closingTime = 20
    }else{
        openingTime= 10
        closingTime = 17
    }

    //Render opening hours
    document.querySelector("#openingTime").innerText = openingTime;
    document.querySelector("#closingTime").innerText = closingTime;
    document.querySelector("#lastAdmission").innerText = closingTime - 1;


    //render next Feeding (current hour, except after closing)
    const feedingSpan = document.querySelector("#nextHour");
    if (hour > closingTime){
        hour = openingTime
    }
    feedingSpan.innerText = hour;

    //Render current Date
    const timeSpan = document.querySelector("#timeSpan");
    timeSpan.innerText = fullDate;

    //Render temperature
    document.querySelector("#temperature").innerText = hour;

}