import styled from "styled-components";

export const StyledSidebarButton = styled.button`
    height: 48px;
    min-width: 48px;
    padding-left: 12px;
    display: flex;
    align-items: center;
    border: none;
    background-color: ${props => props.show ? "#feefc3" : "#ffffff"};
    transition: width 150ms linear;
    
    svg {
        color: ${props => props.show ? "#202124" : "#5f6368"};
    }
`;

export const StyledSidebarButtonText = styled.div`
    margin-left: 20px;
    color: #202124;
    font-family: "OpenSans", "Roboto", sans-serif;
    font-size: .875rem;
    font-weight: 500;
    line-height: 1.25rem;
    letter-spacing: 0.25px;;
`

export const StyledSidebarWrapper = styled.div`
    display: inline-block;
    width: ${props => props.open ? "280px" : "60px"};
    height: 100vh;
    padding-top: 72px;
    position: fixed;
    background-color: #ffffff;
    overflow: hidden;
    transition: width 150ms linear;
    z-index: 100;

    ${StyledSidebarButton} {
        width: ${props => props.open ? "100%" : "48px"};
        margin-left: ${props => props.open ? "0" : "12px"};
        border-radius: ${props => props.open ? "0 25px 25px 0" : "50%"};
        transition: border-radius 50ms linear;

        svg {
            width: ${props => props.open ? "48px" : "auto"};
        }
    }
    
    ${StyledSidebarButtonText} {
        display: ${props => props.open ? "block" : "none"};
    }
`;

