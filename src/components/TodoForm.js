import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { connect } from 'react-redux';

import { addTodo, updateTodo, setTodoText} from '../actions';

import Input from './Input';

class TodoForm extends React.Component {
    /*constructor(props){
        super(props);

        this.state = {
            text: ""
        }
    }*/

    onChangeText(text) {
        this.props.dispatchSetTodoText(text);
        /*this.setState({
            text
        });*/
    }

    onPress(){
        const { todo } = this.props;
        if (todo.id) 
            return this.props.dispatchUpdateTodo(todo);

        const { text } = todo;
        this.props.dispatchAddTodo(text);
    };

    render() {
        const { text, id } = this.props.todo;
        return(
            <View style={styles.fromContainer}>
                <View style={styles.inputContainer}>
                    <Input 
                        onChangeText={(text) => this.onChangeText(text)}
                        value={text}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        title={id ? "Save" : "Add"}
                        onPress={() => this.onPress()}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    fromContainer: {
        flexDirection: "row",
    },
    inputContainer: {
        flex: 4,
    },
    buttonContainer: {
        flex: 1,
    }
});

/*
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddTodo: text => dispatch(addTodo(text))
    }
};*/

const mapStateToProps = (state) => {
    return {
        todo: state.editingTodo
    }
}

//Currying
export default connect(
    mapStateToProps,
    { 
        dispatchAddTodo: addTodo,
        dispatchUpdateTodo: updateTodo,
        dispatchSetTodoText: setTodoText
    }
)(TodoForm);