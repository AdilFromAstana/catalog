import axios from "axios";

const API_URL = "http://192.168.0.10:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const fetchCategoriesByLevelAndParent = async ({ level, parentId }) => {
  const { data } = await api.get("/categories/getCategoriesByLevelAndParent", {
    params: { level, parentId },
  });
  return data.categories || data;
};
