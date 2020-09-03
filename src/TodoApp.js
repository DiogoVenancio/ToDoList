import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

//Reducer
import rootReducer from './reducers';

//Criar store
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));


export default class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <TodoForm />
                    <TodoList />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
    }
});