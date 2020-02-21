// src/js/components/Board.jsx
import React, { Component } from "react";
import { connect } from "react-redux";
import { moveObject } from "../actions/index";
import { DragDropContext } from 'react-beautiful-dnd';
import TodoList from "./TodoList";

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

class ConnectedBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{width: "100%", display:"flex", justifyContent: "space-between"}}>
        <DragDropContext onDragEnd={this.props.moveObject}>
          <TodoList name="droppable" list={this.props.todo}/>
          <TodoList name="droppable2" list={this.props.inProgress}/>
          <TodoList name="droppable3" list={this.props.done}/>
        </DragDropContext>
      </div>
    );
  }
}

const Board = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedBoard);

export default Board;