import React from "react";
import _ from "lodash";

export default class TodoCount extends React.Component{

    renderTasksCount(){
        const tasksCount =  _.size(this.props.todos);
        return tasksCount == 1 ? '1 task:' : (tasksCount + ' tasks:');
    }

    render(){
        // return
        return (
            <div className="card shadow-sm">
                <div className="navbar navbar-light bg-white">
                    <div className="navbar-brand font-weight-bold text-uppercase">{ this.renderTasksCount() }</div>
                </div>
            </div>
        )
    }
}

