class projectView extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();

        var color = this.getAttribute('color')
        var title = this.getAttribute('title')
        var tag = this.getAttribute('tag')
        var imgSrc = this.getAttribute('img-src')
        var text = this.textContent;
        
        this.innerHTML = `
        <div class="pj-wrapper">
          <section class="pj pj-title-container">
            <div class="pj__title">
                <div class="pj__title--name"><span class="icon" style="background-color: ${color};"></span>${title}</div>
                <div class="pj__title--tag">${tag}</div>
            </div>
            <div class="pj__desc">
                <div class="pj__desc--text">${text}</div>
                <a class="pj__desc--more" href="">View Project &nbsp;
                <svg width="41" height="29" viewBox="0 0 41 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 14.5H40M40 14.5L26.5 1M40 14.5L26.5 28" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </a>
            </div>
            </section>
            <section class="pj">
            <img src="${imgSrc}" width="100%"/>
            </section>
        </div>
        `
        
    }
}

export default projectView;