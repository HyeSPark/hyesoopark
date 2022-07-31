class customHeader extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        var dirLogo = './assets/images/logo.png'
        var arrHref = ['./', './projects', './publication.html', './about.html']
        var arrMenu = ['Home', 'Projects', 'Publication', 'About']

        var menuName = this.getAttribute('name');
        
        if (menuName === 'Projects') {
            dirLogo = '.' + dirLogo;
            arrHref = arrHref.map(el => '.' + el);
            arrHref[1] = './';
        }

        const wrapper = document.createElement('header');
        wrapper.setAttribute('class', 'nav-down');

        const logo = document.createElement('a');
        logo.setAttribute('class', 'logo');
        logo.setAttribute('href', arrHref[0]);

        const logoBlock = document.createElement('div');
        logoBlock.setAttribute('class', 'logo__block');

        const logoImg = document.createElement('img');
        logoImg.setAttribute('src', dirLogo);
        logoImg.setAttribute('width', '32px');

        const logoBlockName = document.createElement('div');
        logoBlockName.setAttribute('class', 'logo__block--name');
        logoBlockName.textContent = 'Hye Soo Park';

        const navBar = document.createElement('nav');
        navBar.innerHTML = 
            `
            <div class="menu btn2">
                <div class="icon"></div>
            </div>
            `
        

        const menuList = document.createElement('ul');
        menuList.setAttribute('class', 'menu_list hide');
        
        for (let i=0; i < 4; i++) {
            let menuListEl = document.createElement('a');
            menuListEl.setAttribute('href', arrHref[i]);
            if (menuName === arrMenu[i]) {
                menuListEl.setAttribute('class', 'nav__selected');
            }
            menuListEl.textContent = arrMenu[i];

            let menulistLi = document.createElement('li');
            menuList.appendChild(menulistLi);

            menulistLi.appendChild(menuListEl)
        }

        this.appendChild(wrapper);
        wrapper.appendChild(logo);
        wrapper.appendChild(navBar);
        navBar.appendChild(menuList);
        logo.appendChild(logoBlock);
        logoBlock.appendChild(logoImg);
        logoBlock.appendChild(logoBlockName);
    
    }
}

export default customHeader;