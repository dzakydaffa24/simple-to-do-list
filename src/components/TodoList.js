import React from 'react';
import _ from "lodash";
import TodoCount from "./TodoCount";
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {

    renderTodoItems() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
            <div className="container py-4">
                <TodoCount todos={this.props.todos}/>
                <div className="row">
                    {this.renderTodoItems()}
                </div>
            </div>


        )
    }
}
