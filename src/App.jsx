import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import AddTask from './Components/AddTask';
import SearchTask from './Components/SearchTask';
import Content from './Components/Content';
import Footer from './Components/Footer';
import apiRequest from './apiRequest';

function App() {
  const API_URL = 'http://localhost:5000/tasks';

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Fetching data from server failed.');
        }
        const taskList = await response.json();
        setTasks(taskList);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    const myNewTask = { id, checked: false, task: task };
    const taskList = [...tasks, myNewTask];
    setTasks(taskList);

    const postOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(myNewTask),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) {
      setFetchError(result);
    }
  };

  const handleCheck = async (id) => {
    const taskList = tasks.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTasks(taskList);

    const myTask = taskList.find((task) => task.id === id);
    const updateOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ checked: myTask.checked }),
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) {
      setFetchError(result);
    }
  };

  const handleDelete = async (id) => {
    const taskList = tasks.filter((task) => task.id !== id);
    setTasks(taskList);

    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) {
      setFetchError(result);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTask) return;
    addTask(newTask);
    setNewTask('');
  };

  return (
    <div className='App'>
      <Header title={'TO DO LIST'} />
      <AddTask
        newTask={newTask}
        setNewTask={setNewTask}
        handleSubmit={handleSubmit}
      />
      <SearchTask search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading List...</p>}
        {fetchError ? (
          <p
            style={{ color: 'red', textAlign: 'center' }}
          >{`Error: ${fetchError}`}</p>
        ) : (
          !isLoading && (
            <Content
              tasks={tasks.filter(({ task }) =>
                task?.toLowerCase().includes(search.toLowerCase())
              )}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          )
        )}
      </main>
      <Footer length={tasks.length} />
    </div>
  );
}

export default App;
