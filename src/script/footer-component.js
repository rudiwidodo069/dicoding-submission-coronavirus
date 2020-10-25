class FooterComponent extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="footer-component m-0 p-0">
                <p class="text-center m-0">Rudi Widodo | 2020</p>
            </div>
        `;
    }
}

customElements.define("footer-component", FooterComponent);