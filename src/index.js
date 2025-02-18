import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{
        hashed: false,
        token: {
          colorPrimaryHover: "black",
          colorPrimaryBorder: "black",
          colorPrimary: "black",
          colorBorder: "black",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </QueryClientProvider>
);
