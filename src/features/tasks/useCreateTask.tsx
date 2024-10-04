import { taskDataInterface } from "@/interfaces";
import { createTasks } from "@/services/apiTasks";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateTask() {
  const queryClient = useQueryClient();
  const { mutate: createTask, isPending } = useMutation({
    mutationFn: (task: taskDataInterface) => createTasks(task),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("New task added successfully");
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createTask, isPending };
}
