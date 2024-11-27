import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './ui/ApplicationLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
import { DarkModeContext } from './contexts/DarkModeProvider';
import { lazy, Suspense } from 'react';
import LogInPage from './pages/LoginPage';
import Signup from './pages/SignupPage';
import ProtectedRoute from './ui/ProtectedRoute';
import Account from './pages/Account';
import LanguageProvider from './contexts/LanguageContext';
import Calendar from './pages/Calendar';
import TasksOverview from './features/tasks/TasksOverview';
import KanbanBoard from './features/tasks/KanbanBoard';
const Home = lazy(() => import('./pages/Home'));
const Tasks = lazy(() => import('./pages/Tasks'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeContext>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <BrowserRouter>
          <Suspense
            fallback={
              <div className="bg-[var(--color-grey-0)] flex justify-center items-center h-screen">
                <div className="spinner"></div>
              </div>
            }
          >
            {' '}
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <LanguageProvider>
                      {' '}
                      <AppLayout></AppLayout>
                    </LanguageProvider>
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  element={<Navigate replace to="home"></Navigate>}
                ></Route>
                <Route element={<Home></Home>} path="home"></Route>
                <Route element={<Tasks></Tasks>} path="tasks">
                  <Route
                    index
                    element={<Navigate replace to="gridView"></Navigate>}
                  ></Route>
                  <Route
                    element={<TasksOverview></TasksOverview>}
                    path="/tasks/gridView"
                  ></Route>

                  <Route
                    element={<KanbanBoard></KanbanBoard>}
                    path="/tasks/kanbanBoard"
                  ></Route>
                </Route>
                <Route element={<Account></Account>} path="myProfile"></Route>
                <Route element={<Calendar></Calendar>} path="calendar"></Route>
              </Route>
              <Route element={<LogInPage></LogInPage>} path="login"></Route>
              <Route element={<Signup></Signup>} path="signup"></Route>
              <Route element={<PageNotFound></PageNotFound>} path="*"></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: '8px' }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: '16px',
              maxWidth: '700px',
              padding: '16px 24px',
              backgroundColor: 'var(--color-bg-main)',
              color: 'var(--color-text-main)',
            },
          }}
        />
      </QueryClientProvider>
    </DarkModeContext>
  );
}

export default App;
