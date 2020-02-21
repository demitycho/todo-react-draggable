import { ADD_TODO, MOVE_OBJECT } from "../constants/action-types";
// fake data generator
let total = 20;
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `Project ${k + offset}`
  }));
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (state, source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = state;
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;
  console.log(result);
  return result;
};

const initialState = {
  todo: getItems(10),
  inProgress: getItems(5, 10),
  done: getItems(5, 15)
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_TODO) {
    return Object.assign({}, state, {
      todo: state.todo.concat(
        {
          id: `item-${total++}`,
          content: action.payload.title
        })
    });
  }
  if (action.type === MOVE_OBJECT) {
    const { source, destination } = action.payload;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        state[source.droppableId],
        source.index,
        destination.index
      );
      return Object.assign({}, state, {
        [source.droppableId]: items
      });
    }
    else {
      const result = move(
        state,
        state[source.droppableId],
        state[destination.droppableId],
        source,
        destination
      );
      return Object.assign({}, state, {
        todo: result.todo,
        inProgress: result.inProgress,
        done: result.done
      });
    }
  }
  return state;
}

export default rootReducer;
