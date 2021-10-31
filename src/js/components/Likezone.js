import store from "../data";
import addCard from "./addCard";
import { likePhoto } from "../data/photos";
import { likeSong } from "../data/music";
import { likeArticle } from "../data/articles";

export default class Likezone {
  constructor(holder) {
    this.holder = holder;
    this.ref = this.init();
    this.render();
    this.setEvents();
  }
  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
        <section class="photos section">
        <h2>Likes</h2>
        <div class="likes__wrapper wrapper"></div>
      </section>
        `
    );
    return document.querySelector(".likes__wrapper");
  }
  render = () => {
    const stores = store.getState();
    const array = Object.values(stores);
    const data = array.flat().filter((item) => item.liked);
    this.ref.innerHTML = data.map((item) => addCard(item)).join("");
  };
  checkLike = (card) => {
    if (card.classList.contains("article")) {
      store.dispatch(likeArticle(card.dataset.id));
    }
    if (card.classList.contains("song")) {
      store.dispatch(likeSong(card.dataset.id));
    }
    if (card.classList.contains("photo")) {
      store.dispatch(likePhoto(card.dataset.id));
    }
  };
  setEvents() {
    this.ref.onclick = (e) => {
      e.preventDefault();
      if (e.target.classList.contains("button")) {
        this.checkLike(e.target.parentElement);
      }
    };
    store.subscribe(this.render);
  }
}
