import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Dashboard from "./pages/Dashboard.tsx";
import Users from "./pages/Users.tsx";
import Roles from "./pages/Roles.tsx";
import AppLayout from "./components/AppLayout.tsx";
import PageLayout from "./components/PageLayout.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<PageLayout />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="roles" element={<Roles />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
