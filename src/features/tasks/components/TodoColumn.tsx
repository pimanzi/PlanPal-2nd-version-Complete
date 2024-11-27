import { HiOutlineClipboardList } from 'react-icons/hi';

import { Task } from '../types';
import { useDroppable } from '@dnd-kit/core';
import TaskDragCard from './TaskDragCard';

type TodoColumnProps = {
  tasks: Task[] | undefined;
  onDeleteTask?: (id: number) => void;
};

export function TodoColumn({ tasks, onDeleteTask }: TodoColumnProps) {
  const { setNodeRef } = useDroppable({
    id: 'toDo',
  });
  return (
    <div className="relative rounded-lg bg-[var(--color-bg-todo)] p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HiOutlineClipboardList className="text-xl text-[var(--color-text-todo)]" />
          <h3 className="font-semibold text-[var(--color-text-todo)]">To Do</h3>
        </div>
        <span className="rounded-full bg-[var(--color-grey-0)] px-2 py-1 text-sm font-medium text-[var(--color-text-todo)]">
          {tasks?.length || 0}
        </span>
      </div>
      <div className="space-y-3" ref={setNodeRef}>
        {tasks?.map((task) => (
          <TaskDragCard
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
          ></TaskDragCard>
        ))}
      </div>
    </div>
  );
}
