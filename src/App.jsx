import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import Input from './components/Input';
import Icon from './assets/affaires.png';
import todo from './assets/liste-de-choses-a-faire.png';
import update from './assets/mettre-a-jour.png';
import supp from './assets/supprimer.png';

function App() {
  const [tasks, setTasks] = useState([]);

  const taskList = tasks.map((element, index) => (
    <Task
      key={index}
      task={element}
      taskIndex={index}
      tasks={tasks}
      setTasks={setTasks}
    />
  ));
  return (
    <div className='App'>
      <h1>Bienvenue dans votre gestionnaire de tâches</h1>
      <img className='img-header' src={Icon} alt='icon' />
      <ul className='instructions'>
        <li>
          {' '}
          Pour ajouter une tâche ou une sous-tâche cliquez sur le bouton
          "AJOUTER" ou tapez sur "entrer".
        </li>
        <li>
          Pour changer le status d'une tâche ou d'une sous-tâche, cliquez sur{' '}
          <img className='img-btn' src={todo} alt='todo-button' /> ou sur la
          checkbox.
        </li>
        <li>
          Pour changer le nom d'une tâche ou d'une sous-tâche, modifiez le nom
          dans le champs, puis cliquez sur{' '}
          <img className='img-btn' src={update} alt='update-button' />.
        </li>
        <li>
          Pour supprimer une tâche ou une sous-tâche, cliquez sur{' '}
          <img className='img-btn' src={supp} alt='delete-button' />
        </li>
      </ul>
      <Input
        taskOrSubtask={2}
        tasks={tasks}
        setTasks={setTasks}
        placeholder='Ajouter une liste de tâches...'
      />

      {taskList}
    </div>
  );
}

export default App;
