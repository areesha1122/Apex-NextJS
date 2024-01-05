import api from "@/common/utils/api";

const getPolicies = async () => {
  const response = await api().get("/v0/policy/list");
  return response.data;
};

const policiesService = {
  getPolicies,
};

export default policiesService;
