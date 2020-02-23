import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import { Provider } from 'react-redux'
import {createStore} from "redux";
import rootReducer from './redux/reducers'
import {addTodo} from "./redux/actions/taskActions";

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
                <header className="App-header">
                    <p>
                        Daily TO DO List for Getir Case
                    </p>
                </header>
                <div style={{width: "100%", alignItems: 'center', flexDirection: 'column', display: 'flex'}}>
                    <TodoList/>
                </div>

                <div className="App-field">
                    <input onKeyPress={(e) => { if (e.key === 'Enter') this.addTodoItem(input.value); }} ref={node => input = node} className="Input" placeholder="Write Your Task" />
                </div>
            </div>
            </Provider>
        );
    }
}

export default App;
