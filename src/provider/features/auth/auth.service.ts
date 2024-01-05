import api from "@/common/utils/api";

const login = async (userData: any) => {
  const response = await api().post("/auth/login", userData);
  if (response.data.Succeeded) {
    localStorage.setItem("user", JSON.stringify(response.data.data));
  }
  return response.data;
};

const logout = async () => {
  const response = await api().get("/user/logout");
  if (response.data.Succeeded) {
    localStorage.removeItem("user");
  }
  return response.data;
};

const authService = {
  logout,
  login,
};

export default authService;
