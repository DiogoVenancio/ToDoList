import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO } from '../actions';

let nextId = 1;

const todosListReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TODO:
            //Adicionar um todo
            const newTodo = {
                id: nextId++,
                text: action.text,
                done: false
            }
            //a = [1, 2, 3]
            //b = [5, 6, 7]
            //[...a, ...b]
            return [...state, newTodo];
        case UPDATE_TODO:
            return state.map(todo => {
                if(todo.id === action.todo.id)
                    return action.todo;
                return todo;
            });
        case TOGGLE_TODO:
            return state.map(todo => {
                if(todo.id === action.todoId)
                    return {
                        ...todo,
                        done: !todo.done
                    };
                return todo;
            });
        default:
            return state;
    }
}

export default todosListReducer;