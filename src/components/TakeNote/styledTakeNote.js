import styled from 'styled-components';
import {StyledItemBtnGroup} from "../ListItem/styledListItem.js";

export const StyledTakeNoteWrapper = styled.div`
    min-height: 46px;
    min-width: 360px;
    max-width: 600px;
    margin: 32px auto 16px;
    padding: 12px 16px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 16px;
    line-height: 1.5rem;
    font-family: "OpenSans", "Roboto", sans-serif;
    font-weight: 500;
    position:relative;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: ${(props => !props.edit ? "0 1px 3px 1px rgba(0, 0, 0, 0.25)" : "none")};
    -webkit-box-shadow: ${(props => !props.edit ? "0 1px 3px 1px rgba(0, 0, 0, 0.25)" : "none")};
    -moz-box-shadow: ${(props => !props.edit ? "0 1px 3px 1px rgba(0, 0, 0, 0.25)" : "none")};
    cursor: text;
`;

export const StyledTakeNotePopup = styled(StyledTakeNoteWrapper)`
    margin: 0;
    padding: 0;
    display: ${(props) => props.show ? "flex" : "none"};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.25);
    z-index: 99;
    cursor: auto;
    
    ${StyledItemBtnGroup} {
        opacity: 1;
    }
`

export const StyledTakeNoteBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: ${(props) => props.show ? "block" : "none"};
    background: transparent;
    cursor: default;
`

export const StyledTakeNoteInput = styled.input`
    max-width: 568px;
    width: 100%;
    padding: 12px 16px;
    outline: none;
    border: none;
    &:nth-child(2){
        font-size: 14px;
    }
`