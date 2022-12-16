import React from 'react';

import TaskList from './TaskList.jsx';

const Content = ({ tasks, handleCheck, handleDelete }) => (
  <>
    {tasks?.length ? (
      <TaskList
        tasks={tasks}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    ) : (
      <p style={{ marginTop: '2rem' }}> Your list is empty.</p>
    )}
  </>
);

export default Content;
