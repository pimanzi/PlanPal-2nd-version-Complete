import { useTranslation } from 'react-i18next';
import { Tasks } from '../tasks/taskInterface';
import TodayItem from './TodayItem';

// Helper function to reset time to midnight for comparison
const resetTime = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate());

export default function TodayActivity({
  tasks,
}: {
  tasks: Tasks[] | undefined;
}) {
  const { t } = useTranslation();
  const today = resetTime(new Date()); // Today's date without time

  const todayActivities = tasks?.filter((task) => {
    const startDate = resetTime(new Date(task.startDate));
    const endDate = resetTime(new Date(task.endDate));

    // Check if today's date is between startDate and endDate (inclusive)
    const isInProgress = startDate <= today && endDate >= today;

    return isInProgress && task.status !== 'completed'; // Exclude completed tasks
  });

  if (!todayActivities?.length)
    return (
      <div className=" text-center bg-[--color-grey-0] flex flex-col px-5 py-4">
        {' '}
        No activities for today
      </div>
    );
  return (
    <div className=" bg-[--color-grey-0] flex flex-col px-5 py-4 overflow-x-auto table-container">
      <h3 className="font-bold text-center text-xl mb-3">
        {t('todayActivityTitle')}
      </h3>
      {todayActivities?.map((task: Tasks) => (
        <TodayItem key={task.id} task={task} />
      ))}
    </div>
  );
}
