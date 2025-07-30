
import React from 'react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: number) => void;
  disabled: boolean;
}

const TaskListItem: React.FC<{ task: Task; onToggle: () => void; disabled: boolean }> = ({ task, onToggle, disabled }) => {
  return (
    <li
      className={`transition-all duration-300 rounded-lg ${
        task.completed ? 'bg-green-100' : 'bg-white'
      } ${disabled ? 'opacity-70' : 'hover:bg-slate-50'}`}
    >
      <label
        className={`flex items-center w-full p-4 rounded-lg border ${
          task.completed ? 'border-green-200' : 'border-slate-200'
        } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        htmlFor={`task-${task.id}`}
      >
        <input
          id={`task-${task.id}`}
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          disabled={disabled}
          className="w-6 h-6 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        />
        <span
          className={`ml-4 text-lg font-medium ${
            task.completed ? 'text-green-800 line-through decoration-2' : 'text-slate-700'
          } ${disabled && task.completed ? 'text-green-600' : ''} ${disabled && !task.completed ? 'text-slate-500' : ''}`}
        >
          {task.text}
        </span>
      </label>
    </li>
  );
};


const TaskList: React.FC<TaskListProps> = ({ tasks, onToggleTask, disabled }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-slate-200/80">
      <h2 className="text-2xl font-bold text-slate-700 mb-4">오늘의 실습 과제</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
           <TaskListItem
             key={task.id}
             task={task}
             onToggle={() => onToggleTask(task.id)}
             disabled={disabled}
           />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
