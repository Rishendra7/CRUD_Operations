import { applyMiddleware, createStore } from "redux";
import paniPuriReducer from "./CakeReducer";
import logger from "redux-logger";  //npm i redux-logger

export const store = createStore(paniPuriReducer, applyMiddleware(logger));

