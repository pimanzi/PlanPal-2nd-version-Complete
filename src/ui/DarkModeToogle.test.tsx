import { render, fireEvent } from '@testing-library/react';
import { DarkModeContext } from '../contexts/DarkModeProvider';
import DarkModeToggle from './DarkModeToggle';
import { beforeEach } from 'vitest';

beforeEach(() => {
  // Clear localStorage before each test
  localStorage.clear();
});

describe('DarkModeToggle', () => {
  it('initially sets dark mode to light', () => {
    render(
      <DarkModeContext>
        <DarkModeToggle />
      </DarkModeContext>
    );

    // Initially, it should not have dark class
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('toggles dark mode based on button clicks and respects localStorage', () => {
    // Set initial value in localStorage to light mode
    localStorage.setItem('isDark', 'false');

    const { getByRole } = render(
      <DarkModeContext>
        <DarkModeToggle />
      </DarkModeContext>
    );

    const button = getByRole('button');
    expect(button).toBeInTheDocument();

    // Initially, it should light  class
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Click to toggle dark mode
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    // Verify localStorage is set
    expect(localStorage.getItem('isDark')).toBe('true');

    // Click again to toggle back to light mode
    fireEvent.click(button);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    // Verify localStorage is set
    expect(localStorage.getItem('isDark')).toBe('false');
  });

  it('uses localStorage value on initial render', () => {
    // Set initial value in localStorage to dark mode
    localStorage.setItem('isDark', 'true');

    render(
      <DarkModeContext>
        <DarkModeToggle />
      </DarkModeContext>
    );

    // Check if dark mode class is set based on localStorage
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });
});
