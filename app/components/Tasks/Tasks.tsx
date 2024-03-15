'use client';

import { useGlobalState } from '@/app/context/globalProvider';
import TaskItem from '../TaskItem/TaskItem';
import { plus } from '@/app/utils/Icons';
import Modal from '../Modals/Modal/Modal';

import { TasksWrapper } from './Tasks.styled';
import CreateContent from '../Modals/CreateContent/CreateContent';

interface TasksProps {
  title: string;
  tasks: any[];
}

const Tasks = ({ tasks, title }: TasksProps) => {
  const { theme, isLoading, openModal, isModalOpen } = useGlobalState();

  return (
    <TasksWrapper theme={theme}>
      {isModalOpen && <Modal content={<CreateContent />} />}

      <h1>{title}</h1>
      {!isLoading ? (
        <div className="tasks grid">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              title={task.title}
              description={task.description}
              date={task.date}
              isCompleted={task.isCompleted}
              id={task.id}
            />
          ))}
          <button className="create-task" onClick={openModal}>
            {plus}
            Add New Task
          </button>
        </div>
      ) : (
        <div className="tasks-loader w-full h-full flex justify-center items-center">
          <span className="loader"></span>
        </div>
      )}
    </TasksWrapper>
  );
};

export default Tasks;
