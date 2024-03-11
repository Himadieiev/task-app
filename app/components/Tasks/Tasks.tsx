'use client';

import { useGlobalState } from '@/app/context/globalProvider';
import CreateContent from '../Modals/CreateContent/CreateContent';

import { TasksWrapper } from './Tasks.styled';

const Tasks = () => {
  const { theme } = useGlobalState();

  return (
    <TasksWrapper theme={theme}>
      <CreateContent />
    </TasksWrapper>
  );
};

export default Tasks;
