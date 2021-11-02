import store from "../data";
import { likePhoto } from "../data/photos";
import addCard from "./addCard";

export default class Photossection {
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
      <h3>Photos</h3>
      <div class="photos__wrapper wrapper"></div>
    </section>
      `
    );
    return document.querySelector(".photos__wrapper");
  }
  render = () => {
    const data = store.getState().photos;
    this.ref.innerHTML = data.map((photo) => addCard(photo)).join("");
  };
  setEvents() {
    this.ref.onclick = (e) => {
      if (e.target.classList.contains("button")) {
        store.dispatch(likePhoto(e.target.parentElement.dataset.id));
      }
    };
    store.subscribe(this.render);
  }
}
