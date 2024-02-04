import { useAuth } from '@/app/contexts/auth.context';
import { redirect } from 'next/navigation';

function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const { isAuthenticated } = useAuth();
    // console.log('isAuthenticated checking:', isAuthenticated);

    // public pages check
    if (!isAuthenticated) {
      // console.log('isAuthenticated false');
      redirect('/login');
      return;
    }
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
