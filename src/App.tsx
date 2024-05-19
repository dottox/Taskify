import React from 'react';
import './App.css';
import InputField from './components/InputField';
import TasksList from './components/TasksList';
import { Task } from './model';

const App: React.FC = () => {
  
  // States of task and list of tasks
  const [task, setTask] = React.useState<string>("");
  const [tasks, setTasks] = React.useState<Task[]>([]);

  // Function to handle a new task
  const handleAddTask = (e : React.FormEvent) => {
    e.preventDefault();
  
    if (task) {
      setTasks([...tasks, {
        id: Date.now(),
        name: task,
        completed: false
      }]);
      setTask("");
    }
  };

  // Frontend
  return (
    <div className="App">
      <nav className="Navbar">
        <h1>Taskify</h1>
      </nav>
      <InputField task={task} setTask={setTask} handleAdd={handleAddTask}/>
      <div className="Task-Divider">
        <TasksList tasks={tasks} setTasks={setTasks} done={false} />
        <TasksList tasks={tasks} setTasks={setTasks} done={true} />
      </div>
    </div>
  );
}

export default App;
