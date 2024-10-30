import { updateTaskStatus } from '@/services/apiTasks';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useMarkInProgress() {
  const queryClient = useQueryClient();
  const { mutate: markInProgress, isPending: isMarkingInProgress } =
    useMutation({
      mutationFn: (id: number) => {
        const newCol = {
          status: 'inProgress',
        };
        return updateTaskStatus(newCol, id);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['personalTasks'] });
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });

  return { markInProgress, isMarkingInProgress };
}
