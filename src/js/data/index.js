import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import articles from "./articles";
import music from "./music";
import photos from "./photos";

const rootReducer = combineReducers({ articles, music, photos });

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
