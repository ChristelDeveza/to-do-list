import React from 'react';
import Actions from './Actions';

function Subtask(props) {
  const { subtask, subIndex, task, taskIndex, tasks, setTasks } = props;

  return (
    <div>
      {' '}
      <Actions
        subIndex={subIndex}
        subtask={subtask}
        taskIndex={taskIndex}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        taskOrSubtask={1}
        value={subtask.subtaskName}
        isDone={subtask.isDone}
       
      />
    </div>
  );
}

export default Subtask;
