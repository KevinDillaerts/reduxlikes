import "../css/style.scss";
import Articlesection from "./components/Articlesection";
import Musicsection from "./components/Musicsection";
import Photossection from "./components/Photossection";
import Likezone from "./components/Likezone";

const main = document.querySelector(".content");
const likes = document.querySelector(".likezone");

new Articlesection(main);
new Musicsection(main);
new Photossection(main);
new Likezone(likes);
