import api from "@/common/utils/api";

const getActiveUser = async () => {
  const response = await api().get("/v0/policy/list");
  return response.data;
};

const sessionsExplorerService = {
  getActiveUser,
};

export default sessionsExplorerService;
