import api from "@/common/utils/api";

//getEngine
const getEngine = async () => {
  const response = await api().get("v0/engine/list");
  return response.data;
};

//UpdateEngine
const updateEngine = async ({ payload, id }: any) => {
  const response = await api().patch(`/v0/engine/${id}`, payload);
  return response.data;
};

//singleEngine
const singleEngine = async (id: any) => {
  const response = await api().get(`v0/engine/${id}`);
  return response.data;
};

//deleteEngine
const deleteEngine = async (id: any) => {
  const response = await api().delete(`/v0/engine/${id}`);
  return response.data;
};

const enginesService = {
  getEngine,
  singleEngine,
  updateEngine,
  deleteEngine,
};

export default enginesService;
