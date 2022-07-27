import React from "react";
import ReactDOM from "react-dom/client";
import { configureClient } from "./api/client";
import App from "./App";
import "./index.css";
import storage from "./utils/storage";

const token = storage.get("auth") || storage.getSession("auth");
configureClient({ token });

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <App isInitiallyLogged={!!token} />
  // </React.StrictMode>
);
