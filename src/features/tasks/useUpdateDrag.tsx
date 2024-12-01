import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTaskStatus } from '../../services/apiTasks';
import { toast } from 'react-hot-toast';
import { Task } from './types';

interface UpdateStatusParams {
  id: number;
  status: 'toDo' | 'inProgress' | 'completed';
}

export function useUpdateDrag() {
  const queryClient = useQueryClient();

  const { mutate: markStatus } = useMutation({
    mutationFn: ({ id, status }: UpdateStatusParams) =>
      updateTaskStatus(id, status),

    onMutate: async ({ id, status }) => {
      await queryClient.cancelQueries({ queryKey: ['personalTasks'] }); // Updated
      const previousTasks = queryClient.getQueryData(['personalTasks']);
      queryClient.setQueryData(['personalTasks'], (oldTasks: Task[]) =>
        oldTasks?.map((task) => (task.id === id ? { ...task, status } : task))
      );
      return { previousTasks };
    },

    onError: (err, variable, context) => {
      queryClient.setQueryData(['personalTasks'], context?.previousTasks);
      toast.error('Task could not be updated');
      console.log(err);
      console.log(variable);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['personalTasks'] }); // Updated
    },
  });

  return { markStatus };
}
