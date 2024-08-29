import styled from "styled-components";
import {FlashOn} from "@mui/icons-material";

export const StyledTopbarWrapper = styled.div`
    height: 64px;
    width: 100%;
    padding: 8px;
    position: fixed;
    color: #5f6368;
    font-size: 22px;
    line-height: 24px;
    font-family: "OpenSans", "Roboto", sans-serif;
    font-weight: 500;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dadce0;
    z-index: 101;
    
    svg {
        color: #5f6368;
    }
    
    svg:nth-child(2) {
        height: 40px;
        width: 40px;
        color: #fbbc04;
    }
`

export const StyledTopbarButton = styled.button`
    margin: 0 4px;
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background-color: transparent;
    border-radius: 50%;
    
    &:hover {
        background-color: rgba(60,64,67,.08);
    }
`