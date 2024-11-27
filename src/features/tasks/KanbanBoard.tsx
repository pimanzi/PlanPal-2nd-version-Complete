import { useTasks } from './useTasks';
import { BsGrid } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { TodoColumn } from './components/TodoColumn';
import { InProgressColumn } from './components/InProgressColumn';
import { CompletedColumn } from './components/CompletedColumn';
import { DndContext, DragEndEvent, closestCorners } from '@dnd-kit/core';
import { useUpdateDrag } from './useUpdateDrag';
import { useEffect, useState } from 'react';

export default function KanbanBoard() {
  const { tasks } = useTasks();
  const navigate = useNavigate();
  const { markStatus } = useUpdateDrag();

  const [localTasks, setLocalTasks] = useState(tasks || []);

  useEffect(() => {
    // Sync local tasks with remote tasks when tasks change
    setLocalTasks(tasks || []);
  }, [tasks]);

  function handleDrag(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = Number(active.id);
    const newStatus = over.id as 'toDo' | 'inProgress' | 'completed';

    // Only update if the status has changed
    const task = localTasks?.find((t) => t.id === taskId);
    if (task?.status === newStatus) return;

    // Optimistically update the local state
    setLocalTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );

    // Trigger backend update
    markStatus({
      id: taskId,
      status: newStatus,
    });
  }
  const todoTasks = localTasks?.filter((task) => task.status === 'toDo');
  const inProgressTasks = localTasks?.filter(
    (task) => task.status === 'inProgress'
  );
  const completedTasks = localTasks?.filter(
    (task) => task.status === 'completed'
  );

  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={() => navigate('/tasks')}
          className="hover:scale-105 flex items-center gap-2 rounded-md bg-[var(--border-color-hover)] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[var(--color-brand-700)]"
        >
          <BsGrid className="text-lg" />
          Grid View
        </button>
      </div>

      <DndContext collisionDetection={closestCorners} onDragEnd={handleDrag}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <TodoColumn tasks={todoTasks} />
          <InProgressColumn tasks={inProgressTasks} />
          <CompletedColumn tasks={completedTasks} />
        </div>
      </DndContext>
    </>
  );
}
