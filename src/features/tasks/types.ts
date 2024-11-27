export interface Task {
  created_at: string;
  projectId: number | null;
  startTime: string;
  endTime: string;
  id: number;
  title: string;
  note: string;
  endDate: string;
  startDate: string;

  image: string | null;
  type: string;
  status: 'toDo' | 'inProgress' | 'completed';
}
