import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
import "./css/index.css";
import { LanguageProvider } from "./components/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
