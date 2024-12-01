import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '../types';

type TaskDragCardProps = {
  task: Task;
  onDelete?: (id: number) => void;
};

export default function TaskDragCard({ task }: TaskDragCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`group rounded-md bg-[var(--color-grey-0)] p-4 
        border border-transparent
        transition-all duration-200 ease-in-out
        hover:shadow-lg hover:translate-y-[-2px]
        hover:border-[var(--color-text-${
          task.status === 'completed'
            ? 'complete'
            : task.status === 'toDo'
            ? 'todo'
            : task.status
        })]
        ${
          isDragging
            ? 'shadow-xl rotate-[2deg] scale-105 cursor-grabbing'
            : 'cursor-grab shadow-sm'
        }
      `}
    >
      <div className="flex items-start justify-between">
        <h4
          className={`font-medium text-[var(--color-text-${
            task.status === 'completed'
              ? 'complete'
              : task.status === 'toDo'
              ? 'todo'
              : task.status
          })] group-hover:font-semibold transition-all duration-200`}
        >
          {task.title}
        </h4>
      </div>
      <p className="mt-2 text-sm text-[var(--color-grey-500)]">{task.note}</p>
    </div>
  );
}
