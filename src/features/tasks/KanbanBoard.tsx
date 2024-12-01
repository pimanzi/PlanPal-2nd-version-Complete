import { useTasks } from './useTasks';
import { BsGrid } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { TodoColumn } from './components/TodoColumn';
import { InProgressColumn } from './components/InProgressColumn';
import { CompletedColumn } from './components/CompletedColumn';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  closestCorners,
} from '@dnd-kit/core';
import { useUpdateDrag } from './useUpdateDrag';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { Task } from './types';
import { useLocalStorageState } from '@/hooks/useLocalStorageState';

export default function KanbanBoard() {
  const { tasks } = useTasks();
  const navigate = useNavigate();
  const { markStatus } = useUpdateDrag();
  const [localTasks, setLocalTasks] = useLocalStorageState(
    tasks || [],
    'tasks'
  );

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    const draggedId = Number(active.id);

    const isOverContainer = ['toDo', 'inProgress', 'completed'].includes(
      String(over.id)
    );
    const overId = isOverContainer ? null : Number(over.id);

    if (!isOverContainer && draggedId === overId) return;

    setLocalTasks((prev: Task[]) => {
      const draggedTask = prev.find((task: Task) => task.id === draggedId);
      if (!draggedTask) return prev;

      const newStatus = isOverContainer
        ? (String(over.id) as Task['status'])
        : prev.find((task: Task) => task.id === overId)?.status;

      if (!newStatus) return prev;

      if (draggedTask.status !== newStatus) {
        const updatedTasks = prev.map((task: Task) =>
          task.id === draggedId ? { ...task, status: newStatus } : task
        );
        return updatedTasks;
      }

      if (!isOverContainer) {
        const tasksInColumn = prev.filter(
          (task: Task) => task.status === draggedTask.status
        );
        const reorderedTasks = arrayMove(
          tasksInColumn,
          tasksInColumn.findIndex((task: Task) => task.id === draggedId),
          tasksInColumn.findIndex((task: Task) => task.id === overId)
        );

        return [
          ...prev.filter((task: Task) => task.status !== draggedTask.status),
          ...reorderedTasks,
        ];
      }

      return prev;
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const draggedId = Number(active.id);
    const isOverContainer = ['toDo', 'inProgress', 'completed'].includes(
      String(over.id)
    );
    const overId = isOverContainer ? null : Number(over.id);

    const draggedTask = localTasks.find((task: Task) => task.id === draggedId);
    if (!draggedTask) return;

    const newStatus = isOverContainer
      ? (String(over.id) as Task['status'])
      : localTasks.find((task: Task) => task.id === overId)?.status;

    if (!newStatus) return;

    if (draggedTask.status !== newStatus) {
      setLocalTasks((prev: Task[]) =>
        prev.map((task: Task) =>
          task.id === draggedId ? { ...task, status: newStatus } : task
        )
      );

      markStatus({ id: draggedId, status: newStatus });
    } else {
      markStatus({
        id: draggedId,
        status: draggedTask.status,
      });
    }
  };

  const todoTasks = localTasks?.filter((task: Task) => task.status === 'toDo');
  const inProgressTasks = localTasks?.filter(
    (task: Task) => task.status === 'inProgress'
  );
  const completedTasks = localTasks?.filter(
    (task: Task) => task.status === 'completed'
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

      <DndContext
        collisionDetection={closestCorners}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <SortableContext
            items={todoTasks?.map((task: Task) => task.id) || []}
          >
            <TodoColumn tasks={todoTasks} />
          </SortableContext>

          <SortableContext
            items={inProgressTasks?.map((task: Task) => task.id) || []}
          >
            <InProgressColumn tasks={inProgressTasks} />
          </SortableContext>

          <SortableContext
            items={completedTasks?.map((task: Task) => task.id) || []}
          >
            <CompletedColumn tasks={completedTasks} />
          </SortableContext>
        </div>
      </DndContext>
    </>
  );
}
