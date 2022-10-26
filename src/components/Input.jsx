import React, { useState } from 'react';
import addSubTask from '../assets/liste-de-taches.png';
import addTodo from '../assets/to-do-list.png';

function Input(props) {
  const { tasks, setTasks, taskOrSubtask, placeholder, taskIndex } = props;
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  //Add a task or subtask - function Enter
  const handleEnter = (e) => {
    if (inputText) {
      if (e.key === 'Enter') {
        if (taskOrSubtask === 1) {
          const newSubtask = {
            id: Math.floor(Math.random() * 100),
            subtaskName: inputText,
            isDone: false,
          };

          const taskList = [...tasks];
          taskList[taskIndex].subtask.push(newSubtask);
          setTasks(taskList);
        } else {
          setTasks([
            ...tasks,
            {
              id: Math.floor(Math.random() * 100),
              numberOfTask: tasks.length === 0 ? 1 : tasks.length + 1,
              taskName: inputText,
              isDone: false,
              subtask: [],
            },
          ]);
        }
        setInputText('');
      }
    }
  };

  //Add a task or subtask - function click

  const handleClick = () => {
    if (inputText) {
      if (taskOrSubtask === 1) {
        const newSubtask = {
          id: Math.floor(Math.random() * 100),
          subtaskName: inputText,
          isDone: false,
        };

        const taskList = [...tasks];
        taskList[taskIndex].subtask.push(newSubtask);
        setTasks(taskList);
      } else {
        setTasks([
          ...tasks,
          {
            id: Math.floor(Math.random() * 100),
            numberOfTask: tasks.length === 0 ? 1 : tasks.length + 1,
            taskName: inputText,
            isDone: false,
            subtask: [],
          },
        ]);
      }
      setInputText('');
    }
  };
  return (
    <div className='task-box'>
      {' '}
     
      <input
        onChange={handleChange}
        value={inputText}
        onKeyDown={handleEnter}
        placeholder={placeholder}
        className="input-text"
      />
      {taskOrSubtask === 2 && (
        <button onClick={handleClick}>
          <div>AJOUTER</div>{' '}
          <img className='img-btn' src={addTodo} alt='bouton-ajouter' />
        </button>
      )}
      {taskOrSubtask === 1 && (
        <button onClick={handleClick}>
          <div>AJOUTER</div>{' '}
          <img className='img-btn' src={addSubTask} alt='bouton-ajouter' />
        </button>
      )}
    </div>
  );
}

export default Input;
