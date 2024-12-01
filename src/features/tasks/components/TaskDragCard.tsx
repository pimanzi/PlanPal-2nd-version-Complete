import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '../types';

type TaskDragCardProps = {
  task: Task;
  onDelete?: (id: number) => void;
};

export default function TaskDragCard({ task }: TaskDragCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`group cursor-grab rounded-md bg-[var(--color-grey-0)] p-4 shadow-sm border transition-all hover:shadow-md hover:translate-y-[-2px] hover:border hover:border-[var(--color-text-${
        task.status === 'completed'
          ? 'complete'
          : task.status === 'toDo'
          ? 'todo'
          : task.status
      })] hover:border active:cursor-grabbing`}
    >
      <div className="flex items-start justify-between">
        <h4
          className={`font-medium text-[var(--color-text-${
            task.status === 'completed'
              ? 'complete'
              : task.status === 'toDo'
              ? 'todo'
              : task.status
          })] group-hover:font-semibold`}
        >
          {task.title}
        </h4>
      </div>
      <p className="mt-2 text-sm text-[var(--color-grey-500)]">{task.note}</p>
    </div>
  );
}
