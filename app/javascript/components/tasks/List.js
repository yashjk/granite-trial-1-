import React from "react";

const List = ({ tasks }) => {
  return(
    <div className="container">
      <h1>Tasks List</h1>
      <div className="row">
        <div className="col-md-10">
          { tasks && tasks.length ? (
            <ul className="list-group list-unstyled">
              { tasks.map(task => {
                return(
                  <p>
                    Task id : { task.id }
                    <br />
                    Task description: { task.description }
                  </p>
                );
              })}
            </ul>
          ) : (
            <h3>No task has been created yet</h3>
          )}
        </div>
        <div className="col-md-2">
          <a className="btn btn-primary" href={Routes.new_task_path()}>
            Add new Task
          </a>
        </div>
      </div>
    </div>
  );
}

export default List;
