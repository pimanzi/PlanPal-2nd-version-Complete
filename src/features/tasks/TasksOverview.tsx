import { useTasks } from './useTasks';
import { Tasks } from './taskInterface';
import TaskItem from './TaskItem';
import Grid from '../../ui/Grid';
import { useSearchParams } from 'react-router-dom';

export default function TasksOverview() {
  const { tasks } = useTasks();
  const [searchParams] = useSearchParams();
  const filterField = searchParams.get('status');
  const filteredTasks =
    filterField === 'all' || !filterField
      ? tasks
      : tasks?.filter((task) => task.status === filterField);
  const sortField = searchParams.get('sortBy') || 'date-desc';
  const modifier = sortField === 'date-asc' ? 1 : -1;

  const sortedTasks = filteredTasks?.sort((a, b) => {
    // Convert ISO strings to timestamps for comparison
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return (dateA - dateB) * modifier;
  });

  return (
    <Grid>
      {sortedTasks?.map((task: Tasks) => (
        <TaskItem task={task} key={task.id}></TaskItem>
      ))}
    </Grid>
  );
}
