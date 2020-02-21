import {ADD_ARTICLE, MOVE_OBJECT} from "../constants/action-types";

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}
export function moveObject(payload) {
  return { type: MOVE_OBJECT, payload };
}
