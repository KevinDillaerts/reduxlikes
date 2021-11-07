import "../css/style.scss";
import Articlesection from "./components/Articlesection";
import Musicsection from "./components/Musicsection";
import Photossection from "./components/Photossection";
import Likezone from "./components/Likezone";

//main variables & set-up
const main = document.querySelector(".content");
const likes = document.querySelector(".likes");

new Articlesection(main);
new Musicsection(main);
new Photossection(main);
new Likezone(likes);

//mobile menu buttons
const openLikes = document.querySelector(".likes__open");
const closeLikes = document.querySelector(".likes__close");

const closeMenu = () => {
  closeLikes.click();
};

openLikes.onclick = () => {
  likes.classList.add("active");
  main.classList.add("blurred");
  likes.ontransitionend = () => main.addEventListener("click", closeMenu);
};

closeLikes.onclick = () => {
  likes.classList.remove("active");
  main.classList.remove("blurred");
  likes.ontransitionend = () => main.removeEventListener("click", closeMenu);
};

//scroll to top icon
const scrollIcon = document.querySelector(".scroll");
scrollIcon.onclick = () =>
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

const toggleScroll = (entries) => {
  entries.forEach((entry) =>
    entry.isIntersecting
      ? scrollIcon.classList.remove("active")
      : scrollIcon.classList.add("active")
  );
};

let observer = new IntersectionObserver(toggleScroll);
observer.observe(document.querySelector("h1"));
