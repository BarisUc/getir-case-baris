import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux'
import {createStore} from "redux";
import rootReducer from './redux/reducers'
import {addTodo} from "./redux/actions/taskActions";
import Header from "./components/Header"

const store = createStore(rootReducer);

class App extends React.Component {
    addTodoItem(text) {
        store.dispatch(addTodo(text));
    }

    render() {
        let input;

        return (
            <Provider store={store}>
            <div className="App">
                <Header/>
                <div className="ListWindow">
                    <TodoList/>
                </div>

                <div className="App-field">
                    <input onKeyPress={(e) => { if (e.key === 'Enter') this.addTodoItem(input.value);}} ref={node => input = node}
                           className="Input" placeholder="Write Your Task"/>
                </div>
            </div>
            </Provider>
        );
    }
}

export default App;
