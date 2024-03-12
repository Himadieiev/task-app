'use client';

import { useGlobalState } from '@/app/context/globalProvider';
import TaskItem from '../TaskItem/TaskItem';
import { plus } from '@/app/utils/Icons';

import { TasksWrapper } from './Tasks.styled';

const tasks = [
  {
    title: 'Title1',
    description: 'Description1',
    date: '2024-03-12',
    completed: false,
    id: '1',
  },
  {
    title: 'Title2',
    description: 'Description2',
    date: '2024-03-11',
    completed: false,
    id: '2',
  },
  {
    title: 'Title3',
    description: 'Description3',
    date: '2024-03-10',
    completed: true,
    id: '3',
  },
  {
    title: 'Title4',
    description: 'Description4',
    date: '2024-03-09',
    completed: true,
    id: '4',
  },
];

interface TasksProps {
  title: string;
  // tasks: any[];
}

const Tasks = ({ title }: TasksProps) => {
  const { theme } = useGlobalState();

  return (
    <TasksWrapper theme={theme}>
      <h1>{title}</h1>
      <div className="tasks grid">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
            isCompleted={task.completed}
            id={task.id}
          />
        ))}
        <button className="create-task">
          {plus}
          Add New Task
        </button>
      </div>
    </TasksWrapper>
  );
};

export default Tasks;
