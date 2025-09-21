// src/components/Navigation/Navigation.jsx
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink
        to="/generate"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Generate QR Code
      </NavLink>

      <NavLink
        to="/scan"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Scan QR Code
      </NavLink>

      <NavLink
        to="/scanHistory"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Scanning History
      </NavLink>

      <NavLink
        to="/generateHistory"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Generating History
      </NavLink>
    </nav>
  );
};
