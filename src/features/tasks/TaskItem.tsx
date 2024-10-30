import { formatLocalizedDateShortActivity } from '@/utils/helpers';
import { FaRegCommentDots } from 'react-icons/fa';
import { PopoverTask } from './PopoverTask';
import { Tasks } from './taskInterface';
import { useTranslation } from 'react-i18next';
function TaskItem({ task }: { task: Tasks }) {
  const { id, status, endDate, title, note, image } = task;
  const { t } = useTranslation();
  const styleStatus = {
    toDo: 'bg-[var(--color-bg-todo)] text-[var(--color-text-todo)]',
    inProgress:
      'bg-[var(--color-bg-inProgress)] text-[var(--color-text-inProgress)]',
    completed: 'bg-[--color-bg-complete] text-[var(--color-text-complete)]',
  };

  return (
    <div
      className={`flex flex-col gap-4 bg-[var(--color-grey-0)] min-h[500px]] ${
        image ? 'row-span-2' : ''
      } rounded-2xl px-5 sm:px-6 pb-4 pt-6 transition-all duration-300 hover:translate-y-[-10px]`}
    >
      {image && (
        <img
          src={image}
          alt="task"
          className="rounded-2xl h-[200px] object-fill"
        />
      )}
      <div className="flex justify-between">
        <p
          className={`font-inter font-medium ${styleStatus[status]} rounded-lg px-2  text-sm flex justify-center items-center`}
        >
          {status === 'inProgress' && t('inProgressStatus')}
          {status === 'completed' && t('completeStatus')}
          {status === 'toDo' && t('toDoStatus')}
        </p>
        <PopoverTask status={status} taskId={id}></PopoverTask>
      </div>

      <p className="font-inter text-lg sm:text-xl font-bold">{title}</p>
      <p className="font-inter  text-[var(--color-grey-500)]">{note}</p>
      <hr />

      <div className="flex justify-between">
        <p className="font-inter font-normal">
          {t('due')}, {formatLocalizedDateShortActivity(new Date(endDate))}
        </p>
        <div className="comment flex items-center gap-2 hover:cursor-pointer hover:bg-link-light-gray">
          <FaRegCommentDots className="w-6" />
          <div>{Math.floor(Math.random() * 10)}</div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
