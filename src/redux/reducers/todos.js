const todos = (state = [], action)=>{

    const deleteTodo = (todos) => {
        const i = todos.findIndex(todo => todo.id === action.id);
        todos.splice(i, 1);
        return todos;
    }

    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );

        case 'DELETE_TODO':
            return [...deleteTodo(state)];

        default:
            return state;
    }
}

export default todos;
