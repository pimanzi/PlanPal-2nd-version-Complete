import { useSearchParams } from 'react-router-dom';
import FilterBox from './FilterBox';
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

export interface Options {
  field: string;
  value: 'all' | 'inProgress' | 'toDo' | 'completed';
}

export interface StatusNumber {
  all: number;
  inProgress: number;
  toDo: number;
  completed: number;
}
export default function Filter({
  options,
  statusNumbers,
}: {
  options: Options[];
  statusNumbers: StatusNumber;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeStatus = searchParams.get('status') || 'all';
  const { t } = useTranslation();

  function handleClick(value: string) {
    searchParams.set('status', value);
    setSearchParams(searchParams);
  }
  return (
    <>
      <div className="hidden gap-6  sm:hidden xsPhone:hidden xs:hidden smTablet:hidden xsTablet:hidden bgTablet:flex laptop:flex">
        {options.map((option: Options) => (
          <FilterBox
            statusNumber={statusNumbers[option.value]}
            option={option}
            active={activeStatus === option.value}
            key={option.value}
          ></FilterBox>
        ))}
      </div>
      <div className="bgTablet:hidden laptop:hidden">
        <Select>
          <SelectTrigger className=" sm:w-[180px] w-[120px] bg-[var(--color-bg-main)] focus-visible:outline-none focus:ring focus:border-transparent focus:ring-[var(--border-color-hover)] border-[var(--color-stone-100)]">
            <SelectValue placeholder={t('filterTitle')} />
          </SelectTrigger>
          <SelectContent className="text-[var(--color-grey-500)] bg-[var(--color-grey-0)]">
            <SelectGroup>
              <SelectLabel className="text-[var(--color-text-main)]">
                {t('filterLabel')}
              </SelectLabel>
              <SelectItem
                onClick={() => handleClick(options[0].value)}
                className="!bg-[var(--color-grey-0)] hover:!bg-[var(--color-bg-main)] !text-[var(--color-grey-500)] hover:!text-[var(--color-grey-500)]"
                value={options[0].value}
              >
                <div className="flex items-center gap-2">
                  {options[0].field}
                </div>
              </SelectItem>
              <SelectItem
                onClick={() => handleClick(options[1].value)}
                className="!bg-[var(--color-grey-0)] hover:!bg-[var(--color-bg-main)] !text-[var(--color-grey-500)] hover:!text-[var(--color-grey-500)]"
                value={options[1].value}
              >
                <div className="flex items-center gap-2">
                  {options[1].field}
                </div>
              </SelectItem>
              <SelectItem
                onClick={() => handleClick(options[2].value)}
                className="!bg-[var(--color-grey-0)] hover:!bg-[var(--color-bg-main)] !text-[var(--color-grey-500)] hover:!text-[var(--color-grey-500)]"
                value={options[2].value}
              >
                <div className="flex items-center gap-2">
                  {options[2].field}
                </div>
              </SelectItem>
              <SelectItem
                onClick={() => handleClick(options[3].value)}
                className="!bg-[var(--color-grey-0)] hover:!bg-[var(--color-bg-main)] !text-[var(--color-grey-500)] hover:!text-[var(--color-grey-500)]"
                value={options[3].value}
              >
                <div className="flex items-center gap-2">
                  {options[3].field}
                </div>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
