import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    };
}

class ConnectedForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { newTodo } = this.state;
        this.props.addTodo({ title: newTodo });
        this.setState({ newTodo: "" });
    }
    render() {
        const { newTodo } = this.state;
        return (
            <form onSubmit={this.handleSubmit} style={{marginLeft: "20px"}}>
                <div>
                    <input
                        type="text"
                        id="newTodo"
                        value={newTodo}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        );
    }
}

const Form = connect(
    null,
    mapDispatchToProps
)(ConnectedForm);

export default Form;