import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../../services/apiTasks';

export function useTasks() {
  const { data: tasks, isLoading } = useQuery({
    queryKey: ['personalTasks'],
    queryFn: getTasks,
  });

  return { tasks, isLoading };
}
