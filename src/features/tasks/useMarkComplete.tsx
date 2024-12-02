import { updateTaskStatus } from '@/services/apiTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';
import { Task } from './types';

export function useMarkComplete() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [setLocalTasks] = useLocalStorageState([], 'tasks');

  const { mutate: markComplete, isPending: isMarkingComplete } = useMutation({
    mutationFn: (id: number) => {
      const newCol = {
        status: 'completed',
      };
      return updateTaskStatus(id, newCol.status);
    },
    onSuccess: (_, id) => {
      // Update server state
      queryClient.invalidateQueries({ queryKey: ['personalTasks'] });

      // Update local storage
      setLocalTasks((prevTasks: Task[]) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, status: 'completed' } : task
        )
      );

      toast.success(t('toastToComplete'));
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { markComplete, isMarkingComplete };
}
