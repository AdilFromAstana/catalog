import { useQuery, useMutation, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setItems } from "./redux/itemsSlice";

// ✅ Настройка базового URL API
const API_URL = "http://192.168.0.18:5000/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const useUpdateCategoryAttributes = (categoryId) => {
  return useMutation({
    mutationFn: async (attributes) => {
      const { data } = await api.patch(
        `/categories/update/${categoryId}/attributes`,
        {
          attributes,
        },
      );
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
    console.log("data: ", data);
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
export const useGetDataByCategory = ({
  endPoint,
  level = 1,
  parentId = null,
  titleRu = "",
}) => {
  return useQuery({
    queryKey: [endPoint, level, parentId, titleRu],
    queryFn: async () => {
      const response = await api.get(`/${endPoint}?businessId=1`, {
        params: { level, parentId, titleRu },
      });
      return response.data;
    },
    staleTime: 5 * 60 * 1000, // Данные считаются актуальными в течение 5 минут
    cacheTime: 10 * 60 * 1000, // Данные остаются в кэше 10 минут после последнего использования
    keepPreviousData: true, // Сохраняет предыдущие данные до получения новых
  });
};
export const useGetDataByAttribute = ({
  endPoint,
  level = 1,
  parentId = null,
  titleRu = "",
}) => {
  return useQuery({
    queryKey: [endPoint],
    queryFn: async () => {
      const response = await api.get(`/${endPoint}?businessId=1`);
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
//////////////////////////////
const fetchCategoryHierarchiesByBusiness = async (businessId) => {
  if (!businessId) {
    throw new Error("businessId является обязательным параметром");
  }

  const { data } = await api.get(
    `categories/getCategoryHierarchiesByBusiness`,
    {
      params: { businessId },
    },
  );

  return data;
};

export const useGetCategoryHierarchiesByBusiness = (
  businessId,
  options = {},
) => {
  return useQuery({
    queryKey: ["getCategoryHierarchiesByBusiness", businessId], // Ключ для кэширования
    queryFn: () => fetchCategoryHierarchiesByBusiness(businessId),
    enabled: !!businessId, // Запрос выполняется только если передан businessId
    ...options, // Дополнительные настройки (например, refetchInterval)
    staleTime: 60000,
  });
};

const fetchItem = async ({ queryKey }) => {
  const [, itemId] = queryKey;
  if (!itemId) throw new Error("businessId обязателен");

  const response = await api.get(`items/getById/${itemId}`);

  return response.data;
};

export const useFetchItemById = ({ itemId }) => {
  return useQuery({
    queryKey: ["item", itemId],
    queryFn: fetchItem,
    staleTime: 5 * 60 * 1000, // 5 минут кэширования
  });
};

const fetchItems = async ({ queryKey }) => {
  const [, categoryId, businessId, limit] = queryKey;
  if (!businessId) throw new Error("businessId обязателен");

  const response = await api.get("items/getItemsByCategory", {
    params: {
      categoryId: categoryId || null,
      businessId,
      limit,
    },
  });

  return response.data;
};

export const useFetchItemsByCategory = ({
  categoryId,
  businessId,
  limit,
  enabledOn,
}) => {
  return useQuery({
    queryKey: ["items", categoryId, businessId, limit],
    queryFn: fetchItems,
    staleTime: 5 * 60 * 1000,
    enabled: enabledOn,
  });
};

const fetchAttributeCounts = async ({ queryKey }) => {
  const [, categoryId, businessId] = queryKey;
  if (!businessId) throw new Error("businessId обязателен");

  const response = await api.get("items/getAttributeCounts", {
    params: {
      categoryId: categoryId || null,
      businessId,
    },
  });

  return response.data;
};

export const useGetAttributeCounts = ({ categoryId, businessId, enabled }) => {
  return useQuery({
    queryKey: ["getAttributeCounts", categoryId, businessId],
    queryFn: fetchAttributeCounts,
    staleTime: 5 * 60 * 1000, // 5 минут кэширования
    enabled, // Контролируем выполнение запроса
  });
};

const fetchFilteredItems = async ({ queryKey }) => {
  const [, businessId, categoryId, filters] = queryKey;
  if (!businessId) throw new Error("businessId обязателен");

  const response = await api.get("items/filterItems", {
    params: { businessId, categoryId, filters: JSON.stringify(filters) },
  });

  return response.data;
};

export const useFilterItems = ({
  businessId,
  categoryId,
  filters,
  categoryHasChild,
}) => {
  const hasFilters = filters && Object.keys(filters).length > 0;

  return useQuery({
    queryKey: ["filterItems", businessId, categoryId, filters],
    queryFn: fetchFilteredItems,
    enabled: categoryHasChild === false && hasFilters,
    staleTime: 5 * 60 * 1000,
  });
};

export const getSource = () => {
  const referrer = document.referrer;
  if (!referrer) return "direct";
  if (referrer.includes(window.location.host)) {
    return sessionStorage.getItem("prevPage") || "internal";
  }
  return `external:${new URL(referrer).hostname}`;
};

export const logProductView = async ({ productId, source, duration }) => {
  try {
    await api.post("views/log", { productId, source, duration });
  } catch (error) {
    console.error(
      "Error logging product view:",
      error.response?.data || error.message,
    );
  }
};

const fetchAttributes = async ({ queryKey }) => {
  const response = await api.get("attributes/getAll", {
    params: {},
  });

  return response.data;
};

export const useFetchAttributes = ({}) => {
  return useQuery({
    queryKey: ["attributes/getAll"],
    queryFn: fetchAttributes,
    staleTime: 5 * 60 * 1000, // 5 минут кэширования
  });
};
