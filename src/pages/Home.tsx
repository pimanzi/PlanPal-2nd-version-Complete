import DashboardLayout from '@/features/Dashboard/DashboardLayout';
import { useTasks } from '@/features/tasks/useTasks';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const { isLoading } = useTasks();
  if (isLoading) return <div className="spinner"></div>;
  return (
    <div className=" py-8 px-[10vw] h-full">
      <h2 className="font-inter text-2xl mb-10 font-bold">{t('dashboard')}</h2>
      <DashboardLayout></DashboardLayout>
    </div>
  );
}
