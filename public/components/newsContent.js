class newsContent extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();

        var date = this.getAttribute('date')
        var title = this.getAttribute('title')
        var text = this.textContent;

        this.innerHTML = `
        <div class='infoContents'>
            <span class='infoContents__date'>${date}</span>
            <h3 class='infoContents__title'>${title}</h3>
            <text class='infoContents__text'>${text}</text>
        </div>
        `
    }
}

export default newsContent;