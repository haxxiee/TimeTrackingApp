import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import Layout from "./components/layout";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
);
