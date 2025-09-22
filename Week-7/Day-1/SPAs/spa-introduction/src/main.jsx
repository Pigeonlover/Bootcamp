import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* By wrapping it in BrowserRouter tags, the app can now use routes */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
