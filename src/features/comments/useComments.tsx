import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../services/apiComments";

export default function useComments(id: number) {
  const {
    data: comment,
    isPending,
    error,
  } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => getComments(id),
  });

  return { comment, isPending, error };
}
