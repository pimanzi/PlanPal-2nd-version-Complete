import CalendarComp from '@/features/calendar/CalendarComp';

export default function Calendar() {
  return (
    <div className="h-full px-[100px] py-7 space-y-5">
      <div>
        {' '}
        <h2 className="font-inter text-2xl font-bold mt-2">Calendar</h2>
        <p className="font-inter text-lg  text-[var(--color-grey-500)]">
          Stay Organized and On Track with{' '}
          <span className="text-[var(--color-text-total)] font-bold">
            Your Personalized Calendar
          </span>
        </p>
      </div>

      <CalendarComp></CalendarComp>
    </div>
  );
}
