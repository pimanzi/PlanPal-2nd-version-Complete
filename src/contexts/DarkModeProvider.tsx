import { createContext, useContext, useEffect } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorageState';

interface CreateContext {
  isDark: boolean;
  changeMode: (value: boolean) => void;
}
const DarkMode = createContext<CreateContext>({
  isDark: false,
  changeMode: () => {},
});

function DarkModeContext({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useLocalStorageState(false, 'isDark');

  useEffect(
    function () {
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },
    [isDark]
  );

  function changeMode() {
    setIsDark((isDark: boolean) => !isDark);
  }
  return (
    <DarkMode.Provider
      value={{
        isDark,
        changeMode,
      }}
    >
      {children}
    </DarkMode.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkMode);
  if (!context) {
    throw new Error('Context was utilised outside of DarkModeContext');
  }

  return context;
}

export { useDarkMode, DarkModeContext };
