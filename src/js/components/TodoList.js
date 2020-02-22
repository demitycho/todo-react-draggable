import React from "react";
import {Draggable, Droppable} from "react-beautiful-dnd";

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the todo look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  // margin: `0 0 ${grid}px 0`,
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "lightgrey",

// change background colour if dragging
  background: isDragging ? 'lightgreen' : 'white',

  // styles we need to apply on draggables
  ...draggableStyle
});

const countStyle = {
  textAlign: "center",
  width: "40%",
  height: "70%",
  fontSize: "20px",
  background: "white",
};

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  // padding: grid/2,
});

const TodoList = props =>
  <div className="todoList">
    <div className="listHeader">
      <div style={{
        fontSize: "30px",
        color: "white"}}>
        {props.name}
      </div>
      <div style={countStyle}><b>{props.list.length}</b> <br/>PROJECTS</div>
    </div>
    <Droppable droppableId={props.id}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}>
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
                  style={getItemStyle(
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