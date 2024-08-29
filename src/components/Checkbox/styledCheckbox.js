import styled from 'styled-components';

export const StyledCheckboxContainer = styled.div`
    display: block;
    position: absolute;
    left: -10px;
    top: -10px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    margin: 0;
    
    &::before{
        content: "";
        width: 20px;
        height: 20px;
        display: block;
        border-radius: 50%;
        background-color: #000000;
    }
    
    &::after{
        content: "";
        width: 4px;
        height: 8px;
        position: absolute;
        top: 4px;
        right: 6px;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    
    &:checked{
        &::after{
            opacity: 0.5;
        }
    }

`;