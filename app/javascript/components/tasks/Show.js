import React, { Component } from "react";
import { fetchApi } from "../../utils/API";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: null,
    };
    this.handleError = this.handleError.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleError = (response) => {
    this.setState({
      errors: {
        errors: response.messages,
        type: response.type,
      },
    });
  };

  handleDelete = (taskId) => {
    let taskDelete = confirm("Are you sure you want to delete the task?");
    if (taskDelete) {
      fetchApi({
        url: Routes.task_path(taskId),
        method: "DELETE",
        onError: this.handleError,
        onSuccess: (response) => {
          console.log(response);
        },
        successCallBack: () => {
          window.location.replace(Routes.tasks_path());
        },
      });
    }
  };

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
              <a
                className="ml-2 btn btn-sm btn-warning"
                onClick={() => this.handleDelete(task.id)}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Show;
