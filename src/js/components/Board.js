// src/js/components/Header.jsx
import React from "react";
import { connect } from "react-redux";
import { moveObject } from "../actions/index";
import { DragDropContext } from 'react-beautiful-dnd';
import TodoList from "./TodoList";
import '../../App.css';

function mapDispatchToProps(dispatch) {
  return {
    moveObject: payload => dispatch(moveObject(payload)),
  };
}
const mapStateToProps = state => {
  return {
    todo: state.todo,
    inProgress: state.inProgress,
    done: state.done
  };
};
/**
 * To create more columns, add more TodoList components in the DragDropContext
 * Ensure the corresponding fields are added to the state in js/reducers/index.js
 */
const ConnectedBoard = props => (
  <div className="board">
    <DragDropContext onDragEnd={props.moveObject}>
      <TodoList name="Todo" id="todo" list={props.todo}/>
      <TodoList name="In Progress" id="inProgress" list={props.inProgress}/>
      <TodoList name="Done" id="done" list={props.done}/>
    </DragDropContext>
  </div>
);

const Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedBoard);

export default Board;