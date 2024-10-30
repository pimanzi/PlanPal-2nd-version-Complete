import { insertTasks, Task } from '@/services/apiTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export function useCreateTask() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const { mutate: createTask, isPending: isCreating } = useMutation({
    mutationFn: (task: Task) => insertTasks(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['personalTasks'] });
      toast.success(t('toastSuccessTaskCreation'));
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createTask };
}
