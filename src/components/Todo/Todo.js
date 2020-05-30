import React, { Component } from 'react';
import './Todo.css';
import List from './List';
import {v4 as uuidv4} from "uuid"; 

class Todo extends Component {
    constructor() {
        super();
        //Initial state
        this.state = {
            task: '',
            items: []
        };
    }

    componentWillMount() {
        //Setting default tasks
        this.setState({
            items: [
                {
                    id: uuidv4(),
                    task: 'Pay the rent',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Go to the gym',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Do my homework',
                    completed: false
                }
            ]
        });
    }

    handleOnSubmit = e => {
        //preventing the default from submitting
        e.preventDefault();
        
        //pushing the new itemd to the array and resetting the task value
        if (this.state.task.trim() !== '') {
            this.setState({
                task: '',
                items: [
                    ...this.state.items,
                    {
                        id: uuidv4(),
                        task: this.state.task,
                        completed: false
                    }
                ]
            });
        }
    }

    handleOnChange = e => {
        const { target: { value } } = e;
        //update the task with the input value
        this.setState({task: value});
    }

    markAsCompleted = id => {
        //finding the task by id...
        const foundTask = this.state.items.find(
            task => task.id === id
        );
        //updating the completed status
        foundTask.completed = true;
        //updating the state with the new updated task...
        this.setState({
            items: [
                ...this.state.items                
            ]
        });
    }

    removeTask = id => {
        //filtering the task to be removed
        const filteredTasks = this.state.items.filter(
            task => task.id !== id
        );
        //update items state
        this.setState({
            items: filteredTasks
        });
    }

    render() {
        return(
            <div className="Todo">
                <h1>New Task: </h1>

                <form onSubmit = { this.handleOnSubmit }>
                    <input value = { this.state.task } onChange = { this.handleOnChange }/>
                </form>

                <List 
                    items = { this.state.items }
                    markAsCompleted = { this.markAsCompleted }
                    removeTask = { this.removeTask }
                />
            </div>
        );
    }
}

export default Todo;