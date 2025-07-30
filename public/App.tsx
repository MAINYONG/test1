
import React, { useState, useMemo } from 'react';
import { Task } from './types';
import { INITIAL_TASKS } from './constants';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import TaskList from './components/TaskList';
import { PaperAirplaneIcon } from './components/icons';

const App: React.FC = () => {
  const [studentName, setStudentName] = useState('');
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleToggleTask = (taskId: number) => {
    if (isSubmitted) return;
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  const handleSubmit = () => {
    if (!studentName.trim()) {
      alert('학생 이름을 먼저 입력해주세요.');
      return;
    }
    // In a real application, this data would be sent to a server.
    // For now, we simulate the submission by locking the UI.
    console.log('Submitting data:', {
      studentName,
      tasks,
      completedCount: completedCount,
      totalTasks: totalTasks,
      timestamp: new Date().toISOString()
    });
    setIsSubmitted(true);
  };

  const completedCount = useMemo(() => {
    return tasks.filter(task => task.completed).length;
  }, [tasks]);
  
  const totalTasks = tasks.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-200 p-4 sm:p-6 lg:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <Header 
          studentName={studentName} 
          onNameChange={setStudentName}
          disabled={isSubmitted} 
        />

        <main className="mt-8 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-slate-200/80">
                <ProgressBar completed={completedCount} total={totalTasks} />
            </div>

            <TaskList 
              tasks={tasks} 
              onToggleTask={handleToggleTask}
              disabled={isSubmitted} 
            />

            <div className="mt-8 text-center">
              {isSubmitted ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg font-bold text-lg shadow-sm">
                  <p>✅ 성공적으로 제출되었습니다!</p>
                  <p className="text-sm font-normal mt-1">선생님께서 확인하실 예정입니다.</p>
                </div>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!studentName.trim()}
                  className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 ease-in-out disabled:bg-slate-400 disabled:cursor-not-allowed disabled:shadow-none"
                  aria-label="제출하기"
                >
                  <PaperAirplaneIcon className="w-6 h-6 mr-3 -rotate-45" />
                  제출하기
                </button>
              )}
            </div>
        </main>
        
        <footer className="text-center mt-12 pb-4">
            <p className="text-slate-500">농업토목과 학생용 투두리스트</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
