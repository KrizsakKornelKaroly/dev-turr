import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

const useProtectedRoute = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  console.log(user)
  useEffect(() => {
    if (user && user.emailVerified === false) {
      router.push('/verify');
    }
  }, [user]);

  return user;
};

export default useProtectedRoute;
