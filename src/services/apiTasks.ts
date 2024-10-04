import { taskDataInterface, TasksInterface } from "../interfaces";
import supabase from "./supabase";

export async function getTasks(): Promise<TasksInterface[] | void> {
  const { data: tasks, error } = await supabase
    .from<TasksInterface>("tasks")
    .select("*")
    .is("projectId", null);

  if (error) {
    throw new Error(error.message);
  }

  return tasks || [];
}

export async function createTasks(
  task: taskDataInterface,
): Promise<taskDataInterface> {
  const { data, error } = await supabase
    .from("tasks")
    .insert([task])
    .select()
    .single();

  if (error) {
    throw new Error("Task could not be created");
  }

  return data;
}

export async function deleteTasks(
  id: number,
): Promise<taskDataInterface[] | null> {
  const { data, error } = await supabase.from("tasks").delete().eq("id", id);
  if (error) {
    throw new Error("Task could not be deleted");
  }

  return data;
}
