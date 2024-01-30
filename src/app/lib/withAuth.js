import { useAuth } from '@/app/contexts/auth.context';
import { useRouter } from 'next/navigation';

function withAuth(WrappedComponent) {
  return function WithAuth(props) {
    const router = useRouter();
    const { isAuthenticated } = useAuth();

    // public pages check
    if (!isAuthenticated) {
      console.log('isAuthenticated checked:');
      router.push('/login');
      return;
    }
    return <WrappedComponent {...props} />;
  };
}

export default withAuth;
