import React from "react";
import {Draggable, Droppable} from "react-beautiful-dnd";
import TodoCount from "./TodoCount";

const itemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the todo object look a bit nicer
  fontSize: "20px",
  userSelect: 'none',
  padding: 16,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "lightgrey",

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'white',

  ...draggableStyle
});

/**
 * Following react dnd example
 * props
 *  list: The list of todo object
 *  name: The display name of the column
 */
const TodoList = props =>
  <div className="todoList">
    <div className="listHeader">
      <div style={{
        fontSize: "30px",
        color: "white"}}>
        {props.name}
      </div>
      <TodoCount count={props.list.length}/>
    </div>
    <Droppable droppableId={props.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={{
            background: snapshot.isDraggingOver ?
              'lightblue' : 'lightgrey'}}
        >
          {props.list.map((item, index) => (
            <Draggable
              key={item.id}
              draggableId={item.id}
              index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={itemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                  )}>
                  {item.content}
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>;

export default TodoList;