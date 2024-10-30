import { IconType } from 'react-icons';

interface stat {
  icon: IconType;
  title: string;
  value: number;
  color: 'green' | 'blue' | 'purple';
  status: 'complete' | 'inProgress' | 'total';
}
function Stat({ icon: Icon, title, value, color, status }: stat) {
  const colorClasses = {
    // You can define as many colors as needed based on your design system
    blue: 'bg-[var(--color-bg-inProgress)]',
    green: 'bg-[var(--color-bg-complete)]',
    purple: 'bg-[#c7d2fe]',
  };

  return (
    <div className=" smTablet:px-1 lg:px-6 bg-[var(--color-grey-0)] px-6 py-4 rounded-md flex gap-4 items-center">
      <div
        className={`smTablet:block sm:hidden py-4 px-3 ${colorClasses[color]} rounded-md border-none`}
      >
        <Icon color={`var(--color-text-${status})`} size="3.2rem"></Icon>
      </div>
      <div>
        <h5 className="font-medium text-lg">{title}</h5>
        <p className="text-xl">{value}</p>
      </div>
    </div>
  );
}

export default Stat;
