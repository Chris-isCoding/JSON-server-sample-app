import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const Task = ({ task, handleCheck, handleDelete }) => (
  <li className='task'>
    <input
      id={task.id}
      type='checkbox'
      onChange={() => handleCheck(task.id)}
      checked={task.checked}
    />
    <label
      htmlFor={task.id}
      style={task.checked ? { textDecoration: 'line-through' } : null}
    >
      {task.task}
    </label>

    <FaTrashAlt
      onClick={() => handleDelete(task.id)}
      role='button'
      tabIndex='0'
      aria-label={`Delete ${task.task}`}
    />
  </li>
);

export default Task;
