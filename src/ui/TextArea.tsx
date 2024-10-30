import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from 'react-i18next';

export function TextareaUi({
  onChange,
  value,
  disabled,
}: {
  onChange: (note: string) => void;
  value: string | undefined;
  disabled: boolean;
}) {
  const { t } = useTranslation();
  return (
    <Textarea
      className=" border-[var(--color-stone-100)] bg-[var(--color-grey-0)] border focus-visible:outline-none focus-visible:border-transparent focus:ring-[var(--color-brand-700)]"
      disabled={disabled}
      placeholder={t('noteArea')}
      onChange={(e) => onChange(e.target.value)}
      value={value}
    />
  );
}
