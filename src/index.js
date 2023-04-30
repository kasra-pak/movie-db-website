import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { SearchProvider } from "@/contexts/SearchContext";

import "./index.css";
import App from "@/App";
import ScrollToTop from "@/components/ScrolToTop";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <SearchProvider>
        <ScrollToTop />
        <App />
      </SearchProvider>
    </Router>
  </React.StrictMode>
);
