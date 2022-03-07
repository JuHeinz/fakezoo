window.onscroll = function () {
    //Changes opacity of navigation on scroll
    var nav2 = document.getElementById('nav2');
    if (window.pageYOffset > 75) {
        nav2.classList.add("transparent-navbar");
    }
    else {
        nav2.classList.remove("transparent-navbar");

    }
}


