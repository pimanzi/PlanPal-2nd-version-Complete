import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../../services/apiTasks";

export function useTasks() {
  const { data, isPending, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  return { data, isPending, error };
}
