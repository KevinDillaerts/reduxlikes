import "../css/style.scss";
import Articlesection from "./components/Articlesection";
import Musicsection from "./components/Musicsection";
import Photossection from "./components/Photossection";
import Likezone from "./components/Likezone";

//main variables & set-up
const main = document.querySelector(".content");
const likes = document.querySelector(".likezone");
const openLikes = document.querySelector(".likes__open");
const closeLikes = document.querySelector(".likes__close");

new Articlesection(main);
new Musicsection(main);
new Photossection(main);
new Likezone(likes);

//mobile menu buttons
openLikes.onclick = () => {
  likes.classList.add("active");
};
closeLikes.onclick = () => {
  likes.classList.remove("active");
};

//scroll to top icon
const scrollIcon = document.querySelector(".scroll");
scrollIcon.onclick = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

function toggleScroll(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      console.log(entry);
      scrollIcon.classList.remove("active");
    } else {
      scrollIcon.classList.add("active");
    }
  });
}

let observer = new IntersectionObserver(toggleScroll);
observer.observe(document.querySelector("h1"));
