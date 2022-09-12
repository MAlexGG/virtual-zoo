import styled from 'styled-components';

export const CtShow = styled.div `
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const CtImgShow = styled.div `
    width: 100vw;
    height: 400px;
    overflow: hidden;
`;

export const ImgShow = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CtTxtShow = styled.div `
    width: 100vw;
    background-color: white;
    box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 38px 38px 0px 0px;
    position: absolute;
    top: 340px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

export const TxtTitle = styled.h2 `
    font-size: var(--fontSize-title);
    color: var(--main-color);
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;