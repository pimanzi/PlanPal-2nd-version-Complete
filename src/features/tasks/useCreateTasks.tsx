import { useLocalStorageState } from '@/hooks/useLocalStorageState';
import { insertTasks, Task } from '@/services/apiTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export function useCreateTask() {
  const [localTasks, setLocalTasks] = useLocalStorageState([], 'tasks');
  console.log('Current tasks:', localTasks);

  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const { mutate: createTask, isPending: isCreating } = useMutation({
    mutationFn: (task: Task) => insertTasks(task),
    onSuccess: (newTask) => {
      queryClient.invalidateQueries({ queryKey: ['personalTasks'] });
      setLocalTasks((prevTasks: Task[]) => [...prevTasks, newTask]);
      toast.success(t('toastSuccessTaskCreation'));
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createTask };
}
