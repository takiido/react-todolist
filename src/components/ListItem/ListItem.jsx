import {useState} from 'react';
import Checkbox from "../Checkbox/Checkbox.jsx";
import ItemPalette from "../ItemPalette/ItemPalette.jsx";
import {DeleteForeverOutlined, ArchiveOutlined, PaletteOutlined, ContentCopyOutlined} from "@mui/icons-material";

import {
    StyledItemWrapper, StyledItemBtn, StyledItemTitle, StyledItemContent, StyledItemBtnGroup
} from "./styledListItem.js";

const ListItem = ({item, items, setItems}) => {
    let [palette, setPalette] = useState(false);

    const Delete = () => {
        console.log(item.id)
        const newState = items.filter((obj) => obj.id !== item.id);
        setItems(newState);
    }

    const Archive = () => {
        let newState = items.map(obj => {
            if (obj.id === item.id) {
                return {...obj, checked: !items[item.id].checked};
            }

            return obj;
        });

        setItems(newState);
    }

    const ChangeColor = (color) => {
        let newState = items.map(obj => {
            if (obj.id === item.id) {
                return {...obj, color: color};
            }

            return obj;
        });


        setItems(newState);
    }

    const TogglePalette = () => {
        setPalette(!palette)
    }

    const Copy = () => {
        let newItem = {
            id: items.length, color: item.color, title: item.title, content: item.content, checked: item.checked
        }
        setItems([...items, newItem]);
    }

    return (<StyledItemWrapper bg={item.color}>
        <StyledItemTitle>
            {item.checked ? <s>{item.title}</s> : item.title}
        </StyledItemTitle>
        <StyledItemContent>
            {item.checked ? <s>{item.content}</s> : item.content}
        </StyledItemContent>
        <StyledItemBtnGroup>
            <StyledItemBtn className="delete" onClick={() => Delete()}>
                <DeleteForeverOutlined/>
            </StyledItemBtn>
            <StyledItemBtn className="archive" onClick={() => Archive()}>
                <ArchiveOutlined/>
            </StyledItemBtn>
            <StyledItemBtn className="palette" onClick={() => TogglePalette()}>
                <PaletteOutlined/>
            </StyledItemBtn>
            <StyledItemBtn className="copy" onClick={() => Copy()}>
                <ContentCopyOutlined/>
            </StyledItemBtn>
        </StyledItemBtnGroup>
        <Checkbox/>
        <ItemPalette show={palette} setPallete={setPalette} color={item.color} setColor={ChangeColor}/>
    </StyledItemWrapper>)
}

export default ListItem;