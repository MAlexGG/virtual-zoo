import styled from "styled-components";

export const CtHome = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`;

export const CtImg = styled.div `
    width: 100vw;
    height: 360px;
    filter: drop-shadow(0px 5px 6px rgba(0, 0, 0, 0.25));
    border-radius: 0px 0px 38px 38px;
    overflow: hidden;
    position: relative;
`;

export const MainImg = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const MainSection = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 56vh;
`;

export const MainTxt = styled.h2 `
    font-weight: bold;
    font-size: var(--fontSize-title);
    position: absolute;
    top: 8%;
    left: 8%;
    color: white;
    width: 50vw;
    text-align: center;
`;

export const Txt = styled.p `
    font-weight: 400;
    color: var(--main-color);
    font-size: var(--fontSize-title);
    text-align: center;
    margin: 0px;
`;

export const Logo = styled.img `
    width: 58px;
    height: auto;
`;

