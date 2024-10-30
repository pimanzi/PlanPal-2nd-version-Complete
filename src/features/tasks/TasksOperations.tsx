import { SelectUi } from '@/ui/Select';
import Filter, { StatusNumber } from '../../ui/Filter';
import { useTasks } from './useTasks';
import { CreateTask } from './CreateTasksForm';
import { useTranslation } from 'react-i18next';

export default function TasksOperations() {
  const { t } = useTranslation();
  const { tasks } = useTasks();
  const statusNumbers: StatusNumber = {
    all: tasks?.length || 0,
    inProgress:
      tasks?.filter((task) => task.status === 'inProgress').length || 0,
    toDo: tasks?.filter((task) => task.status === 'toDo').length || 0,
    completed: tasks?.filter((task) => task.status === 'completed').length || 0,
  };
  return (
    <div className="flex justify-between  smTablet:justify-between rounded-3xl bg-[var(--color-grey-0)] px-7 py-3 pt-4">
      <Filter
        options={[
          { value: 'all', field: t('filterAll') },
          { value: 'toDo', field: t('toDoStatus') },
          { value: 'inProgress', field: t('inProgressStatus') },
          { value: 'completed', field: t('completeStatus') },
        ]}
        statusNumbers={statusNumbers}
      />
      <div className="bgTablet:hidden laptop:hidden">
        {' '}
        <SelectUi
          selectOptions={[
            { value: 'date-asc', field: t('sortAscLabel') },
            { value: 'date-desc', field: t('sortDescLabel') },
          ]}
          label={t('sortDatesTitle')}
        ></SelectUi>
      </div>

      <div className=" hidden xsPhone:hidden xs:hidden sm:hidden  smTablet:inline-block bgTablet:hidden laptop:hidden">
        {' '}
        <CreateTask></CreateTask>
      </div>

      <div className=" hidden xsPhone:hidden xs:hidden sm:hidden  gap-4 smTablet:hidden bgTablet:flex laptop:flex xsTablet:hidden">
        <SelectUi
          selectOptions={[
            { value: 'date-asc', field: t('sortAscLabel') },
            { value: 'date-desc', field: t('sortDescLabel') },
          ]}
          label={t('sortDatesTitle')}
        ></SelectUi>
        <CreateTask></CreateTask>
      </div>
    </div>
  );
}
