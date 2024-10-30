import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import Navbar from './Navbar';
import i18n from 'i18next';

const mockTranslation = {
  navHome: 'Home',
  navTasks: 'Tasks',
  navSignout: 'Sign out',
};

// Set up mock i18next
i18n.init({
  lng: 'en',
  resources: {
    en: {
      translation: mockTranslation,
    },
  },
});

describe('Navbar', () => {
  test('renders Navbar with translation keys', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </I18nextProvider>
    );

    // Check if translated text is in the document
    expect(screen.getByText(mockTranslation.navHome)).toBeInTheDocument();
    expect(screen.getByText(mockTranslation.navTasks)).toBeInTheDocument();
    expect(screen.getByText(mockTranslation.navSignout)).toBeInTheDocument();
  });
});
