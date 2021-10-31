import { nanoid } from "nanoid";

const TOGGLEARTICLE = "reduxlikes/articles/TOGGLE";

export const likeArticle = (id) => ({
  type: TOGGLEARTICLE,
  payload: id,
});

const initialState = [
  {
    title: "Het internet na de cookie",
    date: "30/10/2021",
    intro:
      "Het internet zoals wij dat al ruim 20 jaar kennen, staat op het punt radicaal te veranderen. Ik heb het over het einde van online reclame.",
    url: "https://www.standaard.be/cnt/dmf20211029_97602515",
    liked: false,
    id: nanoid(),
    type: "article",
  },
  {
    title: "Apple mist 6 miljard dollar door leveringsproblemen",
    date: "29/10/2021",
    intro:
      "Apple denkt dat leveringsproblemen zo'n zes miljard dollar aan omzet hebben gekost in het 3e kwartaal. Toch boekte het bedrijf een omzet van 83,4 miljard dollar.",
    url: "https://tweakers.net/nieuws/188768/apple-mist-6-miljard-dollar-door-leveringsproblemen-breekt-toch-omzetrecord.html",
    liked: false,
    id: nanoid(),
    type: "article",
  },
  {
    title: "'Father of tiramisu' Ado Campeol dies aged 93",
    date: "31/10/2021",
    intro:
      "Restaurateur Ado Campeol, dubbed 'the father of Tiramisu' by Italian media, has died aged 93.",
    url: "https://www.hagelandactueel.be/nieuws/tienen/erfenis-van-bach-komt-naar-tienen",
    liked: false,
    id: nanoid(),
    type: "article",
  },
  {
    title: "Erfenis van Bach komt naar Tienen",
    date: "31/10/2021",
    intro:
      "ART.27 organiseert op vrijdag 12 november om 20 u. een concert in de Kapel van de Alexianen, met een optreden van “The Legacy of Bach”.",
    url: "https://www.bbc.com/news/world-europe-59103658",
    liked: false,
    id: nanoid(),
    type: "article",
  },
  {
    title: "Go remains most desired language, JavaScript best known",
    date: "06/02/2021",
    intro:
      "A survey report released by HackerRank has found that developers find JavaScript the most-known language, Go most-wanted to learn.",
    url: "https://developer-tech.com/news/2020/feb/06/hackerrank-developer-skills-report-go-remains-most-desired-language-javascript-best-known/",
    liked: false,
    id: nanoid(),
    type: "article",
  },
  {
    title: "20 Scariest Horror Game Moments, Ranked",
    date: "31/10/2021",
    intro:
      "Horror in games has always been elevated by the fact that you’re the one who has to navigate these nightmare scenarios.",
    url: "https://www.denofgeek.com/games/scariest-moments-horror-game-scenes-ever/",
    liked: false,
    id: nanoid(),
    type: "article",
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLEARTICLE:
      return state.map((article) => {
        if (article.id === payload) {
          return { ...article, liked: !article.liked };
        }
        return article;
      });
    default:
      return state;
  }
};
