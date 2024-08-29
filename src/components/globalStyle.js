import {createGlobalStyle} from 'styled-components';

import OpenSansWoff from "../assets/fonts/OpenSans.woff2";
import ProductSans from "../assets/fonts/ProductSans.ttf"

export default createGlobalStyle`
    @font-face {
        font-family: 'OpenSans';
        src: url(${OpenSansWoff}) format('woff2');
    }

    @font-face {
        font-family: 'ProductSans';
        src: url(${ProductSans}) format('truetype');
    }
`
