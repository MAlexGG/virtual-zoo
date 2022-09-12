import styled from 'styled-components';

export const CtBtCard = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--main-color);
    border: 3px solid var(--secondary-color);
    border-radius: 25px 0px;
    position: absolute;
    bottom: ${(props) => props.bottom};
    right: ${(props) => props.right};
    width: 56px;
    height: 56px;
`; 

export const ImgArrow = styled.img `
    color: white;
    transform: rotate(${(props) => props.rotation});
`;