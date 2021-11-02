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
        <section class="likes section">
        <h2>Likes</h2>
        <div class="likes__wrapper wrapper">
        </div>
      </section>
        `
    );
    return document.querySelector(".likes__wrapper");
  }
  render = () => {
    const data = Object.values(store.getState())
      .flat()
      .filter((item) => item.liked);

    this.ref.innerHTML =
      data.length === 0
        ? "<h3>No likes yet... :)</h3>"
        : data.map((item) => addCard(item)).join("");
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
      if (e.target.classList.contains("button")) {
        this.checkLike(e.target.parentElement);
      }
    };
    store.subscribe(this.render);
  }
}
