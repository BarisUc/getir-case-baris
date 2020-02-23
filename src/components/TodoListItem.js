import React from 'react';
import '../App.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import {deleteTodo, toggleTodo} from "../redux/actions/taskActions";
import {connect} from "react-redux";

class TodoListItem extends React.Component {
    deleteTodoItem(clickedid){
        this.store.dispatch(deleteTodo(clickedid));

    }
    render() {


        return (
            <div className={`TodoListItem ${this.props.todo.completed ? 'completed' : ''}`}>
                <div className="ListItemText">
                    <span className={this.props.todo.completed ? 'completed-text' : ''}>{this.props.todo.text}</span>
                </div>
                <div className="App-list-element">
                    <span onClick={() => this.props.toggleTodoItem()}><FontAwesomeIcon icon={faCheck}/></span>

                    <span onClick={() => this.props.deleteTodoItem()}><FontAwesomeIcon icon={faTrash}/></span>
                </div>
            </div>
        );
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteTodoItem: () => dispatch(deleteTodo(ownProps.todo.id)),
        toggleTodoItem: () => dispatch(toggleTodo(ownProps.todo.id))
    };
}



export default connect(null, mapDispatchToProps)(TodoListItem);
