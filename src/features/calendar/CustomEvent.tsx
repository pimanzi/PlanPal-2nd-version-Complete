import { LanguageContext } from '@/contexts/LanguageContext';
import { LocaleKey, locales } from '@/utils/i18n/i18n';
import { BsDashLg } from 'react-icons/bs';

interface Event {
  title: string;
  start: Date;
  end: Date;
  status: 'toDo' | 'inProgress' | 'completed';
}

interface CustomEventProps {
  event: Event;
  view: 'month' | 'week' | 'day' | 'agenda' | 'work_week';
}

export default function CustomEvent({ event, view }: CustomEventProps) {
  const { language } = useContext(LanguageContext);
  const styleStatus = {
    toDo: 'bg-[var(--color-bg-todo)] text-[var(--color-text-todo)]',
    inProgress:
      'bg-[var(--color-bg-inProgress)] text-[var(--color-text-inProgress)]',
    completed: 'bg-[--color-bg-complete] text-[var(--color-text-complete)]',
  };

  if (view === 'month') {
    return (
      <div>
        <p
          className={`${
            styleStatus[event.status]
          } font-semibold whitespace-nowrap  text-sm px-2 border-current py-1 border rounded-md`}
        >
          {event.title}
        </p>
      </div>
    );
  }
  return (
    <div
      className={`${
        styleStatus[event.status]
      } font-semibold whitespace-break-spaces text-sm px-2 border-current py-1 border rounded-md flex flex-col gap-0 leading-tight relative h-full w-[150%]`}
    >
      <h2 className="text-sm font-bold whitespace-nowrap flex items-center flex-nowrap ">
        <span className="inline">
          {event.start.toLocaleTimeString(locales[language as LocaleKey], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
        <span className="inline">
          <BsDashLg></BsDashLg>
        </span>
        <span className="inline">
          {event.end.toLocaleTimeString(locales[language as LocaleKey], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </span>
      </h2>
      <p>
        {event.status === 'completed' && 'Completed'}
        {event.status === 'inProgress' && 'In progress'}
        {event.status === 'toDo' && 'To do'}
      </p>
      <p>{event.title}</p>
    </div>
  );
}
