import store from "../data";
import { likeArticle } from "../data/articles";
import addCard from "../helpers/addCard";

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
    this.ref.innerHTML = store
      .getState()
      .articles.map((article) => addCard(article))
      .join("");
  };

  setEvents() {
    this.ref.onclick = ({ target } = e) => {
      if (target.classList.contains("button")) {
        store.dispatch(likeArticle(target.parentElement.dataset.id));
      }
    };

    store.subscribe(this.render);
  }
}
