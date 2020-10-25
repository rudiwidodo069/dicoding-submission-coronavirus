class SearchCountry extends HTMLElement {
    connectedCallback() {
        this.render();
    }
    render() {
        this.innerHTML = `
            <form class="form-inline my-2 my-lg-0">
                <select class="form-control mr-2 w-75 h-50" id="search">
                    <option selected>cari berdasarkan negara</option>
                </select>
                <button class="btn btn-primary my-2 my-sm-0" type="submit" id="btn">cari</button>
            </form>
        `;
    }
}

customElements.define("search-country", SearchCountry);