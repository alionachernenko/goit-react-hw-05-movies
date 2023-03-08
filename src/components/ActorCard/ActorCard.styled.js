import styled from "styled-components"

export const Card = styled.li`
    display: flex;

    &:not(:last-child) {
        margin-bottom: 10px
    }
`

export const Portrait = styled.img`
    width: 200px;
    height: auto;
    margin-right: 20px
`