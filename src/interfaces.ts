export interface TasksInterface {
  id: number;
  created_at: Date;
  image: string;
  title: string;
  status: Status;
  note: string;
  startDate: Date;
  endDate: Date;
  lastUpdated: Date;
  type: string;
  projectId: number | null;
}

export type status = "Completed" | "In Progress" | "To do";
export interface filterInterface {
  all: number;
  toDo: number;
  inProgress: number;
  completed: number;
}

export interface filterNumber {
  displayItemNumber: filterInterface;
  active: string;
  setActive: (active: string) => void;
  type: string;
}

export enum Status {
  "To do" = "To do",
  Completed = "Completed",
  "In Progress" = "In Progress",
}

export interface commentsInterface {
  id: number;
  create_at: Date;
  taskId: number;
  comment: string;
}

export interface taskDataInterface {
  title: string;
  status: string;
  note: string;
  type: string;
}

export type SupabaseResponse<T> = {
  data: T | null;
  error: Error | null;
};
