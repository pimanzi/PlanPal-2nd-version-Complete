import TasksOverview from '@/features/tasks/TasksOverview';
import TasksHeader from '../features/tasks/TasksHeader';
import TasksOperations from '../features/tasks/TasksOperations';
import { useTasks } from '@/features/tasks/useTasks';
import { CreateTaskSm } from '@/features/tasks/CreateTasksFormSm';

export default function Tasks() {
  const { isLoading } = useTasks();
  if (isLoading) return <div className="spinner"> </div>;
  return (
    <div className=" relative sm:pl-[30px] space-y-7 pb-10 pl-[20px] pr-[20px] pt-10 xsTablet:pl-[30px] xsTablet:pr-[30px] smTablet:pl-[50px] smTablet:pr-[50px]">
      <TasksHeader></TasksHeader>
      <TasksOperations></TasksOperations>
      <TasksOverview></TasksOverview>
      <CreateTaskSm></CreateTaskSm>
    </div>
  );
}
