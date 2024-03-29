'use client';

import { useGlobalState } from '../context/globalProvider';
import Tasks from '../components/Tasks/Tasks';

const Completed = () => {
  const { completedTasks } = useGlobalState();

  return <Tasks title="Completed Tasks" tasks={completedTasks} />;
};

export default Completed;
