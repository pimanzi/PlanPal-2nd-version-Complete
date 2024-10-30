import { Tasks } from '../features/tasks/taskInterface';
import supabase from './supabase';

export async function getTasks(): Promise<Tasks[]> {
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .is('projectId', null);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export interface Task {
  title: string;
  note: string;
  endDate: string;
  startDate: string;
  status: string;
  image?: File;
}

export async function insertTasks(task: Task) {
  const imageName = task.image
    ? `${Math.random()}-${task.image.name}`.replace('/', '')
    : null;

  if (imageName && task.image) {
    const { error: uploadError } = await supabase.storage
      .from('taskImages')
      .upload(imageName, task.image);
    if (uploadError) {
      throw new Error(`Image upload error: ${uploadError.message}`);
    }
  }

  const { data, error } = await supabase
    .from('tasks')
    .insert([
      {
        ...task,
        image:
          imageName &&
          `https://axqzrqgarjnblclotzkq.supabase.co/storage/v1/object/public/taskImages/${imageName}`,
      },
    ])
    .select();

  if (error) {
    throw new Error(`Task insert error: ${error.message}`);
  }

  return data;
}

export type ColUpdate = {
  status: string;
};

export async function updateTaskStatus(
  newCol: ColUpdate,
  id: number
): Promise<Tasks> {
  const { data, error } = await supabase
    .from('tasks')
    .update(newCol)
    .eq('id', id)
    .select();

  if (error) {
    throw new Error(`Failed to update task: ${error.message}`);
  }

  if (data && data.length > 0) {
    return data[0];
  }

  throw new Error('Task not found or update failed');
}

export async function deleteTask(id: number) {
  const { data, error } = await supabase.from('tasks').delete().eq('id', id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
