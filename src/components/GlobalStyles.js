import { createGlobalStyle, css } from "styled-components";
import styled from "styled-components";
export const GlobalStyles = createGlobalStyle`
/* ----------- */
/* Custom Properties */
/*------------ */

:root {
  /* font-sizes */
  --fs-900: clamp(5rem, 8vw + 1rem, 9.375rem);
  --fs-800: clamp(3.5rem, 5vw + 1rem, 6.25rem);
  --fs-700: clamp(1.5rem, 3.8vw + 1rem, 3.5rem);
  --fs-600: clamp(1.25rem, 3vw + 1rem, 2rem);
  --fs-500: clamp(1rem, 3vw, 1.75rem);
  --fs-400: clamp(0.9375rem, 1vw + 0.4rem, 1.125rem);
  --fs-300: 1rem;
  --fs-200: 0.875rem;
  /* font-families */
  --ff-ibm-plex-sans: "IBM Plex Sans Thai Looped", sans-serif;
  --ff-shadow-light: "Shadows Into Light", cursive;
}
/* clamp sets (min , middle,max ) values , but middle value must be a value that can shrink but not less than min or grow but not more than max  */
/* em not rems or px as safari deals with em as other browsers do in media queries */

/* ----------- */
/* CSS RESET */
/*------------ */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  font-weight: 400;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  padding: 0;
}

ul li {
  list-style: none;
  
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Set core body defaults */
body {
  min-height: 100vh;
  min-width: 100vw;
  /* font-family: var(--ff-ibm-plex-sans); */
  overflow-x: hidden;
  transition:0.5s all;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons as form elements do not inherit font */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* utility classes */
.fs-900 {
  font-size: var(--fs-900);
}
.fs-800 {
  font-size: var(--fs-800);
}
.fs-700 {
  font-size: var(--fs-700);
}
.fs-600 {
  font-size: var(--fs-600);
  object-fit: contain;
}
.fs-500 {
  font-size: var(--fs-500);
}
.fs-400 {
  font-size: var(--fs-400);
}
.fs-300 {
  font-size: var(--fs-300);
}
.fs-200 {
  font-size: var(--fs-200);
}

${"" /* navlink */}
.nav-link-button {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap:0.5rem;
  padding:0.5rem;
  border: none;
  background: #211940;
  border-radius:1rem;
  color: white;
  transition: 0.5s all;
  z-index:9;
  box-shadow:0 0 0.5rem 1px #211940;
}
.nav-link-button:hover{
  transform:scale(1.04);
}

${"" /* status colors */}

.approved{
  background:#e5faf2;
  color:#3bb077;
}
.declined{
  background:#fff0f1;
  color:#d95087;
}
.pending{
  background:#ebf1fe;
  color:#2a7ade
}
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
`;

export const Img = styled.img.attrs({
  alt: "img",
})`
  width: 55px;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 0rem 0.4rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  transition: 0.5s all;
  ${(props) =>
    props.setHover
      ? css`
          &:hover {
            cursor: pointer;
            background: white;
            transform: scale(1.04);
            * {
              color: #211940;
            }
          }
        `
      : null}
`;
export const Title = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0.8rem;
  color: #5c548a;
`;

export const Div = styled.div`
  border-radius: 1rem;
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  width: 100%;
  padding: 0.8rem;
  height: max-content;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.5s all;
`;
