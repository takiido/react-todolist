import styled from "styled-components";

export const StyledPaletteWrapper = styled.div`
    padding: 9px 8px;
    display: ${props => props.show ? "flex" : "none"};
    position: absolute;
    left: 0;
    top: 160px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302),0 2px 6px 2px rgba(60,64,67,0.149);
    z-index: 99;
`

export const StyledPaletteColor = styled.div`
    width: 32px;
    height: 32px;
    margin: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    border-radius: 50%;
    border: 2px solid ${(props => props.checked ? "#a142f4" : props.bg === "default" ? "#e0e0e0" : "transparent")};
`

export const StyledPaletteBackground = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: ${(props) => props.show ? "block" : "none"};
    cursor: default;
`