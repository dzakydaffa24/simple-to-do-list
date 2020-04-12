import React from 'react';
import _ from 'lodash';
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

const todos = [
    {
        task: 'Dugem',
        isCompleted: false
    },
    {
        task: 'Tobat',
        isCompleted: false
    },
    {
        task: 'Tidur',
        isCompleted: false
    },
    {
        task: 'Nongkrong',
        isCompleted: false
    }
];

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: todos
        }
    }

    render() {
        return (
            <div className="justify-content-center row">
                <div className="col-md-12">
                    <div className="text-center p-4">
                        <h1 className="h1">Simple Todo-list</h1>
                    </div>
                    <div className="col-md-6">
                        <TodoCreate
                            todos={this.state.todos}
                            createTask={this.createTask.bind(this)}/>
                    </div>
                    <div className="col-md-11">
                        <TodoList
                            todos={this.state.todos}
                            saveTask={this.saveTask.bind(this)}
                            deleteTask={this.deleteTask.bind(this)}
                            toggleTask={this.toggleTask.bind(this)}
                        />
                    </div>
                </div>
            </div>
        )
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({todos: this.state.todos});
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({todos: this.state.todos});
    }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }
}
