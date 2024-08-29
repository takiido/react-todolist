import styled from "styled-components";
import {StyledCheckbox, StyledCheckboxContainer} from "../Checkbox/styledCheckbox.js";

export const StyledItemBtnGroup = styled.div`
    margin: 4px 0;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
`;

export const StyledItemWrapper = styled.div`
    width: 240px;
    font-family: "OpenSans", "Roboto", sans-serif;
    color: #202124;
    display: flex;
    flex-direction: column;
    position: relative;
    border: ${(props => props.bg === "default" ? "1px solid #e0e0e0" : "1px solid transparent")};
    border-radius: 8px;
    background-color: ${(props =>
            props.bg === "coral" ? "#faafa8" :
                    props.bg === "peach" ? "#f39f76" :
                            props.bg === "sand" ? "#fff8b8" :
                                    props.bg === "mint" ? "#e2f6d3" :
                                            props.bg === "sage" ? "#b4ddd3" :
                                                    props.bg === "fog" ? "#d4e4ed" :
                                                            props.bg === "storm" ? "#aeccdc" :
                                                                    props.bg === "dusk" ? "#d3bfdb" :
                                                                            props.bg === "blossom" ? "#f6e2dd" :
                                                                                    props.bg === "clay" ? "#e9e3d4" :
                                                                                            props.bg === "chalk" ? "#7c7c7d" :
                                                                                                    "#ffffff")};

    &:hover {
        box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);
        -webkit-box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);
    }

    &:hover ${StyledCheckboxContainer} {
        opacity: 1;
    }
    
    ${StyledCheckbox} {
        &::after{
            border-color: ${(props =>
                    props.bg === "coral" ? "#faafa8" :
                            props.bg === "peach" ? "#f39f76" :
                                    props.bg === "sand" ? "#fff8b8" :
                                            props.bg === "mint" ? "#e2f6d3" :
                                                    props.bg === "sage" ? "#b4ddd3" :
                                                            props.bg === "fog" ? "#d4e4ed" :
                                                                    props.bg === "storm" ? "#aeccdc" :
                                                                            props.bg === "dusk" ? "#d3bfdb" :
                                                                                    props.bg === "blossom" ? "#f6e2dd" :
                                                                                            props.bg === "clay" ? "#e9e3d4" :
                                                                                                    props.bg === "chalk" ? "#7c7c7d" :
                                                                                                            "#ffffff")};
        }
    }

    &:hover ${StyledItemBtnGroup} {
        opacity: 1;
    }
`

export const StyledItemTitle = styled.div`
    min-height: 30px;
    padding: 12px 16px 12px 16px;
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 1.5rem;
    word-wrap: break-word;
`

export const StyledItemContent = styled(StyledItemTitle)`
    font-weight: 400;
`

export const StyledItemBtn = styled.button`
    width: 32px;
    height: 32px;
    margin: 0 3px;
    font-size: 12px;
    padding: 4px;
    color: #202124;
    opacity: 0.71;
    background-color: transparent;
    border: none;
    border-radius: 50%;

    svg {
        width: 18px;
    }

    &:hover {
        opacity: 0.87;
        background-color: rgba(95, 99, 104, 0.157);
    }
`