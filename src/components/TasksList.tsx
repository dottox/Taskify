import React from 'react';
import { Task } from '../model';
import './TasksList.css';
import { FiTrash } from "react-icons/fi";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoMdCheckboxOutline } from "react-icons/io";

interface TasksListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  done: Boolean;
};


const TasksList: React.FC<TasksListProps> = ({ tasks, setTasks, done }: TasksListProps) => {
  return (
    <div className="tasks"> {!done ? <h2>to-do</h2> : <h2>completed</h2>}
      {
        tasks.filter(task => ( // Creates an array of tasks that are equal to the done prop
          task.completed === done
        )).map(task => ( // Maps the array of valid tasks to a div element
          <div key={task.id} className="tasks--task">
            <span className={task.completed ? "tasks--task--completed" : ""}>
              {task.completed ? "✔" : ""} {task.name}
            </span>
            <div className="tasks--task--buttons">
              <button 
                onClick={
                  () => setTasks(
                    tasks.map(t => {
                      if (t.id === task.id) {
                        t.completed = !t.completed;
                      }
                      return t;
                    })
                  )
                }
              >
                {task.completed ? <IoMdCheckboxOutline /> : <MdCheckBoxOutlineBlank />}
              </button>
              <button
                onClick={
                  () => setTasks(
                    tasks.filter(t => t.id !== task.id)
                  )
                }
              >
                <FiTrash />
              </button>
            </div>
          </div>
        ))
      }
    </div>
  )
};

export default TasksList