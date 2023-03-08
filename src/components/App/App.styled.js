import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  gap: 20px;
  justify-content: center
`

export const Tab = styled(NavLink)`
  text-decoration: none;
  display: block;
  font-size: 20px;
  padding: 5px 0;
  color: black;

  &.active{
    border-bottom: 2px solid orange
  }
`