import store from "../data";
import { likeSong } from "../data/music";
import addCard from "../helpers/addCard";

export default class Musicsection {
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
    <section class="music section">
        <h3>Music</h3>
        <div class="music__wrapper wrapper"></div>
      </section>
    `
    );
    return document.querySelector(".music__wrapper");
  }

  render = () => {
    this.ref.innerHTML = store
      .getState()
      .music.map((song) => addCard(song))
      .join("");
  };

  setEvents() {
    this.ref.onclick = ({ target } = e) => {
      if (target.classList.contains("button")) {
        store.dispatch(likeSong(target.parentElement.dataset.id));
      }
    };

    store.subscribe(this.render);
  }
}
