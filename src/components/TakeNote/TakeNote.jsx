import {
    StyledTakeNoteBackground,
    StyledTakeNoteInput,
    StyledTakeNotePopup,
    StyledTakeNoteWrapper
} from "./styledTakeNote.js";
import {StyledItemBtn, StyledItemBtnGroup} from "../ListItem/styledListItem.js";
import {PaletteOutlined} from "@mui/icons-material";
import React, {createRef, useEffect, useState} from "react";
import ItemPalette from "../ItemPalette/ItemPalette.jsx";

const TakeNote = ({items, setItems}) => {
    let [id, setId] = useState(0);
    let [title, setTitle] = useState({});
    let [content, setContent] = useState({});
    let [color, setColor] = useState("default");
    let [newItem, setNewItem] = useState({color: "default", checked: false});
    let [edit, setEdit] = useState(false);
    let [palette, setPalette] = useState(false);
    let titleRef = createRef();
    let contentRef = createRef();

    const AddItem = () => {
        setId(items.length + 1);
        if (newItem.title !== "" || newItem.content !== "") {
            setItems([...items, newItem]);
            console.log(newItem.id)
        }

        titleRef.current.value = "";
        contentRef.current.value = "";
        setEdit(false);
    }

    const TogglePalette = () => {
        console.log("Test")
        setPalette(!palette)
    }

    useEffect(() => {
        setNewItem({...newItem, title: title})
    }, [title])

    useEffect(() => {
        setNewItem({...newItem, content: content})
    }, [content])

    useEffect(() => {
        setNewItem({...newItem, color: color})
    }, [color])

    useEffect(() => {
        setNewItem({...newItem, id: id})
    }, [id])

    return (
        <>
            <StyledTakeNoteWrapper edit={edit} onClick={() => setEdit(true)}>
                Take a note...
                <StyledTakeNotePopup show={edit}>
                    <StyledTakeNoteInput onChange={(e) => setTitle(e.target.value)} ref={titleRef} type="text" placeholder="Title"/>
                    <StyledTakeNoteInput onChange={(e) => setContent(e.target.value)} ref={contentRef} type="textarea" placeholder="Take a note..."/>
                    <StyledItemBtnGroup>
                        <StyledItemBtn className="palette" onClick={() => TogglePalette()}>
                            <PaletteOutlined/>
                        </StyledItemBtn>
                    </StyledItemBtnGroup>
                    <ItemPalette show={palette} setPallete={setPalette} color={color} setColor={setColor}/>
                </StyledTakeNotePopup>
            </StyledTakeNoteWrapper>
            <StyledTakeNoteBackground show={edit} onClick={() => AddItem()}/>
        </>
    );
}

export default TakeNote;