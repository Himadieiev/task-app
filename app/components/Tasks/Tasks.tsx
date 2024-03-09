'use client';

import { useGlobalState } from '@/app/context/globalProvider';

import { TasksWrapper } from './Tasks.styled';

const Tasks = () => {
  const { theme } = useGlobalState();

  return <TasksWrapper theme={theme}>Tasks</TasksWrapper>;
};

export default Tasks;
