import React from 'react';
import { HiChevronRight } from "react-icons/hi";
import './InputField.css';

interface InputFieldProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
};

const InputField: React.FC<InputFieldProps> = ({ task, setTask, handleAdd }: InputFieldProps) => {
  return (
    <form className="inputField" onSubmit={handleAdd}>
      <input 
        className="inputField--input"
        type="text"
        placeholder="Add a task..." 
        value={task} 
        onChange={
          (e) => setTask(e.target.value)
        }
      />
      <button className="inputField--button" type="submit">
        <HiChevronRight viewBox='0 0'/>
      </button>
    </form>
  )
};

export default InputField