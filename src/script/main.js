import Axios from "axios";

function main() {

    // get api caountry indonesia
    const getApiCovidIndonesia = async () => {
        try {
            Axios.get("https://covid19.mathdro.id/api/countries/indonesia")
                .then(res => {
                    getIndonesiaInfo(res.data);
                    chart(res.data);
                })
                .catch(err => alert(err));
        } catch (error) {
            console.log(error);
        }
    }

    // get data country
    const getApiCountry = async () => {
        try {
            const resultData = await Axios.get("https://covid19.mathdro.id/api/countries")
                .then(res => res.data)
                .catch(err => alert(err));
            return resultData;
        } catch (error) {
            console.log(error);
        }
    }

    // get data covid by country
    const getApiByCountry = async (country) => {
        try {
            await Axios.get(`https://covid19.mathdro.id/api/countries/${country}`)
                .then(res => {
                    getCountry(res.data, country);
                    chart(res.data);
                })
                .catch(err => alert(err));
        } catch (error) {
            console.log(error);
        }
    }


    // home pags
    const getIndonesiaInfo = (data) => {
        const confirmedElement = document.querySelector("#confirmed");
        confirmedElement.innerHTML = data.confirmed.value + " orang";
        const recoveredElement = document.querySelector("#recovered");
        recoveredElement.innerHTML = data.recovered.value + " orang";
        const deathsElement = document.querySelector("#deaths");
        deathsElement.innerHTML = data.deaths.value + " orang";
    }

    // search data covid by country
    const searchElement = document.querySelector("#search");
    searchElement.addEventListener("click", () => {
        const result = getApiCountry();
        result
            .then(res => {
                res.countries.map(val => {
                    const optionElement = document.createElement("option");
                    optionElement.setAttribute("value", val.name);
                    optionElement.innerHTML = val.name;
                    searchElement.appendChild(optionElement);
                });
            })
            .catch(error => console.log(error));
    });

    // buttton search
    const buttonElement = document.querySelector("#btn");
    buttonElement.addEventListener("click", e => {
        e.preventDefault();
        const optionElement = searchElement.selectedIndex;
        const optionValue = document.getElementsByTagName("option")[optionElement].value;
        getApiByCountry(optionValue);
    });

    // getCountry
    const getCountry = (data, country) => {
        if (!data.error) {
            const textElement = document.querySelector("#text-jumbotron");
            textElement.innerHTML = `JUMLAH PASIEN COVID-19 DI ${country.toUpperCase()}`;
        }
        const confirmedElement = document.querySelector("#confirmed");
        confirmedElement.innerHTML = data.confirmed.value + " orang";
        const recoveredElement = document.querySelector("#recovered");
        recoveredElement.innerHTML = data.recovered.value + " orang";
        const deathsElement = document.querySelector("#deaths");
        deathsElement.innerHTML = data.deaths.value + " orang";
    }

    // getchart
    const chart = dartaCovid => {
        const ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Terkonfirmasi', 'Sembuh', 'Meninggal'],
                datasets: [{
                    label: 'terkonfirmasi',
                    data: [
                        dartaCovid.confirmed.value, dartaCovid.recovered.value, dartaCovid.deaths.value
                    ],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 2
                }],
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
    getApiCovidIndonesia();
}

export default main;