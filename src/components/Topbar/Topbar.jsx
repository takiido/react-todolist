import React from 'react';

import {StyledTopbarButton, StyledTopbarWrapper} from "./styledTopbar.js";
import {Menu, NoteAdd} from "@mui/icons-material";

const Topbar = ({toggleSidebar}) => {

    return (
        <StyledTopbarWrapper>
            <StyledTopbarButton onClick={() => toggleSidebar()}>
                <Menu/>
            </StyledTopbarButton>
            <NoteAdd/>
            Todo
        </StyledTopbarWrapper>
    );
}

export default Topbar;