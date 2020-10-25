import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "chart.js";
import "jquery";

// custom css
import "./style/style.css";

// image
import imgJumboron from "./assets/covid-19.png";
import imgMakanan from "./assets/eat.png";
import imgSocialDistancing from "./assets/socdec.png"
import imgOlahraga from "./assets/olahraga.png";

// component
import "./script/navbar-component";
import "./script/search-country";
import "./script/card-info";
import "./script/chart-component";
import "./script/jumbotron-component";
import "./script/warning-component";
import "./script/footer-component";

// main
import Main from "./script/main";

const imgElement = document.querySelector(".img-jumb");
imgElement.setAttribute("src", imgJumboron);

const imgMakananElement = document.querySelector(".img-eat");
imgMakananElement.setAttribute("src", imgMakanan);

const imgSocialDistancingElement = document.querySelector(".img-social-distancing");
imgSocialDistancingElement.setAttribute("src", imgSocialDistancing);

const imgOlahragaElement = document.querySelector(".img-olahraga");
imgOlahragaElement.setAttribute("src", imgOlahraga);

Main();