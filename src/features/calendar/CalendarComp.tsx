import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { enUS, es, fr } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import { LocaleKey } from '@/utils/i18n/i18n';
import { useTasks } from '@/features/tasks/useTasks';
import CustomToolbar from './calendarToolBar';
import CustomEvent from './CustomEvent';

const locales = {
  fr: fr,
  en: enUS,
  es: es,
};
type views = 'month' | 'agenda' | 'week' | 'day' | 'work_week';
export default function CalendarComp() {
  const [view, setView] = useState<views>('month'); // Initialize state correctly
  const { tasks } = useTasks();
  const events = tasks
    ?.map((task) => {
      const startDate = new Date(task.startDate);
      const endDate = new Date(task.endDate);

      const [startHours, startMinutes] = task.startTime.split(':').map(Number);
      const [endHours, endMinutes] = task.endTime.split(':').map(Number);

      const eventDays = [];
      const currentDate = new Date(startDate);

      while (currentDate <= endDate) {
        const startDateTime = new Date(currentDate);
        const endDateTime = new Date(currentDate);

        startDateTime.setHours(startHours, startMinutes, 0, 0);
        endDateTime.setHours(endHours, endMinutes, 59, 999);

        eventDays.push({
          start: startDateTime,
          end: endDateTime,
          title: task.title,
          status: task.status,
        });

        currentDate.setDate(currentDate.getDate() + 1);
      }

      return eventDays;
    })
    .flat();

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

  return (
    <Calendar
      onView={(newView) => setView(newView)}
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
        event: (props) => <CustomEvent view={view} {...props} />,
      }}
    />
  );
}
