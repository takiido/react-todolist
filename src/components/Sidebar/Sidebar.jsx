import {StyledSidebarButton, StyledSidebarButtonText, StyledSidebarWrapper} from "./styledSidebar.js";
import {ArchiveOutlined, LightbulbOutlined} from "@mui/icons-material";

const Sidebar = ({open, setSidebar, tab, setTab}) => {
    const ChangeTab = (index) => {
        setTab(index);
        setSidebar(false);
    }

    return(
        <StyledSidebarWrapper open={open}>
            <StyledSidebarButton show={tab === 0} onClick={()=>ChangeTab(0)}>
                <LightbulbOutlined/>
                <StyledSidebarButtonText>
                    Notes
                </StyledSidebarButtonText>
            </StyledSidebarButton>
            <StyledSidebarButton show={tab === 1} onClick={()=>ChangeTab(1)}>
                <ArchiveOutlined/>
                <StyledSidebarButtonText>
                    Archive
                </StyledSidebarButtonText>
            </StyledSidebarButton>
        </StyledSidebarWrapper>
    )
}

export default Sidebar;