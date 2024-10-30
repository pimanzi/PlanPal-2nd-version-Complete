import { useDarkMode } from '@/contexts/DarkModeProvider';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

export default function DarkModeToggle() {
  const { isDark, changeMode } = useDarkMode();

  return (
    <div className="p-[0.6rem] rounded-sm transition-all duration-300 hover:bg-[var(--color-grey-100)]">
      <button
        onClick={() => changeMode(!isDark)}
        className="bg-transparent border-none"
        aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? (
          <HiOutlineSun size={30} color="var(--border-color-hover)" />
        ) : (
          <HiOutlineMoon size={30} color="var(--border-color-hover)" />
        )}
      </button>
    </div>
  );
}
