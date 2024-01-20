const API_URL = "https://highperformanceboards.proteams.com/api";

const register = async (data) => {
  const res = await fetch(`${API_URL}/register`);
  return res.json();
};

const login = async (data) => {
  const res = await fetch(`${API_URL}/auth/local`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const userData = await res.json();
  if (typeof window !== "undefined" && userData.jwt) {
    localStorage.setItem("user", JSON.stringify(userData));
  }
  return userData;
};

const logout = async () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
  const res = await fetch(`${API_URL}/logout`);
  return res.json();
};

const getCurrentUser = () => {
  let user = null;
  if (typeof window !== "undefined") {
    const localUser = localStorage.getItem("user");
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
