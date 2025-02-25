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

export const useUpdateCategoryAttributes = (categoryId) => {
  return useMutation({
    mutationFn: async (attributes) => {
      const { data } = await api.patch(`/categories/update/${categoryId}/attributes`, {
        attributes,
      });
      return data;
    },
    onSuccess: (data, variables, context) => {
      console.log("Атрибуты обновлены!", data);
    },
    onError: (error) => {
      console.error("Ошибка при обновлении атрибутов:", error);
    },
  });
};
export const useAddData = (collectionName) => {
  return useMutation(async (data) => {
    const response = await api.post(`/${collectionName}`, data);
    return response.data;
  });
};
export const useUpdateData = (collectionName) => {
  return useMutation(async ({ id, data }) => {
    const response = await api.put(`/${collectionName}/${id}`, data);
    return response.data;
  });
};
export const useDeleteData = (collectionName) => {
  return useMutation(async (id) => {
    await api.delete(`/${collectionName}/${id}`);
  });
};
export const useGetData = (collectionName, params = {}) => {
  return useQuery([collectionName, params], async () => {
    const response = await api.get(`/${collectionName}`, { params });
    return response.data;
  });
};
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
export const useGetDataById = (collectionName, id) => {
  return useQuery(
    [collectionName, id],
    async () => {
      const response = await api.get(`/${collectionName}/${id}`);
      return response.data;
    },
    { enabled: !!id },
  );
};
export const useGetDataByCategory = (
  collectionName,
  level = 1,
  parentId = null,
) => {
  return useQuery({
    queryKey: [collectionName, level, parentId],
    queryFn: async () => {
      const response = await api.get(`/${collectionName}`, {
        params: { level, parentId },
      });
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // Данные считаются актуальными в течение 5 минут
    cacheTime: 10 * 60 * 1000, // Данные остаются в кэше 10 минут после последнего использования
    keepPreviousData: true, // Сохраняет предыдущие данные до получения новых
  });
};
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
    { enabled: Array.isArray(ids) && ids.length > 0 },
  );
};
