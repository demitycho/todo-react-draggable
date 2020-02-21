import { ADD_ARTICLE, MOVE_OBJECT } from "../constants/action-types";
// fake data generator
const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`
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
  result[id2List[droppableSource.droppableId]] = sourceClone;
  result[id2List[droppableDestination.droppableId]] = destClone;
  console.log(result);
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
const initialState = {
  articles: [],
  todo: getItems(10),
  inProgress: getItems(5, 10),
  done: getItems(5, 15)
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === MOVE_OBJECT) {
    console.log('reducer', action.payload);

    const { source, destination } = action.payload;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      // console.log('same list', store.getState());
      const items = reorder(
        getList(state, source.droppableId),
        source.index,
        destination.index
      );
      console.log(items);
      return Object.assign({}, state, {
        [id2List[source.droppableId]]: items
      });
      // let state = { [this.id2List[source.droppableId]]: items };
      // this.setState(state);
    }
    else {
      const result = move(
        state,
        getList(state, source.droppableId),
        getList(state, destination.droppableId),
        source,
        destination
      );
      console.log('diff ID');
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
