import React from 'react';
import Actions from './Actions';
import Input from './Input';
import Subtask from './Subtask';


function Task(props) {
  const { task, taskIndex, tasks, setTasks } = props;

  const subtaskList = task.subtask.map((element, index) => (
    <Subtask
      key={element.id}
      subIndex={index}
      subtask={element}
      task={task}
      taskIndex={taskIndex}
      tasks={tasks}
      setTasks={setTasks}
    />
  ));

  const isCompletedSubtask = task.subtask.filter(
    (element) => element.isDone
  ).length;

  return (
    <div className='task'>
      {' '}
      <hr />
      <br />
      <Actions
        taskIndex={taskIndex}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        taskOrSubtask={2}
        value={task.taskName}
        isDone={task.isDone}
        numberOfTask={task.numberOfTask}
        date={task.date}
      />
      <h4>
        Nombre de sous-tâches réalisées pour la liste {task.taskName}:{' '}
        {isCompletedSubtask}/{task.subtask.length}
      </h4>
      {subtaskList}
      {/*Input subtask*/}
      <div className='color'>
        <Input
          placeholder={'Ajouter une sous-tâche...'}
          taskOrSubtask={1}
          task={task}
          taskIndex={taskIndex}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
 
    </div>
  );
}

export default Task;
