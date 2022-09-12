import styled from "styled-components";

export const CtFeature = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    border-bottom: 1px solid var(--secondary-color);
    margin: 10px;
    width: 90%;
`;

export const TxtTitle = styled.h3 `
    color: var(--secondary-color);
    font-size: var(--fontSize-text);
    font-weight: bold;
    margin: 0px;
`;

export const TxtContent = styled.p `
    color: var(--secondary-color);
    font-size: var(--fontSize-text);
    font-weight: 400;
    margin: 0px;
`;