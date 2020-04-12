import React from "react";

export default class TodoListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const {task, isCompleted} = this.props;

        const taskStyle = {
            color: isCompleted ? '#5cb85c' : '#d9534f',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <form onSubmit={this.onSaveClick.bind(this)}>
                    <input className="form-control" defaultValue={task} ref="editInput" type="text"/>
                </form>
            )
        }

        return (
            <label className="font-weight-bold" style={taskStyle}
                   onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </label>
        )
    }

    renderStateSection() {
        const {isCompleted} = this.props;

        if (isCompleted) {
            return (
                <span className="badge badge-success">Done</span>
            )
        }

        return (
            <span className="badge badge-danger">Undone</span>
        )
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <div className="form-group">
                    <div className="form-check-inline">
                        <button className="btn btn-primary" onClick={this.onSaveClick.bind(this)}>Save</button>

                    </div>
                    <div className="form-check-inline">
                        <button className="btn btn-danger" onClick={this.onCancelClick.bind(this)}>Cancel</button>
                    </div>
                </div>
            )
        }

        return (
            <div className="form-group">
                <div className="form-check-inline">
                    <div className="form-check-inline">
                        <button className="btn btn-warning" onClick={this.onEditClick.bind(this)}>Edit</button>
                    </div>
                    <div className="form-check-inline">
                        <button className="btn btn-danger"
                                onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete
                        </button>
                    </div>
                </div>
            </div>

        )
    }

    render() {
        return (
            <div className="row p-4">
                <div className="card shadow-sm">
                    <div className="card-header text-center">
                        {this.renderTaskSection()} {this.renderStateSection()}
                    </div>
                    <div className="card-body">
                        {this.renderActionSection()}
                    </div>
                </div>
            </div>
        )
    }

    componentDidUpdate() {
        if (this.state.isEditing) {
            this.refs.editInput.focus();
        }
    }

    onEditClick() {
        this.setState({isEditing: true});
        // this.refs.editInput.getDOMNode().focus();
    }

    onCancelClick() {
        this.setState({isEditing: false});
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing: false});
    }

}
