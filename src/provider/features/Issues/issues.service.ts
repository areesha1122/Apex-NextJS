import api from "@/common/utils/api";

const getIssuesbyEngine = async () => {
  const response = await api().get("v0/engine/list");
  return response.data;
};

const issuesService = {
  getIssuesbyEngine,
};

export default issuesService;
