class CardInfo extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="container-md">
            <div class="box-card">
                <div class="row m-0 p-0">
                    <div class="col-lg-4">
                        <div class="card card-info p-3">
                            <div class="card-title">
                                <h1>Dikonfirmasi</h1>
                            </div>
                            <div class="card-content">
                                <h3 id="confirmed"></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-info p-3">
                            <div class="card-title">
                                <h1>Sembuh</h1>
                            </div>
                            <div class="card-content">
                                <h3 id="recovered"></h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card card-info p-3">
                            <div class="card-title">
                                <h1>Meninggal</h1>
                            </div>
                            <div class="card-content">
                                <h3 id="deaths"></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("card-info", CardInfo);