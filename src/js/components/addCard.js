export default function addCard(item) {
  const template = document.querySelector(`#template__${item.type}`).innerHTML;
  switch (item.type) {
    case "article":
      return template
        .replace("#ID", item.id)
        .replace("#URL", item.url)
        .replace("#DATE", item.date)
        .replace("#TITLE", item.title)
        .replace("#TEXT", item.intro)
        .replace("#BUTTONCLASS", `${setButtonClass(item)}`)
        .replace("#BUTTONTEXT", `${setButtonText(item)}`);
    case "song":
      return template
        .replace("#ID", item.id)
        .replace("ALBUMTITLE", item.albumtitle)
        .replace("#COVER", item.imageurl)
        .replace("#SONG", item.source)
        .replace("#TITLE", item.title)
        .replace("#PERFORMER", item.performer)
        .replace("#BUTTONCLASS", `${setButtonClass(item)}`)
        .replace("#BUTTONTEXT", `${setButtonText(item)}`);
    case "photo":
      return template
        .replace("#ID", item.id)
        .replace("#IMAGE", item.url)
        .replaceAll("#DESC", item.description)
        .replace("#BUTTONCLASS", `${setButtonClass(item)}`)
        .replace("#BUTTONTEXT", `${setButtonText(item)}`);
    default:
      return;
  }
}

function setButtonClass(item) {
  return item.liked ? "button button--liked" : "button";
}
function setButtonText(item) {
  return item.liked ? "Unlike" : "Like";
}
