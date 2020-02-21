import {ADD_TODO, MOVE_OBJECT} from "../constants/action-types";

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}
export function moveObject(payload) {
  return { type: MOVE_OBJECT, payload };
}
