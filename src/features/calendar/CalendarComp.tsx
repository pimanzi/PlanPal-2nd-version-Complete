import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS, es, fr } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { LocaleKey } from '@/utils/i18n/i18n';
import { useTasks } from '@/features/tasks/useTasks';
import CustomToolbar from './calendarToolBar';

const locales = {
  fr: fr,
  en: enUS,
  es: es,
};

export default function CalendarComp() {
  const { tasks } = useTasks();
  // const events = tasks?.map((task) => ({
  //   start: new Date(new Date(task.startDate).setHours(0, 0, 0, 0)),
  //   end: new Date(new Date(task.endDate).setHours(23, 59, 59, 999)),
  //   title: task.title,
  //   allDay: true,
  // }));
  const events = [
    {
      start: new Date('2024-11s-6T12:50:00'),
      end: new Date('2024-11-7T12:50:00'),
      title: 'Learning Machine learning',
      allDay: true,
    },
  ];

  const { language } = useContext(LanguageContext);
  const { t } = useTranslation();
  const localizer = dateFnsLocalizer({
    format: (date: Date, formatString: string) =>
      format(date, formatString, { locale: locales[language as LocaleKey] }),
    parse: (dateString: string) =>
      parse(dateString, 'MM/dd/yyyy', new Date(), {
        locale: locales[language as LocaleKey],
      }),
    startOfWeek: () =>
      startOfWeek(new Date(), { locale: locales[language as LocaleKey] }),
    getDay: (date: Date) => getDay(date),
    locales: { [language]: locales[language as LocaleKey] },
  });
  console.log(events);

  return (
    <Calendar
      views={{
        month: true,
        week: true,
        agenda: true,
        day: false,
      }}
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      messages={{
        allDay: t('allDay'),
        previous: t('previous'),
        next: t('next'),
        today: t('today'),
        month: t('month'),
        week: t('week'),
        day: t('day'),
        agenda: t('agenda'),
        date: t('date'),
        time: t('time'),
        event: t('event'),
      }}
      components={{
        toolbar: CustomToolbar,
      }}
    />
  );
}
