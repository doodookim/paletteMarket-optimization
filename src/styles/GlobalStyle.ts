import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
    /* Typography */
    /* Font Size */
    --fontSize-body : 1.8rem; // 18px
    
    --fontSize-H1 : 2.6rem; // 26px
    --fontSize-H2 : 2.4rem; // 24px
    --fontSize-H3 : 2.2rem; // 22px
    --fontSize-H4 : 2rem; // 20px
    --fontSize-H5 : 1.6rem; // 16px
    --fontSize-H6 : 1.4rem; // 14px

    /* Font Weight */
    --fontWeight-bold: 700; /* 기본 굵기 */
    --fontWeight-500: 500;

    /* 밝은 배경색 */
    --bgColor : #FFFEFA;

    /* Primary Color 투명도 */
    --opc-100: #13B3BC; /* 100% 쨍한 파랑 - 활성화 된 버튼(등록버튼) */
    --opc-90: #13B3BC90;
    --opc-80: #13B3BC80;
    --opc-70: #13B3BC70;
    --opc-60: #13B3BC60;
    --opc-50: #13B3BC50;
    --opc-40: #13B3BC40;
    --opc-30: #13B3BC30; /* 인풋창 */
    --opc-20: #13B3BC20;
    --opc-10: #13B3BC10; /* 옅은 파랑 - 활성화 안 된 버튼 */

    /* 커뮤니티 색상 */
    --c-red: #FFC1A9; /* 사용감 많음 */
    --c-yellow: #FFEF77; /* 사용감 있음 */
    --c-green: #A0F4B3; /* 사용감 없음 */
    --c-blue: #94CDFF;
    --c-purple: #B5B5FA;

    /* 커뮤니티 배경색 */
    --c-red-30: #FFEDE2; /* 사용감 많음 */
    --c-yellow-30: #FFFBD3; /* 사용감 있음 */
    --c-green-30: #E3FCE5; /* 사용감 없음 */
    --c-blue-30: #DFF0FB;
    --c-purple-30: #E9E9FA;

    /* 정렬, 상품상태 설명창 배경색 */
    --drop: #CCE8EA;

    /* gray scale */
    --black : #191919; 
    --gray : #717171; 
    --white : #f8f8f8;

    /*!사용법! {color: var(--primary-color)}*/
}

@font-face {
    font-family: 'BM-JUA';
    src: url('/fonts/BMJUA.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'DalseoHealing-Medium';
    src: url('/fonts/DalseoHealingMedium.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
    fallback: sans-serif;
}
@font-face {
    font-family: 'DalseoHealing-Bold';
    src: url('/fonts/DalseoHealingBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
    fallback: sans-serif;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
    font-size: var(--fontSize-body);
    
    
    //dot bg

    --s: 100px; /* control the size */

    --_g: #0000 90deg,#36613610 0;
    background:
    conic-gradient(from 90deg at 0px 0px,var(--_g)),
    conic-gradient(from 90deg at 1px 1px,var(--_g));
    background-size: var(--s) var(--s), calc(var(--s)/2) calc(var(--s)/2);
    background-color: var(--bgColor);


    //
    font-family: 'DalseoHealing-Medium', sans-serif;
    color: var(--black);
    overflow-x: hidden;
    @media screen and (max-width: 768px){
        margin-top: 7rem;
    }
}
button,
input,
textarea {
    font-family: 'DalseoHealing-Medium', sans-serif;
}
input {
    font-family: 'DalseoHealing-Medium', sans-serif;

}
input {
    background-color: var(--opc-30);
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

html {
    font-size: 62.5%;
    
}

* {
    padding: 0;
    margin: 0 ;
    box-sizing: border-box;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    &::-webkit-scrollbar-thumb {
        background-color: var(--opc-100);
        border-radius: 50px;
        background-clip: content-box;
    }
}
`;
