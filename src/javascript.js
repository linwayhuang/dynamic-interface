import "./style.css";
import { Dropdown } from "./dropdown";
import { Carousel } from "./Carousel";

document.addEventListener("DOMContentLoaded", () => {
    const dropdown = Dropdown();
    const carousel = Carousel();
    dropdown.initDropdowns();
    carousel.initCarousels();
})