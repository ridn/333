function togglenav() {
    var nav = $('#side-nav');//document.getElementById("mobile-nav");
    var origDisplay = nav.css('display');

    if (nav.css('display')==="block") {
        nav.css('animation', 'nav-enter 250ms linear 0ms 1 reverse');
        setTimeout(function(){ nav.css('display', '')},250);
    } else if (nav.css('display')==="none") {
        nav.css('animation', 'nav-enter 250ms linear 0ms 1 forwards');
        nav.css('display', 'block');
    }

}
