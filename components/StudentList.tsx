
import React from 'react';
import { Student } from '../types';

interface StudentListProps {
  students: Student[];
  onToggleComplete: (studentId: number) => void;
}

const StudentListItem: React.FC<{ student: Student; onToggle: () => void }> = ({ student, onToggle }) => {
  return (
    <li
      className={`transition-all duration-300 rounded-lg ${
        student.completed ? 'bg-green-100' : 'bg-white hover:bg-slate-50'
      }`}
    >
      <label
        className={`flex items-center w-full p-4 cursor-pointer rounded-lg border ${
          student.completed ? 'border-green-200' : 'border-slate-200'
        }`}
      >
        <input
          type="checkbox"
          checked={student.completed}
          onChange={onToggle}
          className="w-6 h-6 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 cursor-pointer"
        />
        <span
          className={`ml-4 text-lg font-medium ${
            student.completed ? 'text-green-800 line-through decoration-2' : 'text-slate-700'
          }`}
        >
          {student.name}
        </span>
      </label>
    </li>
  );
};


const StudentList: React.FC<StudentListProps> = ({ students, onToggleComplete }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-slate-200/80">
      <h2 className="text-2xl font-bold text-slate-700 mb-4">학생 완료 현황</h2>
      <ul className="space-y-2">
        {students.map((student) => (
           <StudentListItem 
             key={student.id}
             student={student}
             onToggle={() => onToggleComplete(student.id)}
           />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
