import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { setItems } from "../../redux/itemsSlice";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchItems = async () => {
  const { data } = await api.get("/items/getAll?businessId=1");
  return data;
};

const ItemsProvider = () => {

  return null; // Этот компонент просто загружает данные и передаёт их в Redux
};

export default ItemsProvider;
