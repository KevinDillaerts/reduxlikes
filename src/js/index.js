import "../css/style.scss";
import Articlesection from "./components/Articlesection";
import Musicsection from "./components/Musicsection";
import Photossection from "./components/Photossection";
import Likezone from "./components/Likezone";

const main = document.querySelector(".content");
const likes = document.querySelector(".likezone");
const openLikes = document.querySelector(".likes__open");
const closeLikes = document.querySelector(".likes__close");

new Articlesection(main);
new Musicsection(main);
new Photossection(main);
new Likezone(likes);

openLikes.onclick = () => {
  likes.classList.add("active");
};
closeLikes.onclick = () => {
  likes.classList.remove("active");
};
