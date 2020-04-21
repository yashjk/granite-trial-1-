// syntax error @7
import React from 'react';

const List = ({ tasks }) => {
  return (
    <div className="container">
      <div class="pt-5">
        <h1>Tasks List</h1>
        <div className="p-1">
          {tasks && tasks.length ? (
            <ul className="list-group list-unstyled">
              {tasks.map((task, index) => {
                return (
                  <li key={index}>
                    Task id : {task.id}
                    <br />
                    Task description: {task.description}
                  </li>
                );
              })}
            </ul>
          ) : (
            <h3>No task has been created yet</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;

