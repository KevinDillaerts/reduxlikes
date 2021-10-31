import { nanoid } from "nanoid";

const TOGGLESONG = "reduxlikes/music/TOGGLE";

export const likeSong = (id) => ({
  type: TOGGLESONG,
  payload: id,
});

const initialState = [
  {
    title: "Maria También",
    performer: "Khruangbin",
    albumtitle: "Con Todo El Mundo",
    source: new URL(
      "../../assets/music/Khruangbin - Con Todo El Mundo (Excluding N & S America) - 03 Maria También.mp3",
      import.meta.url
    ),
    imageurl: new URL(
      "../../assets/music/Khruangbin - Con Todo El Mundo - cover.jpg",
      import.meta.url
    ),
    liked: false,
    id: nanoid(),
    type: "song",
  },
  {
    title: "Idiotheque",
    performer: "Radiohead",
    albumtitle: "Kid A",
    source: new URL("../../assets/music/08 - Idioteque.mp3", import.meta.url),
    imageurl: new URL("../../assets/music/Radiohad_Kid_A_cover.jpg", import.meta.url),
    liked: false,
    id: nanoid(),
    type: "song",
  },
  {
    title: "Breezeblocks",
    performer: "Alt-J",
    albumtitle: "An Awesome Wave",
    source: new URL("../../assets/music/04 Breezeblocks.mp3", import.meta.url),
    imageurl: new URL("../../assets/music/alt-j-an-awesome-wave.jpg", import.meta.url),
    liked: false,
    id: nanoid(),
    type: "song",
  },
  {
    title: "Bachelorette",
    performer: "Björk",
    albumtitle: "Homogenic",
    source: new URL("../../assets/music/04 Bachelorette.mp3", import.meta.url),
    imageurl: new URL("../../assets/music/bjork_homogenic_cover.png", import.meta.url),
    liked: false,
    id: nanoid(),
    type: "song",
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLESONG:
      return state.map((song) => {
        if (song.id === payload) {
          return { ...song, liked: !song.liked };
        }
        return song;
      });
    default:
      return state;
  }
};
