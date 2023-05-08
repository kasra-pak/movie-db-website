import React from "react";
import { HashRouter } from "react-router-dom";

import { SearchProvider } from "@/contexts/SearchContext";
import Router from "./routes";
import "./index.css";
import ScrollToTop from "@/components/ScrolToTop";

const App = () => (
  <HashRouter>
    <SearchProvider>
      <Router>
        <ScrollToTop />
        <Router />;
      </Router>
    </SearchProvider>
  </HashRouter>
);

export default App;
