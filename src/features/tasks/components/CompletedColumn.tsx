import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5';

import { Task } from '../types';
import { useDroppable } from '@dnd-kit/core';
import TaskDragCard from './TaskDragCard';
type CompletedColumnProps = {
  tasks: Task[] | undefined;
};

export function CompletedColumn({ tasks }: CompletedColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'completed',
  });

  const columnStyle = isOver
    ? 'bg-opacity-90 shadow-lg transform scale-[1.02] transition-all duration-200'
    : 'transition-all duration-200';

  return (
    <div
      className={`relative rounded-lg bg-[var(--color-bg-complete)] p-4 shadow-sm ${columnStyle}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoCheckmarkDoneCircleOutline className="text-xl text-[var(--color-text-complete)]" />
          <h3 className="font-semibold text-[var(--color-text-complete)]">
            Completed
          </h3>
        </div>
        <span className="rounded-full bg-[var(--color-grey-0)] px-2 py-1 text-sm font-medium text-[var(--color-text-complete)]">
          {tasks?.length || 0}
        </span>
      </div>
      <div ref={setNodeRef} className="space-y-3">
        {tasks?.map((task) => (
          <TaskDragCard key={task.id} task={task}></TaskDragCard>
        ))}
      </div>
    </div>
  );
}
