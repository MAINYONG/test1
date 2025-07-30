
import React from 'react';
import { ClipboardListIcon } from './icons';

interface HeaderProps {
  studentName: string;
  onNameChange: (name: string) => void;
  disabled: boolean;
}

const Header: React.FC<HeaderProps> = ({ studentName, onNameChange, disabled }) => {
    const today = new Date();
    const dateString = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    return (
        <header className="mb-8 text-center">
            <div className="inline-flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full p-3 mb-4">
                <ClipboardListIcon className="w-10 h-10" />
            </div>
            <h1 className="text-4xl font-bold text-slate-800">
              {studentName ? `${studentName} 학생의 할 일` : '오늘의 할 일'}
            </h1>
            <p className="text-lg text-slate-500 mt-2">{dateString} - 농업토목과</p>
            <div className="mt-6 max-w-sm mx-auto">
              <input
                type="text"
                value={studentName}
                onChange={(e) => onNameChange(e.target.value)}
                placeholder="이름을 입력해주세요"
                className="w-full px-4 py-3 text-lg text-center bg-white/80 border-2 border-indigo-200 rounded-full focus:ring-indigo-500 focus:border-indigo-500 transition disabled:bg-slate-100 disabled:cursor-not-allowed"
                aria-label="학생 이름 입력"
                disabled={disabled}
              />
            </div>
        </header>
    );
};

export default Header;
