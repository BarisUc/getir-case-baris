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
        if(text.length>0){
            store.dispatch(addTodo(text));
            this.setState({inputValue:""});
        }

    }
    constructor(props) {
        super(props);
        this.state = {inputValue:""};
    }


    render() {


        return (
            <Provider store={store}>
            <div className="App">
                <Header/>
                <div className="ListWindow">
                    <TodoList/>
                </div>

                <div className="App-field">
                    <input onChange={(event)=>{

                        this.setState({inputValue:event.target.value})}
                    }
                           onKeyPress={(e) => { if (e.key === 'Enter') {this.addTodoItem(this.state.inputValue);}}}
                           className="Input" placeholder="Write Your Task"
                           value={this.state.inputValue}/>
                </div>
            </div>
            </Provider>
        );
    }
}

export default App;
