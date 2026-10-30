
import React, { useState } from 'react';
import styles from './Todo.module.css';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  function addTask() {
    if (newTask.trim() === '') {
      return;
    }

    setTasks([...tasks, {
      id: Date.now(),
      text: newTask
    }]);

    setNewTask('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className={styles.todoBox}>
      <h2>My Daily Tasks</h2>

      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p className={styles.empty}>No tasks added yet.</p>
      ) : (
        <ul className={styles.taskList}>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button onClick={() => deleteTask(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
