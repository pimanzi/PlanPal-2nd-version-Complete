import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className=" h-screen flex  flex-col justify-center items-center bg-[var(--color-grey-0)] font-bold text-2xl">
      The page you are looking for could not be found 😢
      <Button
        className="bg-[var(--border-color-hover)] hover:bg-[var(--border-color-hover)] text-[var(--color-text-main)]"
        onClick={() => navigate('/')}
      >
        Go Home
      </Button>
    </div>
  );
}
