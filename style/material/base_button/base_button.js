class BaseButton extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.buttonColor = this.hasAttribute('color') ?  this.getAttribute('color') : buttons.base.background;
        this.hoverColor = this.hasAttribute('hover-color') ?  this.getAttribute('hover-color') : buttons.base.hover;
        this.textColor = this.hasAttribute('text-color') ?  this.getAttribute('text-color') : buttons.base.text;
        this.textContent = this.getAttribute('text');
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = "<link rel=\"stylesheet\" href=\"style/material/base_button/base_button.css\">";

        let button = document.createElement('span');
        button.classList.add('material_base-button');
        button.style.backgroundColor = this.buttonColor;
        button.style.color = this.textColor;

        let hover_anim = document.createElement('span');
        hover_anim.classList.add('hover-anim');
        hover_anim.style.backgroundColor = this.hoverColor;


        let text = document.createElement('span');
        text.classList.add('text');
        text.innerHTML = this.textContent;

        button.appendChild(hover_anim);
        button.appendChild(text);

        this.shadowRoot.appendChild(button);
    }
}

customElements.define('base-button', BaseButton);