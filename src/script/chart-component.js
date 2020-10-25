class ChartComponent extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="container chart">
                <h1 class="text-center">data statistik pandemi covid-19</h1>
                <canvas id="chart" width="100" height="55" class="p-0 m-0"></canvas>
            </div>
        `;
    }
}

customElements.define("chart-component", ChartComponent);