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
import { useSearchParams } from 'react-router-dom';

interface SelectOptions {
  value: string;
  field: string;
}
export function SelectUi({
  label,
  selectOptions,
}: {
  label: string;
  selectOptions: SelectOptions[];
}) {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value: string) {
    searchParams.set('sortBy', value);
    setSearchParams(searchParams);
  }
  return (
    <Select onValueChange={handleClick}>
      <SelectTrigger className="sm:w-[180px] w-[120px] bg-[var(--color-bg-main)] focus-visible:outline-none focus:ring focus:border-transparent focus:ring-[var(--border-color-hover)] border-[var(--color-stone-100)]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent className="text-[var(--color-grey-500)] bg-[var(--color-grey-0)]">
        <SelectGroup>
          <SelectLabel className="text-[var(--color-text-main)]">
            {t('sortLabel')}
          </SelectLabel>
          {selectOptions.map((option) => (
            <SelectItem
              className="!bg-[var(--color-grey-0)] hover:!bg-[var(--color-bg-main)] !text-[var(--color-grey-500)] hover:!text-[var(--color-grey-500)]"
              value={option.value}
            >
              {option.field}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
