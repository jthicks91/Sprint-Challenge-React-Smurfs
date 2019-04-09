import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const SmurfsNav = styled.nav`
  display: flex;
  width: 250px;
  flex-direction: row;
  justify-content: space-between;
`;

function Nav() {
  return (
    <nav>
      <SmurfsNav className="smurf-nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/smurfs">
          Smurf List
        </NavLink>
        <NavLink exact to="/add-smurf">
          Add Smurf
        </NavLink>
      </SmurfsNav>
    </nav>
  );
}

export default Nav;
