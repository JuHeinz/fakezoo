    window.onscroll = function() {
        // console.log(window.pageYOffset);
        var nav2 = document.getElementById('nav2');
        if ( window.pageYOffset > 75 ) {
            nav2.classList.add("navbar2Scroll");
            }
        else {
            nav2.classList.remove("navbar2Scroll");

        }
        }
