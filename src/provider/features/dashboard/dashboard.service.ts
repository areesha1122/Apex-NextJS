import api from "@/common/utils/api";

const getActiveEngine = async () => {
  const response = await api().get("/v0/policy/list");
  return response.data;
};

const dashboardService = {
  getActiveEngine,
};

export default dashboardService;
