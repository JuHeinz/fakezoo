window.onscroll = function () {
    // console.log(window.pageYOffset);
    var nav2 = document.getElementById('nav2');
    if (window.pageYOffset > 75) {
        nav2.classList.add("navbar2Scroll");
    }
    else {
        nav2.classList.remove("navbar2Scroll");

    }
}


window.onload = function () {
    let date = new Date();
    let [month, day, year] = [date.getMonth() + 1, date.getDate(), date.getFullYear()];
    console.log(day, month, year);

    let wordMonth;

    switch (month) {
        case 1:
            wordMonth = "January"
            break;
        case 2:
            wordMonth = "February"
            break;
        case 3:
            wordMonth = "March"
            break;
        case 4:
            wordMonth = "April"
            break;
        case 5:
            wordMonth = "May"
            break;
        case 6:
            wordMonth = "June"
            break;
        case 7:
            wordMonth = "July"
            break;
        case 8:
            wordMonth = "August"
            break;
        case 9:
            wordMonth = "September"
            break;
        case 10:
            wordMonth = "October"
            break;
        case 11:
            wordMonth = "November"
            break;
        case 12:
            wordMonth = "December"
            break;

    }


    const timeSpan = document.querySelector("#timeSpan");
    timeSpan.innerText = day + ". " + wordMonth + " " + year;
}