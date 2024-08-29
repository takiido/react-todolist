import React from 'react';

import {StyledPaletteBackground, StyledPaletteColor, StyledPaletteWrapper} from "./styledItemPalette.js";
import {FormatColorResetOutlined} from "@mui/icons-material";

const ItemPalette = ({show, setPallete, color, setColor}) => {
    return (
        <>
            <StyledPaletteWrapper show={show}>
                <StyledPaletteColor onClick={() => setColor("default")} checked={color === "default"} bg="default">
                    <FormatColorResetOutlined/>
                </StyledPaletteColor>
                <StyledPaletteColor onClick={() => setColor("coral")} checked={color === "coral"} bg="coral"/>
                <StyledPaletteColor onClick={() => setColor("peach")} checked={color === "peach"} bg="peach"/>
                <StyledPaletteColor onClick={() => setColor("sand")} checked={color === "sand"} bg="sand"/>
                <StyledPaletteColor onClick={() => setColor("mint")} checked={color === "mint"} bg="mint"/>
                <StyledPaletteColor onClick={() => setColor("sage")} checked={color === "sage"} bg="sage"/>
                <StyledPaletteColor onClick={() => setColor("fog")} checked={color === "fog"} bg="fog"/>
                <StyledPaletteColor onClick={() => setColor("storm")} checked={color === "storm"} bg="storm"/>
                <StyledPaletteColor onClick={() => setColor("dusk")} checked={color === "dusk"} bg="dusk"/>
                <StyledPaletteColor onClick={() => setColor("blossom")} checked={color === "blossom"} bg="blossom"/>
                <StyledPaletteColor onClick={() => setColor("clay")} checked={color === "clay"} bg="clay"/>
            </StyledPaletteWrapper>
            <StyledPaletteBackground show={show} onClick={() => setPallete(false)}/>
        </>
    )
}

export default ItemPalette;