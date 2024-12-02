import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../../services/apiTasks';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';
import { useEffect } from 'react';

export function useTasks() {
  const [localTasks, setLocalTasks] = useLocalStorageState([], 'tasks');

  const { data: tasks, isLoading } = useQuery({
    queryKey: ['personalTasks'],
    queryFn: getTasks,
  });

  // Update local storage when server data changes
  useEffect(() => {
    if (tasks) {
      setLocalTasks(tasks);
    }
  }, [tasks, setLocalTasks]);

  return { tasks: tasks || localTasks, isLoading };
}
