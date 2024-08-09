class newsContent extends HTMLElement {
    constructor() {

        // Always call super first in constructor
        super();

        var date = this.getAttribute('date')
        // var title = this.getAttribute('title')
        var text = this.textContent;
        console.log(text)

        this.innerHTML = `
        <div class='infoContents'>
            <span class='infoContents__date'>${date}</span>
            
            <text class='infoContents__text'>${text}</text>
        </div>
        `
    }
}

export default newsContent;