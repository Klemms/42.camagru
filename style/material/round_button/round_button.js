class RoundButton extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.buttonColor = this.hasAttribute('color') ?  this.getAttribute('color') : buttons.base.background;
        this.hoverColor = this.hasAttribute('hover-color') ?  this.getAttribute('hover-color') : buttons.base.hover;
        this.textColor = this.hasAttribute('text-color') ?  this.getAttribute('text-color') : buttons.base.text;
        this.icon = this.getAttribute('icon');
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = "<link rel=\"stylesheet\" href=\"style/material/round_button/round_button.css\">";
        this.shadowRoot.innerHTML += "<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">";

        let button = document.createElement('span');
        button.classList.add('material_round-button');
        button.style.backgroundColor = this.buttonColor;
        button.style.color = this.textColor;

        let hover_anim = document.createElement('span');
        hover_anim.classList.add('hover-anim');
        hover_anim.style.backgroundColor = this.hoverColor;


        let icon = document.createElement('span');
        icon.classList.add('icon');
        icon.innerHTML = this.textContent;

        let icon_text = document.createElement('i');
        icon_text.classList.add('material-icons');
        icon_text.innerHTML = this.icon;

        icon.appendChild(icon_text);
        button.appendChild(hover_anim);
        button.appendChild(icon);

        this.shadowRoot.appendChild(button);
    }
}

customElements.define('round-button', RoundButton);