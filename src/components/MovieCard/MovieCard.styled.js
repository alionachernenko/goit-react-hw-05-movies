import styled from "styled-components";

export const Card = styled.li`
    width: calc((90vw - 60px) / 3);
    background-color: aliceblue;
    min-height: 100%;
    display: block;
`
export const Poster = styled.img `
    width: 100%;
    object-fit: cover;
    height: auto;
    // min-height: 90%;
    display: block;
    margin-bottom: 10px
`
export const Title = styled.p`
    color: black;
    font-weight: 500
`

