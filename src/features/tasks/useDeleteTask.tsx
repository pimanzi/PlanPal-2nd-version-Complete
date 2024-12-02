import { deleteTask } from '@/services/apiTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';
import { Task } from './types';

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const [, setLocalTasks] = useLocalStorageState([], 'tasks');

  const { isPending: isDeleting, mutate: deleteTasks } = useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: (_, id) => {
      toast.success(t('toastSuccessDeleteTask'));

      // Update server state
      queryClient.invalidateQueries({ queryKey: ['personalTasks'] });

      // Update local storage
      setLocalTasks((prevTasks: Task[]) =>
        prevTasks.filter((task) => task.id !== id)
      );
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTasks };
}
