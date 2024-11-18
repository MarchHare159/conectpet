import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

function Header() {
  return (
    <div className="pl-[28px]">
      <div className="flex space-x-6">
        <NavLink to="/" className="flex min-w-[191px]">
          <img src={Logo} alt="Company Logo"/>
        </NavLink>

        <nav className="flex mt-[25px] space-x-12 text-[#A2A2A2] font-inter text-[25px] font-semibold">
          <NavLink
            to="/panel"
            className={({ isActive }) =>
              isActive
                ? "text-[#13293D] border-[#13293D]"
                : "hover:text-[#13293D]"
            }
          >
            Painel
          </NavLink>
          <NavLink
            to="/agenda"
            className={({ isActive }) =>
              isActive
                ? "text-[#13293D] border-[#13293D]"
                : "hover:text-[#13293D]"
            }
          >
            Agenda
          </NavLink>
          <NavLink
            to="/consultations"
            className={({ isActive }) =>
              isActive
                ? "text-[#13293D] border-[#13293D]"
                : "hover:text-[#13293D]"
            }
          >
            Consultas
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              isActive
                ? "text-[#13293D] border-[#13293D]"
                : "hover:text-[#13293D]"
            }
          >
            Relatórios
          </NavLink>
          <NavLink
            to="/registration"
            className={({ isActive }) =>
              isActive
                ? "text-[#13293D] border-[#13293D]"
                : "hover:text-[#13293D]"
            }
          >
            Cadastro
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
