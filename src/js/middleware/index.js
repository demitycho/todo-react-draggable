import { ADD_TODO, MOVE_OBJECT } from "../constants/action-types";
import store from '../store/index.js';

const forbiddenWords = ["spam", "money"];
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const id2List = {
  droppable: 'todo',
  droppable2: 'inProgress',
  droppable3: 'done'
};

const getList = (state, id) => {
  return state[id2List[id]];
}

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      return next(action);
    };
  };
}
