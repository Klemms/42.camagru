class InputBox extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.inputColor = this.hasAttribute('color') ?  this.getAttribute('color') : input.base.background;
        this.borderColor = this.hasAttribute('border') ?  this.getAttribute('border') : input.base.border;
        this.focusColor = this.hasAttribute('focus-color') ?  this.getAttribute('focus-color') : input.base.focused;
        this.textColor = this.hasAttribute('text-color') ?  this.getAttribute('text-color') : input.base.text;
        this.icon = this.getAttribute('icon');
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = "<link rel=\"stylesheet\" href=\"style/material/input_box/input_box.css\">";
        this.shadowRoot.innerHTML += "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">";

        let div = document.createElement('div');
        div.classList.add('input-box');

        let keyboard = document.createElement('i');
        keyboard.classList.add('material-icons');
        keyboard.classList.add('keyboard-icon');
        keyboard.innerHTML = "keyboard";

        var doc = this;
        let input = document.createElement('input');
        input.classList.add('material_input-box');
        input.style.backgroundColor = this.inputColor;
        input.style.color = this.textColor;
        input.style.border = '1px solid ' + this.borderColor;
        input.onfocus = function(target, data, p) {
            console.log(doc);
        };
        input.onblur = function() {
            console.log("unfocused");
        };

        div.appendChild(keyboard);
        div.appendChild(input);
        this.shadowRoot.appendChild(div);
    }
}

customElements.define('input-box', InputBox);