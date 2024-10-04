import { commentsInterface } from "../interfaces";
import supabase from "./supabase";

export async function getComments(
  taskid: number,
): Promise<commentsInterface[]> {
  const { data: comments, error } = await supabase
    .from<commentsInterface>("comments")
    .select("*")
    .eq("taskId", taskid);

  if (error) {
    throw new Error("Comments could not be found");
  }

  return comments;
}
