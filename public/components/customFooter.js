class customFooter extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();

        var objHref = {"true": '../assets/data/CV.pdf', "false": './assets/data/CV.pdf'}
        var pageName = this.getAttribute('name');
        var href = objHref[pageName];
        

        const wrapper = document.createElement('footer');
        wrapper.innerHTML = `
            <div class="title footer--name">Contact</div>
        `

        const content = document.createElement('div');
        content.setAttribute('class', 'footer--content');

        const contentList = document.createElement('ul');
        contentList.setAttribute('class', 'footer--content__list');

        contentList.innerHTML = `
            <li><a href="https://www.linkedin.com/in/hye-soo-park-785844242/" target="_blank">LinkedIn</a></li>
            <li><a href="mailto:hyehye@kiast.ac.kr">Email</a></li>
            <li><a href="https://twitter.com/HyeSPark07?s=20&t=HhxT7YxGlyINJPoDcDRSbw">Twitter</a></li>
        `

        var innerHTMLwithCV = `
        <li><a href="https://www.linkedin.com/in/hye-soo-park-785844242/" target="_blank">LinkedIn</a></li>
        <li><a href="mailto:hyehye@kiast.ac.kr">Email</a></li>
        <li><a href="https://twitter.com/HyeSPark07?s=20&t=HhxT7YxGlyINJPoDcDRSbw">Twitter</a></li>
        <li><a href=${href} target="_blank">CV</a></li>
    `

        const contentCR = document.createElement('span');
        contentCR.setAttribute('class', 'footer--content__copyright')
        contentCR.innerText ="© 2022. Hye Soo Park all rights reserved."

        this.appendChild(wrapper);
        wrapper.appendChild(content);
        content.appendChild(contentList);
        content.appendChild(contentCR);
    }
}

export default customFooter;