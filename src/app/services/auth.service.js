import apiClient from '@/app/services/api.service';

const login = async (data) => {
  const res = await apiClient({
    method: 'POST',
    endpoint: '/auth/local',
    data,
  });
  if (res.error) {
    throw res.error;
  }
  return res;
};

const checkAuthStatus = async (jwt) => {
  const userData = await apiClient({
    method: 'GET',
    endpoint: '/users/me',
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  });
  if (userData.error) {
    throw userData.error;
  } else if (typeof window !== 'undefined' && userData.jwt) {
    localStorage.setItem('user', JSON.stringify(userData));
  }
  return userData;
};

const getLocalUser = () => {
  let user = null;
  if (typeof window !== 'undefined') {
    const localUser = localStorage.getItem('user');
    user = JSON.parse(localUser);
  }
  return user;
};

const AuthService = {
  login,
  checkAuthStatus,
  getLocalUser,
};

export default AuthService;
