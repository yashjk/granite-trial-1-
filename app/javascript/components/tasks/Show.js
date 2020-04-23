import React, { Component } from "react";

class Show extends Component {
  render() {
    const { task } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <h2 className="py-3">You just created a new task!</h2>
          <div className="row">
            <div className="col-md-10">
              {task.id}.{task.description}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Show;
