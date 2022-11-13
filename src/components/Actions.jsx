import React, { useState } from 'react';
import Swal from 'sweetalert2';
import supp from '../assets/supprimer.png';
import todo from '../assets/liste-de-choses-a-faire.png';
import done from '../assets/verifier.png';
import update from '../assets/mettre-a-jour.png';

function Actions(props) {
  const {
    subIndex,
    taskIndex,
    taskOrSubtask,
    value,
    isDone,
    tasks,
    setTasks,
    numberOfTask,
    date,
  } = props;

  const [inputText, setInputText] = useState(value);

  // function delete task or subtask
  const deleteTask = () => {
    const tasksList = [...tasks];
    if (taskOrSubtask === 2) {
      tasksList.splice(taskIndex, 1);
      setTasks(tasksList);
      Swal.fire(
        `La liste ${value} a été supprimée`
      );
    } else {
      tasksList[taskIndex].subtask.splice(subIndex, 1);
      setTasks(tasksList);
      Swal.fire(`La sous-tâche ${value} a été supprimée`);
    }
    console.log('Tasks List', tasksList);
  };

  const addTask = (e) => {
    setInputText(e.target.value);
  };

  // function change status of a task or subtask (to do or done)
  const handleStatus = () => {
    const tasksList = [...tasks];
    let taskStatus = false;
    if (taskOrSubtask === 1) {
      // subtask status
      taskStatus = tasksList[taskIndex].subtask[subIndex].isDone;
      tasksList[taskIndex].subtask[subIndex].isDone = !taskStatus;
    } else {
      // task status
      taskStatus = tasksList[taskIndex].isDone;
      tasksList[taskIndex].isDone = !taskStatus;
    }
    setTasks(tasksList);
  };

  // // function update/change the task or subtask name
  // const updateTask = (e) => {
  //   if (e.key === 'Enter') {
  //     const tasksList = [...tasks];
  //     if (taskOrSubtask === 1) {
  //       //update subtask
  //       tasksList[taskIndex].subtask[subIndex].subtaskName = inputText;
  //       alert(
  //         `${ (tasksList[taskIndex].subtask[subIndex].subtaskName =
  //           inputText)} a été mise à jour`
  //       );
  //     } else {
  //       //update task
  //       tasksList[taskIndex].taskName = inputText;
  //       alert(
  //         `${(tasksList[taskIndex].taskName = inputText)} a été mise à jour`
  //       );
  //     }

  //     setTasks(tasksList);
  //   }
  // };

  // function update/change the task or subtask name
  const updateTaskButton = () => {
    const tasksList = [...tasks];
    if (taskOrSubtask === 1) {
      //update subtask
      tasksList[taskIndex].subtask[subIndex].subtaskName = inputText;
      Swal.fire(
        `La sous-tâche ${(tasksList[taskIndex].subtask[subIndex].subtaskName =
          inputText)} a été mise à jour`
      );
    } else {
      //update task
      tasksList[taskIndex].taskName = inputText;
      Swal.fire(
        `La liste ${(tasksList[taskIndex].taskName =
          inputText)} a été mise à jour`
      );
    }

    setTasks(tasksList);
  };

  const isCompletedTask = tasks.filter((element) => element.isDone).length;

  const dateFormater = new Date(date).toLocaleDateString('fr-FR');

  return (
    <div className='subtask-box'>
      {taskOrSubtask === 2 && (
        <div>
          <h3>
            Liste de tâches numéro {numberOfTask}/{tasks.length}{' '}
          </h3>

          <h2>{value}</h2>
          <h3>Date de création : {dateFormater}</h3>
          <p>
            Rappel du nombre de tâches réalisées: {isCompletedTask}/
            {tasks.length}
          </p>
        </div>
      )}
      <input type='checkbox' checked={isDone} onChange={handleStatus} />
      <input
        style={{ textDecorationLine: isDone ? 'line-through' : 'none' }}
        value={inputText}
        onChange={addTask}
        //    onKeyDown={updateTask}
        className={inputText === '' ? 'input-task' : 'input-test'}
      />

      {taskOrSubtask && (
        <button onClick={handleStatus}>
          {!isDone ? (
            <img className='img-btn' src={todo} alt='todo-button' />
          ) : (
            <img className='img-btn' src={done} alt='done-button' />
          )}
        </button>
      )}

      {taskOrSubtask && (
        <button onClick={updateTaskButton}>
          <img className='img-btn' src={update} alt='update-button' />
        </button>
      )}

      {taskOrSubtask && (
        <button onClick={deleteTask}>
          <img className='img-btn' src={supp} alt='delete-button' />
        </button>
      )}
    </div>
  );
}

export default Actions;
