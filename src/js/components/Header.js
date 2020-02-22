import React, {Component} from "react";
import {connect} from "react-redux";
import Form from "./Form";
import TodoCount from "./TodoCount";

const mapStateToProps = state => {
  return {
    count: state.todo.length + state.inProgress.length + state.done.length
  };
};

class ConnectedHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="appHeader">
        <div className="form">
          <h2>Add project</h2>
          <Form />
        </div>
        <div>
          <div style={{textAlign: "center", fontSize:"20px"}}><b>TOTAL</b></div>
          <TodoCount count={this.props.count}/>
        </div>
      </div>
    );
  }
}

const Header = connect(
  mapStateToProps,
  null
)(ConnectedHeader);

export default Header;