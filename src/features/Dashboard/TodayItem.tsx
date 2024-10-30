import { Tasks } from '../tasks/taskInterface';
import { useMarkComplete } from '../tasks/useMarkComplete';
import { useMarkInProgress } from '../tasks/useMarkInProgress';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { formatLocalizedDateShortActivity } from '@/utils/helpers';

export default function TodayItem({ task }: { task: Tasks }) {
  const { t } = useTranslation();
  const { markComplete, isMarkingComplete } = useMarkComplete();
  const { markInProgress, isMarkingInProgress } = useMarkInProgress();

  async function handleComplete(id: number) {
    console.log(id);
    markComplete(id);
  }

  function handleInProgress(id: number) {
    markInProgress(id, {
      onSuccess: () =>
        toast.success(
          status === 'completed'
            ? "Task is back in progress. Let's get it done!"
            : "You're on your way! Task is now in progress."
        ),
    });
  }
  const styleStatus = {
    toDo: 'bg-[var(--color-bg-todo)] text-[var(--color-text-todo)]',
    inProgress:
      'bg-[var(--color-bg-inProgress)] text-[var(--color-text-inProgress)]',
    completed: 'bg-[--color-bg-complete] text-[var(--color-text-complete)]',
  };
  return (
    <div className="grid grid-cols-[400px_200px_200px_200px] space-y-6  gap-x-10 items-center pr-5">
      <p className="font-medium">{task.title}</p>
      <p>
        {t('due')}{' '}
        <span className="font-medium">
          {formatLocalizedDateShortActivity(new Date(task.endDate))}
        </span>
      </p>

      <p
        className={`${
          styleStatus[task.status]
        } text-center border-none rounded-md px-1 py-1 font-semibold`}
      >
        {task.status === 'completed' && t('completeStatus')}
        {task.status === 'inProgress' && t('inProgressStatus')}
        {task.status === 'toDo' && t('toDoStatus')}
      </p>

      {task.status === 'completed' && (
        <Button
          className="bg-[var(--border-color-hover)] text-white hover:bg-[var(--border-color-hover)] hover:scale-x-105 hover:scale-y-105 transition-all duration-300"
          disabled={isMarkingInProgress}
          onClick={() => handleInProgress(task.id)}
        >
          {t('backToProgressStatus')}
        </Button>
      )}
      {task.status === 'inProgress' && (
        <Button
          className="bg-[var(--border-color-hover)] text-white hover:bg-[var(--border-color-hover)] hover:scale-x-105 hover:scale-y-105 transition-all duration-300"
          onClick={() => handleComplete(task.id)}
          disabled={isMarkingComplete}
        >
          {t('toCompleteStatus')}
        </Button>
      )}
      {task.status === 'toDo' && (
        <Button
          className="bg-[var(--border-color-hover)] text-white hover:bg-[var(--border-color-hover)] hover:scale-x-105 hover:scale-y-105 transition-all duration-300"
          onClick={() => handleInProgress(task.id)}
        >
          {t('toInProgressStatus')}
        </Button>
      )}
    </div>
  );
}
