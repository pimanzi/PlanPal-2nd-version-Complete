import { updateTaskStatus } from '@/services/apiTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export function useMarkComplete() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const { mutate: markComplete, isPending: isMarkingComplete } = useMutation({
    mutationFn: (id: number) =>
      updateTaskStatus(
        {
          status: 'completed',
        },
        id
      ),
    onSuccess: () => {
      toast.success(t('toastToComplete'));
      queryClient.invalidateQueries({ queryKey: ['personalTasks'] });
    },

    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { markComplete, isMarkingComplete };
}
