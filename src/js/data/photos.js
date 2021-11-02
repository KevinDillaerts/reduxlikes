import { nanoid } from "nanoid";

const TOGGLEPHOTO = "reduxlikes/photos/TOGGLE";

export const likePhoto = (id) => ({
  type: TOGGLEPHOTO,
  payload: id,
});

const initialState = [
  {
    url: new URL("../../assets/photos/Kevin-032.jpg", import.meta.url),
    description: "Knappe Kevin 1",
    liked: false,
    id: nanoid(),
    type: "photo",
  },
  {
    url: new URL("../../assets/photos/Kevin-036.jpg", import.meta.url),
    description: "Knappe Kevin 2",
    liked: false,
    id: nanoid(),
    type: "photo",
  },
  {
    url: new URL("../../assets/photos/Kevin-043.jpg", import.meta.url),
    description: "Knappe Kevin 3",
    liked: false,
    id: nanoid(),
    type: "photo",
  },
  {
    url: new URL("../../assets/photos/Kevin-047.jpg", import.meta.url),
    description: "Knappe Kevin 4",
    liked: false,
    id: nanoid(),
    type: "photo",
  },
  {
    url: new URL("../../assets/photos/Kevin-051.jpg", import.meta.url),
    description: "Knappe Kevin 5",
    liked: false,
    id: nanoid(),
    type: "photo",
  },
  {
    url: new URL("../../assets/photos/Kevin-053.jpg", import.meta.url),
    description: "Knappe Kevin 6",
    liked: false,
    id: nanoid(),
    type: "photo",
  },
  {
    url: new URL("../../assets/photos/Kevin-055.jpg", import.meta.url),
    description: "Knappe Kevin 7",
    liked: false,
    id: nanoid(),
    type: "photo",
  },
  {
    url: new URL("../../assets/photos/Kevin-057.jpg", import.meta.url),
    description: "Knappe Kevin 8",
    liked: false,
    id: nanoid(),
    type: "photo",
  },
  {
    url: new URL("../../assets/photos/Kevin-032.jpg", import.meta.url),
    description: "Knappe Kevin 9",
    liked: false,
    id: nanoid(),
    type: "photo",
  },
];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLEPHOTO:
      return state.map((photo) => {
        if (photo.id === payload) {
          return { ...photo, liked: !photo.liked };
        }
        return photo;
      });
    default:
      return state;
  }
};
