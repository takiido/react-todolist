import {useEffect, useState} from 'react';
import ListItem from "./components/ListItem/ListItem.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Topbar from "./components/Topbar/Topbar.jsx";
import TakeNote from "./components/TakeNote/TakeNote.jsx";
import GlobalStyle from "./components/globalStyle.js";

import {StyledContainer} from "./components/styledContainer.js";
import {StyledList} from "./components/styledList.js";
import {StyledTooltip} from "./components/styledTooltip.js";

const App = () => {
    let [items, setItems] = useState([])
    let [tab, setTab] = useState(0);
    let [sidebar, setSidebar] = useState(false);

    const ToggleSidebar = () => {
        setSidebar(!sidebar);
    }

    return (<>
            <GlobalStyle/>
            <Topbar toggleSidebar={ToggleSidebar}/>
            <Sidebar open={sidebar} setSidebar={setSidebar} tab={tab} setTab={setTab}/>
            <StyledContainer>
                <TakeNote items={items} setItems={setItems}/>
                {tab === 0 && <StyledList>
                    {items.map((item, index) => (!item.checked ?
                            <ListItem key={index} item={item} items={items} setItems={setItems}/> : null))}
                </StyledList>}
                {tab === 1 && <StyledList>
                    {items.map((item, index) => (item.checked ?
                            <ListItem key={index} item={item} items={items} setItems={setItems}/> : null))}
                </StyledList>}
                <StyledTooltip anchorSelect=".palette" place="bottom">
                    Background options
                </StyledTooltip>
                <StyledTooltip anchorSelect=".delete" place="bottom">
                    Delete
                </StyledTooltip>
                <StyledTooltip anchorSelect=".archive" place="bottom">
                    Archive
                </StyledTooltip>
                <StyledTooltip anchorSelect=".copy" place="bottom">
                    Copy
                </StyledTooltip>
            </StyledContainer>
        </>)
}

export default App
