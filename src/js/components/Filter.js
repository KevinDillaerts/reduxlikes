export default class Filter {
  constructor(holder, types) {
    this.holder = holder;
    this.types = types;
    this.init();
  }

  init() {
    this.holder.innerHTML = `
        <h4 class="filter__title">Filter</h4>
        <div class="filter__wrapper">
        ${this.types
          .map(
            (type) =>
              `<div class="filter__checkbox">
              <input type="checkbox" id="${type}" value="${type}" checked="checked">
              <label for="${type}"> ${type + "s"}</label>
              </div>`
          )
          .join("")}
          </div>`;
  }
}
