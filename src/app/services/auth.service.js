const API_URL = 'https://highperformanceboards.proteams.com/api';

const login = async (data) => {
  const res = await fetch(`${API_URL}/auth/local`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const userData = await res.json();
  return userData;
};

const checkAuthStatus = async (jwt) => {
  const res = await fetch(`${API_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  });
  const userData = await res.json();
  if (userData.error) {
    throw userData.error;
  }
  if (typeof window !== 'undefined' && userData.jwt) {
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
