import { updateTaskStatus } from '@/services/apiTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';
import { Task } from './types';

export function useMarkInProgress() {
  const queryClient = useQueryClient();
  const [, setLocalTasks] = useLocalStorageState([], 'tasks');

  const { mutate: markInProgress, isPending: isMarkingInProgress } =
    useMutation({
      mutationFn: (id: number) => {
        const newCol = {
          status: 'inProgress',
        };
        return updateTaskStatus(id, newCol.status);
      },
      onSuccess: (_, id) => {
        // Update server state
        queryClient.invalidateQueries({ queryKey: ['personalTasks'] });

        // Update local storage
        setLocalTasks((prevTasks: Task[]) =>
          prevTasks.map((task) =>
            task.id === id ? { ...task, status: 'inProgress' } : task
          )
        );
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { markInProgress, isMarkingInProgress };
}
