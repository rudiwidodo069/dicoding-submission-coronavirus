class WarningComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="warning">
            <div class="container-fluid">
                <div class="title-warning text-center font-weight-bold m-3">
                    <h1>pola hidup sehat di masa pandemi virus corona / covid-19</h1>
                </div>
                <div class="row m-0 p-0  card-warning">
                    <div class="col-md-4 mb-3">
                        <img src="" alt="" class="img-fluid img-eat w-100">
                    </div>
                    <div class="col-md-8 p-4 mb-3">
                        <h3 class="text-center mb-3">
                            makan makanan yang menyehatkan
                        </h3>
                        <p>
                            Isi setengah dari piring dengan sayuran yang tidak mengandung zat tepung. Sayuran tak mengandung
                            zat
                            tepung antara lain bayam dan sayuran berdaun hijau gelap lainnya seperti wortel, brokoli, dan
                            kembang kol. Mengisi setengah piring dengan sayuran non-tepung menjadi cara sederhana untuk
                            membuat
                            diet lebih sehat, karena rendah kalori tapi dikemas dengan nutrisi, serat, dan air.
                        </p>
                    </div>
                    <div class="col-md-8 p-4 mb-3">
                        <h3 class="text-center mb-3">
                            social distancing
                        </h3>
                        <p>
                            Social distance atau social distancing adalah masyarakat diminta untuk menghindari hadir di
                            pertemuan besar atau kerumunan orang. Jika Anda harus berada di sekitar orang, jaga jarak dengan
                            orang lain sekitar 6 kaki (2 meter)
                        </p>
                    </div>
                    <div class="col-md-4 mb-3">
                        <img src="" alt="" class="img-fluid img-social-distancing w-100">
                    </div>
                    <div class="col-md-4 mb-3">
                        <img src="" alt="" class="img-fluid img-olahraga w-100">
                    </div>
                    <div class="col-md-8 p-4 mb-3">
                        <h3 class="text-center mb-3">
                            olahraga
                        </h3>
                        <p>
                            Menggunakan otot sangat penting untuk kesehatan yang optimal. Walaupun mengangkat beban dan
                            berolahraga dapat membantu seseorang terlihat lebih baik, meningkatkan penampilan sebenarnya
                            hanyalah puncak gunung es. Perlu berolahraga untuk memastikan tubuh, otak, dan hormon berfungsi
                            optimal. Misalnya dengan mengangkat beban, akan menurunkan kadar gula darah dan insulin,
                            meningkatkan kolesterol dan menurunkan trigliserida. Ini juga meningkatkan kadar testosteron dan
                            hormon pertumbuhan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("warning-component", WarningComponent);