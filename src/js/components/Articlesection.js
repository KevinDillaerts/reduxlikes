import store from "../data";
import { likeArticle } from "../data/articles";
import addCard from "./addCard";

export default class Articlesection {
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
    <section class="articles section">
        <h3>Articles</h3>
        <div class="articles__wrapper wrapper"></div>
      </section>
    `
    );
    return document.querySelector(".articles__wrapper");
  }
  render = () => {
    const data = store.getState().articles;
    this.ref.innerHTML = data.map((article) => addCard(article)).join("");
  };
  setEvents() {
    this.ref.onclick = (e) => {
      e.preventDefault();
      if (e.target.classList.contains("button")) {
        store.dispatch(likeArticle(e.target.parentElement.dataset.id));
      }
    };
    store.subscribe(this.render);
  }
}
