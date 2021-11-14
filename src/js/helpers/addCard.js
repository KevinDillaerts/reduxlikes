export default function addCard(item) {
  switch (item.type) {
    case "article":
      return `
        <article class="article card" data-id="${item.id}">
          <a href="${item.url}" target="_blank">
            <h4 class="article__title">${item.title}</h4>
            <h5>Date: ${moment(item.date).format("dddd D MMMM")}</h5>
            <p class="article__text">${item.intro}</p>
          </a>
          ${setButton(item)}
        </article>`;
    case "song":
      return `
        <article class="song card" data-id="${item.id}">
        <img src="${item.imageurl}" alt="${item.albumtitle}" />
        <audio controls>
          <source src="${item.source}" type="audio/mpeg" />
        </audio>
        <h4 class="song__title">${item.title}</h4>
        <h5>${item.performer}</h5>
        ${setButton(item)}
      </article>`;
    case "photo":
      return `  
        <article class="photo card" data-id="${item.id}">
        <img class="photo__img" src="${item.url}" alt="${item.description}" />
        <h4 class="photo__title">${item.description}</h4>
        ${setButton(item)}
      </article>`;
    default:
      return;
  }
}

function setButton(item) {
  return item.liked
    ? `<button class="button button--liked"> 
          <svg class="icon icon-heart">
            <use href="#icon-heart" />
          </svg>
          Unlike
        </button>`
    : `<button class="button">
          <svg class="icon icon-heart">
            <use href="#icon-heart" />
          </svg>
           Like
        </button>`;
}
