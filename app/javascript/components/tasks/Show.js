import React, { Component } from "react";

class Show extends Component {
  render() {
    const { task } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="py-3">You just created a new task!</h2>
          <div className="row">
            <div className="col-md-10 font-weight-bold">
              {task.id}.{task.description}
              <a
                className="ml-2 btn btn-sm btn-warning"
                href={Routes.edit_task_path(task.id)}
              >
                Edit
              </a>
              <a className="ml-2 btn btn-sm btn-warning">Delete</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Show;
