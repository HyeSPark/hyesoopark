import customHeader from './components/customHeader.js'
import customFooter from './components/customFooter.js'
import newsContent from './components/newsContent.js'
import projContent from './components/projContent.js'

customElements.define('custom-header', customHeader);
customElements.define('custom-footer', customFooter);
customElements.define('news-content', newsContent);
customElements.define('proj-content', projContent);

document.querySelector('.menu').onclick = function (e) {
    var menuList = document.querySelector('.menu_list');
    var menu = document.querySelector('.menu');
    menuList.classList.toggle('hide');
    menu.classList.toggle('open');
    
    if (menu.classList.contains('open')) {
        // document.querySelector('body').style.height = String(document.documentElement.clientHeight) + 'px';
        document.querySelector('body').style.overflowY = "hidden";
        document.querySelector('html').style.overflowY = "hidden";
        document.querySelector('body').style.overscrollBehaviorY = 'none';

    } else {
        // document.querySelector('body').style.height = '100%';
        document.querySelector('body').style.removeProperty('overflow-y');
        document.querySelector('html').style.removeProperty('overflow-y');
        document.querySelector('body').style.removeProperty('overscroll-behavior-y');
        
    }
    
    e.preventDefault();
}

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.querySelector("header").clientHeight;

window.onscroll = function(e) {
    didScroll = true;
}

setInterval(function() {
    if (didScroll) {
        hasScrolled();
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
        console.log(st)
        
    } else {
        // Scroll Up
        console.log(st + window.innerHeight)
        console.log(document.documentElement.scrollHeight)
        if(st + window.innerHeight < document.documentElement.scrollHeight) {
            header.classList.remove('nav-up');
            header.classList.add('nav-down');
        }
    }
    
    lastScrollTop = st;
}