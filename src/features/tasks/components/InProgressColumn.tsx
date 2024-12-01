import { BsClockHistory } from 'react-icons/bs';

import { Task } from '../types';
import { useDroppable } from '@dnd-kit/core';
import TaskDragCard from './TaskDragCard';

type InProgressColumnProps = {
  tasks: Task[] | undefined;
};

export function InProgressColumn({ tasks }: InProgressColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: 'inProgress',
  });

  const columnStyle = isOver ? 'opacity-70' : '';

  return (
    <div
      className={`relative rounded-lg bg-[var(--color-bg-inProgress)] p-4 shadow-sm ${columnStyle}`}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BsClockHistory className="text-xl text-[var(--color-text-inProgress)]" />
          <h3 className="font-semibold text-[var(--color-text-inProgress)]">
            In Progress
          </h3>
        </div>
        <span className="rounded-full bg-[var(--color-grey-0)] px-2 py-1 text-sm font-medium text-[var(--color-text-inProgress)]">
          {tasks?.length || 0}
        </span>
      </div>
      <div ref={setNodeRef} className="space-y-3">
        {tasks?.map((task) => (
          <TaskDragCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
