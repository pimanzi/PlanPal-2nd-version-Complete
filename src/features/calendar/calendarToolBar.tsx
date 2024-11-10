import { ToolbarProps } from 'react-big-calendar';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

// Define the event structure
type Event = {
  start: Date;
  end: Date;
  title: string;
  allDay: boolean;
};

function CustomToolbar(props: ToolbarProps<Event, object>) {
  const { label, view, onView, onNavigate } = props;

  return (
    <div className="flex justify-between items-center pb-5">
      <div className="font-bold text-xl font-inter">{label}</div>

      <div className="border border-stone-300 rounded-lg">
        <button
          className={`px-6 py-[3px] border-r-stone-300 border text-sm font-bold ${
            view === 'month'
              ? 'bg-transparent text-[var(--border-color-hover)] font-bold'
              : 'bg-[var(--color-toolbar-bg)]'
          }`}
          onClick={() => onView('month')}
        >
          Month
        </button>
        <button
          className={`px-6 py-[3px] border-r-stone-300 border text-sm font-bold ${
            view === 'week'
              ? 'bg-transparent text-[var(--border-color-hover)] font-bold'
              : 'bg-[var(--color-toolbar-bg)]'
          }`}
          onClick={() => onView('week')}
        >
          Week
        </button>
        <button
          className={`px-6 py-[3px] border-r-stone-300 border text-sm font-bold ${
            view === 'agenda'
              ? 'bg-transparent text-[var(--border-color-hover)] font-bold'
              : 'bg-[var(--color-toolbar-bg)]'
          }`}
          onClick={() => onView('agenda')}
        >
          Agenda
        </button>
      </div>

      <div className="flex gap-2">
        <button
          className="px-3 py-[3px] border-r-stone-300 rounded-lg border text-base font-bold bg-[var(--color-toolbar-bg)]"
          onClick={() => onNavigate('PREV')}
        >
          <GrFormPrevious></GrFormPrevious>
        </button>
        <button
          className="px-5 py-[3px] border-r-stone-300 border rounded-lg text-sm font-bold bg-[var(--color-toolbar-bg)]"
          onClick={() => onNavigate('TODAY')}
        >
          Today
        </button>
        <button
          className="px-3 py-[3px] border-r-stone-300 border  rounded-lg text-base font-bold  bg-[var(--color-toolbar-bg)]"
          onClick={() => onNavigate('NEXT')}
        >
          <GrFormNext></GrFormNext>
        </button>
      </div>
    </div>
  );
}

export default CustomToolbar;
