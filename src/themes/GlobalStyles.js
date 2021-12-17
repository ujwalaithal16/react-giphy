import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

body {
  font-family: 'Varela Round', sans-serif;
  ${"" /* line-height: 1.2; */}
}

input , textarea {
  font-family: 'Varela Round', sans-serif;
}






button{
  font-family: 'Varela Round', sans-serif;
}

:root body,
html {
  background-color: #f5f5f5;
  box-sizing: border-box;
}

 div,
h1,
h2,
h3,
h4,
h5,
h6,
header,
i,
img,
label,
li,
nav,
p,
small,
span,
ul {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  font-size: 100%; 
  vertical-align: baseline;
  background: transparent;
} 



`;

export default GlobalStyles;
