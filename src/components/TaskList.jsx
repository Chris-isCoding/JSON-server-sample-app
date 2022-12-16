import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, handleCheck, handleDelete }) => (
  <ul>
    {tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    ))}
  </ul>
);

export default TaskList;
