export interface Tasks {
  id: number;
  created_at: string;
  image: string | null;
  title: string;
  status: 'toDo' | 'inProgress' | 'completed';
  note: string;
  startDate: string;
  endDate: string;
  type: string;
  startTime: string;
  endTime: string;
  projectId: number | null;
}
