import { useSearchParams } from 'react-router-dom';
import { Options } from './Filter';

export default function FilterBox({
  option,
  active,
  statusNumber,
}: {
  option: Options;
  active: boolean;
  statusNumber: number;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(option: string) {
    searchParams.set('status', option);
    setSearchParams(searchParams);
  }
  return (
    <div
      className={
        active
          ? 'filter-active transition-all duration-300 flex items-center gap-2'
          : 'transition-all duration-300 flex items-center gap-2 hover:cursor-pointer filter'
      }
      onClick={() => handleClick(option.value)}
    >
      <p className="text-[var(--color-grey-500)]">{option.field}</p>
      <div className="rounded-full px-1 py-1  text-[var(--color-grey-500)] bg-[var(--color-light-black)]">
        {statusNumber}
      </div>
    </div>
  );
}
