import { useQuery, useMutation, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

// ✅ Настройка базового URL API
const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ 1. Хук для добавления данных (POST)
export const useAddData = (collectionName) => {
  return useMutation(async (data) => {
    const response = await api.post(`/${collectionName}`, data);
    return response.data;
  });
};

// ✅ 2. Хук для обновления данных (PUT)
export const useUpdateData = (collectionName) => {
  return useMutation(async ({ id, data }) => {
    const response = await api.put(`/${collectionName}/${id}`, data);
    return response.data;
  });
};

// ✅ 3. Хук для удаления данных (DELETE)
export const useDeleteData = (collectionName) => {
  return useMutation(async (id) => {
    await api.delete(`/${collectionName}/${id}`);
  });
};

// ✅ 4. Хук для получения всех данных (GET)
export const useGetData = (collectionName, params = {}) => {
  return useQuery([collectionName, params], async () => {
    const response = await api.get(`/${collectionName}`, { params });
    return response.data;
  });
};

// ✅ 5. Хук для получения данных с пагинацией (GET + пагинация)
export const useGetPaginatedData = ({
  collectionName,
  pageSize = 10,
  filters = {},
}) => {
  return useInfiniteQuery({
    queryKey: [collectionName, filters],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await api.get(`/${collectionName}`, {
        params: { ...filters, page: pageParam, limit: pageSize },
      });
      return response.data;
    },
    getNextPageParam: (lastPage) => lastPage.nextPage || null,
  });
};

// ✅ 6. Хук для получения данных по ID (GET /:id)
export const useGetDataById = (collectionName, id) => {
  return useQuery(
    [collectionName, id],
    async () => {
      const response = await api.get(`/${collectionName}/${id}`);
      return response.data;
    },
    { enabled: !!id }
  );
};

export const useGetDataByCategory = (
  collectionName,
  level = 1,
  parentId = null
) => {
  return useQuery({
    queryKey: [collectionName, level, parentId],
    queryFn: async () => {
      const response = await api.get(`/${collectionName}`, {
        params: { level, parentId },
      });
      return response.data;
    },
  });
};

// ✅ 8. Хук для загрузки файлов (UPLOAD)
export const useUploadFile = () => {
  return useMutation(async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await api.post("/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data;
  });
};

export const useGetDataByIds = ({ collectionName, ids = [] }) => {
  return useQuery(
    [collectionName, "byIds", ids],
    async () => {
      const response = await api.post(`/${collectionName}/by-ids`, { ids });
      return response.data;
    },
    { enabled: Array.isArray(ids) && ids.length > 0 }
  );
};
