import { Button } from '@/components/ui/button';
import { IconType } from 'react-icons';

export function ButtonDemo({
  label,
  onClick,
  icon: Icon,
  type,
  disabled,
}: {
  label: string;
  onClick?: () => void;
  icon?: IconType;
  type: 'normal' | 'danger';
  disabled?: boolean;
}) {
  const style = {
    normal:
      'bg-transparent text-[var(--color-text-main)] border-[var(--color-stone-100)] border hover:bg-[var(--border-color-hover)] normalButton active:scale-x-110 active:scale-y-110 translation-all  duration-100 ',
    danger:
      'bg-[var(--color-red-700)] text-white hover:bg-[var(--color-red-700)] hover:scale-x-105 w-fit',
  };
  return (
    <Button onClick={onClick} className={style[type]} disabled={disabled}>
      {Icon && <Icon size={20} />}
      {label}
    </Button>
  );
}
