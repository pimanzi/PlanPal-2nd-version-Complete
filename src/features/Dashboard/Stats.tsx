import { GrCompliance } from 'react-icons/gr';
import { GiProgression } from 'react-icons/gi';
import { AiOutlineOrderedList } from 'react-icons/ai';
import Stat from './Stat';
import ProgressStat from './ProgressStat';
import { useTranslation } from 'react-i18next';

export default function Stats({
  completedTasks,
  unCompletedTasks,
}: {
  completedTasks: number;
  unCompletedTasks: number;
}) {
  const { t } = useTranslation();
  return (
    <div className="  grid grid-cols-1 gap-6 justify-between sm:grid-cols-[repeat(2,minmax(0,500px))] desktop:grid-cols-[repeat(4,minmax(0,500px))]">
      <Stat
        icon={GrCompliance}
        title={t('completedStat')}
        color="green"
        value={completedTasks}
        status="complete"
      ></Stat>

      <Stat
        icon={GiProgression}
        title={t('onGoingStat')}
        color="blue"
        value={unCompletedTasks}
        status="inProgress"
      ></Stat>

      <Stat
        icon={AiOutlineOrderedList}
        title={t('totalTasksStat')}
        color="purple"
        value={unCompletedTasks + completedTasks}
        status="total"
      ></Stat>

      <ProgressStat
        completedTasks={completedTasks}
        unCompletedTasks={unCompletedTasks}
      ></ProgressStat>
    </div>
  );
}
