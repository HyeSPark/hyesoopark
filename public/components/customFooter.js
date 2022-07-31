class customFooter extends HTMLElement {
    constructor() {
        <footer>
      <h1 class="footer--name">Contact</h1>
      <div class="footer--content">
        <ul class="footer--content__list">
          <li><a href="https://www.linkedin.com/in/hye-soo-park-785844242/">LinkedIn</a></li>
          <li><a href="mailto:hyehye@kiast.ac.kr">Email</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="./assets/data/CV.pdf" target="_blank">CV</a></li>
        </ul>
        <span class="footer--content__copyright">© 2022. Hye Soo Park all rights reserved.</span>
      </div>
    </footer>
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

        const wrapper = document.createElement('footer');

        wrapper.innerHTML = `
            <div>
            <h1>Contact</h1>

        `

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

export default customFooter;