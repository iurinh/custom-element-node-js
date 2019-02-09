class AppButtom extends HTMLDivElement {
    constructor(...args) {
        const self = super(...args);
        // self functionality written in here
        // self.addEventListener(...)
        // return the right context
        return self;
    }

    connectedCallback() {
        console.log('connectedCallback')
        console.log(arguments)
    }

    disconnectedCallback() {
        console.log('disconnectedCallback')
        console.log(arguments)
    }

    adoptedCallback() {
        console.log('adoptedCallback')
        console.log(arguments)
    }

    attributeChangedCallback() {
        console.log('attributeChangedCallback')
        console.log(arguments)
    }
  }

customElements.define('app-buttom', AppButtom, { extends: 'div' });


var xmlhttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(xmlhttp.responseText);
    }
}

xmlhttp.open("GET", "/read-file", true);
xmlhttp.send();