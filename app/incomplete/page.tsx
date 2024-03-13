'use client';

import Tasks from '../components/Tasks/Tasks';
import { useGlobalState } from '../context/globalProvider';

const Incomplete = () => {
  const { incompleteTasks } = useGlobalState();

  return <Tasks title="Incomplete Tasks" tasks={incompleteTasks} />;
};

export default Incomplete;
