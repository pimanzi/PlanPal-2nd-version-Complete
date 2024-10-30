import { useTasks } from '../tasks/useTasks';
import Stats from './Stats';
import StatusChart from './StatusChart';
import TodayActivity from './TodayActivity';

export default function DashboardLayout() {
  const { isLoading, tasks } = useTasks();
  if (isLoading) <div className="spinner"></div>;

  const completedTasks = tasks?.filter(
    (task) => task.status === 'completed'
  ).length;

  const unCompletedTasks = tasks?.filter(
    (task) => task.status === 'toDo' || task.status === 'inProgress'
  ).length;
  return (
    <div className="space-y-[10vw]  bgTablet:space-y-[5vw] pb-[80px]">
      <Stats
        completedTasks={completedTasks || 0}
        unCompletedTasks={unCompletedTasks || 0}
      ></Stats>

      <TodayActivity tasks={tasks}></TodayActivity>

      <StatusChart tasks={tasks}></StatusChart>
    </div>
  );
}
