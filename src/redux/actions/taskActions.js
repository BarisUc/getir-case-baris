import * as actionTypes from "./actionTypes"

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: actionTypes.ADD_TODO,
    id: nextTodoId++,
    text
});

export const toggleTodo=(id)=>({
    type:actionTypes.TOGGLE_TODO,
    id,
    completed: true
});

export const deleteTodo=(id)=>({
    type: actionTypes.DELETE_TODO,
    id,
});
