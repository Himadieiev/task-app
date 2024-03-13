'use client';

import Tasks from '../components/Tasks/Tasks';
import { useGlobalState } from '../context/globalProvider';

const Important = () => {
  const { importantTasks } = useGlobalState();

  return <Tasks title="Important Tasks" tasks={importantTasks} />;
};

export default Important;
