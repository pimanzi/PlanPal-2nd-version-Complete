import { useEffect } from 'react';
import useUser from '../features/authentication/useUser';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isLoading && !isAuthenticated) navigate('/login');
    },
    [isLoading, isAuthenticated, navigate]
  );
  if (isLoading)
    return (
      <div className="flex justify-center items-center bg-[var(--color-bg-main)] h-screen">
        <div className="spinner"></div>;
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
