'use client';

import { edit, trash } from '@/app/utils/Icons';

import { useGlobalState } from '@/app/context/globalProvider';
import formatDate from '@/app/utils/formatDate';

import { TaskItemWrapper } from './TaskItem.styled';

interface TaskItemProps {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}

const TaskItem = ({ title, description, date, isCompleted, id }: TaskItemProps) => {
  const { theme, deleteTask } = useGlobalState();

  return (
    <TaskItemWrapper theme={theme}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="date">{formatDate(date)}</p>
      <div className="task-footer">
        {isCompleted ? (
          <button className="completed">Completed</button>
        ) : (
          <button className="incomplete">Incomplete</button>
        )}
        <button className="edit">{edit}</button>
        <button className="delete" onClick={() => deleteTask(id)}>
          {trash}
        </button>
      </div>
    </TaskItemWrapper>
  );
};

export default TaskItem;
