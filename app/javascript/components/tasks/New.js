//chapter 9 Displaying errors, props should be errors={errors.error}
import React, { Component } from "react";
import { fetchApi } from "../../utils/API";
import Errors from "../shared/Errors";

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      errors: null,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    fetchApi({
      url: Routes.tasks_path(),
      method: "POST",
      body: {
        task: { description: this.state.description },
      },
      onError: (response) => {
        console.log(response);
      },
      onSuccess: (response) => {
        console.log(response);
      },
      successCallBack: (response) => {
        window.location.href = Routes.task_path(response.id);
      },
    });
  }

  handleChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          {errors && errors.length != 0 ? (
            <div className="mt-4">
              <Errors errors={errors.error} message="danger" />
            </div>
          ) : null}
        </div>

        <div className="col-md-10 mx-auto pt-2">
          <div className="row">
            <h3 className="pb-3">Add Task</h3>
          </div>
          <form onSubmit={this.onSubmit}>
            <div className="form-group row pt-3">
              <label htmlFor="name" className="col-sm-2 col-form-label">
                <h5 className="text-secondary ">Description: </h5>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  value={this.state.description}
                />
              </div>
            </div>
            <div className="form-group row pt float-right pr-3">
              <button className="btn btn-md btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default New;
