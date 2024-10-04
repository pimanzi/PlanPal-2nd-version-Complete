import { deleteTasks } from "@/services/apiTasks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteTask() {
  const queryClient = useQueryClient();
  const { mutate: deleteTask, isPending } = useMutation({
    mutationFn: (id: number) => deleteTasks(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task deleted successfully");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { deleteTask, isPending };
}
