import store from "../data";
import addCard from "./addCard";
import { likePhoto } from "../data/photos";
import { likeSong } from "../data/music";
import { likeArticle } from "../data/articles";

export default class Likezone {
  constructor(holder) {
    this.holder = holder;
    this.ref = this.init();
    this.data;
    this.myFilter;
    this.updateData();
    this.setEvents();
  }

  init() {
    this.holder.insertAdjacentHTML(
      "beforeend",
      `
        <h2>Likes</h2>
        <div class="likes__wrapper"></div>
        `
    );
    return document.querySelector(".likes__wrapper");
  }

  render = () => {
    if (this.data.length === 0) {
      this.ref.innerHTML = `<h3>No likes yet... :)</h3>`;
    } else {
      this.ref.innerHTML = `<div class="likes__filter"></div><div class="likes__cards"></div>`;
      this.createFilter();
      this.filterContent();
    }
  };

  createFilter() {
    document.querySelector(".likes__filter").innerHTML = `
    <h4 class="filter__title">Filter</h4>
    <div class="filter__wrapper">
    ${this.myFilter
      .map(
        (type) =>
          `<div class="filter__checkbox"><input type="checkbox" id="${type}" value="${type}" checked="checked"><label for="${type}"> ${
            type + "s"
          }</label></div>`
      )
      .join("")}
      </div>
 `;
  }

  filterContent() {
    const showFilter = [...document.querySelectorAll("input[type=checkbox]:checked")].map(
      (checkbox) => checkbox.value
    );
    document.querySelector(".likes__cards").innerHTML = this.data
      .map((item) => {
        if (showFilter.includes(item.type)) {
          return addCard(item);
        }
      })
      .join("");
  }

  updateData = () => {
    this.data = Object.values(store.getState())
      .flat()
      .filter((item) => item.liked);
    this.myFilter = [...new Set(this.data.map((item) => item.type))];
    this.render();
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
      if (e.target.type === "checkbox") {
        this.filterContent();
      }
    };
    store.subscribe(this.updateData);
  }
}
