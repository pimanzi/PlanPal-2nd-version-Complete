import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslation } from 'react-i18next';

interface SelectFormProps {
  onChange: (value: string) => void;
  onBlur?: () => void;
  value: string;
  name: string;
  disabled?: boolean;
}

export function SelectForm({
  onChange,
  value,
  name,
  disabled,
}: SelectFormProps) {
  const { t } = useTranslation();
  return (
    <Select
      onValueChange={onChange}
      value={value}
      name={name}
      disabled={disabled}
    >
      <SelectTrigger className="bg-[var(--color-grey-0)] text-[var(--color-grey-500)] w-[180px] border-[var(--color-stone-100)] focus:border-transparent focus:ring focus:ring-[var(--border-color-hover)] focus:outline-none">
        <SelectValue placeholder={t('selectStatusInput')} />
      </SelectTrigger>
      <SelectContent className="text-[var(--color-grey-500)] bg-[var(--color-grey-0)]">
        <SelectGroup>
          <SelectLabel className="text-[var(--color-text-main)]">
            {t('selectTitle')}
          </SelectLabel>
          <SelectItem
            className="!bg-[var(--color-grey-0)] hover:!bg-[var(--color-bg-main)] !text-[var(--color-grey-500)] hover:!text-[var(--color-grey-500)]"
            value="toDo"
          >
            {t('toDoStatus')}
          </SelectItem>
          <SelectItem
            className="!bg-[var(--color-grey-0)] hover:!bg-[var(--color-bg-main)] !text-[var(--color-grey-500)] hover:!text-[var(--color-grey-500)]"
            value="inProgress"
          >
            {t('inProgressStatus')}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
