class pubEl extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();

        const img = this.getAttribute('img')
        const title = this.getAttribute('title')
        const venue = this.getAttribute('venue')
        const authors = this.getAttribute('authors')
        const pdfLink = this.getAttribute('pdfLink')
        const doiLink = this.getAttribute('doiLink')
        const vidLink = this.getAttribute('vidLink')
        const codeLink = this.getAttribute('codeLink')

        const renderlinkButton = (link, name) => (
            `<a 
                class="publications__links--button"
                href=${link}
                target="_blank"
            >${name}</a>`
        )
        
        this.innerHTML = `
        <div class="publications__contents">
          <img 
            class="publications__img"
            src=${img}
            >
          </img>
          <div class="publications__text">
            <div class="publications__title">${title}</div>
            <div class="publications__authors">
              ${authors}
            </div>
            <div class="publications__venue">${venue}</div>
            <div class="publications__links">
                ${pdfLink !== null ? renderlinkButton(pdfLink, "PDF") : ""}
                ${doiLink !== null ? renderlinkButton(doiLink, "DOI") : ""}
                ${vidLink !== null ? renderlinkButton(vidLink, "VIDEO") : ""}
                ${codeLink !== null ? renderlinkButton(codeLink, "CODE") : ""}
            </div>
          </div>
        </div>
        `
    }
}

export default pubEl;