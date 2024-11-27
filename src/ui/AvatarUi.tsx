import { Avatar, AvatarImage } from '@/components/ui/avatar';
import useUser from '@/features/authentication/useUser';

export function AvatarUi() {
  const { user } = useUser();
  const avatar = user?.user_metadata.avatar;
  return (
    <Avatar>
      <AvatarImage
        className="hidden xsPhone:inline-block"
        src={avatar ? avatar : 'default-user.jpg'}
      />
    </Avatar>
  );
}
