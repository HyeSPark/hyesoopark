class projContent extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();

        var date = this.getAttribute('date')
        var title = this.getAttribute('title')
        var text = this.textContent;

        this.innerHTML = `
        <div class='infoContents'>
            <h3 class='infoContents__title'>${title}</h3>
            <text class='infoContents__text'>${text}</text>
        </div>
        `
    }
}

export default projContent;