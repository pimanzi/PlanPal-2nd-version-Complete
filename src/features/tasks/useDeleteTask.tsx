import { deleteTask } from '@/services/apiTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const { isPending: isDeleting, mutate: deleteTasks } = useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => {
      toast.success(t('toastSuccessDeleteTask'));

      queryClient.invalidateQueries({ queryKey: ['personalTasks'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteTasks };
}
