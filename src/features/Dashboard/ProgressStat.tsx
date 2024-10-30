import { useTranslation } from 'react-i18next';
import { HiOutlineChartBar } from 'react-icons/hi2';

function ProgressStat({
  completedTasks,
  unCompletedTasks,
}: {
  completedTasks: number;
  unCompletedTasks: number;
}) {
  const { t } = useTranslation();
  return (
    <div className=" lg:px-6 bg-[var(--color-grey-0)] smTablet:px-1 px-6 py-4 rounded-md flex gap-4 items-center">
      <div className=" smTablet:block  sm:hidden bg-[var(--color-yellow-100)] py-4 px-3">
        <HiOutlineChartBar color="var(--color-yellow-700)" size="3.2rem" />
      </div>
      <div>
        {' '}
        <h5 className="font-medium text-lg">
          {t('progressStat')} (
          {Math.ceil(
            (completedTasks / (completedTasks + unCompletedTasks)) * 100
          )}
          %)
        </h5>
        <progress
          className="styled-progress"
          value={completedTasks}
          max={completedTasks + unCompletedTasks}
        ></progress>
      </div>
    </div>
  );
}

export default ProgressStat;
