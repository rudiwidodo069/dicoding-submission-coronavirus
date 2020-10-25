class JumbotronComponent extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron">
            <div class="container-fluid">
                <div class="row p-0 m-0">
                    <div class="col-md-6 text-center">
                        <h1 id="text-jumbotron">JUMLAH PASIEN COVID-19 DI INDONESIA</h1>
                    </div>
                    <div class="col-md-6">
                        <img src="" alt="" class="img-fluid img-jumb">
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("jumbotron-component", JumbotronComponent);