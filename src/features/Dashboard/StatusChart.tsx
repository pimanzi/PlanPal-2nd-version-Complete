import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Tasks } from '../tasks/taskInterface';
import { useDarkMode } from '@/contexts/DarkModeProvider';
import { useTranslation } from 'react-i18next';

function StatusChart({ tasks }: { tasks: Tasks[] | undefined }) {
  const { t } = useTranslation();
  const { isDark } = useDarkMode();
  const data = [
    {
      value: tasks?.filter((task) => task.status === 'completed').length,
      status: t('chartCompleteStatus'),
      color: isDark ? '#15803d' : '#22c55e',
    },
    {
      value: tasks?.filter((task) => task.status === 'inProgress').length,
      status: t('chartInProgressStatus'),
      color: isDark ? '#1d4ed8' : '#3b82f6',
    },
    {
      value: tasks?.filter((task) => task.status === 'toDo').length,
      status: t('chartToDoStatus'),
      color: isDark ? '#a16207' : '#eab308',
    },
  ];

  return (
    <div className="bg-[var(--color-grey-0)] px-4 py-3">
      <h2 className="text-center text-2xl font-bold mb-4">{t('chartTitle')}</h2>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={240}
        minWidth={240}
      >
        <PieChart>
          <Pie
            data={data}
            nameKey="status"
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            paddingAngle={3}
            startAngle={180}
            endAngle={-180}
          >
            {data.map((entry) => (
              <Cell
                key={entry.status}
                fill={entry.color}
                stroke={entry.color}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: isDark ? '#18212f' : '#fff',
            }}
            itemStyle={{
              color: isDark ? '#fff' : '#000',
            }}
          />
          <Legend
            verticalAlign="middle"
            align="right"
            layout="vertical"
            iconSize={15}
            iconType="circle"
            wrapperStyle={{
              right: '0',
              top: '0',
              display: 'flex',
              flexDirection: 'column',
              fontSize: '0.85rem',
              gap: '10px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default StatusChart;
