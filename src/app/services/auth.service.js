const API_URL = 'http://localhost:3000/api';

const register = async (username, email, password) => {
  const res = await fetch(`${API_URL}/register`);
  return res.json();
};

const login = async (username, password) => {
  const res = await fetch(`${API_URL}/login`);
  const userData = await res.json();
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(userData));
  }
  return userData;
};

const logout = async () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('user');
  }
  const res = await fetch(`${API_URL}/logout`);
  return res.json();
};

const getCurrentUser = () => {
  let user = null;
  if (typeof window !== 'undefined') {
    const localUser = localStorage.getItem('user');
    user = JSON.parse(localUser);
  }
  return user;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
