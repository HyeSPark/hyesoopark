import customHeader from './components/customHeader.js'
import customFooter from './components/customFooter.js'

customElements.define('custom-header', customHeader);
customElements.define('custom-footer', customFooter);

var isMenuOpened = false;

document.querySelector('.menu').onclick = function (e) {
    var menuList = document.querySelector('.menu_list');
    var menu = document.querySelector('.menu');
    menuList.classList.toggle('hide');
    menu.classList.toggle('open');
    var body = document.querySelector('body')
    if (menu.classList.contains('open')) {
        var st = document.documentElement.scrollTop;
        console.log(st)


        body.style.position = 'fixed';
        body.style.marginTop = `${-1 * st}px`;


        body.style.overflowY = "hidden";
        document.querySelector('html').style.overflowY = "hidden";
        body.style.overscrollBehaviorY = 'none';
        body.style.touchAction = 'pan-x pan-y';
        


        isMenuOpened = true;
    } else {
        
        body.style.removeProperty('overflow-y');
        document.querySelector('html').style.removeProperty('overflow-y');
        body.style.removeProperty('overscroll-behavior-y');
        body.style.removeProperty('touch-action');

        body.style.removeProperty('position');
        var mt = window.getComputedStyle(body).getPropertyValue('margin-top');

        body.style.removeProperty('margin-top');
        if (mt !== '0px') {
            window.scrollTo(0, Number(mt.substring(1, mt.length-2)));
            console.log(Number(mt.substring(1, mt.length-2)))
        }

        isMenuOpened = false;
    }
    
    e.preventDefault();
}


// header scroll event handler
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.querySelector("header").clientHeight;

window.onscroll = function(e) {
    didScroll = true;
}

setInterval(function() {
    if (didScroll) {
        if (!isMenuOpened) {
            hasScrolled();
        }
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = document.documentElement.scrollTop;
    
    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    var header = document.querySelector('header');
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        header.classList.remove('nav-down');
        header.classList.add('nav-up');
        
    } else {
        // Scroll Up
        if(st + window.innerHeight < document.documentElement.scrollHeight) {
            header.classList.remove('nav-up');
            header.classList.add('nav-down');
        }
    }
    
    lastScrollTop = st;
}