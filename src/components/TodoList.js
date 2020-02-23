import React from 'react';
import '../App.css';
import TodoListItem from "./TodoListItem";
import {connect} from "react-redux";

class TodoList extends React.Component {

    componentDidMount() {
    }

    render() {


        return (
            <div className="App-list">
                {this.props.todos.map(todo => (
                    <TodoListItem key={todo.id} todo={todo}/>
                ))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { todos } = state;
    return { todos };
};


export default connect(mapStateToProps)(TodoList);
