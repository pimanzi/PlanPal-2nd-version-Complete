import { Tasks } from '@/features/tasks/taskInterface';
import { useState, useEffect } from 'react';

export function useLocalStorageState(
  initialState: boolean | string | Tasks[] | undefined,
  key: string
) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
