document.querySelector('.menu').onclick = function (e) {
    var menuList = document.querySelector('.menu_list');
    var menu = document.querySelector('.menu');
    menuList.classList.toggle('hide');
    menu.classList.toggle('open');
    
    if (menu.classList.contains('open')) {
        document.querySelector('body').style.height = String(document.documentElement.clientHeight) + 'px';
        document.querySelector('body').style.overflowY = "hidden";
    } else {
        document.querySelector('body').style.height = '100%';
        document.querySelector('body').style.removeProperty('overflow-y');
    }
    
    e.preventDefault();
  }


class header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
            <a class="logo" href="./"> 
            <div class="logo__block">
                <img src="./assets/images/logo.png" width="32px"/>
                <div class="logo__block--name">Hye Soo Park</div>
            </div>
            </a>
    
            <nav>
            <div class="menu btn2">
                <div class="icon"></div>
            </div>
            <ul class="menu_list hide">
                <li>
                <a href="./" class="nav__selected">Home</a>
                </li>
                <li>
                <a href="./projects">Projects</a>
                </li>
                <li>
                <a href="./publication.html">Publication</a>
                </li>
                <li>
                <a href="./about.html">About</a>
                </li>
            </ul>
            </nav>
        </header>
        `
    }

    static get observedAttributes() {
        return []
    }
}
customElements.define('custom-header', header);

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