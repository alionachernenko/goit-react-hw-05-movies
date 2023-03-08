import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const Info = styled.div`
    display: flex;
    gap: 20px
`
export const Meta = styled.div`
 & :not(:last-child) {
    margin-bottom: 20px
 }
`
export const Poster =  styled.img`
    height: 500px
`
export const Tabs = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`
export const Tab = styled(NavLink)`
    color: black;
    text-decoration: none;
    padding: 5px 0;

    &.active{
        border-bottom: 2px solid orange
    }
`

export const Genres = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    gap: 5px
`