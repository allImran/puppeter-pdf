const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(cors());

app.post('/generate-screenshot', async (req, res) => {
  const { htmlContent } = req.body;

  if (!htmlContent) {
    return res.status(400).json({ error: "htmlContent is required" });
  }

  try {
    const browser = await puppeteer.launch({
      headless: "new",
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });

    const page = await browser.newPage();

    // Good viewport for charts, grid layout, CKEditor images, etc.
    await page.setViewport({
      width: 1600,
      height: 1000,
      deviceScaleFactor: 2
    });

     const styledHtml = `
        <html>
            <head>
                <style>





                *, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}



body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}


code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}



sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}



table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}


:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}



::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}



img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
    :root {
        --color-primary-one: #1c1c1d;
        --color-primary-two: #f3f3f3;
        --color-primary-three: #f9f9f9;
        --color-primary-four: #2b80ad;
        --color-primary-five: #00a7fe;
        --color-primary-six: #ad2b81;
        --color-primary-seven: #2bad7e;
        --color-secondary-one: #3d3d3d;
        --color-secondary-two: #8d8d8d;
        --color-secondary-three: #ededed;
        --color-secondary-four: #e2e2e2;
        --color-secondary-five: #c9c9c9;
        --color-static-one: #4e768c;
        --color-static-two: #6c7b84;
        --color-static-three: #8c9296;
        --color-danger-one: #f40000;
        --color-rgb-primary-four: 43, 128, 173, 0.8;
        --vdp-hover-bg-color: #2b80ad;
        --vdp-selected-bg-color: #2b80ad;
        --template-width: 1920px;
        --template-height: 1080px;
    }
.container {
  width: 100%;
}
@media (min-width: 360px) {

  .container {
    max-width: 360px;
  }
}
@media (min-width: 460px) {

  .container {
    max-width: 460px;
  }
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
@media (min-width: 1900px) {

  .container {
    max-width: 1900px;
  }
}
.\!active-border {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(var(--active-border-color), var(--tw-border-opacity, 1));
}
.active-border {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(var(--active-border-color), var(--tw-border-opacity, 1));
}
.active-border-color {
  --tw-border-opacity: 1;
  border-color: rgba(var(--active-border-color), var(--tw-border-opacity, 1));
}
.box-border {
  --tw-border-opacity: 1;
  border-color: rgba(var(--box-border-color), var(--tw-border-opacity, 1));
}
.\!line-border {
  --tw-border-opacity: 1;
  border-color: rgba(var(--line-border-color), var(--tw-border-opacity, 1));
}
.line-border {
  --tw-border-opacity: 1;
  border-color: rgba(var(--line-border-color), var(--tw-border-opacity, 1));
}
.app-style {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--app-bg-color), var(--tw-bg-opacity, 1));
  --tw-bg-opacity: var(--app-bg-opacity);
  --tw-text-opacity: 1;
  color: rgba(var(--app-font-color), var(--tw-text-opacity, 1));
}
.\!app-color {
  --tw-text-opacity: 1;
  color: rgba(var(--app-font-color), var(--tw-text-opacity, 1));
}
.app-color {
  --tw-text-opacity: 1;
  color: rgba(var(--app-font-color), var(--tw-text-opacity, 1));
}
.app-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--app-bg-color), var(--tw-bg-opacity, 1));
}
.app-opacity {
  opacity: var(--app-bg-opacity);
}
.app-bg-opacity {
  --tw-bg-opacity: var(--app-bg-opacity);
}
.\!box-style {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
  --tw-bg-opacity: var(--box-bg-opacity);
  --tw-text-opacity: 1;
  color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
}
.box-style {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
  --tw-bg-opacity: var(--box-bg-opacity);
  --tw-text-opacity: 1;
  color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
}
.\!box-color {
  --tw-text-opacity: 1;
  color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
}
.box-color {
  --tw-text-opacity: 1;
  color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
}
.\!box-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
}
.box-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
}
.box-opacity {
  opacity: var(--box-bg-opacity);
}
.box-bg-opacity {
  --tw-bg-opacity: var(--box-bg-opacity);
}
.top-nav-style {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--top-nav-bg-color), var(--tw-bg-opacity, 1));
  --tw-bg-opacity: var(--top-nav-bg-opacity);
  --tw-text-opacity: 1;
  color: rgba(var(--top-nav-font-color), var(--tw-text-opacity, 1));
}
.top-nav-color {
  --tw-text-opacity: 1;
  color: rgba(var(--top-nav-font-color), var(--tw-text-opacity, 1));
}
.top-nav-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--top-nav-bg-color), var(--tw-bg-opacity, 1));
}
.top-nav-opacity {
  opacity: var(--top-nav-bg-opacity);
}
.top-nav-bg-opacity {
  --tw-bg-opacity: var(--top-nav-bg-opacity);
}
.left-sidebar-style {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--left-sidebar-bg-color), var(--tw-bg-opacity, 1));
  --tw-bg-opacity: var(--left-sidebar-bg-opacity);
  --tw-text-opacity: 1;
  color: rgba(var(--left-sidebar-color), var(--tw-text-opacity, 1));
}
.left-sidebar-color {
  --tw-text-opacity: 1;
  color: rgba(var(--left-sidebar-color), var(--tw-text-opacity, 1));
}
.left-sidebar-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--left-sidebar-bg-color), var(--tw-bg-opacity, 1));
}
.left-sidebar-opacity {
  opacity: var(--left-sidebar-bg-opacity);
}
.left-sidebar-bg-opacity {
  --tw-bg-opacity: var(--left-sidebar-bg-opacity);
}
.right-sidebar-style {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--right-sidebar-bg-color), var(--tw-bg-opacity, 1));
  --tw-bg-opacity: var(--right-sidebar-bg-opacity);
  --tw-text-opacity: 1;
  color: rgba(var(--right-sidebar-color, var(--tw-text-opacity, 1)));
}
.right-sidebar-color {
  --tw-text-opacity: 1;
  color: rgba(var(--right-sidebar-color, var(--tw-text-opacity, 1)));
}
.right-sidebar-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--right-sidebar-bg-color), var(--tw-bg-opacity, 1));
}
.right-sidebar-opacity {
  opacity: var(--right-sidebar-bg-opacity);
}
.right-sidebar-bg-opacity {
  --tw-bg-opacity: var(--right-sidebar-bg-opacity);
}
.box {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 2px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.\!pointer-events-none {
  pointer-events: none !important;
}
.pointer-events-none {
  pointer-events: none;
}
.\!pointer-events-auto {
  pointer-events: auto !important;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.collapse {
  visibility: collapse;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.\!absolute {
  position: absolute !important;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.\!sticky {
  position: sticky !important;
}
.sticky {
  position: sticky;
}
.-inset-\[3px\] {
  inset: -3px;
}
.inset-0 {
  inset: 0px;
}
.inset-1\/2 {
  inset: 50%;
}
.inset-x-0 {
  left: 0px;
  right: 0px;
}
.inset-x-1\/2 {
  left: 50%;
  right: 50%;
}
.inset-x-2 {
  left: 0.5rem;
  right: 0.5rem;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.\!bottom-0 {
  bottom: 0px !important;
}
.\!bottom-4 {
  bottom: 1rem !important;
}
.\!left-0 {
  left: 0px !important;
}
.\!left-2 {
  left: 0.5rem !important;
}
.\!right-0 {
  right: 0px !important;
}
.\!right-1 {
  right: 0.25rem !important;
}
.\!right-4 {
  right: 1rem !important;
}
.\!right-\[65px\] {
  right: 65px !important;
}
.\!top-10 {
  top: 2.5rem !important;
}
.-bottom-0\.5 {
  bottom: -0.125rem;
}
.-bottom-1 {
  bottom: -0.25rem;
}
.-bottom-10 {
  bottom: -2.5rem;
}
.-bottom-2 {
  bottom: -0.5rem;
}
.-bottom-2\.5 {
  bottom: -0.625rem;
}
.-bottom-3 {
  bottom: -0.75rem;
}
.-bottom-4 {
  bottom: -1rem;
}
.-bottom-6 {
  bottom: -1.5rem;
}
.-bottom-7 {
  bottom: -1.75rem;
}
.-bottom-\[150px\] {
  bottom: -150px;
}
.-bottom-\[50px\] {
  bottom: -50px;
}
.-bottom-\[83px\] {
  bottom: -83px;
}
.-left-0 {
  left: -0px;
}
.-left-1 {
  left: -0.25rem;
}
.-left-10 {
  left: -2.5rem;
}
.-left-2\.5 {
  left: -0.625rem;
}
.-left-20 {
  left: -5rem;
}
.-left-3 {
  left: -0.75rem;
}
.-left-4 {
  left: -1rem;
}
.-left-5 {
  left: -1.25rem;
}
.-left-6 {
  left: -1.5rem;
}
.-left-\[0px\] {
  left: -0px;
}
.-left-\[100\%\] {
  left: -100%;
}
.-left-\[23px\] {
  left: -23px;
}
.-left-\[25px\] {
  left: -25px;
}
.-left-\[26px\] {
  left: -26px;
}
.-left-\[4px\] {
  left: -4px;
}
.-left-\[54px\] {
  left: -54px;
}
.-left-\[7px\] {
  left: -7px;
}
.-left-\[calc\(100\%\+200px\)\] {
  left: calc(calc(100% + 200px) * -1);
}
.-left-full {
  left: -100%;
}
.-right-0 {
  right: -0px;
}
.-right-0\.5 {
  right: -0.125rem;
}
.-right-1 {
  right: -0.25rem;
}
.-right-12 {
  right: -3rem;
}
.-right-2 {
  right: -0.5rem;
}
.-right-2\.5 {
  right: -0.625rem;
}
.-right-3 {
  right: -0.75rem;
}
.-right-5 {
  right: -1.25rem;
}
.-right-6 {
  right: -1.5rem;
}
.-right-\[0\%\] {
  right: -0%;
}
.-right-\[0px\] {
  right: -0px;
}
.-right-\[102px\] {
  right: -102px;
}
.-right-\[130\%\] {
  right: -130%;
}
.-right-\[306px\] {
  right: -306px;
}
.-right-\[7px\] {
  right: -7px;
}
.-right-\[900px\] {
  right: -900px;
}
.-right-\[calc\(100\%\+200px\)\] {
  right: calc(calc(100% + 200px) * -1);
}
.-top-0\.5 {
  top: -0.125rem;
}
.-top-1 {
  top: -0.25rem;
}
.-top-12 {
  top: -3rem;
}
.-top-2 {
  top: -0.5rem;
}
.-top-2\.5 {
  top: -0.625rem;
}
.-top-20 {
  top: -5rem;
}
.-top-3 {
  top: -0.75rem;
}
.-top-5 {
  top: -1.25rem;
}
.-top-6 {
  top: -1.5rem;
}
.-top-7 {
  top: -1.75rem;
}
.-top-8 {
  top: -2rem;
}
.-top-\[18px\] {
  top: -18px;
}
.-top-\[22px\] {
  top: -22px;
}
.-top-\[23px\] {
  top: -23px;
}
.-top-\[2px\] {
  top: -2px;
}
.-top-\[30px\] {
  top: -30px;
}
.-top-\[60px\] {
  top: -60px;
}
.-top-\[7px\] {
  top: -7px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-1 {
  bottom: 0.25rem;
}
.bottom-1\.5 {
  bottom: 0.375rem;
}
.bottom-10 {
  bottom: 2.5rem;
}
.bottom-11 {
  bottom: 2.75rem;
}
.bottom-14 {
  bottom: 3.5rem;
}
.bottom-2 {
  bottom: 0.5rem;
}
.bottom-3 {
  bottom: 0.75rem;
}
.bottom-4 {
  bottom: 1rem;
}
.bottom-5 {
  bottom: 1.25rem;
}
.bottom-6 {
  bottom: 1.5rem;
}
.bottom-7 {
  bottom: 1.75rem;
}
.bottom-\[22px\] {
  bottom: 22px;
}
.bottom-\[26px\] {
  bottom: 26px;
}
.bottom-\[28vh\] {
  bottom: 28vh;
}
.bottom-\[319px\] {
  bottom: 319px;
}
.bottom-\[32px\] {
  bottom: 32px;
}
.bottom-\[34px\] {
  bottom: 34px;
}
.bottom-\[3px\] {
  bottom: 3px;
}
.bottom-\[5px\] {
  bottom: 5px;
}
.bottom-\[60px\] {
  bottom: 60px;
}
.bottom-\[74px\] {
  bottom: 74px;
}
.bottom-\[calc\(100\%\+0px\)\] {
  bottom: calc(100% + 0px);
}
.bottom-\[calc\(100\%\+10px\)\] {
  bottom: calc(100% + 10px);
}
.bottom-full {
  bottom: 100%;
}
.left-0 {
  left: 0px;
}
.left-1 {
  left: 0.25rem;
}
.left-1\/2 {
  left: 50%;
}
.left-10 {
  left: 2.5rem;
}
.left-12 {
  left: 3rem;
}
.left-2 {
  left: 0.5rem;
}
.left-2\.5 {
  left: 0.625rem;
}
.left-20 {
  left: 5rem;
}
.left-3 {
  left: 0.75rem;
}
.left-4 {
  left: 1rem;
}
.left-5 {
  left: 1.25rem;
}
.left-6 {
  left: 1.5rem;
}
.left-8 {
  left: 2rem;
}
.left-9 {
  left: 2.25rem;
}
.left-\[0px\] {
  left: 0px;
}
.left-\[18px\] {
  left: 18px;
}
.left-\[20px\] {
  left: 20px;
}
.left-\[22px\] {
  left: 22px;
}
.left-\[29px\] {
  left: 29px;
}
.left-\[40\%\] {
  left: 40%;
}
.left-\[4px\] {
  left: 4px;
}
.left-\[50px\] {
  left: 50px;
}
.left-\[52px\] {
  left: 52px;
}
.left-\[53px\] {
  left: 53px;
}
.left-\[60px\] {
  left: 60px;
}
.left-\[75px\] {
  left: 75px;
}
.left-\[calc\(100\%\+20px\)\] {
  left: calc(100% + 20px);
}
.left-\[calc\(50\%\+4px\)\] {
  left: calc(50% + 4px);
}
.left-full {
  left: 100%;
}
.right-0 {
  right: 0px;
}
.right-0\.5 {
  right: 0.125rem;
}
.right-1 {
  right: 0.25rem;
}
.right-1\.5 {
  right: 0.375rem;
}
.right-1\/2 {
  right: 50%;
}
.right-10 {
  right: 2.5rem;
}
.right-12 {
  right: 3rem;
}
.right-16 {
  right: 4rem;
}
.right-2 {
  right: 0.5rem;
}
.right-2\.5 {
  right: 0.625rem;
}
.right-20 {
  right: 5rem;
}
.right-3 {
  right: 0.75rem;
}
.right-3\.5 {
  right: 0.875rem;
}
.right-4 {
  right: 1rem;
}
.right-5 {
  right: 1.25rem;
}
.right-6 {
  right: 1.5rem;
}
.right-64 {
  right: 16rem;
}
.right-7 {
  right: 1.75rem;
}
.right-8 {
  right: 2rem;
}
.right-\[-40px\] {
  right: -40px;
}
.right-\[-52px\] {
  right: -52px;
}
.right-\[0px\] {
  right: 0px;
}
.right-\[10px\] {
  right: 10px;
}
.right-\[120px\] {
  right: 120px;
}
.right-\[1px\] {
  right: 1px;
}
.right-\[26px\] {
  right: 26px;
}
.right-\[38px\] {
  right: 38px;
}
.right-\[40px\] {
  right: 40px;
}
.right-\[45px\] {
  right: 45px;
}
.right-\[47px\] {
  right: 47px;
}
.right-\[50px\] {
  right: 50px;
}
.right-\[5px\] {
  right: 5px;
}
.right-\[60px\] {
  right: 60px;
}
.right-\[80px\] {
  right: 80px;
}
.right-\[83px\] {
  right: 83px;
}
.right-\[90px\] {
  right: 90px;
}
.right-\[94px\] {
  right: 94px;
}
.right-\[9px\] {
  right: 9px;
}
.right-auto {
  right: auto;
}
.right-full {
  right: 100%;
}
.top-0 {
  top: 0px;
}
.top-0\.5 {
  top: 0.125rem;
}
.top-1 {
  top: 0.25rem;
}
.top-1\/2 {
  top: 50%;
}
.top-10 {
  top: 2.5rem;
}
.top-12 {
  top: 3rem;
}
.top-16 {
  top: 4rem;
}
.top-2 {
  top: 0.5rem;
}
.top-2\.5 {
  top: 0.625rem;
}
.top-20 {
  top: 5rem;
}
.top-24 {
  top: 6rem;
}
.top-3 {
  top: 0.75rem;
}
.top-3\.5 {
  top: 0.875rem;
}
.top-4 {
  top: 1rem;
}
.top-5 {
  top: 1.25rem;
}
.top-6 {
  top: 1.5rem;
}
.top-64 {
  top: 16rem;
}
.top-7 {
  top: 1.75rem;
}
.top-8 {
  top: 2rem;
}
.top-9 {
  top: 2.25rem;
}
.top-\[-40px\] {
  top: -40px;
}
.top-\[100px\] {
  top: 100px;
}
.top-\[110px\] {
  top: 110px;
}
.top-\[120px\] {
  top: 120px;
}
.top-\[15px\] {
  top: 15px;
}
.top-\[18px\] {
  top: 18px;
}
.top-\[1px\] {
  top: 1px;
}
.top-\[21px\] {
  top: 21px;
}
.top-\[22px\] {
  top: 22px;
}
.top-\[318px\] {
  top: 318px;
}
.top-\[319px\] {
  top: 319px;
}
.top-\[33px\] {
  top: 33px;
}
.top-\[47px\] {
  top: 47px;
}
.top-\[50px\] {
  top: 50px;
}
.top-\[52px\] {
  top: 52px;
}
.top-\[54px\] {
  top: 54px;
}
.top-\[55\.5px\] {
  top: 55.5px;
}
.top-\[56px\] {
  top: 56px;
}
.top-\[5px\] {
  top: 5px;
}
.top-\[60px\] {
  top: 60px;
}
.top-\[65px\] {
  top: 65px;
}
.top-\[6px\] {
  top: 6px;
}
.top-\[70px\] {
  top: 70px;
}
.top-\[84px\] {
  top: 84px;
}
.top-\[85px\] {
  top: 85px;
}
.top-\[90\%\] {
  top: 90%;
}
.top-\[98px\] {
  top: 98px;
}
.top-\[calc\(100\%\+10px\)\] {
  top: calc(100% + 10px);
}
.top-\[calc\(100\%\+19px\)\] {
  top: calc(100% + 19px);
}
.top-\[calc\(100\%\+4px\)\] {
  top: calc(100% + 4px);
}
.top-\[calc\(100\%\+6px\)\] {
  top: calc(100% + 6px);
}
.top-\[calc\(197px-18px\)\] {
  top: calc(197px - 18px);
}
.top-\[calc\(50\%-5px\)\] {
  top: calc(50% - 5px);
}
.top-full {
  top: 100%;
}
.isolate {
  isolation: isolate;
}
.\!z-20 {
  z-index: 20 !important;
}
.\!z-50 {
  z-index: 50 !important;
}
.\!z-\[999999\] {
  z-index: 999999 !important;
}
.\!z-\[999\] {
  z-index: 999 !important;
}
.-z-10 {
  z-index: -10;
}
.z-0 {
  z-index: 0;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.z-30 {
  z-index: 30;
}
.z-40 {
  z-index: 40;
}
.z-50 {
  z-index: 50;
}
.z-\[-1\] {
  z-index: -1;
}
.z-\[-21\] {
  z-index: -21;
}
.z-\[0\] {
  z-index: 0;
}
.z-\[1000\] {
  z-index: 1000;
}
.z-\[100\] {
  z-index: 100;
}
.z-\[10\] {
  z-index: 10;
}
.z-\[11\] {
  z-index: 11;
}
.z-\[1\] {
  z-index: 1;
}
.z-\[200\] {
  z-index: 200;
}
.z-\[20\] {
  z-index: 20;
}
.z-\[2\] {
  z-index: 2;
}
.z-\[50\] {
  z-index: 50;
}
.z-\[60\] {
  z-index: 60;
}
.z-\[990\] {
  z-index: 990;
}
.z-\[99990\] {
  z-index: 99990;
}
.z-\[999991\] {
  z-index: 999991;
}
.z-\[99999999999\] {
  z-index: 99999999999;
}
.z-\[99999999\] {
  z-index: 99999999;
}
.z-\[9999999\] {
  z-index: 9999999;
}
.z-\[999999\] {
  z-index: 999999;
}
.z-\[99999\] {
  z-index: 99999;
}
.z-\[9999\] {
  z-index: 9999;
}
.z-\[999\] {
  z-index: 999;
}
.z-\[99\] {
  z-index: 99;
}
.-order-1 {
  order: -1;
}
.order-1 {
  order: 1;
}
.order-2 {
  order: 2;
}
.order-first {
  order: -9999;
}
.order-last {
  order: 9999;
}
.col-span-1 {
  grid-column: span 1 / span 1;
}
.col-span-2 {
  grid-column: span 2 / span 2;
}
.col-span-3 {
  grid-column: span 3 / span 3;
}
.col-span-4 {
  grid-column: span 4 / span 4;
}
.col-span-6 {
  grid-column: span 6 / span 6;
}
.col-start-2 {
  grid-column-start: 2;
}
.m-0 {
  margin: 0px;
}
.m-10 {
  margin: 2.5rem;
}
.m-8 {
  margin: 2rem;
}
.m-auto {
  margin: auto;
}
.-mx-10 {
  margin-left: -2.5rem;
  margin-right: -2.5rem;
}
.-mx-4 {
  margin-left: -1rem;
  margin-right: -1rem;
}
.-mx-5 {
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
.mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}
.mx-1 {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.mx-10 {
  margin-left: 2.5rem;
  margin-right: 2.5rem;
}
.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}
.mx-5 {
  margin-left: 1.25rem;
  margin-right: 1.25rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-10 {
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}
.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}
.my-4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
.my-6 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.my-7 {
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
}
.my-8 {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.my-\[14px\] {
  margin-top: 14px;
  margin-bottom: 14px;
}
.my-\[26px\] {
  margin-top: 26px;
  margin-bottom: 26px;
}
.my-\[31px\] {
  margin-top: 31px;
  margin-bottom: 31px;
}
.my-\[50px\] {
  margin-top: 50px;
  margin-bottom: 50px;
}
.\!-mt-5 {
  margin-top: -1.25rem !important;
}
.\!mb-0 {
  margin-bottom: 0px !important;
}
.\!mb-1 {
  margin-bottom: 0.25rem !important;
}
.\!mb-20 {
  margin-bottom: 5rem !important;
}
.\!mr-12 {
  margin-right: 3rem !important;
}
.\!mt-0 {
  margin-top: 0px !important;
}
.\!mt-3 {
  margin-top: 0.75rem !important;
}
.\!mt-5 {
  margin-top: 1.25rem !important;
}
.\!mt-\[66px\] {
  margin-top: 66px !important;
}
.-mb-2 {
  margin-bottom: -0.5rem;
}
.-mb-3 {
  margin-bottom: -0.75rem;
}
.-mb-4 {
  margin-bottom: -1rem;
}
.-mb-5 {
  margin-bottom: -1.25rem;
}
.-mb-7 {
  margin-bottom: -1.75rem;
}
.-mb-\[1px\] {
  margin-bottom: -1px;
}
.-mb-\[22px\] {
  margin-bottom: -22px;
}
.-mb-\[60px\] {
  margin-bottom: -60px;
}
.-ml-0 {
  margin-left: -0px;
}
.-ml-0\.5 {
  margin-left: -0.125rem;
}
.-ml-1 {
  margin-left: -0.25rem;
}
.-ml-10 {
  margin-left: -2.5rem;
}
.-ml-2 {
  margin-left: -0.5rem;
}
.-ml-3 {
  margin-left: -0.75rem;
}
.-ml-4 {
  margin-left: -1rem;
}
.-ml-6 {
  margin-left: -1.5rem;
}
.-ml-8 {
  margin-left: -2rem;
}
.-ml-\[11px\] {
  margin-left: -11px;
}
.-ml-\[15px\] {
  margin-left: -15px;
}
.-ml-\[320px\] {
  margin-left: -320px;
}
.-ml-\[4px\] {
  margin-left: -4px;
}
.-ml-\[5px\] {
  margin-left: -5px;
}
.-ml-\[6px\] {
  margin-left: -6px;
}
.-ml-\[85px\] {
  margin-left: -85px;
}
.-mr-1 {
  margin-right: -0.25rem;
}
.-mr-10 {
  margin-right: -2.5rem;
}
.-mr-2 {
  margin-right: -0.5rem;
}
.-mr-3 {
  margin-right: -0.75rem;
}
.-mr-4 {
  margin-right: -1rem;
}
.-mr-5 {
  margin-right: -1.25rem;
}
.-mr-8 {
  margin-right: -2rem;
}
.-mr-\[8px\] {
  margin-right: -8px;
}
.-mt-0\.5 {
  margin-top: -0.125rem;
}
.-mt-1 {
  margin-top: -0.25rem;
}
.-mt-1\.5 {
  margin-top: -0.375rem;
}
.-mt-12 {
  margin-top: -3rem;
}
.-mt-14 {
  margin-top: -3.5rem;
}
.-mt-2 {
  margin-top: -0.5rem;
}
.-mt-2\.5 {
  margin-top: -0.625rem;
}
.-mt-3 {
  margin-top: -0.75rem;
}
.-mt-3\.5 {
  margin-top: -0.875rem;
}
.-mt-4 {
  margin-top: -1rem;
}
.-mt-5 {
  margin-top: -1.25rem;
}
.-mt-6 {
  margin-top: -1.5rem;
}
.-mt-7 {
  margin-top: -1.75rem;
}
.-mt-9 {
  margin-top: -2.25rem;
}
.-mt-\[0\.5px\] {
  margin-top: -0.5px;
}
.-mt-\[100px\] {
  margin-top: -100px;
}
.-mt-\[10px\] {
  margin-top: -10px;
}
.-mt-\[1px\] {
  margin-top: -1px;
}
.-mt-\[21px\] {
  margin-top: -21px;
}
.-mt-\[23px\] {
  margin-top: -23px;
}
.-mt-\[28px\] {
  margin-top: -28px;
}
.-mt-\[30px\] {
  margin-top: -30px;
}
.-mt-\[38px\] {
  margin-top: -38px;
}
.-mt-\[39\.5px\] {
  margin-top: -39.5px;
}
.-mt-\[6px\] {
  margin-top: -6px;
}
.-mt-\[70px\] {
  margin-top: -70px;
}
.-mt-px {
  margin-top: -1px;
}
.mb-0 {
  margin-bottom: 0px;
}
.mb-0\.5 {
  margin-bottom: 0.125rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-1\.5 {
  margin-bottom: 0.375rem;
}
.mb-10 {
  margin-bottom: 2.5rem;
}
.mb-11 {
  margin-bottom: 2.75rem;
}
.mb-14 {
  margin-bottom: 3.5rem;
}
.mb-16 {
  margin-bottom: 4rem;
}
.mb-2 {
  margin-bottom: 0.5rem;
}
.mb-2\.5 {
  margin-bottom: 0.625rem;
}
.mb-20 {
  margin-bottom: 5rem;
}
.mb-3 {
  margin-bottom: 0.75rem;
}
.mb-3\.5 {
  margin-bottom: 0.875rem;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mb-5 {
  margin-bottom: 1.25rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.mb-7 {
  margin-bottom: 1.75rem;
}
.mb-8 {
  margin-bottom: 2rem;
}
.mb-9 {
  margin-bottom: 2.25rem;
}
.mb-\[-1px\] {
  margin-bottom: -1px;
}
.mb-\[1\.125em\] {
  margin-bottom: 1.125em;
}
.mb-\[10px\] {
  margin-bottom: 10px;
}
.mb-\[116px\] {
  margin-bottom: 116px;
}
.mb-\[12px\] {
  margin-bottom: 12px;
}
.mb-\[130px\] {
  margin-bottom: 130px;
}
.mb-\[14px\] {
  margin-bottom: 14px;
}
.mb-\[15px\] {
  margin-bottom: 15px;
}
.mb-\[17px\] {
  margin-bottom: 17px;
}
.mb-\[18px\] {
  margin-bottom: 18px;
}
.mb-\[1em\] {
  margin-bottom: 1em;
}
.mb-\[22px\] {
  margin-bottom: 22px;
}
.mb-\[24px\] {
  margin-bottom: 24px;
}
.mb-\[26px\] {
  margin-bottom: 26px;
}
.mb-\[29px\] {
  margin-bottom: 29px;
}
.mb-\[2px\] {
  margin-bottom: 2px;
}
.mb-\[30px\] {
  margin-bottom: 30px;
}
.mb-\[34px\] {
  margin-bottom: 34px;
}
.mb-\[36px\] {
  margin-bottom: 36px;
}
.mb-\[37px\] {
  margin-bottom: 37px;
}
.mb-\[38px\] {
  margin-bottom: 38px;
}
.mb-\[39px\] {
  margin-bottom: 39px;
}
.mb-\[3px\] {
  margin-bottom: 3px;
}
.mb-\[44px\] {
  margin-bottom: 44px;
}
.mb-\[45px\] {
  margin-bottom: 45px;
}
.mb-\[46px\] {
  margin-bottom: 46px;
}
.mb-\[47px\] {
  margin-bottom: 47px;
}
.mb-\[48px\] {
  margin-bottom: 48px;
}
.mb-\[49px\] {
  margin-bottom: 49px;
}
.mb-\[50px\] {
  margin-bottom: 50px;
}
.mb-\[56px\] {
  margin-bottom: 56px;
}
.mb-\[58px\] {
  margin-bottom: 58px;
}
.mb-\[5px\] {
  margin-bottom: 5px;
}
.mb-\[60px\] {
  margin-bottom: 60px;
}
.mb-\[6px\] {
  margin-bottom: 6px;
}
.mb-\[7\.19px\] {
  margin-bottom: 7.19px;
}
.mb-\[70px\] {
  margin-bottom: 70px;
}
.mb-\[72px\] {
  margin-bottom: 72px;
}
.mb-\[7px\] {
  margin-bottom: 7px;
}
.mb-\[8px\] {
  margin-bottom: 8px;
}
.mb-\[95px\] {
  margin-bottom: 95px;
}
.mb-\[9px\] {
  margin-bottom: 9px;
}
.ml-0 {
  margin-left: 0px;
}
.ml-1 {
  margin-left: 0.25rem;
}
.ml-1\.5 {
  margin-left: 0.375rem;
}
.ml-10 {
  margin-left: 2.5rem;
}
.ml-11 {
  margin-left: 2.75rem;
}
.ml-12 {
  margin-left: 3rem;
}
.ml-14 {
  margin-left: 3.5rem;
}
.ml-16 {
  margin-left: 4rem;
}
.ml-2 {
  margin-left: 0.5rem;
}
.ml-20 {
  margin-left: 5rem;
}
.ml-3 {
  margin-left: 0.75rem;
}
.ml-4 {
  margin-left: 1rem;
}
.ml-5 {
  margin-left: 1.25rem;
}
.ml-6 {
  margin-left: 1.5rem;
}
.ml-7 {
  margin-left: 1.75rem;
}
.ml-\[-16px\] {
  margin-left: -16px;
}
.ml-\[0px\] {
  margin-left: 0px;
}
.ml-\[120px\] {
  margin-left: 120px;
}
.ml-\[12px\] {
  margin-left: 12px;
}
.ml-\[22px\] {
  margin-left: 22px;
}
.ml-\[31px\] {
  margin-left: 31px;
}
.ml-\[52px\] {
  margin-left: 52px;
}
.ml-\[58px\] {
  margin-left: 58px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0 {
  margin-right: 0px;
}
.mr-1 {
  margin-right: 0.25rem;
}
.mr-1\.5 {
  margin-right: 0.375rem;
}
.mr-10 {
  margin-right: 2.5rem;
}
.mr-16 {
  margin-right: 4rem;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mr-3 {
  margin-right: 0.75rem;
}
.mr-4 {
  margin-right: 1rem;
}
.mr-5 {
  margin-right: 1.25rem;
}
.mr-6 {
  margin-right: 1.5rem;
}
.mr-8 {
  margin-right: 2rem;
}
.mr-\[120px\] {
  margin-right: 120px;
}
.mr-\[17px\] {
  margin-right: 17px;
}
.mr-\[2px\] {
  margin-right: 2px;
}
.mr-\[4px\] {
  margin-right: 4px;
}
.mr-auto {
  margin-right: auto;
}
.ms-2 {
  margin-inline-start: 0.5rem;
}
.ms-3 {
  margin-inline-start: 0.75rem;
}
.mt-0 {
  margin-top: 0px;
}
.mt-0\.5 {
  margin-top: 0.125rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mt-1\.5 {
  margin-top: 0.375rem;
}
.mt-10 {
  margin-top: 2.5rem;
}
.mt-11 {
  margin-top: 2.75rem;
}
.mt-12 {
  margin-top: 3rem;
}
.mt-14 {
  margin-top: 3.5rem;
}
.mt-16 {
  margin-top: 4rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-2\.5 {
  margin-top: 0.625rem;
}
.mt-20 {
  margin-top: 5rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.mt-32 {
  margin-top: 8rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-5 {
  margin-top: 1.25rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mt-64 {
  margin-top: 16rem;
}
.mt-7 {
  margin-top: 1.75rem;
}
.mt-8 {
  margin-top: 2rem;
}
.mt-9 {
  margin-top: 2.25rem;
}
.mt-\[0\.5em\] {
  margin-top: 0.5em;
}
.mt-\[0px\] {
  margin-top: 0px;
}
.mt-\[100px\] {
  margin-top: 100px;
}
.mt-\[101px\] {
  margin-top: 101px;
}
.mt-\[10px\] {
  margin-top: 10px;
}
.mt-\[110px\] {
  margin-top: 110px;
}
.mt-\[11px\] {
  margin-top: 11px;
}
.mt-\[120px\] {
  margin-top: 120px;
}
.mt-\[124px\] {
  margin-top: 124px;
}
.mt-\[127px\] {
  margin-top: 127px;
}
.mt-\[12px\] {
  margin-top: 12px;
}
.mt-\[130px\] {
  margin-top: 130px;
}
.mt-\[13px\] {
  margin-top: 13px;
}
.mt-\[145px\] {
  margin-top: 145px;
}
.mt-\[14px\] {
  margin-top: 14px;
}
.mt-\[150px\] {
  margin-top: 150px;
}
.mt-\[15px\] {
  margin-top: 15px;
}
.mt-\[17px\] {
  margin-top: 17px;
}
.mt-\[19px\] {
  margin-top: 19px;
}
.mt-\[1em\] {
  margin-top: 1em;
}
.mt-\[1px\] {
  margin-top: 1px;
}
.mt-\[20px\] {
  margin-top: 20px;
}
.mt-\[22px\] {
  margin-top: 22px;
}
.mt-\[24px\] {
  margin-top: 24px;
}
.mt-\[25px\] {
  margin-top: 25px;
}
.mt-\[26px\] {
  margin-top: 26px;
}
.mt-\[28px\] {
  margin-top: 28px;
}
.mt-\[29px\] {
  margin-top: 29px;
}
.mt-\[2px\] {
  margin-top: 2px;
}
.mt-\[30px\] {
  margin-top: 30px;
}
.mt-\[31px\] {
  margin-top: 31px;
}
.mt-\[32px\] {
  margin-top: 32px;
}
.mt-\[33px\] {
  margin-top: 33px;
}
.mt-\[34px\] {
  margin-top: 34px;
}
.mt-\[36px\] {
  margin-top: 36px;
}
.mt-\[37px\] {
  margin-top: 37px;
}
.mt-\[38px\] {
  margin-top: 38px;
}
.mt-\[3px\] {
  margin-top: 3px;
}
.mt-\[40px\] {
  margin-top: 40px;
}
.mt-\[42px\] {
  margin-top: 42px;
}
.mt-\[44px\] {
  margin-top: 44px;
}
.mt-\[52px\] {
  margin-top: 52px;
}
.mt-\[54px\] {
  margin-top: 54px;
}
.mt-\[60px\] {
  margin-top: 60px;
}
.mt-\[65px\] {
  margin-top: 65px;
}
.mt-\[66px\] {
  margin-top: 66px;
}
.mt-\[6px\] {
  margin-top: 6px;
}
.mt-\[70px\] {
  margin-top: 70px;
}
.mt-\[72px\] {
  margin-top: 72px;
}
.mt-\[76px\] {
  margin-top: 76px;
}
.mt-\[80px\] {
  margin-top: 80px;
}
.mt-\[90px\] {
  margin-top: 90px;
}
.mt-\[9px\] {
  margin-top: 9px;
}
.mt-auto {
  margin-top: auto;
}
.box-border {
  box-sizing: border-box;
}
.\!line-clamp-3 {
  overflow: hidden !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 3 !important;
}
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.\!block {
  display: block !important;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.inline {
  display: inline;
}
.\!flex {
  display: flex !important;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.table {
  display: table;
}
.\!grid {
  display: grid !important;
}
.grid {
  display: grid;
}
.contents {
  display: contents;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.aspect-video {
  aspect-ratio: 16 / 9;
}
.\!size-3 {
  width: 0.75rem !important;
  height: 0.75rem !important;
}
.\!size-5 {
  width: 1.25rem !important;
  height: 1.25rem !important;
}
.\!size-\[25px\] {
  width: 25px !important;
  height: 25px !important;
}
.size-10 {
  width: 2.5rem;
  height: 2.5rem;
}
.size-12 {
  width: 3rem;
  height: 3rem;
}
.size-2 {
  width: 0.5rem;
  height: 0.5rem;
}
.size-20 {
  width: 5rem;
  height: 5rem;
}
.size-3 {
  width: 0.75rem;
  height: 0.75rem;
}
.size-4 {
  width: 1rem;
  height: 1rem;
}
.size-5 {
  width: 1.25rem;
  height: 1.25rem;
}
.size-6 {
  width: 1.5rem;
  height: 1.5rem;
}
.size-7 {
  width: 1.75rem;
  height: 1.75rem;
}
.size-8 {
  width: 2rem;
  height: 2rem;
}
.size-9 {
  width: 2.25rem;
  height: 2.25rem;
}
.size-\[15px\] {
  width: 15px;
  height: 15px;
}
.size-\[17px\] {
  width: 17px;
  height: 17px;
}
.size-\[18px\] {
  width: 18px;
  height: 18px;
}
.size-\[19px\] {
  width: 19px;
  height: 19px;
}
.size-\[20px\] {
  width: 20px;
  height: 20px;
}
.size-\[25px\] {
  width: 25px;
  height: 25px;
}
.size-\[26px\] {
  width: 26px;
  height: 26px;
}
.size-\[28px\] {
  width: 28px;
  height: 28px;
}
.size-\[30px\] {
  width: 30px;
  height: 30px;
}
.size-\[35px\] {
  width: 35px;
  height: 35px;
}
.size-\[36px\] {
  width: 36px;
  height: 36px;
}
.size-\[37px\] {
  width: 37px;
  height: 37px;
}
.size-\[40px\] {
  width: 40px;
  height: 40px;
}
.size-\[43px\] {
  width: 43px;
  height: 43px;
}
.size-\[50px\] {
  width: 50px;
  height: 50px;
}
.size-\[60px\] {
  width: 60px;
  height: 60px;
}
.size-\[98px\] {
  width: 98px;
  height: 98px;
}
.size-full {
  width: 100%;
  height: 100%;
}
.\!h-2 {
  height: 0.5rem !important;
}
.\!h-20 {
  height: 5rem !important;
}
.\!h-5 {
  height: 1.25rem !important;
}
.\!h-6 {
  height: 1.5rem !important;
}
.\!h-\[1080px\] {
  height: 1080px !important;
}
.\!h-\[143px\] {
  height: 143px !important;
}
.\!h-\[184px\] {
  height: 184px !important;
}
.\!h-\[27px\] {
  height: 27px !important;
}
.\!h-\[30px\] {
  height: 30px !important;
}
.\!h-\[35px\] {
  height: 35px !important;
}
.\!h-\[calc\(100dvh-112px\)\] {
  height: calc(100dvh - 112px) !important;
}
.\!h-\[calc\(100vh-100px\)\] {
  height: calc(100vh - 100px) !important;
}
.\!h-auto {
  height: auto !important;
}
.\!h-full {
  height: 100% !important;
}
.h-0 {
  height: 0px;
}
.h-0\.5 {
  height: 0.125rem;
}
.h-1 {
  height: 0.25rem;
}
.h-1\.5 {
  height: 0.375rem;
}
.h-1\/2 {
  height: 50%;
}
.h-10 {
  height: 2.5rem;
}
.h-12 {
  height: 3rem;
}
.h-14 {
  height: 3.5rem;
}
.h-16 {
  height: 4rem;
}
.h-2 {
  height: 0.5rem;
}
.h-2\.5 {
  height: 0.625rem;
}
.h-20 {
  height: 5rem;
}
.h-28 {
  height: 7rem;
}
.h-3 {
  height: 0.75rem;
}
.h-32 {
  height: 8rem;
}
.h-36 {
  height: 9rem;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-56 {
  height: 14rem;
}
.h-6 {
  height: 1.5rem;
}
.h-64 {
  height: 16rem;
}
.h-7 {
  height: 1.75rem;
}
.h-8 {
  height: 2rem;
}
.h-9 {
  height: 2.25rem;
}
.h-\[1\.25em\] {
  height: 1.25em;
}
.h-\[1000px\] {
  height: 1000px;
}
.h-\[100dvh\] {
  height: 100dvh;
}
.h-\[100px\] {
  height: 100px;
}
.h-\[100svh\] {
  height: 100svh;
}
.h-\[100vh\] {
  height: 100vh;
}
.h-\[105px\] {
  height: 105px;
}
.h-\[10px\] {
  height: 10px;
}
.h-\[115px\] {
  height: 115px;
}
.h-\[118px\] {
  height: 118px;
}
.h-\[122px\] {
  height: 122px;
}
.h-\[127px\] {
  height: 127px;
}
.h-\[130px\] {
  height: 130px;
}
.h-\[132px\] {
  height: 132px;
}
.h-\[136px\] {
  height: 136px;
}
.h-\[140px\] {
  height: 140px;
}
.h-\[145px\] {
  height: 145px;
}
.h-\[14px\] {
  height: 14px;
}
.h-\[150px\] {
  height: 150px;
}
.h-\[152px\] {
  height: 152px;
}
.h-\[154px\] {
  height: 154px;
}
.h-\[155px\] {
  height: 155px;
}
.h-\[157px\] {
  height: 157px;
}
.h-\[158px\] {
  height: 158px;
}
.h-\[15px\] {
  height: 15px;
}
.h-\[160px\] {
  height: 160px;
}
.h-\[162px\] {
  height: 162px;
}
.h-\[163\.5px\] {
  height: 163.5px;
}
.h-\[165px\] {
  height: 165px;
}
.h-\[17px\] {
  height: 17px;
}
.h-\[183px\] {
  height: 183px;
}
.h-\[185px\] {
  height: 185px;
}
.h-\[189px\] {
  height: 189px;
}
.h-\[18px\] {
  height: 18px;
}
.h-\[190\.5px\] {
  height: 190.5px;
}
.h-\[196px\] {
  height: 196px;
}
.h-\[197px\] {
  height: 197px;
}
.h-\[198px\] {
  height: 198px;
}
.h-\[199px\] {
  height: 199px;
}
.h-\[19px\] {
  height: 19px;
}
.h-\[1px\] {
  height: 1px;
}
.h-\[200px\] {
  height: 200px;
}
.h-\[20px\] {
  height: 20px;
}
.h-\[214px\] {
  height: 214px;
}
.h-\[21px\] {
  height: 21px;
}
.h-\[225px\] {
  height: 225px;
}
.h-\[226px\] {
  height: 226px;
}
.h-\[227px\] {
  height: 227px;
}
.h-\[22px\] {
  height: 22px;
}
.h-\[230px\] {
  height: 230px;
}
.h-\[23px\] {
  height: 23px;
}
.h-\[24px\] {
  height: 24px;
}
.h-\[25px\] {
  height: 25px;
}
.h-\[26px\] {
  height: 26px;
}
.h-\[272px\] {
  height: 272px;
}
.h-\[28px\] {
  height: 28px;
}
.h-\[2px\] {
  height: 2px;
}
.h-\[30\%\] {
  height: 30%;
}
.h-\[30\.5\%\] {
  height: 30.5%;
}
.h-\[300px\] {
  height: 300px;
}
.h-\[304px\] {
  height: 304px;
}
.h-\[307px\] {
  height: 307px;
}
.h-\[30px\] {
  height: 30px;
}
.h-\[30vh\] {
  height: 30vh;
}
.h-\[31px\] {
  height: 31px;
}
.h-\[32px\] {
  height: 32px;
}
.h-\[33px\] {
  height: 33px;
}
.h-\[340px\] {
  height: 340px;
}
.h-\[345px\] {
  height: 345px;
}
.h-\[34px\] {
  height: 34px;
}
.h-\[350px\] {
  height: 350px;
}
.h-\[35px\] {
  height: 35px;
}
.h-\[36px\] {
  height: 36px;
}
.h-\[380px\] {
  height: 380px;
}
.h-\[384px\] {
  height: 384px;
}
.h-\[386px\] {
  height: 386px;
}
.h-\[38px\] {
  height: 38px;
}
.h-\[390px\] {
  height: 390px;
}
.h-\[3px\] {
  height: 3px;
}
.h-\[40\%\] {
  height: 40%;
}
.h-\[400px\] {
  height: 400px;
}
.h-\[40px\] {
  height: 40px;
}
.h-\[42px\] {
  height: 42px;
}
.h-\[437px\] {
  height: 437px;
}
.h-\[43px\] {
  height: 43px;
}
.h-\[44px\] {
  height: 44px;
}
.h-\[450px\] {
  height: 450px;
}
.h-\[46px\] {
  height: 46px;
}
.h-\[47px\] {
  height: 47px;
}
.h-\[48px\] {
  height: 48px;
}
.h-\[49px\] {
  height: 49px;
}
.h-\[4px\] {
  height: 4px;
}
.h-\[50px\] {
  height: 50px;
}
.h-\[50vh\] {
  height: 50vh;
}
.h-\[522px\] {
  height: 522px;
}
.h-\[544px\] {
  height: 544px;
}
.h-\[547px\] {
  height: 547px;
}
.h-\[54px\] {
  height: 54px;
}
.h-\[550px\] {
  height: 550px;
}
.h-\[55px\] {
  height: 55px;
}
.h-\[59px\] {
  height: 59px;
}
.h-\[600px\] {
  height: 600px;
}
.h-\[60px\] {
  height: 60px;
}
.h-\[620px\] {
  height: 620px;
}
.h-\[62px\] {
  height: 62px;
}
.h-\[65px\] {
  height: 65px;
}
.h-\[695px\] {
  height: 695px;
}
.h-\[6px\] {
  height: 6px;
}
.h-\[70px\] {
  height: 70px;
}
.h-\[752px\] {
  height: 752px;
}
.h-\[75px\] {
  height: 75px;
}
.h-\[76px\] {
  height: 76px;
}
.h-\[776px\] {
  height: 776px;
}
.h-\[785px\] {
  height: 785px;
}
.h-\[7px\] {
  height: 7px;
}
.h-\[80px\] {
  height: 80px;
}
.h-\[80vh\] {
  height: 80vh;
}
.h-\[820px\] {
  height: 820px;
}
.h-\[82px\] {
  height: 82px;
}
.h-\[87px\] {
  height: 87px;
}
.h-\[9\.29px\] {
  height: 9.29px;
}
.h-\[90px\] {
  height: 90px;
}
.h-\[95px\] {
  height: 95px;
}
.h-\[97px\] {
  height: 97px;
}
.h-\[98px\] {
  height: 98px;
}
.h-\[calc\(100\%\)\] {
  height: calc(100%);
}
.h-\[calc\(100\%\+30px\)\] {
  height: calc(100% + 30px);
}
.h-\[calc\(100\%-10px\)\] {
  height: calc(100% - 10px);
}
.h-\[calc\(100\%-140px\)\] {
  height: calc(100% - 140px);
}
.h-\[calc\(100\%-34px\)\] {
  height: calc(100% - 34px);
}
.h-\[calc\(100\%-38px\)\] {
  height: calc(100% - 38px);
}
.h-\[calc\(100\%-42px\)\] {
  height: calc(100% - 42px);
}
.h-\[calc\(100\%-50px\)\] {
  height: calc(100% - 50px);
}
.h-\[calc\(100\%-51px\)\] {
  height: calc(100% - 51px);
}
.h-\[calc\(100\%-55px\)\] {
  height: calc(100% - 55px);
}
.h-\[calc\(100\%-58px\)\] {
  height: calc(100% - 58px);
}
.h-\[calc\(100\%-60px\)\] {
  height: calc(100% - 60px);
}
.h-\[calc\(100\%-80px\)\] {
  height: calc(100% - 80px);
}
.h-\[calc\(100dvh-0px\)\] {
  height: calc(100dvh - 0px);
}
.h-\[calc\(100dvh-100px\)\] {
  height: calc(100dvh - 100px);
}
.h-\[calc\(100dvh-108px\)\] {
  height: calc(100dvh - 108px);
}
.h-\[calc\(100dvh-112px\)\] {
  height: calc(100dvh - 112px);
}
.h-\[calc\(100dvh-120px\)\] {
  height: calc(100dvh - 120px);
}
.h-\[calc\(100dvh-122px\)\] {
  height: calc(100dvh - 122px);
}
.h-\[calc\(100dvh-126px\)\] {
  height: calc(100dvh - 126px);
}
.h-\[calc\(100dvh-131px\)\] {
  height: calc(100dvh - 131px);
}
.h-\[calc\(100dvh-140px\)\] {
  height: calc(100dvh - 140px);
}
.h-\[calc\(100dvh-150px\)\] {
  height: calc(100dvh - 150px);
}
.h-\[calc\(100dvh-240px\)\] {
  height: calc(100dvh - 240px);
}
.h-\[calc\(100dvh-340px\)\] {
  height: calc(100dvh - 340px);
}
.h-\[calc\(100dvh-60px\)\] {
  height: calc(100dvh - 60px);
}
.h-\[calc\(100dvh-74px\)\] {
  height: calc(100dvh - 74px);
}
.h-\[calc\(100dvh-75px\)\] {
  height: calc(100dvh - 75px);
}
.h-\[calc\(100dvh-80px\)\] {
  height: calc(100dvh - 80px);
}
.h-\[calc\(100dvh-90px\)\] {
  height: calc(100dvh - 90px);
}
.h-\[calc\(100dvh-93px\)\] {
  height: calc(100dvh - 93px);
}
.h-\[calc\(100svh-100px\)\] {
  height: calc(100svh - 100px);
}
.h-\[calc\(100svh-130px\)\] {
  height: calc(100svh - 130px);
}
.h-\[calc\(100svh-60px\)\] {
  height: calc(100svh - 60px);
}
.h-\[calc\(100svh-80px\)\] {
  height: calc(100svh - 80px);
}
.h-\[calc\(100vh\)\] {
  height: calc(100vh);
}
.h-\[calc\(100vh-120px\)\] {
  height: calc(100vh - 120px);
}
.h-\[calc\(100vh-165px\)\] {
  height: calc(100vh - 165px);
}
.h-\[calc\(100vh-170px\)\] {
  height: calc(100vh - 170px);
}
.h-\[calc\(100vh-180px\)\] {
  height: calc(100vh - 180px);
}
.h-\[calc\(100vh-190px\)\] {
  height: calc(100vh - 190px);
}
.h-\[calc\(100vh-200px\)\] {
  height: calc(100vh - 200px);
}
.h-\[calc\(100vh-20px\)\] {
  height: calc(100vh - 20px);
}
.h-\[calc\(100vh-221px\)\] {
  height: calc(100vh - 221px);
}
.h-\[calc\(100vh-250px\)\] {
  height: calc(100vh - 250px);
}
.h-\[calc\(100vh-300px\)\] {
  height: calc(100vh - 300px);
}
.h-\[calc\(100vh-368px\)\] {
  height: calc(100vh - 368px);
}
.h-\[calc\(100vh-370px\)\] {
  height: calc(100vh - 370px);
}
.h-\[calc\(100vh-430px\)\] {
  height: calc(100vh - 430px);
}
.h-\[calc\(100vh-60px\)\] {
  height: calc(100vh - 60px);
}
.h-\[calc\(100vh-90px\)\] {
  height: calc(100vh - 90px);
}
.h-auto {
  height: auto;
}
.h-dvh {
  height: 100dvh;
}
.h-full {
  height: 100%;
}
.h-px {
  height: 1px;
}
.h-screen {
  height: 100vh;
}
.h-svh {
  height: 100svh;
}
.\!max-h-\[600px\] {
  max-height: 600px !important;
}
.max-h-44 {
  max-height: 11rem;
}
.max-h-60 {
  max-height: 15rem;
}
.max-h-\[10\.4em\] {
  max-height: 10.4em;
}
.max-h-\[100dvh\] {
  max-height: 100dvh;
}
.max-h-\[100px\] {
  max-height: 100px;
}
.max-h-\[114px\] {
  max-height: 114px;
}
.max-h-\[158px\] {
  max-height: 158px;
}
.max-h-\[169px\] {
  max-height: 169px;
}
.max-h-\[180px\] {
  max-height: 180px;
}
.max-h-\[265px\] {
  max-height: 265px;
}
.max-h-\[300px\] {
  max-height: 300px;
}
.max-h-\[310px\] {
  max-height: 310px;
}
.max-h-\[314px\] {
  max-height: 314px;
}
.max-h-\[347px\] {
  max-height: 347px;
}
.max-h-\[350px\] {
  max-height: 350px;
}
.max-h-\[400px\] {
  max-height: 400px;
}
.max-h-\[450px\] {
  max-height: 450px;
}
.max-h-\[500px\] {
  max-height: 500px;
}
.max-h-\[50px\] {
  max-height: 50px;
}
.max-h-\[50vh\] {
  max-height: 50vh;
}
.max-h-\[550px\] {
  max-height: 550px;
}
.max-h-\[564px\] {
  max-height: 564px;
}
.max-h-\[600px\] {
  max-height: 600px;
}
.max-h-\[620px\] {
  max-height: 620px;
}
.max-h-\[670px\] {
  max-height: 670px;
}
.max-h-\[800px\] {
  max-height: 800px;
}
.max-h-\[calc\(100dvh-100px\)\] {
  max-height: calc(100dvh - 100px);
}
.max-h-\[calc\(100dvh-194px\)\] {
  max-height: calc(100dvh - 194px);
}
.max-h-\[calc\(100dvh-340px\)\] {
  max-height: calc(100dvh - 340px);
}
.max-h-full {
  max-height: 100%;
}
.\!min-h-\[0px\] {
  min-height: 0px !important;
}
.\!min-h-\[118px\] {
  min-height: 118px !important;
}
.\!min-h-\[72px\] {
  min-height: 72px !important;
}
.\!min-h-full {
  min-height: 100% !important;
}
.min-h-0 {
  min-height: 0px;
}
.min-h-10 {
  min-height: 2.5rem;
}
.min-h-20 {
  min-height: 5rem;
}
.min-h-32 {
  min-height: 8rem;
}
.min-h-44 {
  min-height: 11rem;
}
.min-h-\[100dvh\] {
  min-height: 100dvh;
}
.min-h-\[100px\] {
  min-height: 100px;
}
.min-h-\[100vh\] {
  min-height: 100vh;
}
.min-h-\[1080px\] {
  min-height: 1080px;
}
.min-h-\[110px\] {
  min-height: 110px;
}
.min-h-\[114px\] {
  min-height: 114px;
}
.min-h-\[120px\] {
  min-height: 120px;
}
.min-h-\[124px\] {
  min-height: 124px;
}
.min-h-\[130px\] {
  min-height: 130px;
}
.min-h-\[133px\] {
  min-height: 133px;
}
.min-h-\[143px\] {
  min-height: 143px;
}
.min-h-\[150px\] {
  min-height: 150px;
}
.min-h-\[155px\] {
  min-height: 155px;
}
.min-h-\[172px\] {
  min-height: 172px;
}
.min-h-\[177px\] {
  min-height: 177px;
}
.min-h-\[180px\] {
  min-height: 180px;
}
.min-h-\[190px\] {
  min-height: 190px;
}
.min-h-\[200px\] {
  min-height: 200px;
}
.min-h-\[204px\] {
  min-height: 204px;
}
.min-h-\[20px\] {
  min-height: 20px;
}
.min-h-\[227px\] {
  min-height: 227px;
}
.min-h-\[240px\] {
  min-height: 240px;
}
.min-h-\[263px\] {
  min-height: 263px;
}
.min-h-\[27px\] {
  min-height: 27px;
}
.min-h-\[283px\] {
  min-height: 283px;
}
.min-h-\[28px\] {
  min-height: 28px;
}
.min-h-\[300px\] {
  min-height: 300px;
}
.min-h-\[308px\] {
  min-height: 308px;
}
.min-h-\[30px\] {
  min-height: 30px;
}
.min-h-\[320px\] {
  min-height: 320px;
}
.min-h-\[340px\] {
  min-height: 340px;
}
.min-h-\[34px\] {
  min-height: 34px;
}
.min-h-\[350px\] {
  min-height: 350px;
}
.min-h-\[360px\] {
  min-height: 360px;
}
.min-h-\[36px\] {
  min-height: 36px;
}
.min-h-\[380px\] {
  min-height: 380px;
}
.min-h-\[400px\] {
  min-height: 400px;
}
.min-h-\[40px\] {
  min-height: 40px;
}
.min-h-\[456px\] {
  min-height: 456px;
}
.min-h-\[46px\] {
  min-height: 46px;
}
.min-h-\[485px\] {
  min-height: 485px;
}
.min-h-\[48px\] {
  min-height: 48px;
}
.min-h-\[50px\] {
  min-height: 50px;
}
.min-h-\[550px\] {
  min-height: 550px;
}
.min-h-\[55px\] {
  min-height: 55px;
}
.min-h-\[560px\] {
  min-height: 560px;
}
.min-h-\[591px\] {
  min-height: 591px;
}
.min-h-\[6\.25em\] {
  min-height: 6.25em;
}
.min-h-\[60dvh\] {
  min-height: 60dvh;
}
.min-h-\[60px\] {
  min-height: 60px;
}
.min-h-\[62px\] {
  min-height: 62px;
}
.min-h-\[65px\] {
  min-height: 65px;
}
.min-h-\[71px\] {
  min-height: 71px;
}
.min-h-\[720px\] {
  min-height: 720px;
}
.min-h-\[741px\] {
  min-height: 741px;
}
.min-h-\[796px\] {
  min-height: 796px;
}
.min-h-\[80px\] {
  min-height: 80px;
}
.min-h-\[90px\] {
  min-height: 90px;
}
.min-h-\[98px\] {
  min-height: 98px;
}
.min-h-\[calc\(100vh-500px\)\] {
  min-height: calc(100vh - 500px);
}
.min-h-dvh {
  min-height: 100dvh;
}
.min-h-full {
  min-height: 100%;
}
.min-h-screen {
  min-height: 100vh;
}
.\!w-14 {
  width: 3.5rem !important;
}
.\!w-16 {
  width: 4rem !important;
}
.\!w-2 {
  width: 0.5rem !important;
}
.\!w-20 {
  width: 5rem !important;
}
.\!w-5 {
  width: 1.25rem !important;
}
.\!w-6 {
  width: 1.5rem !important;
}
.\!w-\[278px\] {
  width: 278px !important;
}
.\!w-\[300px\] {
  width: 300px !important;
}
.\!w-\[30px\] {
  width: 30px !important;
}
.\!w-\[35px\] {
  width: 35px !important;
}
.\!w-\[70px\] {
  width: 70px !important;
}
.\!w-fit {
  width: -moz-fit-content !important;
  width: fit-content !important;
}
.\!w-full {
  width: 100% !important;
}
.w-0 {
  width: 0px;
}
.w-0\.5 {
  width: 0.125rem;
}
.w-1 {
  width: 0.25rem;
}
.w-1\.5 {
  width: 0.375rem;
}
.w-1\/12 {
  width: 8.333333%;
}
.w-1\/2 {
  width: 50%;
}
.w-1\/3 {
  width: 33.333333%;
}
.w-1\/4 {
  width: 25%;
}
.w-10 {
  width: 2.5rem;
}
.w-11 {
  width: 2.75rem;
}
.w-12 {
  width: 3rem;
}
.w-14 {
  width: 3.5rem;
}
.w-16 {
  width: 4rem;
}
.w-2 {
  width: 0.5rem;
}
.w-2\.5 {
  width: 0.625rem;
}
.w-2\/3 {
  width: 66.666667%;
}
.w-2\/6 {
  width: 33.333333%;
}
.w-20 {
  width: 5rem;
}
.w-24 {
  width: 6rem;
}
.w-28 {
  width: 7rem;
}
.w-3 {
  width: 0.75rem;
}
.w-3\.5 {
  width: 0.875rem;
}
.w-3\/4 {
  width: 75%;
}
.w-3\/6 {
  width: 50%;
}
.w-32 {
  width: 8rem;
}
.w-36 {
  width: 9rem;
}
.w-4 {
  width: 1rem;
}
.w-40 {
  width: 10rem;
}
.w-48 {
  width: 12rem;
}
.w-5 {
  width: 1.25rem;
}
.w-52 {
  width: 13rem;
}
.w-56 {
  width: 14rem;
}
.w-6 {
  width: 1.5rem;
}
.w-60 {
  width: 15rem;
}
.w-64 {
  width: 16rem;
}
.w-7 {
  width: 1.75rem;
}
.w-8 {
  width: 2rem;
}
.w-80 {
  width: 20rem;
}
.w-9 {
  width: 2.25rem;
}
.w-\[1\.25em\] {
  width: 1.25em;
}
.w-\[100\%\] {
  width: 100%;
}
.w-\[1000px\] {
  width: 1000px;
}
.w-\[100px\] {
  width: 100px;
}
.w-\[100vw\] {
  width: 100vw;
}
.w-\[1050px\] {
  width: 1050px;
}
.w-\[107px\] {
  width: 107px;
}
.w-\[10px\] {
  width: 10px;
}
.w-\[11\.36px\] {
  width: 11.36px;
}
.w-\[1125px\] {
  width: 1125px;
}
.w-\[115px\] {
  width: 115px;
}
.w-\[120px\] {
  width: 120px;
}
.w-\[122px\] {
  width: 122px;
}
.w-\[124px\] {
  width: 124px;
}
.w-\[125px\] {
  width: 125px;
}
.w-\[126px\] {
  width: 126px;
}
.w-\[127px\] {
  width: 127px;
}
.w-\[129px\] {
  width: 129px;
}
.w-\[135px\] {
  width: 135px;
}
.w-\[137px\] {
  width: 137px;
}
.w-\[1380px\] {
  width: 1380px;
}
.w-\[140px\] {
  width: 140px;
}
.w-\[142px\] {
  width: 142px;
}
.w-\[143px\] {
  width: 143px;
}
.w-\[1480px\] {
  width: 1480px;
}
.w-\[14px\] {
  width: 14px;
}
.w-\[150px\] {
  width: 150px;
}
.w-\[152px\] {
  width: 152px;
}
.w-\[157px\] {
  width: 157px;
}
.w-\[159px\] {
  width: 159px;
}
.w-\[15px\] {
  width: 15px;
}
.w-\[160px\] {
  width: 160px;
}
.w-\[162px\] {
  width: 162px;
}
.w-\[165px\] {
  width: 165px;
}
.w-\[166px\] {
  width: 166px;
}
.w-\[168px\] {
  width: 168px;
}
.w-\[16px\] {
  width: 16px;
}
.w-\[172px\] {
  width: 172px;
}
.w-\[175px\] {
  width: 175px;
}
.w-\[177px\] {
  width: 177px;
}
.w-\[17px\] {
  width: 17px;
}
.w-\[180px\] {
  width: 180px;
}
.w-\[182px\] {
  width: 182px;
}
.w-\[185px\] {
  width: 185px;
}
.w-\[18px\] {
  width: 18px;
}
.w-\[1920px\] {
  width: 1920px;
}
.w-\[193px\] {
  width: 193px;
}
.w-\[196px\] {
  width: 196px;
}
.w-\[19px\] {
  width: 19px;
}
.w-\[1px\] {
  width: 1px;
}
.w-\[200px\] {
  width: 200px;
}
.w-\[205px\] {
  width: 205px;
}
.w-\[20px\] {
  width: 20px;
}
.w-\[210px\] {
  width: 210px;
}
.w-\[212px\] {
  width: 212px;
}
.w-\[215px\] {
  width: 215px;
}
.w-\[21px\] {
  width: 21px;
}
.w-\[220px\] {
  width: 220px;
}
.w-\[222px\] {
  width: 222px;
}
.w-\[224px\] {
  width: 224px;
}
.w-\[225px\] {
  width: 225px;
}
.w-\[22px\] {
  width: 22px;
}
.w-\[23\.7\%\] {
  width: 23.7%;
}
.w-\[230px\] {
  width: 230px;
}
.w-\[231px\] {
  width: 231px;
}
.w-\[23px\] {
  width: 23px;
}
.w-\[240px\] {
  width: 240px;
}
.w-\[247px\] {
  width: 247px;
}
.w-\[24px\] {
  width: 24px;
}
.w-\[250px\] {
  width: 250px;
}
.w-\[25px\] {
  width: 25px;
}
.w-\[260px\] {
  width: 260px;
}
.w-\[262px\] {
  width: 262px;
}
.w-\[264px\] {
  width: 264px;
}
.w-\[268px\] {
  width: 268px;
}
.w-\[274px\] {
  width: 274px;
}
.w-\[275px\] {
  width: 275px;
}
.w-\[27px\] {
  width: 27px;
}
.w-\[281px\] {
  width: 281px;
}
.w-\[285px\] {
  width: 285px;
}
.w-\[28px\] {
  width: 28px;
}
.w-\[290px\] {
  width: 290px;
}
.w-\[298px\] {
  width: 298px;
}
.w-\[2px\] {
  width: 2px;
}
.w-\[300px\] {
  width: 300px;
}
.w-\[305px\] {
  width: 305px;
}
.w-\[30px\] {
  width: 30px;
}
.w-\[310px\] {
  width: 310px;
}
.w-\[314px\] {
  width: 314px;
}
.w-\[318px\] {
  width: 318px;
}
.w-\[31px\] {
  width: 31px;
}
.w-\[32\%\] {
  width: 32%;
}
.w-\[320px\] {
  width: 320px;
}
.w-\[322px\] {
  width: 322px;
}
.w-\[324px\] {
  width: 324px;
}
.w-\[32px\] {
  width: 32px;
}
.w-\[330px\] {
  width: 330px;
}
.w-\[336px\] {
  width: 336px;
}
.w-\[338px\] {
  width: 338px;
}
.w-\[340px\] {
  width: 340px;
}
.w-\[34px\] {
  width: 34px;
}
.w-\[350px\] {
  width: 350px;
}
.w-\[358px\] {
  width: 358px;
}
.w-\[35px\] {
  width: 35px;
}
.w-\[360px\] {
  width: 360px;
}
.w-\[363px\] {
  width: 363px;
}
.w-\[365px\] {
  width: 365px;
}
.w-\[375px\] {
  width: 375px;
}
.w-\[380px\] {
  width: 380px;
}
.w-\[388px\] {
  width: 388px;
}
.w-\[390px\] {
  width: 390px;
}
.w-\[392px\] {
  width: 392px;
}
.w-\[395px\] {
  width: 395px;
}
.w-\[400px\] {
  width: 400px;
}
.w-\[408px\] {
  width: 408px;
}
.w-\[40px\] {
  width: 40px;
}
.w-\[410px\] {
  width: 410px;
}
.w-\[412px\] {
  width: 412px;
}
.w-\[414px\] {
  width: 414px;
}
.w-\[420px\] {
  width: 420px;
}
.w-\[42px\] {
  width: 42px;
}
.w-\[430px\] {
  width: 430px;
}
.w-\[43px\] {
  width: 43px;
}
.w-\[440px\] {
  width: 440px;
}
.w-\[442px\] {
  width: 442px;
}
.w-\[447px\] {
  width: 447px;
}
.w-\[450px\] {
  width: 450px;
}
.w-\[45px\] {
  width: 45px;
}
.w-\[46px\] {
  width: 46px;
}
.w-\[475px\] {
  width: 475px;
}
.w-\[479px\] {
  width: 479px;
}
.w-\[47px\] {
  width: 47px;
}
.w-\[480px\] {
  width: 480px;
}
.w-\[495px\] {
  width: 495px;
}
.w-\[49px\] {
  width: 49px;
}
.w-\[4px\] {
  width: 4px;
}
.w-\[50\%\] {
  width: 50%;
}
.w-\[500px\] {
  width: 500px;
}
.w-\[50px\] {
  width: 50px;
}
.w-\[516px\] {
  width: 516px;
}
.w-\[51vw\] {
  width: 51vw;
}
.w-\[521px\] {
  width: 521px;
}
.w-\[525px\] {
  width: 525px;
}
.w-\[53px\] {
  width: 53px;
}
.w-\[54px\] {
  width: 54px;
}
.w-\[555px\] {
  width: 555px;
}
.w-\[55px\] {
  width: 55px;
}
.w-\[560px\] {
  width: 560px;
}
.w-\[56px\] {
  width: 56px;
}
.w-\[592px\] {
  width: 592px;
}
.w-\[5px\] {
  width: 5px;
}
.w-\[60\%\] {
  width: 60%;
}
.w-\[600px\] {
  width: 600px;
}
.w-\[607px\] {
  width: 607px;
}
.w-\[60px\] {
  width: 60px;
}
.w-\[61px\] {
  width: 61px;
}
.w-\[625px\] {
  width: 625px;
}
.w-\[62px\] {
  width: 62px;
}
.w-\[64px\] {
  width: 64px;
}
.w-\[65\%\] {
  width: 65%;
}
.w-\[650px\] {
  width: 650px;
}
.w-\[65px\] {
  width: 65px;
}
.w-\[660px\] {
  width: 660px;
}
.w-\[680px\] {
  width: 680px;
}
.w-\[686px\] {
  width: 686px;
}
.w-\[688px\] {
  width: 688px;
}
.w-\[68px\] {
  width: 68px;
}
.w-\[6px\] {
  width: 6px;
}
.w-\[70px\] {
  width: 70px;
}
.w-\[71\%\] {
  width: 71%;
}
.w-\[740px\] {
  width: 740px;
}
.w-\[74px\] {
  width: 74px;
}
.w-\[755px\] {
  width: 755px;
}
.w-\[766px\] {
  width: 766px;
}
.w-\[768px\] {
  width: 768px;
}
.w-\[76px\] {
  width: 76px;
}
.w-\[788px\] {
  width: 788px;
}
.w-\[796px\] {
  width: 796px;
}
.w-\[7px\] {
  width: 7px;
}
.w-\[80\%\] {
  width: 80%;
}
.w-\[800px\] {
  width: 800px;
}
.w-\[80px\] {
  width: 80px;
}
.w-\[80vw\] {
  width: 80vw;
}
.w-\[84px\] {
  width: 84px;
}
.w-\[88px\] {
  width: 88px;
}
.w-\[8px\] {
  width: 8px;
}
.w-\[90\%\] {
  width: 90%;
}
.w-\[900px\] {
  width: 900px;
}
.w-\[90px\] {
  width: 90px;
}
.w-\[90vw\] {
  width: 90vw;
}
.w-\[92px\] {
  width: 92px;
}
.w-\[94px\] {
  width: 94px;
}
.w-\[95px\] {
  width: 95px;
}
.w-\[calc\(100\%\+20px\)\] {
  width: calc(100% + 20px);
}
.w-\[calc\(100\%-160px\)\] {
  width: calc(100% - 160px);
}
.w-\[calc\(100\%-205px-15px\)\] {
  width: calc(100% - 205px - 15px);
}
.w-\[calc\(100\%-355px\)\] {
  width: calc(100% - 355px);
}
.w-\[calc\(100\%-40px\)\] {
  width: calc(100% - 40px);
}
.w-\[calc\(100\%-430px\)\] {
  width: calc(100% - 430px);
}
.w-\[calc\(100\%-60px\)\] {
  width: calc(100% - 60px);
}
.w-\[calc\(100\%-90px\)\] {
  width: calc(100% - 90px);
}
.w-\[calc\(100vw-70px\)\] {
  width: calc(100vw - 70px);
}
.w-\[calc\(50\%-90px\)\] {
  width: calc(50% - 90px);
}
.w-\[var\(--levelWidth\)\] {
  width: var(--levelWidth);
}
.w-auto {
  width: auto;
}
.w-dvw {
  width: 100dvw;
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-max {
  width: -moz-max-content;
  width: max-content;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.w-svw {
  width: 100svw;
}
.\!min-w-\[300px\] {
  min-width: 300px !important;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-1 {
  min-width: 0.25rem;
}
.min-w-28 {
  min-width: 7rem;
}
.min-w-6 {
  min-width: 1.5rem;
}
.min-w-7 {
  min-width: 1.75rem;
}
.min-w-\[1000px\] {
  min-width: 1000px;
}
.min-w-\[100px\] {
  min-width: 100px;
}
.min-w-\[10px\] {
  min-width: 10px;
}
.min-w-\[1170px\] {
  min-width: 1170px;
}
.min-w-\[1200px\] {
  min-width: 1200px;
}
.min-w-\[120px\] {
  min-width: 120px;
}
.min-w-\[1280px\] {
  min-width: 1280px;
}
.min-w-\[130px\] {
  min-width: 130px;
}
.min-w-\[146px\] {
  min-width: 146px;
}
.min-w-\[150px\] {
  min-width: 150px;
}
.min-w-\[1516px\] {
  min-width: 1516px;
}
.min-w-\[164px\] {
  min-width: 164px;
}
.min-w-\[181px\] {
  min-width: 181px;
}
.min-w-\[1920px\] {
  min-width: 1920px;
}
.min-w-\[200px\] {
  min-width: 200px;
}
.min-w-\[20px\] {
  min-width: 20px;
}
.min-w-\[220px\] {
  min-width: 220px;
}
.min-w-\[300px\] {
  min-width: 300px;
}
.min-w-\[391px\] {
  min-width: 391px;
}
.min-w-\[400px\] {
  min-width: 400px;
}
.min-w-\[40px\] {
  min-width: 40px;
}
.min-w-\[40rem\] {
  min-width: 40rem;
}
.min-w-\[421px\] {
  min-width: 421px;
}
.min-w-\[470px\] {
  min-width: 470px;
}
.min-w-\[480px\] {
  min-width: 480px;
}
.min-w-\[500px\] {
  min-width: 500px;
}
.min-w-\[57px\] {
  min-width: 57px;
}
.min-w-\[580px\] {
  min-width: 580px;
}
.min-w-\[686px\] {
  min-width: 686px;
}
.min-w-\[700px\] {
  min-width: 700px;
}
.min-w-\[738px\] {
  min-width: 738px;
}
.min-w-\[75\%\] {
  min-width: 75%;
}
.min-w-\[977px\] {
  min-width: 977px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.min-w-full {
  min-width: 100%;
}
.min-w-max {
  min-width: -moz-max-content;
  min-width: max-content;
}
.max-w-2xl {
  max-width: 42rem;
}
.max-w-3xl {
  max-width: 48rem;
}
.max-w-4xl {
  max-width: 56rem;
}
.max-w-5xl {
  max-width: 64rem;
}
.max-w-\[1000px\] {
  max-width: 1000px;
}
.max-w-\[1020px\] {
  max-width: 1020px;
}
.max-w-\[1027px\] {
  max-width: 1027px;
}
.max-w-\[1030px\] {
  max-width: 1030px;
}
.max-w-\[1100px\] {
  max-width: 1100px;
}
.max-w-\[110px\] {
  max-width: 110px;
}
.max-w-\[1170px\] {
  max-width: 1170px;
}
.max-w-\[1230px\] {
  max-width: 1230px;
}
.max-w-\[1280px\] {
  max-width: 1280px;
}
.max-w-\[1373px\] {
  max-width: 1373px;
}
.max-w-\[1400px\] {
  max-width: 1400px;
}
.max-w-\[1450px\] {
  max-width: 1450px;
}
.max-w-\[1454px\] {
  max-width: 1454px;
}
.max-w-\[1458px\] {
  max-width: 1458px;
}
.max-w-\[150px\] {
  max-width: 150px;
}
.max-w-\[1582px\] {
  max-width: 1582px;
}
.max-w-\[1800px\] {
  max-width: 1800px;
}
.max-w-\[190px\] {
  max-width: 190px;
}
.max-w-\[1920px\] {
  max-width: 1920px;
}
.max-w-\[200px\] {
  max-width: 200px;
}
.max-w-\[205px\] {
  max-width: 205px;
}
.max-w-\[211px\] {
  max-width: 211px;
}
.max-w-\[220px\] {
  max-width: 220px;
}
.max-w-\[228px\] {
  max-width: 228px;
}
.max-w-\[240px\] {
  max-width: 240px;
}
.max-w-\[250px\] {
  max-width: 250px;
}
.max-w-\[270px\] {
  max-width: 270px;
}
.max-w-\[3000px\] {
  max-width: 3000px;
}
.max-w-\[300px\] {
  max-width: 300px;
}
.max-w-\[320px\] {
  max-width: 320px;
}
.max-w-\[330px\] {
  max-width: 330px;
}
.max-w-\[334px\] {
  max-width: 334px;
}
.max-w-\[350px\] {
  max-width: 350px;
}
.max-w-\[352px\] {
  max-width: 352px;
}
.max-w-\[359px\] {
  max-width: 359px;
}
.max-w-\[360px\] {
  max-width: 360px;
}
.max-w-\[388px\] {
  max-width: 388px;
}
.max-w-\[392px\] {
  max-width: 392px;
}
.max-w-\[400px\] {
  max-width: 400px;
}
.max-w-\[403px\] {
  max-width: 403px;
}
.max-w-\[40rem\] {
  max-width: 40rem;
}
.max-w-\[412px\] {
  max-width: 412px;
}
.max-w-\[421px\] {
  max-width: 421px;
}
.max-w-\[423px\] {
  max-width: 423px;
}
.max-w-\[460px\] {
  max-width: 460px;
}
.max-w-\[495px\] {
  max-width: 495px;
}
.max-w-\[50\%\] {
  max-width: 50%;
}
.max-w-\[500px\] {
  max-width: 500px;
}
.max-w-\[510px\] {
  max-width: 510px;
}
.max-w-\[524px\] {
  max-width: 524px;
}
.max-w-\[550px\] {
  max-width: 550px;
}
.max-w-\[552px\] {
  max-width: 552px;
}
.max-w-\[571px\] {
  max-width: 571px;
}
.max-w-\[590px\] {
  max-width: 590px;
}
.max-w-\[600px\] {
  max-width: 600px;
}
.max-w-\[620px\] {
  max-width: 620px;
}
.max-w-\[622px\] {
  max-width: 622px;
}
.max-w-\[650px\] {
  max-width: 650px;
}
.max-w-\[700px\] {
  max-width: 700px;
}
.max-w-\[70px\] {
  max-width: 70px;
}
.max-w-\[719px\] {
  max-width: 719px;
}
.max-w-\[730px\] {
  max-width: 730px;
}
.max-w-\[735px\] {
  max-width: 735px;
}
.max-w-\[737px\] {
  max-width: 737px;
}
.max-w-\[740px\] {
  max-width: 740px;
}
.max-w-\[80\%\] {
  max-width: 80%;
}
.max-w-\[800px\] {
  max-width: 800px;
}
.max-w-\[801px\] {
  max-width: 801px;
}
.max-w-\[807px\] {
  max-width: 807px;
}
.max-w-\[810px\] {
  max-width: 810px;
}
.max-w-\[820px\] {
  max-width: 820px;
}
.max-w-\[832px\] {
  max-width: 832px;
}
.max-w-\[890px\] {
  max-width: 890px;
}
.max-w-\[90\%\] {
  max-width: 90%;
}
.max-w-\[900px\] {
  max-width: 900px;
}
.max-w-\[930px\] {
  max-width: 930px;
}
.max-w-\[948px\] {
  max-width: 948px;
}
.max-w-\[985px\] {
  max-width: 985px;
}
.max-w-\[calc\(100\%-20px\)\] {
  max-width: calc(100% - 20px);
}
.max-w-\[calc\(100vw-70px\)\] {
  max-width: calc(100vw - 70px);
}
.max-w-full {
  max-width: 100%;
}
.max-w-md {
  max-width: 28rem;
}
.max-w-sm {
  max-width: 24rem;
}
.max-w-xl {
  max-width: 36rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-\[0\.66\] {
  flex: 0.66;
}
.flex-auto {
  flex: 1 1 auto;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
.shrink {
  flex-shrink: 1;
}
.shrink-0 {
  flex-shrink: 0;
}
.flex-grow {
  flex-grow: 1;
}
.flex-grow-0 {
  flex-grow: 0;
}
.grow {
  flex-grow: 1;
}
.basis-full {
  flex-basis: 100%;
}
.table-auto {
  table-layout: auto;
}
.table-fixed {
  table-layout: fixed;
}
.border-collapse {
  border-collapse: collapse;
}
.border-separate {
  border-collapse: separate;
}
.border-spacing-y-3 {
  --tw-border-spacing-y: 0.75rem;
  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
}
.border-spacing-y-6 {
  --tw-border-spacing-y: 1.5rem;
  border-spacing: var(--tw-border-spacing-x) var(--tw-border-spacing-y);
}
.origin-\[0\%_50\%\] {
  transform-origin: 0% 50%;
}
.origin-bottom-left {
  transform-origin: bottom left;
}
.origin-center {
  transform-origin: center;
}
.origin-left {
  transform-origin: left;
}
.origin-right {
  transform-origin: right;
}
.origin-top-left {
  transform-origin: top left;
}
.origin-top-right {
  transform-origin: top right;
}
.-translate-x-1\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\[10px\] {
  --tw-translate-y: -10px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-1 {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-1\/2 {
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-5 {
  --tw-translate-x: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-6 {
  --tw-translate-x: 1.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\[-50\%\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1\/2 {
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-2 {
  --tw-translate-y: 0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-4 {
  --tw-translate-y: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\[-50\%\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-180 {
  --tw-rotate: -180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-\[42deg\] {
  --tw-rotate: 42deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.\!scale-100 {
  --tw-scale-x: 1 !important;
  --tw-scale-y: 1 !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}
.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-125 {
  --tw-scale-x: 1.25;
  --tw-scale-y: 1.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-150 {
  --tw-scale-x: 1.5;
  --tw-scale-y: 1.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-50 {
  --tw-scale-x: .5;
  --tw-scale-y: .5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-75 {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-90 {
  --tw-scale-x: .9;
  --tw-scale-y: .9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[\.21\] {
  --tw-scale-x: .21;
  --tw-scale-y: .21;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[\.35\] {
  --tw-scale-x: .35;
  --tw-scale-y: .35;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[\.55\] {
  --tw-scale-x: .55;
  --tw-scale-y: .55;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[\.65\] {
  --tw-scale-x: .65;
  --tw-scale-y: .65;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[\.70\] {
  --tw-scale-x: .70;
  --tw-scale-y: .70;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[\.75\] {
  --tw-scale-x: .75;
  --tw-scale-y: .75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[0\.143\] {
  --tw-scale-x: 0.143;
  --tw-scale-y: 0.143;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[0\.165\] {
  --tw-scale-x: 0.165;
  --tw-scale-y: 0.165;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[0\.18\] {
  --tw-scale-x: 0.18;
  --tw-scale-y: 0.18;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[0\.2\] {
  --tw-scale-x: 0.2;
  --tw-scale-y: 0.2;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[0\.37\] {
  --tw-scale-x: 0.37;
  --tw-scale-y: 0.37;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[0\.5\] {
  --tw-scale-x: 0.5;
  --tw-scale-y: 0.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[0\.75\] {
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[1\.5\] {
  --tw-scale-x: 1.5;
  --tw-scale-y: 1.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[1\.8\] {
  --tw-scale-x: 1.8;
  --tw-scale-y: 1.8;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[10\.5\] {
  --tw-scale-x: 10.5;
  --tw-scale-y: 10.5;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[2\] {
  --tw-scale-x: 2;
  --tw-scale-y: 2;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[60\%\] {
  --tw-scale-x: 60%;
  --tw-scale-y: 60%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\[6\] {
  --tw-scale-x: 6;
  --tw-scale-y: 6;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-scale-y-100 {
  --tw-scale-y: -1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-x-\[-1\] {
  --tw-scale-x: -1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes bounce {

  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8,0,1,1);
  }

  50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,0.2,1);
  }
}
.animate-bounce {
  animation: bounce 1s infinite;
}
@keyframes ping {

  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}
.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes pulse {

  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.\!cursor-text {
  cursor: text !important;
}
.cursor-auto {
  cursor: auto;
}
.cursor-col-resize {
  cursor: col-resize;
}
.cursor-default {
  cursor: default;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-grab {
  cursor: grab;
}
.cursor-move {
  cursor: move;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-text {
  cursor: text;
}
.touch-auto {
  touch-action: auto;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.select-all {
  -webkit-user-select: all;
     -moz-user-select: all;
          user-select: all;
}
.select-auto {
  -webkit-user-select: auto;
     -moz-user-select: auto;
          user-select: auto;
}
.resize-none {
  resize: none;
}
.resize-y {
  resize: vertical;
}
.resize {
  resize: both;
}
.snap-x {
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
}
.snap-proximity {
  --tw-scroll-snap-strictness: proximity;
}
.snap-start {
  scroll-snap-align: start;
}
.list-disc {
  list-style-type: disc;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.columns-1 {
  -moz-columns: 1;
       columns: 1;
}
.columns-2 {
  -moz-columns: 2;
       columns: 2;
}
.columns-3 {
  -moz-columns: 3;
       columns: 3;
}
.columns-4 {
  -moz-columns: 4;
       columns: 4;
}
.break-inside-avoid {
  -moz-column-break-inside: avoid;
       break-inside: avoid;
}
.break-inside-avoid-column {
  -moz-column-break-inside: avoid;
       break-inside: avoid-column;
}
.break-after-all {
  -moz-column-break-after: all;
       break-after: all;
}
.grid-flow-col {
  grid-auto-flow: column;
}
.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
.grid-cols-10 {
  grid-template-columns: repeat(10, minmax(0, 1fr));
}
.grid-cols-12 {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.grid-cols-5 {
  grid-template-columns: repeat(5, minmax(0, 1fr));
}
.grid-cols-6 {
  grid-template-columns: repeat(6, minmax(0, 1fr));
}
.grid-cols-\[130px_1fr\] {
  grid-template-columns: 130px 1fr;
}
.grid-cols-\[185px\\2c 3fr\] {
  grid-template-columns: 185px 3fr;
}
.grid-cols-\[1fr_300px\] {
  grid-template-columns: 1fr 300px;
}
.grid-cols-\[1fr_400px\] {
  grid-template-columns: 1fr 400px;
}
.grid-cols-\[320px_1fr\] {
  grid-template-columns: 320px 1fr;
}
.grid-cols-\[88px_1fr\] {
  grid-template-columns: 88px 1fr;
}
.grid-rows-2 {
  grid-template-rows: repeat(2, minmax(0, 1fr));
}
.grid-rows-3 {
  grid-template-rows: repeat(3, minmax(0, 1fr));
}
.\!flex-row {
  flex-direction: row !important;
}
.flex-row {
  flex-direction: row;
}
.flex-row-reverse {
  flex-direction: row-reverse;
}
.flex-col {
  flex-direction: column;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.flex-wrap {
  flex-wrap: wrap;
}
.flex-nowrap {
  flex-wrap: nowrap;
}
.place-content-center {
  place-content: center;
}
.place-content-start {
  place-content: start;
}
.place-items-center {
  place-items: center;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.\!justify-start {
  justify-content: flex-start !important;
}
.justify-start {
  justify-content: flex-start;
}
.\!justify-end {
  justify-content: flex-end !important;
}
.justify-end {
  justify-content: flex-end;
}
.\!justify-center {
  justify-content: center !important;
}
.justify-center {
  justify-content: center;
}
.\!justify-between {
  justify-content: space-between !important;
}
.justify-between {
  justify-content: space-between;
}
.justify-items-end {
  justify-items: end;
}
.justify-items-center {
  justify-items: center;
}
.justify-items-stretch {
  justify-items: stretch;
}
.\!gap-0 {
  gap: 0px !important;
}
.\!gap-2\.5 {
  gap: 0.625rem !important;
}
.\!gap-4 {
  gap: 1rem !important;
}
.\!gap-\[30px\] {
  gap: 30px !important;
}
.gap-0 {
  gap: 0px;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-1\.5 {
  gap: 0.375rem;
}
.gap-10 {
  gap: 2.5rem;
}
.gap-11 {
  gap: 2.75rem;
}
.gap-12 {
  gap: 3rem;
}
.gap-14 {
  gap: 3.5rem;
}
.gap-16 {
  gap: 4rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-2\.5 {
  gap: 0.625rem;
}
.gap-20 {
  gap: 5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-3\.5 {
  gap: 0.875rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-5 {
  gap: 1.25rem;
}
.gap-6 {
  gap: 1.5rem;
}
.gap-7 {
  gap: 1.75rem;
}
.gap-8 {
  gap: 2rem;
}
.gap-9 {
  gap: 2.25rem;
}
.gap-\[10px\] {
  gap: 10px;
}
.gap-\[11px\] {
  gap: 11px;
}
.gap-\[120px\] {
  gap: 120px;
}
.gap-\[12px\] {
  gap: 12px;
}
.gap-\[13px\] {
  gap: 13px;
}
.gap-\[14px\] {
  gap: 14px;
}
.gap-\[15px\] {
  gap: 15px;
}
.gap-\[16px\] {
  gap: 16px;
}
.gap-\[17px\] {
  gap: 17px;
}
.gap-\[18px\] {
  gap: 18px;
}
.gap-\[19px\] {
  gap: 19px;
}
.gap-\[22px\] {
  gap: 22px;
}
.gap-\[23px\] {
  gap: 23px;
}
.gap-\[25px\] {
  gap: 25px;
}
.gap-\[26px\] {
  gap: 26px;
}
.gap-\[28px\] {
  gap: 28px;
}
.gap-\[29px\] {
  gap: 29px;
}
.gap-\[2px\] {
  gap: 2px;
}
.gap-\[30px\] {
  gap: 30px;
}
.gap-\[31px\] {
  gap: 31px;
}
.gap-\[33px\] {
  gap: 33px;
}
.gap-\[35px\] {
  gap: 35px;
}
.gap-\[36px\] {
  gap: 36px;
}
.gap-\[41px\] {
  gap: 41px;
}
.gap-\[44px\] {
  gap: 44px;
}
.gap-\[45px\] {
  gap: 45px;
}
.gap-\[46px\] {
  gap: 46px;
}
.gap-\[47px\] {
  gap: 47px;
}
.gap-\[49px\] {
  gap: 49px;
}
.gap-\[50px\] {
  gap: 50px;
}
.gap-\[52px\] {
  gap: 52px;
}
.gap-\[55px\] {
  gap: 55px;
}
.gap-\[56px\] {
  gap: 56px;
}
.gap-\[5px\] {
  gap: 5px;
}
.gap-\[6px\] {
  gap: 6px;
}
.gap-\[72px\] {
  gap: 72px;
}
.gap-\[94px\] {
  gap: 94px;
}
.gap-\[9px\] {
  gap: 9px;
}
.gap-x-1 {
  -moz-column-gap: 0.25rem;
       column-gap: 0.25rem;
}
.gap-x-1\.5 {
  -moz-column-gap: 0.375rem;
       column-gap: 0.375rem;
}
.gap-x-10 {
  -moz-column-gap: 2.5rem;
       column-gap: 2.5rem;
}
.gap-x-12 {
  -moz-column-gap: 3rem;
       column-gap: 3rem;
}
.gap-x-16 {
  -moz-column-gap: 4rem;
       column-gap: 4rem;
}
.gap-x-2 {
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}
.gap-x-2\.5 {
  -moz-column-gap: 0.625rem;
       column-gap: 0.625rem;
}
.gap-x-20 {
  -moz-column-gap: 5rem;
       column-gap: 5rem;
}
.gap-x-3 {
  -moz-column-gap: 0.75rem;
       column-gap: 0.75rem;
}
.gap-x-3\.5 {
  -moz-column-gap: 0.875rem;
       column-gap: 0.875rem;
}
.gap-x-4 {
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}
.gap-x-5 {
  -moz-column-gap: 1.25rem;
       column-gap: 1.25rem;
}
.gap-x-6 {
  -moz-column-gap: 1.5rem;
       column-gap: 1.5rem;
}
.gap-x-7 {
  -moz-column-gap: 1.75rem;
       column-gap: 1.75rem;
}
.gap-x-8 {
  -moz-column-gap: 2rem;
       column-gap: 2rem;
}
.gap-x-\[10px\] {
  -moz-column-gap: 10px;
       column-gap: 10px;
}
.gap-x-\[12px\] {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-\[13\.22px\] {
  -moz-column-gap: 13.22px;
       column-gap: 13.22px;
}
.gap-x-\[13px\] {
  -moz-column-gap: 13px;
       column-gap: 13px;
}
.gap-x-\[14px\] {
  -moz-column-gap: 14px;
       column-gap: 14px;
}
.gap-x-\[15px\] {
  -moz-column-gap: 15px;
       column-gap: 15px;
}
.gap-x-\[16px\] {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-x-\[18px\] {
  -moz-column-gap: 18px;
       column-gap: 18px;
}
.gap-x-\[22px\] {
  -moz-column-gap: 22px;
       column-gap: 22px;
}
.gap-x-\[30px\] {
  -moz-column-gap: 30px;
       column-gap: 30px;
}
.gap-x-\[35px\] {
  -moz-column-gap: 35px;
       column-gap: 35px;
}
.gap-x-\[38px\] {
  -moz-column-gap: 38px;
       column-gap: 38px;
}
.gap-x-\[41px\] {
  -moz-column-gap: 41px;
       column-gap: 41px;
}
.gap-x-\[47px\] {
  -moz-column-gap: 47px;
       column-gap: 47px;
}
.gap-x-\[64px\] {
  -moz-column-gap: 64px;
       column-gap: 64px;
}
.gap-x-\[73px\] {
  -moz-column-gap: 73px;
       column-gap: 73px;
}
.gap-x-\[9px\] {
  -moz-column-gap: 9px;
       column-gap: 9px;
}
.gap-y-10 {
  row-gap: 2.5rem;
}
.gap-y-2 {
  row-gap: 0.5rem;
}
.gap-y-3 {
  row-gap: 0.75rem;
}
.gap-y-3\.5 {
  row-gap: 0.875rem;
}
.gap-y-4 {
  row-gap: 1rem;
}
.gap-y-5 {
  row-gap: 1.25rem;
}
.gap-y-6 {
  row-gap: 1.5rem;
}
.gap-y-7 {
  row-gap: 1.75rem;
}
.gap-y-\[26px\] {
  row-gap: 26px;
}
.gap-y-\[84px\] {
  row-gap: 84px;
}
.space-x-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2.5rem * var(--tw-space-x-reverse));
  margin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-7 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.75rem * var(--tw-space-x-reverse));
  margin-left: calc(1.75rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-9 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2.25rem * var(--tw-space-x-reverse));
  margin-left: calc(2.25rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-0\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.125rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.125rem * var(--tw-space-y-reverse));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-10 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));
}
.space-y-14 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(3.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(3.5rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-2\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));
}
.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.space-y-7 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.75rem * var(--tw-space-y-reverse));
}
.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}
.space-y-9 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2.25rem * var(--tw-space-y-reverse));
}
.space-y-\[130px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(130px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(130px * var(--tw-space-y-reverse));
}
.space-y-\[13px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(13px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(13px * var(--tw-space-y-reverse));
}
.space-y-\[14px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(14px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(14px * var(--tw-space-y-reverse));
}
.space-y-\[15px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(15px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(15px * var(--tw-space-y-reverse));
}
.space-y-\[18px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(18px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(18px * var(--tw-space-y-reverse));
}
.space-y-\[20px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(20px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(20px * var(--tw-space-y-reverse));
}
.space-y-\[24px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(24px * var(--tw-space-y-reverse));
}
.space-y-\[29px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(29px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(29px * var(--tw-space-y-reverse));
}
.space-y-\[30px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(30px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(30px * var(--tw-space-y-reverse));
}
.space-y-\[35px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(35px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(35px * var(--tw-space-y-reverse));
}
.space-y-\[37px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(37px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(37px * var(--tw-space-y-reverse));
}
.space-y-\[38px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(38px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(38px * var(--tw-space-y-reverse));
}
.space-y-\[46px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(46px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(46px * var(--tw-space-y-reverse));
}
.space-y-\[47px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(47px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(47px * var(--tw-space-y-reverse));
}
.space-y-\[50px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(50px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(50px * var(--tw-space-y-reverse));
}
.space-y-\[52px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(52px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(52px * var(--tw-space-y-reverse));
}
.space-y-\[5px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(5px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(5px * var(--tw-space-y-reverse));
}
.space-y-\[8px\] > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(8px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(8px * var(--tw-space-y-reverse));
}
.divide-x > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(1px * var(--tw-divide-x-reverse));
  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
}
.divide-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-x-reverse: 0;
  border-right-width: calc(2px * var(--tw-divide-x-reverse));
  border-left-width: calc(2px * calc(1 - var(--tw-divide-x-reverse)));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-box-font\/20 > :not([hidden]) ~ :not([hidden]) {
  border-color: rgba(var(--box-font-color), 0.2);
}
.divide-box-font\/30 > :not([hidden]) ~ :not([hidden]) {
  border-color: rgba(var(--box-font-color), 0.3);
}
.divide-current > :not([hidden]) ~ :not([hidden]) {
  border-color: currentColor;
}
.divide-line-border > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgba(var(--line-border-color), var(--tw-divide-opacity, 1));
}
.self-start {
  align-self: flex-start;
}
.self-end {
  align-self: flex-end;
}
.self-center {
  align-self: center;
}
.\!overflow-auto {
  overflow: auto !important;
}
.overflow-auto {
  overflow: auto;
}
.\!overflow-hidden {
  overflow: hidden !important;
}
.overflow-hidden {
  overflow: hidden;
}
.\!overflow-visible {
  overflow: visible !important;
}
.overflow-visible {
  overflow: visible;
}
.overflow-scroll {
  overflow: scroll;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-scroll {
  overflow-x: scroll;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.scroll-smooth {
  scroll-behavior: smooth;
}
.\!truncate {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-nowrap {
  text-wrap: nowrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.\!rounded {
  border-radius: 0.25rem !important;
}
.\!rounded-\[0px\] {
  border-radius: 0px !important;
}
.\!rounded-\[10px\] {
  border-radius: 10px !important;
}
.\!rounded-\[1px\] {
  border-radius: 1px !important;
}
.\!rounded-\[20px\] {
  border-radius: 20px !important;
}
.\!rounded-\[2px\] {
  border-radius: 2px !important;
}
.\!rounded-\[40px\] {
  border-radius: 40px !important;
}
.\!rounded-\[8px\] {
  border-radius: 8px !important;
}
.\!rounded-full {
  border-radius: 9999px !important;
}
.\!rounded-lg {
  border-radius: 0.5rem !important;
}
.\!rounded-sm {
  border-radius: 0.125rem !important;
}
.rounded {
  border-radius: 0.25rem;
}
.rounded-2xl {
  border-radius: 1rem;
}
.rounded-\[10px\] {
  border-radius: 10px;
}
.rounded-\[12px\] {
  border-radius: 12px;
}
.rounded-\[14px\] {
  border-radius: 14px;
}
.rounded-\[15px\] {
  border-radius: 15px;
}
.rounded-\[16px\] {
  border-radius: 16px;
}
.rounded-\[18px\] {
  border-radius: 18px;
}
.rounded-\[1px\] {
  border-radius: 1px;
}
.rounded-\[20px\] {
  border-radius: 20px;
}
.rounded-\[25px\] {
  border-radius: 25px;
}
.rounded-\[2px\] {
  border-radius: 2px;
}
.rounded-\[3px\] {
  border-radius: 3px;
}
.rounded-\[6px\] {
  border-radius: 6px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-none {
  border-radius: 0px;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.\!rounded-b-\[20px\] {
  border-bottom-right-radius: 20px !important;
  border-bottom-left-radius: 20px !important;
}
.\!rounded-t-\[20px\] {
  border-top-left-radius: 20px !important;
  border-top-right-radius: 20px !important;
}
.\!rounded-t-none {
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
}
.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.rounded-b-\[16px\] {
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
}
.rounded-b-\[20px\] {
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.rounded-b-\[8px\] {
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}
.rounded-b-lg {
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}
.rounded-b-xl {
  border-bottom-right-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}
.rounded-l {
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}
.rounded-l-lg {
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
.rounded-l-sm {
  border-top-left-radius: 0.125rem;
  border-bottom-left-radius: 0.125rem;
}
.rounded-r {
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
}
.rounded-r-\[3px\] {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
.rounded-r-full {
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
}
.rounded-r-lg {
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.rounded-t-2xl {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.rounded-t-\[0px\] {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.rounded-t-\[16px\] {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.rounded-t-\[20px\] {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.rounded-t-lg {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.rounded-t-sm {
  border-top-left-radius: 0.125rem;
  border-top-right-radius: 0.125rem;
}
.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}
.\!rounded-bl-none {
  border-bottom-left-radius: 0px !important;
}
.rounded-bl {
  border-bottom-left-radius: 0.25rem;
}
.rounded-bl-lg {
  border-bottom-left-radius: 0.5rem;
}
.rounded-bl-md {
  border-bottom-left-radius: 0.375rem;
}
.rounded-br {
  border-bottom-right-radius: 0.25rem;
}
.rounded-tl {
  border-top-left-radius: 0.25rem;
}
.rounded-tl-lg {
  border-top-left-radius: 0.5rem;
}
.rounded-tr {
  border-top-right-radius: 0.25rem;
}
.rounded-tr-\[3px\] {
  border-top-right-radius: 3px;
}
.rounded-tr-lg {
  border-top-right-radius: 0.5rem;
}
.rounded-tr-md {
  border-top-right-radius: 0.375rem;
}
.\!border-0 {
  border-width: 0px !important;
}
.border {
  border-width: 1px;
}
.border-0 {
  border-width: 0px;
}
.border-2 {
  border-width: 2px;
}
.border-4 {
  border-width: 4px;
}
.border-\[15px\] {
  border-width: 15px;
}
.border-\[2px\] {
  border-width: 2px;
}
.border-\[3px\] {
  border-width: 3px;
}
.\!border-y-0 {
  border-top-width: 0px !important;
  border-bottom-width: 0px !important;
}
.border-x {
  border-left-width: 1px;
  border-right-width: 1px;
}
.border-x-0 {
  border-left-width: 0px;
  border-right-width: 0px;
}
.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.border-y-0 {
  border-top-width: 0px;
  border-bottom-width: 0px;
}
.\!border-b {
  border-bottom-width: 1px !important;
}
.\!border-b-0 {
  border-bottom-width: 0px !important;
}
.\!border-l-0 {
  border-left-width: 0px !important;
}
.\!border-r-0 {
  border-right-width: 0px !important;
}
.\!border-t-0 {
  border-top-width: 0px !important;
}
.border-b {
  border-bottom-width: 1px;
}
.border-b-0 {
  border-bottom-width: 0px;
}
.border-b-2 {
  border-bottom-width: 2px;
}
.border-b-4 {
  border-bottom-width: 4px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-2 {
  border-left-width: 2px;
}
.border-l-4 {
  border-left-width: 4px;
}
.border-l-\[6px\] {
  border-left-width: 6px;
}
.border-r {
  border-right-width: 1px;
}
.border-r-0 {
  border-right-width: 0px;
}
.border-t {
  border-top-width: 1px;
}
.border-t-0 {
  border-top-width: 0px;
}
.border-solid {
  border-style: solid;
}
.border-dashed {
  border-style: dashed;
}
.border-dotted {
  border-style: dotted;
}
.\!border-none {
  border-style: none !important;
}
.border-none {
  border-style: none;
}
.\!border-\[currentColor\] {
  border-color: currentColor !important;
}
.\!border-active-border {
  --tw-border-opacity: 1 !important;
  border-color: rgba(var(--active-border-color), var(--tw-border-opacity, 1)) !important;
}
.\!border-box-border {
  --tw-border-opacity: 1 !important;
  border-color: rgba(var(--box-border-color), var(--tw-border-opacity, 1)) !important;
}
.\!border-box-font {
  --tw-border-opacity: 1 !important;
  border-color: rgba(var(--box-font-color), var(--tw-border-opacity, 1)) !important;
}
.\!border-box-font\/20 {
  border-color: rgba(var(--box-font-color), 0.2) !important;
}
.\!border-current {
  border-color: currentColor !important;
}
.\!border-inherit {
  border-color: inherit !important;
}
.\!border-line-border {
  --tw-border-opacity: 1 !important;
  border-color: rgba(var(--line-border-color), var(--tw-border-opacity, 1)) !important;
}
.\!border-line-border\/80 {
  border-color: rgba(var(--line-border-color), 0.8) !important;
}
.\!border-secondary-five {
  --tw-border-opacity: 1 !important;
  border-color: rgb(201 201 201 / var(--tw-border-opacity, 1)) !important;
}
.\!border-secondary-four {
  --tw-border-opacity: 1 !important;
  border-color: rgb(226 226 226 / var(--tw-border-opacity, 1)) !important;
}
.\!border-secondary-two {
  --tw-border-opacity: 1 !important;
  border-color: rgb(141 141 141 / var(--tw-border-opacity, 1)) !important;
}
.border-\[\#1c1c1d\] {
  --tw-border-opacity: 1;
  border-color: rgb(28 28 29 / var(--tw-border-opacity, 1));
}
.border-\[\#236edf\] {
  --tw-border-opacity: 1;
  border-color: rgb(35 110 223 / var(--tw-border-opacity, 1));
}
.border-\[\#C9C9C9\] {
  --tw-border-opacity: 1;
  border-color: rgb(201 201 201 / var(--tw-border-opacity, 1));
}
.border-\[\#DDDDDE\] {
  --tw-border-opacity: 1;
  border-color: rgb(221 221 222 / var(--tw-border-opacity, 1));
}
.border-\[\#E2E2E2\] {
  --tw-border-opacity: 1;
  border-color: rgb(226 226 226 / var(--tw-border-opacity, 1));
}
.border-\[\#c9c9c940\] {
  border-color: #c9c9c940;
}
.border-\[\#c9c9c9\] {
  --tw-border-opacity: 1;
  border-color: rgb(201 201 201 / var(--tw-border-opacity, 1));
}
.border-\[\#e2e2e2\] {
  --tw-border-opacity: 1;
  border-color: rgb(226 226 226 / var(--tw-border-opacity, 1));
}
.border-\[currentColor\] {
  border-color: currentColor;
}
.border-active-border {
  --tw-border-opacity: 1;
  border-color: rgba(var(--active-border-color), var(--tw-border-opacity, 1));
}
.border-black {
  --tw-border-opacity: 1;
  border-color: rgb(0 0 0 / var(--tw-border-opacity, 1));
}
.border-black\/20 {
  border-color: rgb(0 0 0 / 0.2);
}
.border-black\/40 {
  border-color: rgb(0 0 0 / 0.4);
}
.border-box-bg {
  --tw-border-opacity: 1;
  border-color: rgba(var(--box-bg-color), var(--tw-border-opacity, 1));
}
.border-box-border {
  --tw-border-opacity: 1;
  border-color: rgba(var(--box-border-color), var(--tw-border-opacity, 1));
}
.border-box-font {
  --tw-border-opacity: 1;
  border-color: rgba(var(--box-font-color), var(--tw-border-opacity, 1));
}
.border-box-font\/10 {
  border-color: rgba(var(--box-font-color), 0.1);
}
.border-box-font\/20 {
  border-color: rgba(var(--box-font-color), 0.2);
}
.border-box-font\/30 {
  border-color: rgba(var(--box-font-color), 0.3);
}
.border-box-font\/40 {
  border-color: rgba(var(--box-font-color), 0.4);
}
.border-box-font\/50 {
  border-color: rgba(var(--box-font-color), 0.5);
}
.border-box-font\/70 {
  border-color: rgba(var(--box-font-color), 0.7);
}
.border-box-font\/90 {
  border-color: rgba(var(--box-font-color), 0.9);
}
.border-current {
  border-color: currentColor;
}
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity, 1));
}
.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity, 1));
}
.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}
.border-gray-400 {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity, 1));
}
.border-gray-900 {
  --tw-border-opacity: 1;
  border-color: rgb(17 24 39 / var(--tw-border-opacity, 1));
}
.border-line-border {
  --tw-border-opacity: 1;
  border-color: rgba(var(--line-border-color), var(--tw-border-opacity, 1));
}
.border-line-border\/10 {
  border-color: rgba(var(--line-border-color), 0.1);
}
.border-line-border\/20 {
  border-color: rgba(var(--line-border-color), 0.2);
}
.border-line-border\/40 {
  border-color: rgba(var(--line-border-color), 0.4);
}
.border-neutral-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 229 229 / var(--tw-border-opacity, 1));
}
.border-primary-four {
  --tw-border-opacity: 1;
  border-color: rgb(21 89 125 / var(--tw-border-opacity, 1));
}
.border-primary-one {
  --tw-border-opacity: 1;
  border-color: rgb(28 28 29 / var(--tw-border-opacity, 1));
}
.border-primary-seven {
  --tw-border-opacity: 1;
  border-color: rgb(43 173 126 / var(--tw-border-opacity, 1));
}
.border-primary-three {
  --tw-border-opacity: 1;
  border-color: rgb(249 249 249 / var(--tw-border-opacity, 1));
}
.border-red-200 {
  --tw-border-opacity: 1;
  border-color: rgb(254 202 202 / var(--tw-border-opacity, 1));
}
.border-red-300 {
  --tw-border-opacity: 1;
  border-color: rgb(252 165 165 / var(--tw-border-opacity, 1));
}
.border-red-400 {
  --tw-border-opacity: 1;
  border-color: rgb(248 113 113 / var(--tw-border-opacity, 1));
}
.border-red-500 {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1));
}
.border-red-700 {
  --tw-border-opacity: 1;
  border-color: rgb(185 28 28 / var(--tw-border-opacity, 1));
}
.border-secondary-five {
  --tw-border-opacity: 1;
  border-color: rgb(201 201 201 / var(--tw-border-opacity, 1));
}
.border-secondary-four {
  --tw-border-opacity: 1;
  border-color: rgb(226 226 226 / var(--tw-border-opacity, 1));
}
.border-secondary-one {
  --tw-border-opacity: 1;
  border-color: rgb(61 61 61 / var(--tw-border-opacity, 1));
}
.border-secondary-three {
  --tw-border-opacity: 1;
  border-color: rgb(237 237 237 / var(--tw-border-opacity, 1));
}
.border-secondary-two {
  --tw-border-opacity: 1;
  border-color: rgb(141 141 141 / var(--tw-border-opacity, 1));
}
.border-slate-400 {
  --tw-border-opacity: 1;
  border-color: rgb(148 163 184 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}
.\!border-x-secondary-three {
  --tw-border-opacity: 1 !important;
  border-left-color: rgb(237 237 237 / var(--tw-border-opacity, 1)) !important;
  border-right-color: rgb(237 237 237 / var(--tw-border-opacity, 1)) !important;
}
.border-x-primary-one {
  --tw-border-opacity: 1;
  border-left-color: rgb(28 28 29 / var(--tw-border-opacity, 1));
  border-right-color: rgb(28 28 29 / var(--tw-border-opacity, 1));
}
.border-x-secondary-three {
  --tw-border-opacity: 1;
  border-left-color: rgb(237 237 237 / var(--tw-border-opacity, 1));
  border-right-color: rgb(237 237 237 / var(--tw-border-opacity, 1));
}
.border-b-secondary-five {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(201 201 201 / var(--tw-border-opacity, 1));
}
.border-b-secondary-four {
  --tw-border-opacity: 1;
  border-bottom-color: rgb(226 226 226 / var(--tw-border-opacity, 1));
}
.border-b-transparent {
  border-bottom-color: transparent;
}
.border-l-transparent {
  border-left-color: transparent;
}
.border-r-transparent {
  border-right-color: transparent;
}
.border-t-secondary-five {
  --tw-border-opacity: 1;
  border-top-color: rgb(201 201 201 / var(--tw-border-opacity, 1));
}
.border-t-transparent {
  border-top-color: transparent;
}
.\!border-opacity-100 {
  --tw-border-opacity: 1 !important;
}
.\!border-opacity-20 {
  --tw-border-opacity: 0.2 !important;
}
.border-opacity-0 {
  --tw-border-opacity: 0;
}
.border-opacity-20 {
  --tw-border-opacity: 0.2;
}
.border-opacity-30 {
  --tw-border-opacity: 0.3;
}
.border-opacity-50 {
  --tw-border-opacity: 0.5;
}
.border-opacity-line-border {
  --tw-border-opacity: var(--line-border-opacity);
}
.\!bg-black {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1)) !important;
}
.\!bg-box-bg {
  --tw-bg-opacity: 1 !important;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1)) !important;
}
.\!bg-box-font {
  --tw-bg-opacity: 1 !important;
  background-color: rgba(var(--box-font-color), var(--tw-bg-opacity, 1)) !important;
}
.\!bg-box-font\/100 {
  background-color: rgba(var(--box-font-color), 1) !important;
}
.\!bg-green-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1)) !important;
}
.\!bg-green-600 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1)) !important;
}
.\!bg-secondary-four {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(226 226 226 / var(--tw-bg-opacity, 1)) !important;
}
.\!bg-transparent {
  background-color: transparent !important;
}
.\!bg-white {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1)) !important;
}
.\!bg-white\/50 {
  background-color: rgb(255 255 255 / 0.5) !important;
}
.\!bg-yellow-500 {
  --tw-bg-opacity: 1 !important;
  background-color: rgb(234 179 8 / var(--tw-bg-opacity, 1)) !important;
}
.bg-\[\#00A7FE\] {
  --tw-bg-opacity: 1;
  background-color: rgb(0 167 254 / var(--tw-bg-opacity, 1));
}
.bg-\[\#111\] {
  --tw-bg-opacity: 1;
  background-color: rgb(17 17 17 / var(--tw-bg-opacity, 1));
}
.bg-\[\#15597D\]\/10 {
  background-color: rgb(21 89 125 / 0.1);
}
.bg-\[\#236edf\] {
  --tw-bg-opacity: 1;
  background-color: rgb(35 110 223 / var(--tw-bg-opacity, 1));
}
.bg-\[\#236edf\]\/20 {
  background-color: rgb(35 110 223 / 0.2);
}
.bg-\[\#2B80AD\] {
  --tw-bg-opacity: 1;
  background-color: rgb(43 128 173 / var(--tw-bg-opacity, 1));
}
.bg-\[\#57596AB2\] {
  background-color: #57596AB2;
}
.bg-\[\#ABA62B\] {
  --tw-bg-opacity: 1;
  background-color: rgb(171 166 43 / var(--tw-bg-opacity, 1));
}
.bg-\[\#D9D9D9\] {
  --tw-bg-opacity: 1;
  background-color: rgb(217 217 217 / var(--tw-bg-opacity, 1));
}
.bg-\[\#F5C430\] {
  --tw-bg-opacity: 1;
  background-color: rgb(245 196 48 / var(--tw-bg-opacity, 1));
}
.bg-\[\#F5F6F8\] {
  --tw-bg-opacity: 1;
  background-color: rgb(245 246 248 / var(--tw-bg-opacity, 1));
}
.bg-\[\#FAFAFA\] {
  --tw-bg-opacity: 1;
  background-color: rgb(250 250 250 / var(--tw-bg-opacity, 1));
}
.bg-\[\#FFDD33\] {
  --tw-bg-opacity: 1;
  background-color: rgb(255 221 51 / var(--tw-bg-opacity, 1));
}
.bg-\[\#e8e8e8\] {
  --tw-bg-opacity: 1;
  background-color: rgb(232 232 232 / var(--tw-bg-opacity, 1));
}
.bg-\[\#f9f9f9\] {
  --tw-bg-opacity: 1;
  background-color: rgb(249 249 249 / var(--tw-bg-opacity, 1));
}
.bg-\[\#fbfbfb\] {
  --tw-bg-opacity: 1;
  background-color: rgb(251 251 251 / var(--tw-bg-opacity, 1));
}
.bg-\[\#ffdd33\] {
  --tw-bg-opacity: 1;
  background-color: rgb(255 221 51 / var(--tw-bg-opacity, 1));
}
.bg-\[\#ffffff2b\] {
  background-color: #ffffff2b;
}
.bg-\[color\:rgb\(var\(--box-font-color\\2c 255\\2c 255\\2c 255\)\)\] {
  background-color: rgb(var(--box-font-color,255,255,255));
}
.bg-active-border {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--active-border-color), var(--tw-bg-opacity, 1));
}
.bg-app-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--app-bg-color), var(--tw-bg-opacity, 1));
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\/10 {
  background-color: rgb(0 0 0 / 0.1);
}
.bg-black\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-black\/50 {
  background-color: rgb(0 0 0 / 0.5);
}
.bg-black\/70 {
  background-color: rgb(0 0 0 / 0.7);
}
.bg-blue-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1));
}
.bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));
}
.bg-box-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
}
.bg-box-bg\/10 {
  background-color: rgba(var(--box-bg-color), 0.1);
}
.bg-box-bg\/5 {
  background-color: rgba(var(--box-bg-color), 0.05);
}
.bg-box-bg\/50 {
  background-color: rgba(var(--box-bg-color), 0.5);
}
.bg-box-bg\/60 {
  background-color: rgba(var(--box-bg-color), 0.6);
}
.bg-box-bg\/70 {
  background-color: rgba(var(--box-bg-color), 0.7);
}
.bg-box-bg\/90 {
  background-color: rgba(var(--box-bg-color), 0.9);
}
.bg-box-font {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-font-color), var(--tw-bg-opacity, 1));
}
.bg-box-font\/10 {
  background-color: rgba(var(--box-font-color), 0.1);
}
.bg-box-font\/20 {
  background-color: rgba(var(--box-font-color), 0.2);
}
.bg-box-font\/30 {
  background-color: rgba(var(--box-font-color), 0.3);
}
.bg-box-font\/40 {
  background-color: rgba(var(--box-font-color), 0.4);
}
.bg-box-font\/50 {
  background-color: rgba(var(--box-font-color), 0.5);
}
.bg-box-font\/80 {
  background-color: rgba(var(--box-font-color), 0.8);
}
.bg-current {
  background-color: currentColor;
}
.bg-cyan-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(6 182 212 / var(--tw-bg-opacity, 1));
}
.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity, 1));
}
.bg-gray-300\/10 {
  background-color: rgb(209 213 219 / 0.1);
}
.bg-gray-300\/25 {
  background-color: rgb(209 213 219 / 0.25);
}
.bg-gray-300\/30 {
  background-color: rgb(209 213 219 / 0.3);
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1));
}
.bg-gray-400\/20 {
  background-color: rgb(156 163 175 / 0.2);
}
.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
}
.bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1));
}
.bg-gray-500\/20 {
  background-color: rgb(107 114 128 / 0.2);
}
.bg-gray-500\/40 {
  background-color: rgb(107 114 128 / 0.4);
}
.bg-gray-500\/60 {
  background-color: rgb(107 114 128 / 0.6);
}
.bg-gray-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1));
}
.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));
}
.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));
}
.bg-gray-800\/50 {
  background-color: rgb(31 41 55 / 0.5);
}
.bg-gray-800\/90 {
  background-color: rgb(31 41 55 / 0.9);
}
.bg-green-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 252 231 / var(--tw-bg-opacity, 1));
}
.bg-green-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(187 247 208 / var(--tw-bg-opacity, 1));
}
.bg-green-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1));
}
.bg-green-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1));
}
.bg-indigo-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(99 102 241 / var(--tw-bg-opacity, 1));
}
.bg-left-sidebar-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--left-sidebar-bg-color), var(--tw-bg-opacity, 1));
}
.bg-left-sidebar-font {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--left-sidebar-color), var(--tw-bg-opacity, 1));
}
.bg-orange-400\/0 {
  background-color: rgb(251 146 60 / 0);
}
.bg-orange-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 115 22 / var(--tw-bg-opacity, 1));
}
.bg-pink-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(236 72 153 / var(--tw-bg-opacity, 1));
}
.bg-primary-five {
  --tw-bg-opacity: 1;
  background-color: rgb(0 167 254 / var(--tw-bg-opacity, 1));
}
.bg-primary-four {
  --tw-bg-opacity: 1;
  background-color: rgb(21 89 125 / var(--tw-bg-opacity, 1));
}
.bg-primary-one {
  --tw-bg-opacity: 1;
  background-color: rgb(28 28 29 / var(--tw-bg-opacity, 1));
}
.bg-primary-seven {
  --tw-bg-opacity: 1;
  background-color: rgb(43 173 126 / var(--tw-bg-opacity, 1));
}
.bg-primary-six {
  --tw-bg-opacity: 1;
  background-color: rgb(173 43 129 / var(--tw-bg-opacity, 1));
}
.bg-primary-three {
  --tw-bg-opacity: 1;
  background-color: rgb(249 249 249 / var(--tw-bg-opacity, 1));
}
.bg-primary-two {
  --tw-bg-opacity: 1;
  background-color: rgb(243 243 243 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-600\/80 {
  background-color: rgb(147 51 234 / 0.8);
}
.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity, 1));
}
.bg-red-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 113 113 / var(--tw-bg-opacity, 1));
}
.bg-red-400\/0 {
  background-color: rgb(248 113 113 / 0);
}
.bg-red-400\/20 {
  background-color: rgb(248 113 113 / 0.2);
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}
.bg-red-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(153 27 27 / var(--tw-bg-opacity, 1));
}
.bg-right-sidebar-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--right-sidebar-bg-color), var(--tw-bg-opacity, 1));
}
.bg-right-sidebar-font {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--right-sidebar-color, var(--tw-bg-opacity, 1)));
}
.bg-secondary-five {
  --tw-bg-opacity: 1;
  background-color: rgb(201 201 201 / var(--tw-bg-opacity, 1));
}
.bg-secondary-four {
  --tw-bg-opacity: 1;
  background-color: rgb(226 226 226 / var(--tw-bg-opacity, 1));
}
.bg-secondary-one {
  --tw-bg-opacity: 1;
  background-color: rgb(61 61 61 / var(--tw-bg-opacity, 1));
}
.bg-secondary-three {
  --tw-bg-opacity: 1;
  background-color: rgb(237 237 237 / var(--tw-bg-opacity, 1));
}
.bg-secondary-two {
  --tw-bg-opacity: 1;
  background-color: rgb(141 141 141 / var(--tw-bg-opacity, 1));
}
.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity, 1));
}
.bg-slate-100\/50 {
  background-color: rgb(241 245 249 / 0.5);
}
.bg-slate-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(203 213 225 / var(--tw-bg-opacity, 1));
}
.bg-slate-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(248 250 252 / var(--tw-bg-opacity, 1));
}
.bg-teal-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(20 184 166 / var(--tw-bg-opacity, 1));
}
.bg-top-nav-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--top-nav-bg-color), var(--tw-bg-opacity, 1));
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-white\/10 {
  background-color: rgb(255 255 255 / 0.1);
}
.bg-white\/20 {
  background-color: rgb(255 255 255 / 0.2);
}
.bg-white\/30 {
  background-color: rgb(255 255 255 / 0.3);
}
.bg-white\/5 {
  background-color: rgb(255 255 255 / 0.05);
}
.bg-white\/50 {
  background-color: rgb(255 255 255 / 0.5);
}
.bg-white\/80 {
  background-color: rgb(255 255 255 / 0.8);
}
.bg-white\/90 {
  background-color: rgb(255 255 255 / 0.9);
}
.bg-yellow-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 240 138 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-yellow-400 {
  --tw-bg-opacity: 1;
  background-color: rgb(250 204 21 / var(--tw-bg-opacity, 1));
}
.bg-yellow-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(234 179 8 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.\!bg-opacity-100 {
  --tw-bg-opacity: 1 !important;
}
.\!bg-opacity-box-bg {
  --tw-bg-opacity: var(--box-bg-opacity) !important;
}
.bg-opacity-0 {
  --tw-bg-opacity: 0;
}
.bg-opacity-100 {
  --tw-bg-opacity: 1;
}
.bg-opacity-30 {
  --tw-bg-opacity: 0.3;
}
.bg-opacity-5 {
  --tw-bg-opacity: 0.05;
}
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}
.bg-opacity-70 {
  --tw-bg-opacity: 0.7;
}
.bg-opacity-90 {
  --tw-bg-opacity: 0.9;
}
.bg-opacity-95 {
  --tw-bg-opacity: 0.95;
}
.bg-opacity-\[0\.02\] {
  --tw-bg-opacity: 0.02;
}
.bg-opacity-app-bg {
  --tw-bg-opacity: var(--app-bg-opacity);
}
.bg-opacity-box-bg {
  --tw-bg-opacity: var(--box-bg-opacity);
}
.bg-opacity-left-sidebar-bg {
  --tw-bg-opacity: var(--left-sidebar-bg-opacity);
}
.bg-opacity-right-sidebar-bg {
  --tw-bg-opacity: var(--right-sidebar-bg-opacity);
}
.bg-opacity-top-nav-bg {
  --tw-bg-opacity: var(--top-nav-bg-opacity);
}
.bg-\[linear-gradient\(179\.24deg\\2c \#222628_0\.67\%\\2c rgba\(48\\2c 48\\2c 48\\2c 0\.908581\)_24\.93\%\\2c rgba\(47\\2c 47\\2c 47\\2c 0\.5\)_55\.56\%\\2c rgba\(128\\2c 128\\2c 128\\2c 0\.646938\)_81\.57\%\\2c rgba\(255\\2c 255\\2c 255\\2c 0\.360788\)_89\.23\%\\2c \#ffffff_99\.36\%\)\] {
  background-image: linear-gradient(179.24deg,#222628 0.67%,rgba(48,48,48,0.908581) 24.93%,rgba(47,47,47,0.5) 55.56%,rgba(128,128,128,0.646938) 81.57%,rgba(255,255,255,0.360788) 89.23%,#ffffff 99.36%);
}
.bg-\[url\(\/images\/landing-page\/1st-page-bg\.webp\)\] {
  background-image: url(/images/landing-page/1st-page-bg.webp);
}
.bg-\[url\(\/images\/stratizer-img\.webp\)\] {
  background-image: url(/images/stratizer-img.webp);
}
.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}
.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}
.bg-gradient-to-l {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.bg-gradient-to-tr {
  background-image: linear-gradient(to top right, var(--tw-gradient-stops));
}
.from-black {
  --tw-gradient-from: #000 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-box-bg\/10 {
  --tw-gradient-from: rgba(var(--box-bg-color), 0.1) var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(var(--box-bg-color), 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-box-bg\/40 {
  --tw-gradient-from: rgba(var(--box-bg-color), 0.4) var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(var(--box-bg-color), 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-transparent {
  --tw-gradient-from: transparent var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-white {
  --tw-gradient-from: #fff var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-box-font\/20 {
  --tw-gradient-to: rgba(var(--box-font-color), 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), rgba(var(--box-font-color), 0.2) var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.to-\[\#fafafa\] {
  --tw-gradient-to: #fafafa var(--tw-gradient-to-position);
}
.to-box-bg {
  --tw-gradient-to: rgba(var(--box-bg-color), 1) var(--tw-gradient-to-position);
}
.to-box-bg\/20 {
  --tw-gradient-to: rgba(var(--box-bg-color), 0.2) var(--tw-gradient-to-position);
}
.to-transparent {
  --tw-gradient-to: transparent var(--tw-gradient-to-position);
}
.to-white {
  --tw-gradient-to: #fff var(--tw-gradient-to-position);
}
.\!bg-cover {
  background-size: cover !important;
}
.bg-contain {
  background-size: contain;
}
.bg-cover {
  background-size: cover;
}
.\!bg-fixed {
  background-attachment: fixed !important;
}
.bg-fixed {
  background-attachment: fixed;
}
.\!bg-center {
  background-position: center !important;
}
.bg-center {
  background-position: center;
}
.bg-left-top {
  background-position: left top;
}
.\!bg-no-repeat {
  background-repeat: no-repeat !important;
}
.bg-no-repeat {
  background-repeat: no-repeat;
}
.object-contain {
  -o-object-fit: contain;
     object-fit: contain;
}
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}
.object-center {
  -o-object-position: center;
     object-position: center;
}
.\!p-0 {
  padding: 0px !important;
}
.\!p-1 {
  padding: 0.25rem !important;
}
.\!p-\[3px\] {
  padding: 3px !important;
}
.\!p-\[6px\] {
  padding: 6px !important;
}
.p-0 {
  padding: 0px;
}
.p-0\.5 {
  padding: 0.125rem;
}
.p-1 {
  padding: 0.25rem;
}
.p-1\.5 {
  padding: 0.375rem;
}
.p-10 {
  padding: 2.5rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-20 {
  padding: 5rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.p-5 {
  padding: 1.25rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-7 {
  padding: 1.75rem;
}
.p-8 {
  padding: 2rem;
}
.p-9 {
  padding: 2.25rem;
}
.p-\[0px\] {
  padding: 0px;
}
.p-\[10px\] {
  padding: 10px;
}
.p-\[14px\] {
  padding: 14px;
}
.p-\[22px\] {
  padding: 22px;
}
.p-\[24px\] {
  padding: 24px;
}
.p-\[26px\] {
  padding: 26px;
}
.p-\[27px\] {
  padding: 27px;
}
.p-\[28px\] {
  padding: 28px;
}
.p-\[2px\] {
  padding: 2px;
}
.p-\[3\.5px\] {
  padding: 3.5px;
}
.p-\[30px\] {
  padding: 30px;
}
.p-\[33px\] {
  padding: 33px;
}
.p-\[38px\] {
  padding: 38px;
}
.p-\[3px\] {
  padding: 3px;
}
.p-\[5px\] {
  padding: 5px;
}
.p-\[6px\] {
  padding: 6px;
}
.p-\[7px\] {
  padding: 7px;
}
.p-\[80px\] {
  padding: 80px;
}
.p-\[8px\] {
  padding: 8px;
}
.p-\[9px\] {
  padding: 9px;
}
.\!px-0 {
  padding-left: 0px !important;
  padding-right: 0px !important;
}
.\!px-1 {
  padding-left: 0.25rem !important;
  padding-right: 0.25rem !important;
}
.\!px-2 {
  padding-left: 0.5rem !important;
  padding-right: 0.5rem !important;
}
.\!px-4 {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
.\!px-5 {
  padding-left: 1.25rem !important;
  padding-right: 1.25rem !important;
}
.\!px-6 {
  padding-left: 1.5rem !important;
  padding-right: 1.5rem !important;
}
.\!px-\[131px\] {
  padding-left: 131px !important;
  padding-right: 131px !important;
}
.\!px-\[19px\] {
  padding-left: 19px !important;
  padding-right: 19px !important;
}
.\!px-\[2px\] {
  padding-left: 2px !important;
  padding-right: 2px !important;
}
.\!px-\[6px\] {
  padding-left: 6px !important;
  padding-right: 6px !important;
}
.\!py-0 {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.\!py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
.\!py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.\!py-2\.5 {
  padding-top: 0.625rem !important;
  padding-bottom: 0.625rem !important;
}
.\!py-3 {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem !important;
}
.\!py-4 {
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;
}
.\!py-6 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
.\!py-\[0px\] {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.\!py-\[22px\] {
  padding-top: 22px !important;
  padding-bottom: 22px !important;
}
.\!py-\[27px\] {
  padding-top: 27px !important;
  padding-bottom: 27px !important;
}
.\!py-\[2px\] {
  padding-top: 2px !important;
  padding-bottom: 2px !important;
}
.\!py-\[6px\] {
  padding-top: 6px !important;
  padding-bottom: 6px !important;
}
.px-0 {
  padding-left: 0px;
  padding-right: 0px;
}
.px-0\.5 {
  padding-left: 0.125rem;
  padding-right: 0.125rem;
}
.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}
.px-1\.5 {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-2\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.px-20 {
  padding-left: 5rem;
  padding-right: 5rem;
}
.px-24 {
  padding-left: 6rem;
  padding-right: 6rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-3\.5 {
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.px-9 {
  padding-left: 2.25rem;
  padding-right: 2.25rem;
}
.px-\[0px\] {
  padding-left: 0px;
  padding-right: 0px;
}
.px-\[1\.125em\] {
  padding-left: 1.125em;
  padding-right: 1.125em;
}
.px-\[10px\] {
  padding-left: 10px;
  padding-right: 10px;
}
.px-\[112px\] {
  padding-left: 112px;
  padding-right: 112px;
}
.px-\[11px\] {
  padding-left: 11px;
  padding-right: 11px;
}
.px-\[129px\] {
  padding-left: 129px;
  padding-right: 129px;
}
.px-\[12px\] {
  padding-left: 12px;
  padding-right: 12px;
}
.px-\[130px\] {
  padding-left: 130px;
  padding-right: 130px;
}
.px-\[131px\] {
  padding-left: 131px;
  padding-right: 131px;
}
.px-\[132px\] {
  padding-left: 132px;
  padding-right: 132px;
}
.px-\[13px\] {
  padding-left: 13px;
  padding-right: 13px;
}
.px-\[14px\] {
  padding-left: 14px;
  padding-right: 14px;
}
.px-\[15px\] {
  padding-left: 15px;
  padding-right: 15px;
}
.px-\[167px\] {
  padding-left: 167px;
  padding-right: 167px;
}
.px-\[16px\] {
  padding-left: 16px;
  padding-right: 16px;
}
.px-\[170px\] {
  padding-left: 170px;
  padding-right: 170px;
}
.px-\[17px\] {
  padding-left: 17px;
  padding-right: 17px;
}
.px-\[18px\] {
  padding-left: 18px;
  padding-right: 18px;
}
.px-\[19px\] {
  padding-left: 19px;
  padding-right: 19px;
}
.px-\[1em\] {
  padding-left: 1em;
  padding-right: 1em;
}
.px-\[20px\] {
  padding-left: 20px;
  padding-right: 20px;
}
.px-\[217px\] {
  padding-left: 217px;
  padding-right: 217px;
}
.px-\[21px\] {
  padding-left: 21px;
  padding-right: 21px;
}
.px-\[22px\] {
  padding-left: 22px;
  padding-right: 22px;
}
.px-\[23px\] {
  padding-left: 23px;
  padding-right: 23px;
}
.px-\[24px\] {
  padding-left: 24px;
  padding-right: 24px;
}
.px-\[25px\] {
  padding-left: 25px;
  padding-right: 25px;
}
.px-\[26px\] {
  padding-left: 26px;
  padding-right: 26px;
}
.px-\[27px\] {
  padding-left: 27px;
  padding-right: 27px;
}
.px-\[28px\] {
  padding-left: 28px;
  padding-right: 28px;
}
.px-\[29px\] {
  padding-left: 29px;
  padding-right: 29px;
}
.px-\[30px\] {
  padding-left: 30px;
  padding-right: 30px;
}
.px-\[34px\] {
  padding-left: 34px;
  padding-right: 34px;
}
.px-\[35px\] {
  padding-left: 35px;
  padding-right: 35px;
}
.px-\[36px\] {
  padding-left: 36px;
  padding-right: 36px;
}
.px-\[38px\] {
  padding-left: 38px;
  padding-right: 38px;
}
.px-\[45px\] {
  padding-left: 45px;
  padding-right: 45px;
}
.px-\[46px\] {
  padding-left: 46px;
  padding-right: 46px;
}
.px-\[54px\] {
  padding-left: 54px;
  padding-right: 54px;
}
.px-\[5px\] {
  padding-left: 5px;
  padding-right: 5px;
}
.px-\[60px\] {
  padding-left: 60px;
  padding-right: 60px;
}
.px-\[7px\] {
  padding-left: 7px;
  padding-right: 7px;
}
.px-\[86px\] {
  padding-left: 86px;
  padding-right: 86px;
}
.px-\[8px\] {
  padding-left: 8px;
  padding-right: 8px;
}
.px-\[9px\] {
  padding-left: 9px;
  padding-right: 9px;
}
.px-px {
  padding-left: 1px;
  padding-right: 1px;
}
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}
.py-0\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-2\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-3\.5 {
  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.py-7 {
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
}
.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.py-9 {
  padding-top: 2.25rem;
  padding-bottom: 2.25rem;
}
.py-\[0\.5em\] {
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.py-\[0px\] {
  padding-top: 0px;
  padding-bottom: 0px;
}
.py-\[1\.3125rem\] {
  padding-top: 1.3125rem;
  padding-bottom: 1.3125rem;
}
.py-\[10px\] {
  padding-top: 10px;
  padding-bottom: 10px;
}
.py-\[11px\] {
  padding-top: 11px;
  padding-bottom: 11px;
}
.py-\[128px\] {
  padding-top: 128px;
  padding-bottom: 128px;
}
.py-\[12px\] {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-\[132px\] {
  padding-top: 132px;
  padding-bottom: 132px;
}
.py-\[13px\] {
  padding-top: 13px;
  padding-bottom: 13px;
}
.py-\[14px\] {
  padding-top: 14px;
  padding-bottom: 14px;
}
.py-\[16px\] {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\[17px\] {
  padding-top: 17px;
  padding-bottom: 17px;
}
.py-\[18px\] {
  padding-top: 18px;
  padding-bottom: 18px;
}
.py-\[1px\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\[20px\] {
  padding-top: 20px;
  padding-bottom: 20px;
}
.py-\[21px\] {
  padding-top: 21px;
  padding-bottom: 21px;
}
.py-\[22px\] {
  padding-top: 22px;
  padding-bottom: 22px;
}
.py-\[23px\] {
  padding-top: 23px;
  padding-bottom: 23px;
}
.py-\[243px\] {
  padding-top: 243px;
  padding-bottom: 243px;
}
.py-\[24px\] {
  padding-top: 24px;
  padding-bottom: 24px;
}
.py-\[25px\] {
  padding-top: 25px;
  padding-bottom: 25px;
}
.py-\[26px\] {
  padding-top: 26px;
  padding-bottom: 26px;
}
.py-\[27px\] {
  padding-top: 27px;
  padding-bottom: 27px;
}
.py-\[29px\] {
  padding-top: 29px;
  padding-bottom: 29px;
}
.py-\[2px\] {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-\[30px\] {
  padding-top: 30px;
  padding-bottom: 30px;
}
.py-\[31px\] {
  padding-top: 31px;
  padding-bottom: 31px;
}
.py-\[32px\] {
  padding-top: 32px;
  padding-bottom: 32px;
}
.py-\[33px\] {
  padding-top: 33px;
  padding-bottom: 33px;
}
.py-\[3px\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\[42px\] {
  padding-top: 42px;
  padding-bottom: 42px;
}
.py-\[5px\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.py-\[6\.5px\] {
  padding-top: 6.5px;
  padding-bottom: 6.5px;
}
.py-\[60px\] {
  padding-top: 60px;
  padding-bottom: 60px;
}
.py-\[62px\] {
  padding-top: 62px;
  padding-bottom: 62px;
}
.py-\[6px\] {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-\[79px\] {
  padding-top: 79px;
  padding-bottom: 79px;
}
.py-\[7px\] {
  padding-top: 7px;
  padding-bottom: 7px;
}
.py-\[8px\] {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-\[9px\] {
  padding-top: 9px;
  padding-bottom: 9px;
}
.\!pb-0 {
  padding-bottom: 0px !important;
}
.\!pb-4 {
  padding-bottom: 1rem !important;
}
.\!pl-0 {
  padding-left: 0px !important;
}
.\!pl-6 {
  padding-left: 1.5rem !important;
}
.\!pl-8 {
  padding-left: 2rem !important;
}
.\!pr-0 {
  padding-right: 0px !important;
}
.\!pr-7 {
  padding-right: 1.75rem !important;
}
.\!pr-8 {
  padding-right: 2rem !important;
}
.\!pt-0 {
  padding-top: 0px !important;
}
.\!pt-4 {
  padding-top: 1rem !important;
}
.\!pt-\[160px\] {
  padding-top: 160px !important;
}
.pb-0 {
  padding-bottom: 0px;
}
.pb-0\.5 {
  padding-bottom: 0.125rem;
}
.pb-1 {
  padding-bottom: 0.25rem;
}
.pb-1\.5 {
  padding-bottom: 0.375rem;
}
.pb-10 {
  padding-bottom: 2.5rem;
}
.pb-11 {
  padding-bottom: 2.75rem;
}
.pb-12 {
  padding-bottom: 3rem;
}
.pb-14 {
  padding-bottom: 3.5rem;
}
.pb-2 {
  padding-bottom: 0.5rem;
}
.pb-2\.5 {
  padding-bottom: 0.625rem;
}
.pb-20 {
  padding-bottom: 5rem;
}
.pb-24 {
  padding-bottom: 6rem;
}
.pb-3 {
  padding-bottom: 0.75rem;
}
.pb-32 {
  padding-bottom: 8rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pb-5 {
  padding-bottom: 1.25rem;
}
.pb-6 {
  padding-bottom: 1.5rem;
}
.pb-7 {
  padding-bottom: 1.75rem;
}
.pb-8 {
  padding-bottom: 2rem;
}
.pb-9 {
  padding-bottom: 2.25rem;
}
.pb-\[1\.125em\] {
  padding-bottom: 1.125em;
}
.pb-\[100px\] {
  padding-bottom: 100px;
}
.pb-\[10px\] {
  padding-bottom: 10px;
}
.pb-\[126px\] {
  padding-bottom: 126px;
}
.pb-\[12px\] {
  padding-bottom: 12px;
}
.pb-\[132px\] {
  padding-bottom: 132px;
}
.pb-\[137px\] {
  padding-bottom: 137px;
}
.pb-\[14px\] {
  padding-bottom: 14px;
}
.pb-\[150px\] {
  padding-bottom: 150px;
}
.pb-\[17px\] {
  padding-bottom: 17px;
}
.pb-\[182px\] {
  padding-bottom: 182px;
}
.pb-\[18px\] {
  padding-bottom: 18px;
}
.pb-\[20px\] {
  padding-bottom: 20px;
}
.pb-\[21px\] {
  padding-bottom: 21px;
}
.pb-\[22px\] {
  padding-bottom: 22px;
}
.pb-\[24px\] {
  padding-bottom: 24px;
}
.pb-\[25px\] {
  padding-bottom: 25px;
}
.pb-\[26px\] {
  padding-bottom: 26px;
}
.pb-\[28px\] {
  padding-bottom: 28px;
}
.pb-\[29px\] {
  padding-bottom: 29px;
}
.pb-\[30px\] {
  padding-bottom: 30px;
}
.pb-\[32px\] {
  padding-bottom: 32px;
}
.pb-\[33px\] {
  padding-bottom: 33px;
}
.pb-\[34px\] {
  padding-bottom: 34px;
}
.pb-\[38px\] {
  padding-bottom: 38px;
}
.pb-\[40px\] {
  padding-bottom: 40px;
}
.pb-\[50px\] {
  padding-bottom: 50px;
}
.pb-\[54px\] {
  padding-bottom: 54px;
}
.pb-\[60px\] {
  padding-bottom: 60px;
}
.pb-\[65px\] {
  padding-bottom: 65px;
}
.pb-\[66px\] {
  padding-bottom: 66px;
}
.pb-\[74px\] {
  padding-bottom: 74px;
}
.pb-\[75px\] {
  padding-bottom: 75px;
}
.pb-\[92px\] {
  padding-bottom: 92px;
}
.pl-0 {
  padding-left: 0px;
}
.pl-0\.5 {
  padding-left: 0.125rem;
}
.pl-1 {
  padding-left: 0.25rem;
}
.pl-1\.5 {
  padding-left: 0.375rem;
}
.pl-10 {
  padding-left: 2.5rem;
}
.pl-11 {
  padding-left: 2.75rem;
}
.pl-12 {
  padding-left: 3rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pl-2\.5 {
  padding-left: 0.625rem;
}
.pl-3 {
  padding-left: 0.75rem;
}
.pl-4 {
  padding-left: 1rem;
}
.pl-5 {
  padding-left: 1.25rem;
}
.pl-6 {
  padding-left: 1.5rem;
}
.pl-7 {
  padding-left: 1.75rem;
}
.pl-8 {
  padding-left: 2rem;
}
.pl-9 {
  padding-left: 2.25rem;
}
.pl-\[100px\] {
  padding-left: 100px;
}
.pl-\[113px\] {
  padding-left: 113px;
}
.pl-\[121px\] {
  padding-left: 121px;
}
.pl-\[128px\] {
  padding-left: 128px;
}
.pl-\[12px\] {
  padding-left: 12px;
}
.pl-\[133px\] {
  padding-left: 133px;
}
.pl-\[13px\] {
  padding-left: 13px;
}
.pl-\[14px\] {
  padding-left: 14px;
}
.pl-\[16px\] {
  padding-left: 16px;
}
.pl-\[171px\] {
  padding-left: 171px;
}
.pl-\[17px\] {
  padding-left: 17px;
}
.pl-\[18px\] {
  padding-left: 18px;
}
.pl-\[19px\] {
  padding-left: 19px;
}
.pl-\[1px\] {
  padding-left: 1px;
}
.pl-\[203px\] {
  padding-left: 203px;
}
.pl-\[20px\] {
  padding-left: 20px;
}
.pl-\[21px\] {
  padding-left: 21px;
}
.pl-\[22px\] {
  padding-left: 22px;
}
.pl-\[25px\] {
  padding-left: 25px;
}
.pl-\[30px\] {
  padding-left: 30px;
}
.pl-\[34px\] {
  padding-left: 34px;
}
.pl-\[35px\] {
  padding-left: 35px;
}
.pl-\[36px\] {
  padding-left: 36px;
}
.pl-\[37px\] {
  padding-left: 37px;
}
.pl-\[40px\] {
  padding-left: 40px;
}
.pl-\[44px\] {
  padding-left: 44px;
}
.pl-\[49px\] {
  padding-left: 49px;
}
.pl-\[52px\] {
  padding-left: 52px;
}
.pl-\[54px\] {
  padding-left: 54px;
}
.pl-\[56px\] {
  padding-left: 56px;
}
.pl-\[57px\] {
  padding-left: 57px;
}
.pl-\[64px\] {
  padding-left: 64px;
}
.pl-\[65px\] {
  padding-left: 65px;
}
.pl-\[67px\] {
  padding-left: 67px;
}
.pl-\[70px\] {
  padding-left: 70px;
}
.pl-\[75px\] {
  padding-left: 75px;
}
.pl-\[86px\] {
  padding-left: 86px;
}
.pl-\[90px\] {
  padding-left: 90px;
}
.pl-\[9px\] {
  padding-left: 9px;
}
.pl-px {
  padding-left: 1px;
}
.pr-0 {
  padding-right: 0px;
}
.pr-0\.5 {
  padding-right: 0.125rem;
}
.pr-1 {
  padding-right: 0.25rem;
}
.pr-1\.5 {
  padding-right: 0.375rem;
}
.pr-10 {
  padding-right: 2.5rem;
}
.pr-11 {
  padding-right: 2.75rem;
}
.pr-12 {
  padding-right: 3rem;
}
.pr-16 {
  padding-right: 4rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-2\.5 {
  padding-right: 0.625rem;
}
.pr-20 {
  padding-right: 5rem;
}
.pr-3 {
  padding-right: 0.75rem;
}
.pr-4 {
  padding-right: 1rem;
}
.pr-5 {
  padding-right: 1.25rem;
}
.pr-6 {
  padding-right: 1.5rem;
}
.pr-7 {
  padding-right: 1.75rem;
}
.pr-8 {
  padding-right: 2rem;
}
.pr-9 {
  padding-right: 2.25rem;
}
.pr-\[10px\] {
  padding-right: 10px;
}
.pr-\[116px\] {
  padding-right: 116px;
}
.pr-\[120px\] {
  padding-right: 120px;
}
.pr-\[130px\] {
  padding-right: 130px;
}
.pr-\[132px\] {
  padding-right: 132px;
}
.pr-\[14px\] {
  padding-right: 14px;
}
.pr-\[15px\] {
  padding-right: 15px;
}
.pr-\[160px\] {
  padding-right: 160px;
}
.pr-\[185px\] {
  padding-right: 185px;
}
.pr-\[18px\] {
  padding-right: 18px;
}
.pr-\[200px\] {
  padding-right: 200px;
}
.pr-\[210px\] {
  padding-right: 210px;
}
.pr-\[22px\] {
  padding-right: 22px;
}
.pr-\[26px\] {
  padding-right: 26px;
}
.pr-\[2px\] {
  padding-right: 2px;
}
.pr-\[38px\] {
  padding-right: 38px;
}
.pr-\[3px\] {
  padding-right: 3px;
}
.pr-\[45px\] {
  padding-right: 45px;
}
.pr-\[5\.5px\] {
  padding-right: 5.5px;
}
.pr-\[55px\] {
  padding-right: 55px;
}
.pr-\[5px\] {
  padding-right: 5px;
}
.pr-\[67px\] {
  padding-right: 67px;
}
.pr-\[71px\] {
  padding-right: 71px;
}
.pr-\[72px\] {
  padding-right: 72px;
}
.pr-\[75px\] {
  padding-right: 75px;
}
.pr-\[76px\] {
  padding-right: 76px;
}
.pr-\[80px\] {
  padding-right: 80px;
}
.pr-\[86px\] {
  padding-right: 86px;
}
.pr-\[95px\] {
  padding-right: 95px;
}
.pr-\[9px\] {
  padding-right: 9px;
}
.pr-\[calc\(460px\+70px\)\] {
  padding-right: calc(460px + 70px);
}
.pr-px {
  padding-right: 1px;
}
.ps-4 {
  padding-inline-start: 1rem;
}
.pt-0 {
  padding-top: 0px;
}
.pt-0\.5 {
  padding-top: 0.125rem;
}
.pt-1 {
  padding-top: 0.25rem;
}
.pt-1\.5 {
  padding-top: 0.375rem;
}
.pt-10 {
  padding-top: 2.5rem;
}
.pt-11 {
  padding-top: 2.75rem;
}
.pt-12 {
  padding-top: 3rem;
}
.pt-14 {
  padding-top: 3.5rem;
}
.pt-2 {
  padding-top: 0.5rem;
}
.pt-20 {
  padding-top: 5rem;
}
.pt-3 {
  padding-top: 0.75rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pt-5 {
  padding-top: 1.25rem;
}
.pt-6 {
  padding-top: 1.5rem;
}
.pt-7 {
  padding-top: 1.75rem;
}
.pt-8 {
  padding-top: 2rem;
}
.pt-9 {
  padding-top: 2.25rem;
}
.pt-\[100px\] {
  padding-top: 100px;
}
.pt-\[101px\] {
  padding-top: 101px;
}
.pt-\[102px\] {
  padding-top: 102px;
}
.pt-\[117px\] {
  padding-top: 117px;
}
.pt-\[128px\] {
  padding-top: 128px;
}
.pt-\[12px\] {
  padding-top: 12px;
}
.pt-\[14px\] {
  padding-top: 14px;
}
.pt-\[155px\] {
  padding-top: 155px;
}
.pt-\[15px\] {
  padding-top: 15px;
}
.pt-\[16px\] {
  padding-top: 16px;
}
.pt-\[17px\] {
  padding-top: 17px;
}
.pt-\[200px\] {
  padding-top: 200px;
}
.pt-\[208px\] {
  padding-top: 208px;
}
.pt-\[20px\] {
  padding-top: 20px;
}
.pt-\[22px\] {
  padding-top: 22px;
}
.pt-\[24px\] {
  padding-top: 24px;
}
.pt-\[267px\] {
  padding-top: 267px;
}
.pt-\[26px\] {
  padding-top: 26px;
}
.pt-\[275px\] {
  padding-top: 275px;
}
.pt-\[28px\] {
  padding-top: 28px;
}
.pt-\[29px\] {
  padding-top: 29px;
}
.pt-\[30px\] {
  padding-top: 30px;
}
.pt-\[32px\] {
  padding-top: 32px;
}
.pt-\[33px\] {
  padding-top: 33px;
}
.pt-\[380px\] {
  padding-top: 380px;
}
.pt-\[38px\] {
  padding-top: 38px;
}
.pt-\[3px\] {
  padding-top: 3px;
}
.pt-\[40px\] {
  padding-top: 40px;
}
.pt-\[425px\] {
  padding-top: 425px;
}
.pt-\[426px\] {
  padding-top: 426px;
}
.pt-\[42px\] {
  padding-top: 42px;
}
.pt-\[45px\] {
  padding-top: 45px;
}
.pt-\[58px\] {
  padding-top: 58px;
}
.pt-\[59px\] {
  padding-top: 59px;
}
.pt-\[5px\] {
  padding-top: 5px;
}
.pt-\[60px\] {
  padding-top: 60px;
}
.pt-\[63px\] {
  padding-top: 63px;
}
.pt-\[65px\] {
  padding-top: 65px;
}
.pt-\[68px\] {
  padding-top: 68px;
}
.pt-\[70px\] {
  padding-top: 70px;
}
.pt-\[75px\] {
  padding-top: 75px;
}
.pt-\[78px\] {
  padding-top: 78px;
}
.pt-\[80px\] {
  padding-top: 80px;
}
.pt-\[81px\] {
  padding-top: 81px;
}
.pt-\[83px\] {
  padding-top: 83px;
}
.pt-\[84px\] {
  padding-top: 84px;
}
.pt-\[88px\] {
  padding-top: 88px;
}
.pt-\[90px\] {
  padding-top: 90px;
}
.\!text-left {
  text-align: left !important;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.align-middle {
  vertical-align: middle;
}
.align-bottom {
  vertical-align: bottom;
}
.font-avenir {
  font-family: Avenir Next LT Pro;
}
.font-poppins {
  font-family: Poppins;
}
.\!text-\[10px\] {
  font-size: 10px !important;
}
.\!text-\[13px\] {
  font-size: 13px !important;
}
.\!text-\[14px\] {
  font-size: 14px !important;
}
.\!text-\[15px\] {
  font-size: 15px !important;
}
.\!text-\[16px\] {
  font-size: 16px !important;
}
.\!text-\[18px\] {
  font-size: 18px !important;
}
.\!text-\[20px\] {
  font-size: 20px !important;
}
.\!text-\[28px\] {
  font-size: 28px !important;
}
.\!text-base {
  font-size: 1rem !important;
  line-height: 1.5rem !important;
}
.\!text-lg {
  font-size: 1.125rem !important;
  line-height: 1.75rem !important;
}
.\!text-sm {
  font-size: 0.875rem !important;
  line-height: 1.25rem !important;
}
.\!text-xl {
  font-size: 1.25rem !important;
  line-height: 1.75rem !important;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-5xl {
  font-size: 3rem;
  line-height: 1;
}
.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}
.text-7xl {
  font-size: 4.5rem;
  line-height: 1;
}
.text-8xl {
  font-size: 6rem;
  line-height: 1;
}
.text-\[1\.125em\] {
  font-size: 1.125em;
}
.text-\[10px\] {
  font-size: 10px;
}
.text-\[11\.67px\] {
  font-size: 11.67px;
}
.text-\[11px\] {
  font-size: 11px;
}
.text-\[12px\] {
  font-size: 12px;
}
.text-\[13\.8px\] {
  font-size: 13.8px;
}
.text-\[13px\] {
  font-size: 13px;
}
.text-\[14px\] {
  font-size: 14px;
}
.text-\[15px\] {
  font-size: 15px;
}
.text-\[16\.77px\] {
  font-size: 16.77px;
}
.text-\[16px\] {
  font-size: 16px;
}
.text-\[17\.85px\] {
  font-size: 17.85px;
}
.text-\[17\.8px\] {
  font-size: 17.8px;
}
.text-\[17px\] {
  font-size: 17px;
}
.text-\[18px\] {
  font-size: 18px;
}
.text-\[19px\] {
  font-size: 19px;
}
.text-\[1em\] {
  font-size: 1em;
}
.text-\[20px\] {
  font-size: 20px;
}
.text-\[21px\] {
  font-size: 21px;
}
.text-\[22px\] {
  font-size: 22px;
}
.text-\[24px\] {
  font-size: 24px;
}
.text-\[25px\] {
  font-size: 25px;
}
.text-\[26px\] {
  font-size: 26px;
}
.text-\[27px\] {
  font-size: 27px;
}
.text-\[28px\] {
  font-size: 28px;
}
.text-\[30px\] {
  font-size: 30px;
}
.text-\[32px\] {
  font-size: 32px;
}
.text-\[36px\] {
  font-size: 36px;
}
.text-\[40px\] {
  font-size: 40px;
}
.text-\[42px\] {
  font-size: 42px;
}
.text-\[44px\] {
  font-size: 44px;
}
.text-\[48px\] {
  font-size: 48px;
}
.text-\[55px\] {
  font-size: 55px;
}
.text-\[58px\] {
  font-size: 58px;
}
.text-\[60px\] {
  font-size: 60px;
}
.text-\[78px\] {
  font-size: 78px;
}
.text-\[80px\] {
  font-size: 80px;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.\!font-\[275\] {
  font-weight: 275 !important;
}
.\!font-bold {
  font-weight: 700 !important;
}
.\!font-extralight {
  font-weight: 200 !important;
}
.\!font-light {
  font-weight: 300 !important;
}
.\!font-medium {
  font-weight: 500 !important;
}
.\!font-normal {
  font-weight: 400 !important;
}
.\!font-semibold {
  font-weight: 600 !important;
}
.font-\[275\] {
  font-weight: 275;
}
.font-\[400\] {
  font-weight: 400;
}
.font-\[500\] {
  font-weight: 500;
}
.font-\[700\] {
  font-weight: 700;
}
.font-black {
  font-weight: 900;
}
.font-bold {
  font-weight: 700;
}
.font-extrabold {
  font-weight: 800;
}
.font-extralight {
  font-weight: 200;
}
.font-light {
  font-weight: 300;
}
.font-medium {
  font-weight: 500;
}
.font-normal {
  font-weight: 400;
}
.font-semibold {
  font-weight: 600;
}
.font-thin {
  font-weight: 100;
}
.uppercase {
  text-transform: uppercase;
}
.lowercase {
  text-transform: lowercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.\!leading-\[1\.5\] {
  line-height: 1.5 !important;
}
.\!leading-\[1\.7\] {
  line-height: 1.7 !important;
}
.\!leading-\[27px\] {
  line-height: 27px !important;
}
.leading-4 {
  line-height: 1rem;
}
.leading-5 {
  line-height: 1.25rem;
}
.leading-6 {
  line-height: 1.5rem;
}
.leading-7 {
  line-height: 1.75rem;
}
.leading-8 {
  line-height: 2rem;
}
.leading-9 {
  line-height: 2.25rem;
}
.leading-\[1\.4\] {
  line-height: 1.4;
}
.leading-\[1\.5\] {
  line-height: 1.5;
}
.leading-\[1\.6\] {
  line-height: 1.6;
}
.leading-\[1\.875em\] {
  line-height: 1.875em;
}
.leading-\[100\%\] {
  line-height: 100%;
}
.leading-\[100px\] {
  line-height: 100px;
}
.leading-\[150\%\] {
  line-height: 150%;
}
.leading-\[20px\] {
  line-height: 20px;
}
.leading-\[21px\] {
  line-height: 21px;
}
.leading-\[220\%\] {
  line-height: 220%;
}
.leading-\[22px\] {
  line-height: 22px;
}
.leading-\[23px\] {
  line-height: 23px;
}
.leading-\[25px\] {
  line-height: 25px;
}
.leading-\[26\.36px\] {
  line-height: 26.36px;
}
.leading-\[26px\] {
  line-height: 26px;
}
.leading-\[30px\] {
  line-height: 30px;
}
.leading-\[31px\] {
  line-height: 31px;
}
.leading-\[33px\] {
  line-height: 33px;
}
.leading-\[34px\] {
  line-height: 34px;
}
.leading-\[35px\] {
  line-height: 35px;
}
.leading-\[36px\] {
  line-height: 36px;
}
.leading-\[38px\] {
  line-height: 38px;
}
.leading-\[39px\] {
  line-height: 39px;
}
.leading-\[40px\] {
  line-height: 40px;
}
.leading-\[42px\] {
  line-height: 42px;
}
.leading-\[80px\] {
  line-height: 80px;
}
.leading-none {
  line-height: 1;
}
.leading-normal {
  line-height: 1.5;
}
.leading-snug {
  line-height: 1.375;
}
.leading-tight {
  line-height: 1.25;
}
.tracking-0\.32 {
  letter-spacing: 0.32px;
}
.tracking-\[-0\.02em\] {
  letter-spacing: -0.02em;
}
.tracking-\[0\%\] {
  letter-spacing: 0%;
}
.tracking-\[0em\] {
  letter-spacing: 0em;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.tracking-wider {
  letter-spacing: 0.05em;
}
.\!text-\[\#616161\] {
  --tw-text-opacity: 1 !important;
  color: rgb(97 97 97 / var(--tw-text-opacity, 1)) !important;
}
.\!text-current {
  color: currentColor !important;
}
.\!text-inherit {
  color: inherit !important;
}
.\!text-white {
  --tw-text-opacity: 1 !important;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1)) !important;
}
.text-\[\#1C1C1D\] {
  --tw-text-opacity: 1;
  color: rgb(28 28 29 / var(--tw-text-opacity, 1));
}
.text-\[\#1c1c1d\] {
  --tw-text-opacity: 1;
  color: rgb(28 28 29 / var(--tw-text-opacity, 1));
}
.text-\[\#2B80AD\] {
  --tw-text-opacity: 1;
  color: rgb(43 128 173 / var(--tw-text-opacity, 1));
}
.text-\[\#2BAD7E\] {
  --tw-text-opacity: 1;
  color: rgb(43 173 126 / var(--tw-text-opacity, 1));
}
.text-\[\#353740\] {
  --tw-text-opacity: 1;
  color: rgb(53 55 64 / var(--tw-text-opacity, 1));
}
.text-\[\#4A4E58\] {
  --tw-text-opacity: 1;
  color: rgb(74 78 88 / var(--tw-text-opacity, 1));
}
.text-\[\#616161\] {
  --tw-text-opacity: 1;
  color: rgb(97 97 97 / var(--tw-text-opacity, 1));
}
.text-\[\#808080\] {
  --tw-text-opacity: 1;
  color: rgb(128 128 128 / var(--tw-text-opacity, 1));
}
.text-\[\#A0A3B1\] {
  --tw-text-opacity: 1;
  color: rgb(160 163 177 / var(--tw-text-opacity, 1));
}
.text-\[\#F5C430\] {
  --tw-text-opacity: 1;
  color: rgb(245 196 48 / var(--tw-text-opacity, 1));
}
.text-\[color\:rgb\(var\(--box-bg-color\)\)\] {
  color: rgb(var(--box-bg-color));
}
.text-app-font {
  --tw-text-opacity: 1;
  color: rgba(var(--app-font-color), var(--tw-text-opacity, 1));
}
.text-app-font\/50 {
  color: rgba(var(--app-font-color), 0.5);
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-black\/50 {
  color: rgb(0 0 0 / 0.5);
}
.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity, 1));
}
.text-box-bg {
  --tw-text-opacity: 1;
  color: rgba(var(--box-bg-color), var(--tw-text-opacity, 1));
}
.text-box-font {
  --tw-text-opacity: 1;
  color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
}
.text-box-font\/30 {
  color: rgba(var(--box-font-color), 0.3);
}
.text-box-font\/50 {
  color: rgba(var(--box-font-color), 0.5);
}
.text-box-font\/60 {
  color: rgba(var(--box-font-color), 0.6);
}
.text-box-font\/70 {
  color: rgba(var(--box-font-color), 0.7);
}
.text-box-font\/80 {
  color: rgba(var(--box-font-color), 0.8);
}
.text-box-font\/90 {
  color: rgba(var(--box-font-color), 0.9);
}
.text-current {
  color: currentColor;
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity, 1));
}
.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity, 1));
}
.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity, 1));
}
.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity, 1));
}
.text-green-400 {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-green-600 {
  --tw-text-opacity: 1;
  color: rgb(22 163 74 / var(--tw-text-opacity, 1));
}
.text-inherit {
  color: inherit;
}
.text-left-sidebar-bg {
  --tw-text-opacity: 1;
  color: rgba(var(--left-sidebar-bg-color), var(--tw-text-opacity, 1));
}
.text-left-sidebar-font {
  --tw-text-opacity: 1;
  color: rgba(var(--left-sidebar-color), var(--tw-text-opacity, 1));
}
.text-line-border {
  --tw-text-opacity: 1;
  color: rgba(var(--line-border-color), var(--tw-text-opacity, 1));
}
.text-primary-four {
  --tw-text-opacity: 1;
  color: rgb(21 89 125 / var(--tw-text-opacity, 1));
}
.text-primary-one {
  --tw-text-opacity: 1;
  color: rgb(28 28 29 / var(--tw-text-opacity, 1));
}
.text-primary-seven {
  --tw-text-opacity: 1;
  color: rgb(43 173 126 / var(--tw-text-opacity, 1));
}
.text-primary-six {
  --tw-text-opacity: 1;
  color: rgb(173 43 129 / var(--tw-text-opacity, 1));
}
.text-primary-three {
  --tw-text-opacity: 1;
  color: rgb(249 249 249 / var(--tw-text-opacity, 1));
}
.text-primary-two {
  --tw-text-opacity: 1;
  color: rgb(243 243 243 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity, 1));
}
.text-right-sidebar-bg {
  --tw-text-opacity: 1;
  color: rgba(var(--right-sidebar-bg-color), var(--tw-text-opacity, 1));
}
.text-right-sidebar-font {
  --tw-text-opacity: 1;
  color: rgba(var(--right-sidebar-color, var(--tw-text-opacity, 1)));
}
.text-secondary-five {
  --tw-text-opacity: 1;
  color: rgb(201 201 201 / var(--tw-text-opacity, 1));
}
.text-secondary-one {
  --tw-text-opacity: 1;
  color: rgb(61 61 61 / var(--tw-text-opacity, 1));
}
.text-secondary-six {
  color: var(--color-secondary-six);
}
.text-secondary-three {
  --tw-text-opacity: 1;
  color: rgb(237 237 237 / var(--tw-text-opacity, 1));
}
.text-secondary-two {
  --tw-text-opacity: 1;
  color: rgb(141 141 141 / var(--tw-text-opacity, 1));
}
.text-slate-200 {
  --tw-text-opacity: 1;
  color: rgb(226 232 240 / var(--tw-text-opacity, 1));
}
.text-top-nav-font {
  --tw-text-opacity: 1;
  color: rgba(var(--top-nav-font-color), var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-yellow-400 {
  --tw-text-opacity: 1;
  color: rgb(250 204 21 / var(--tw-text-opacity, 1));
}
.text-opacity-100 {
  --tw-text-opacity: 1;
}
.text-opacity-50 {
  --tw-text-opacity: 0.5;
}
.text-opacity-60 {
  --tw-text-opacity: 0.6;
}
.underline {
  text-decoration-line: underline;
}
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.placeholder-box-font\/40::-moz-placeholder {
  color: rgba(var(--box-font-color), 0.4);
}
.placeholder-box-font\/40::placeholder {
  color: rgba(var(--box-font-color), 0.4);
}
.placeholder-secondary-five::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(201 201 201 / var(--tw-placeholder-opacity, 1));
}
.placeholder-secondary-five::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(201 201 201 / var(--tw-placeholder-opacity, 1));
}
.placeholder-secondary-two::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(141 141 141 / var(--tw-placeholder-opacity, 1));
}
.placeholder-secondary-two::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(141 141 141 / var(--tw-placeholder-opacity, 1));
}
.placeholder-opacity-50::-moz-placeholder {
  --tw-placeholder-opacity: 0.5;
}
.placeholder-opacity-50::placeholder {
  --tw-placeholder-opacity: 0.5;
}
.\!opacity-0 {
  opacity: 0 !important;
}
.\!opacity-100 {
  opacity: 1 !important;
}
.\!opacity-50 {
  opacity: 0.5 !important;
}
.\!opacity-80 {
  opacity: 0.8 !important;
}
.opacity-0 {
  opacity: 0;
}
.opacity-10 {
  opacity: 0.1;
}
.opacity-100 {
  opacity: 1;
}
.opacity-20 {
  opacity: 0.2;
}
.opacity-30 {
  opacity: 0.3;
}
.opacity-40 {
  opacity: 0.4;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-60 {
  opacity: 0.6;
}
.opacity-65 {
  opacity: 0.65;
}
.opacity-70 {
  opacity: 0.7;
}
.opacity-75 {
  opacity: 0.75;
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-85 {
  opacity: 0.85;
}
.opacity-90 {
  opacity: 0.9;
}
.opacity-app-bg {
  opacity: var(--app-bg-opacity);
}
.opacity-box-bg {
  opacity: var(--box-bg-opacity);
}
.opacity-left-sidebar-bg {
  opacity: var(--left-sidebar-bg-opacity);
}
.opacity-right-sidebar-bg {
  opacity: var(--right-sidebar-bg-opacity);
}
.opacity-top-nav-bg {
  opacity: var(--top-nav-bg-opacity);
}
.\!shadow-\[0px_1px_6px_0px_rgba\(44\\2c 52\\2c 65\\2c 0\.1\)\] {
  --tw-shadow: 0px 1px 6px 0px rgba(44,52,65,0.1) !important;
  --tw-shadow-colored: 0px 1px 6px 0px var(--tw-shadow-color) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\[-3px_0_3px_\#3335_inset\] {
  --tw-shadow: -3px 0 3px #3335 inset;
  --tw-shadow-colored: inset -3px 0 3px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\[0px_15px_40px_rgba\(0\\2c 0\\2c 0\\2c 0\.12\)\] {
  --tw-shadow: 0px 15px 40px rgba(0,0,0,0.12);
  --tw-shadow-colored: 0px 15px 40px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\[0px_1px_10px_rgba\(0\\2c 0\\2c 0\\2c 0\.6\)\] {
  --tw-shadow: 0px 1px 10px rgba(0,0,0,0.6);
  --tw-shadow-colored: 0px 1px 10px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\[0px_1px_6px_0px_rgba\(44\\2c 52\\2c 65\\2c 0\.1\)\] {
  --tw-shadow: 0px 1px 6px 0px rgba(44,52,65,0.1);
  --tw-shadow-colored: 0px 1px 6px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\[0px_1px_6px_rgba\(44\\2c 52\\2c 65\\2c 0\.1\)\] {
  --tw-shadow: 0px 1px 6px rgba(44,52,65,0.1);
  --tw-shadow-colored: 0px 1px 6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\[0px_2\.40476px_6\.0119px_rgba\(0\\2c 0\\2c 0\\2c 0\.15\)\] {
  --tw-shadow: 0px 2.40476px 6.0119px rgba(0,0,0,0.15);
  --tw-shadow-colored: 0px 2.40476px 6.0119px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\[0px_6px_15px_0px_\#23272F21\] {
  --tw-shadow: 0px 6px 15px 0px #23272F21;
  --tw-shadow-colored: 0px 6px 15px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\[0px_6px_15px_0px_rgba\(35\\2c 39\\2c 47\\2c 0\.129\)\] {
  --tw-shadow: 0px 6px 15px 0px rgba(35,39,47,0.129);
  --tw-shadow-colored: 0px 6px 15px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\[0px_6px_15px_rgba\(35\\2c 39\\2c 47\\2c 0\.13\)\] {
  --tw-shadow: 0px 6px 15px rgba(35,39,47,0.13);
  --tw-shadow-colored: 0px 6px 15px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-\[3px_0_3px_\#3333\] {
  --tw-shadow: 3px 0 3px #3333;
  --tw-shadow-colored: 3px 0 3px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-eight {
  --tw-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.2);
  --tw-shadow-colored: 0px 4px 8px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-five {
  --tw-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 4px 4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-four {
  --tw-shadow: 0 1px 6px rgba(44, 52, 65, 0.1);
  --tw-shadow-colored: 0 1px 6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-inner {
  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-one {
  --tw-shadow: 0 6px 15px rgba(35, 39, 47, 0.13);
  --tw-shadow-colored: 0 6px 15px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-seven {
  --tw-shadow: 0px 1px 6px 0px rgba(44, 52, 65, 0.10);
  --tw-shadow-colored: 0px 1px 6px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-six {
  --tw-shadow: 0px 6px 15px 0px rgba(35, 39, 47, 0.13);
  --tw-shadow-colored: 0px 6px 15px 0px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-three {
  --tw-shadow: 0 2px 8px rgba(44, 52, 65, 0.1);
  --tw-shadow-colored: 0 2px 8px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-two {
  --tw-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  --tw-shadow-colored: 0 6px 15px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.outline {
  outline-style: solid;
}
.outline-0 {
  outline-width: 0px;
}
.outline-offset-0 {
  outline-offset: 0px;
}
.outline-white\/40 {
  outline-color: rgb(255 255 255 / 0.4);
}
.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-2 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-inset {
  --tw-ring-inset: inset;
}
.ring-black {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(0 0 0 / var(--tw-ring-opacity, 1));
}
.ring-box-font\/30 {
  --tw-ring-color: rgba(var(--box-font-color), 0.3);
}
.ring-box-font\/40 {
  --tw-ring-color: rgba(var(--box-font-color), 0.4);
}
.ring-current {
  --tw-ring-color: currentColor;
}
.ring-opacity-5 {
  --tw-ring-opacity: 0.05;
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.brightness-90 {
  --tw-brightness: brightness(.9);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.drop-shadow {
  --tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.grayscale {
  --tw-grayscale: grayscale(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.invert {
  --tw-invert: invert(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur {
  --tw-backdrop-blur: blur(8px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-\[1px\] {
  --tw-backdrop-blur: blur(1px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-md {
  --tw-backdrop-blur: blur(12px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-xl {
  --tw-backdrop-blur: blur(24px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-filter {
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-100 {
  transition-delay: 100ms;
}
.delay-75 {
  transition-delay: 75ms;
}
.duration-100 {
  transition-duration: 100ms;
}
.duration-1000 {
  transition-duration: 1000ms;
}
.duration-150 {
  transition-duration: 150ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.duration-75 {
  transition-duration: 75ms;
}
.duration-\[50\] {
  transition-duration: 50;
}
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-linear {
  transition-timing-function: linear;
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.\@container {
  container-type: inline-size;
}
.\[icon\:Ph\*\] {
  icon: Ph*;
}
.\[text-orientation\:mixed\] {
  text-orientation: mixed;
}
.\[writing-mode\:vertical-lr\] {
  writing-mode: vertical-lr;
}

input:-webkit-autofill {
    -webkit-transition:
        background-color 9999s ease-out,
        color 9999s ease-out;
    transition:
        background-color 9999s ease-out,
        color 9999s ease-out;
    transition-delay: 9999s;
    box-shadow: 0 0 0px 1000px transparent inset !important;
    -webkit-text-fill-color: inherit !important;
}

input:-webkit-autofill:focus {
  -webkit-text-fill-color: inherit !important; /* Same text color when focused */
}

.inherit-font-style {
    font-size: inherit !important;
    font-weight: inherit !important;
}

.panzoom-exclude[tabindex='0']:focus-within {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(var(--active-border-color), var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
}

.level-1-style {
    background-color: rgba(var(--level-1-bg), var(--box-bg-opacity));
    color: rgb(var(--box-font-color));
    display: var(--level-1-display);
}

.level-2-style {
    background-color: rgba(var(--level-2-bg), var(--box-bg-opacity));
    color: rgb(var(--box-font-color));
    display: var(--level-2-display);
}

.level-3-style {
    background-color: rgba(var(--level-3-bg), var(--box-bg-opacity));
    color: rgb(var(--box-font-color));
    display: var(--level-3-display);
}

.level-4-style {
    background-color: rgba(var(--level-4-bg), var(--box-bg-opacity));
    color: rgb(var(--box-font-color));
    display: var(--level-4-display);
}

.welcomeMsgStyle {
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
}

@keyframes progress {
    0% {
        width: 0%;
    }

    30% {
        width: 30%;
    }

    50% {
        width: 55%;
    }

    70% {
        width: 70%;
    }

    85% {
        width: 85%;
    }

    100% {
        width: 95%;
    }
}

.animate-progress-bar {
    animation: progress 10s ease-in-out;
}

.pathLoader {
    --delay: 0;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    pointer-events: none;
    animation: animateDash 3s ease-in-out alternate-reverse infinite;
    animation-delay: var(--delay);
}

@keyframes animateDash {
    to {
        stroke-dashoffset: 0;
    }
}

.ck-content a:-moz-any-link {
    color: inherit !important;
}

.ck-content a:any-link {
    color: inherit !important;
}

.scrollbar-visible {
  scrollbar-width: auto; /* for Firefox */
  scrollbar-color: #c1c1c1 #f1f1f1; /* thumb and track color */
}

/* For Chrome, Edge, Safari */
.scrollbar-visible::-webkit-scrollbar {
  width: 10px;
}

.scrollbar-visible::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.scrollbar-visible::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 10px;
  border: 4px solid #f1f1f1;
}

.scrollbar-visible::-webkit-scrollbar-thumb:hover {
  background-color: #a8a8a8;
}

.hover\:\!active-border:hover {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(var(--active-border-color), var(--tw-border-opacity, 1));
}

.hover\:active-border:hover {
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgba(var(--active-border-color), var(--tw-border-opacity, 1));
}

.hover\:box-border:hover {
  --tw-border-opacity: 1;
  border-color: rgba(var(--box-border-color), var(--tw-border-opacity, 1));
}

.hover\:box-color:hover {
  --tw-text-opacity: 1;
  color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
}

.hover\:box-bg:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
}

.group\/parent:hover .group-hover\/parent\:box-color {
  --tw-text-opacity: 1;
  color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
}

.group\/parent:hover .group-hover\/parent\:box-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\:box-bg {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
}

@media not all and (min-width: 1900px) {

  .max-3xl\:box-color {
    --tw-text-opacity: 1;
    color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
  }

  .max-3xl\:box-bg {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
  }

  .max-3xl\:left-sidebar-bg {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--left-sidebar-bg-color), var(--tw-bg-opacity, 1));
  }

  .max-3xl\:right-sidebar-bg {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--right-sidebar-bg-color), var(--tw-bg-opacity, 1));
  }
}

@media not all and (min-width: 768px) {

  .max-md\:top-nav-bg {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--top-nav-bg-color), var(--tw-bg-opacity, 1));
  }
}

@media (min-width: 768px) {

  .md\:line-border {
    --tw-border-opacity: 1;
    border-color: rgba(var(--line-border-color), var(--tw-border-opacity, 1));
  }
}

@media (min-width: 1280px) {

  .xl\:box-style {
    --tw-bg-opacity: 1;
    background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
    --tw-bg-opacity: var(--box-bg-opacity);
    --tw-text-opacity: 1;
    color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
  }
}

.\[\&\>\*\+\*\]\:line-border>*+* {
  --tw-border-opacity: 1;
  border-color: rgba(var(--line-border-color), var(--tw-border-opacity, 1));
}

.first-letter\:text-lg::first-letter {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.placeholder\:font-bold::-moz-placeholder {
  font-weight: 700;
}

.placeholder\:font-bold::placeholder {
  font-weight: 700;
}

.placeholder\:text-inherit::-moz-placeholder {
  color: inherit;
}

.placeholder\:text-inherit::placeholder {
  color: inherit;
}

.placeholder\:opacity-40::-moz-placeholder {
  opacity: 0.4;
}

.placeholder\:opacity-40::placeholder {
  opacity: 0.4;
}

.placeholder\:opacity-60::-moz-placeholder {
  opacity: 0.6;
}

.placeholder\:opacity-60::placeholder {
  opacity: 0.6;
}

.after\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\:start-\[2px\]::after {
  content: var(--tw-content);
  inset-inline-start: 2px;
}

.after\:top-\[2px\]::after {
  content: var(--tw-content);
  top: 2px;
}

.after\:h-5::after {
  content: var(--tw-content);
  height: 1.25rem;
}

.after\:w-5::after {
  content: var(--tw-content);
  width: 1.25rem;
}

.after\:rounded-full::after {
  content: var(--tw-content);
  border-radius: 9999px;
}

.after\:border::after {
  content: var(--tw-content);
  border-width: 1px;
}

.after\:border-gray-300::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));
}

.after\:bg-white::after {
  content: var(--tw-content);
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}

.after\:transition-all::after {
  content: var(--tw-content);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.after\:content-\[\'\'\]::after {
  --tw-content: '';
  content: var(--tw-content);
}

.last\:border-b-0:last-child {
  border-bottom-width: 0px;
}

.last\:border-r:last-child {
  border-right-width: 1px;
}

.odd\:bg-white\/5:nth-child(odd) {
  background-color: rgb(255 255 255 / 0.05);
}

.even\:bg-transparent:nth-child(even) {
  background-color: transparent;
}

.even\:bg-white\/10:nth-child(even) {
  background-color: rgb(255 255 255 / 0.1);
}

.focus-within\:ring-0:focus-within {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.hover\:z-10:hover {
  z-index: 10;
}

.hover\:z-20:hover {
  z-index: 20;
}

.hover\:box-border:hover {
  box-sizing: border-box;
}

.hover\:\!scale-100:hover {
  --tw-scale-x: 1 !important;
  --tw-scale-y: 1 !important;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y)) !important;
}

.hover\:scale-100:hover {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:scale-105:hover {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:scale-110:hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:scale-\[1\.02\]:hover {
  --tw-scale-x: 1.02;
  --tw-scale-y: 1.02;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:scale-\[1\.09\]:hover {
  --tw-scale-x: 1.09;
  --tw-scale-y: 1.09;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:scale-\[1\]:hover {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\:cursor-move:hover {
  cursor: move;
}

.hover\:cursor-pointer:hover {
  cursor: pointer;
}

.hover\:rounded:hover {
  border-radius: 0.25rem;
}

.hover\:border:hover {
  border-width: 1px;
}

.hover\:\!border-line-border\/80:hover {
  border-color: rgba(var(--line-border-color), 0.8) !important;
}

.hover\:border-box-font:hover {
  --tw-border-opacity: 1;
  border-color: rgba(var(--box-font-color), var(--tw-border-opacity, 1));
}

.hover\:border-box-font\/20:hover {
  border-color: rgba(var(--box-font-color), 0.2);
}

.hover\:border-box-font\/30:hover {
  border-color: rgba(var(--box-font-color), 0.3);
}

.hover\:border-box-font\/50:hover {
  border-color: rgba(var(--box-font-color), 0.5);
}

.hover\:border-box-font\/70:hover {
  border-color: rgba(var(--box-font-color), 0.7);
}

.hover\:border-line-border\/50:hover {
  border-color: rgba(var(--line-border-color), 0.5);
}

.hover\:border-primary-four:hover {
  --tw-border-opacity: 1;
  border-color: rgb(21 89 125 / var(--tw-border-opacity, 1));
}

.hover\:border-primary-one:hover {
  --tw-border-opacity: 1;
  border-color: rgb(28 28 29 / var(--tw-border-opacity, 1));
}

.hover\:border-secondary-five:hover {
  --tw-border-opacity: 1;
  border-color: rgb(201 201 201 / var(--tw-border-opacity, 1));
}

.hover\:border-secondary-two:hover {
  --tw-border-opacity: 1;
  border-color: rgb(141 141 141 / var(--tw-border-opacity, 1));
}

.hover\:bg-\[\#8bd9bd33\]:hover {
  background-color: #8bd9bd33;
}

.hover\:bg-\[\#f7f7f7\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(247 247 247 / var(--tw-bg-opacity, 1));
}

.hover\:bg-\[var\(--hover-bg-color\)\]:hover {
  background-color: var(--hover-bg-color);
}

.hover\:bg-black:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

.hover\:bg-black\/5:hover {
  background-color: rgb(0 0 0 / 0.05);
}

.hover\:bg-blue-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1));
}

.hover\:bg-box-bg:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-bg-color), var(--tw-bg-opacity, 1));
}

.hover\:bg-box-bg\/10:hover {
  background-color: rgba(var(--box-bg-color), 0.1);
}

.hover\:bg-box-bg\/20:hover {
  background-color: rgba(var(--box-bg-color), 0.2);
}

.hover\:bg-box-bg\/5:hover {
  background-color: rgba(var(--box-bg-color), 0.05);
}

.hover\:bg-box-font:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--box-font-color), var(--tw-bg-opacity, 1));
}

.hover\:bg-box-font\/10:hover {
  background-color: rgba(var(--box-font-color), 0.1);
}

.hover\:bg-box-font\/20:hover {
  background-color: rgba(var(--box-font-color), 0.2);
}

.hover\:bg-box-font\/30:hover {
  background-color: rgba(var(--box-font-color), 0.3);
}

.hover\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
}

.hover\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}

.hover\:bg-gray-200\/40:hover {
  background-color: rgb(229 231 235 / 0.4);
}

.hover\:bg-gray-300\/10:hover {
  background-color: rgb(209 213 219 / 0.1);
}

.hover\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));
}

.hover\:bg-gray-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1));
}

.hover\:bg-gray-500\/10:hover {
  background-color: rgb(107 114 128 / 0.1);
}

.hover\:bg-gray-500\/20:hover {
  background-color: rgb(107 114 128 / 0.2);
}

.hover\:bg-gray-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1));
}

.hover\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));
}

.hover\:bg-gray-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));
}

.hover\:bg-left-sidebar-font:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--left-sidebar-color), var(--tw-bg-opacity, 1));
}

.hover\:bg-primary-four:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(21 89 125 / var(--tw-bg-opacity, 1));
}

.hover\:bg-primary-one:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(28 28 29 / var(--tw-bg-opacity, 1));
}

.hover\:bg-primary-three:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 249 249 / var(--tw-bg-opacity, 1));
}

.hover\:bg-primary-two:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 243 243 / var(--tw-bg-opacity, 1));
}

.hover\:bg-red-300:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(252 165 165 / var(--tw-bg-opacity, 1));
}

.hover\:bg-red-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}

.hover\:bg-right-sidebar-font:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(var(--right-sidebar-color, var(--tw-bg-opacity, 1)));
}

.hover\:bg-secondary-five:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(201 201 201 / var(--tw-bg-opacity, 1));
}

.hover\:bg-slate-400\/20:hover {
  background-color: rgb(148 163 184 / 0.2);
}

.hover\:bg-slate-500\/20:hover {
  background-color: rgb(100 116 139 / 0.2);
}

.hover\:bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}

.hover\:bg-white\/10:hover {
  background-color: rgb(255 255 255 / 0.1);
}

.hover\:bg-white\/20:hover {
  background-color: rgb(255 255 255 / 0.2);
}

.hover\:bg-white\/50:hover {
  background-color: rgb(255 255 255 / 0.5);
}

.hover\:bg-opacity-100:hover {
  --tw-bg-opacity: 1;
}

.hover\:bg-opacity-5:hover {
  --tw-bg-opacity: 0.05;
}

.hover\:fill-black:hover {
  fill: #000;
}

.hover\:font-bold:hover {
  font-weight: 700;
}

.hover\:font-semibold:hover {
  font-weight: 600;
}

.hover\:text-black:hover {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}

.hover\:text-blue-500:hover {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity, 1));
}

.hover\:text-box-bg:hover {
  --tw-text-opacity: 1;
  color: rgba(var(--box-bg-color), var(--tw-text-opacity, 1));
}

.hover\:text-box-font:hover {
  --tw-text-opacity: 1;
  color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
}

.hover\:text-gray-500:hover {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}

.hover\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity, 1));
}

.hover\:text-left-sidebar-bg:hover {
  --tw-text-opacity: 1;
  color: rgba(var(--left-sidebar-bg-color), var(--tw-text-opacity, 1));
}

.hover\:text-primary-four:hover {
  --tw-text-opacity: 1;
  color: rgb(21 89 125 / var(--tw-text-opacity, 1));
}

.hover\:text-primary-one:hover {
  --tw-text-opacity: 1;
  color: rgb(28 28 29 / var(--tw-text-opacity, 1));
}

.hover\:text-red-300:hover {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}

.hover\:text-red-500:hover {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}

.hover\:text-right-sidebar-bg:hover {
  --tw-text-opacity: 1;
  color: rgba(var(--right-sidebar-bg-color), var(--tw-text-opacity, 1));
}

.hover\:text-secondary-one:hover {
  --tw-text-opacity: 1;
  color: rgb(61 61 61 / var(--tw-text-opacity, 1));
}

.hover\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.hover\:underline:hover {
  text-decoration-line: underline;
}

.hover\:\!opacity-100:hover {
  opacity: 1 !important;
}

.hover\:opacity-100:hover {
  opacity: 1;
}

.hover\:opacity-40:hover {
  opacity: 0.4;
}

.hover\:opacity-60:hover {
  opacity: 0.6;
}

.hover\:opacity-70:hover {
  opacity: 0.7;
}

.hover\:opacity-75:hover {
  opacity: 0.75;
}

.hover\:opacity-80:hover {
  opacity: 0.8;
}

.hover\:opacity-90:hover {
  opacity: 0.9;
}

.hover\:shadow:hover {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\:shadow-one:hover {
  --tw-shadow: 0 6px 15px rgba(35, 39, 47, 0.13);
  --tw-shadow-colored: 0 6px 15px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\:outline-\[10px\]:hover {
  outline-width: 10px;
}

.hover\:ring-2:hover {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.hover\:ring-8:hover {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.hover\:ring-line-border\/20:hover {
  --tw-ring-color: rgba(var(--line-border-color), 0.2);
}

.hover\:brightness-90:hover {
  --tw-brightness: brightness(.9);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.hover\:backdrop-blur-sm:hover {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}

.focus\:border:focus {
  border-width: 1px;
}

.focus\:border-box-font\/40:focus {
  border-color: rgba(var(--box-font-color), 0.4);
}

.focus\:border-secondary-five:focus {
  --tw-border-opacity: 1;
  border-color: rgb(201 201 201 / var(--tw-border-opacity, 1));
}

.focus\:bg-box-bg\/10:focus {
  background-color: rgba(var(--box-bg-color), 0.1);
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity, 1));
}

.focus\:ring-indigo-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity, 1));
}

.focus\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.active\:cursor-grabbing:active {
  cursor: grabbing;
}

.active\:ring-8:active {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.disabled\:pointer-events-none:disabled {
  pointer-events: none;
}

.disabled\:cursor-default:disabled {
  cursor: default;
}

.disabled\:bg-gray-100:disabled {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));
}

.disabled\:opacity-50:disabled {
  opacity: 0.5;
}

.disabled\:opacity-60:disabled {
  opacity: 0.6;
}

.disabled\:opacity-70:disabled {
  opacity: 0.7;
}

.disabled\:hover\:cursor-default:hover:disabled {
  cursor: default;
}

.group:hover .group-hover\:pointer-events-auto {
  pointer-events: auto;
}

.group\/\\32:hover .group-hover\/2\:visible {
  visibility: visible;
}

.group:hover .group-hover\:visible {
  visibility: visible;
}

.group:hover .group-hover\:block {
  display: block;
}

.group\/collaps:hover .group-hover\/collaps\:inline-block {
  display: inline-block;
}

.group:hover .group-hover\:inline-block {
  display: inline-block;
}

.group\/dropdown:hover .group-hover\/dropdown\:flex {
  display: flex;
}

.group\/parent:hover .group-hover\/parent\:flex {
  display: flex;
}

.group:hover .group-hover\:flex {
  display: flex;
}

.group:hover .group-hover\:grid {
  display: grid;
}

.group:hover .group-hover\:hidden {
  display: none;
}

.group:hover .group-hover\:h-6 {
  height: 1.5rem;
}

.group:hover .group-hover\:w-6 {
  width: 1.5rem;
}

.group:hover .group-hover\:translate-x-1 {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\:rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\:rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\:scale-105 {
  --tw-scale-x: 1.05;
  --tw-scale-y: 1.05;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\:scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\:text-box-font {
  --tw-text-opacity: 1;
  color: rgba(var(--box-font-color), var(--tw-text-opacity, 1));
}

.group:hover .group-hover\:text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\:text-inherit {
  color: inherit;
}

.group:hover .group-hover\:text-primary-four {
  --tw-text-opacity: 1;
  color: rgb(21 89 125 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\:text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.group:hover .group-hover\:opacity-80 {
  opacity: 0.8;
}

.group:hover .group-hover\:brightness-50 {
  --tw-brightness: brightness(.5);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.peer:checked ~ .peer-checked\:bg-blue-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1));
}

.peer:checked ~ .peer-checked\:after\:translate-x-full::after {
  content: var(--tw-content);
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.peer:checked ~ .peer-checked\:after\:border-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.peer:focus ~ .peer-focus\:outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

@container (min-width: 36rem) {

  .\@xl\:gap-4 {
    gap: 1rem;
  }
}

@container (min-width: 48rem) {

  .\@3xl\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

@container (min-width: 56rem) {

  .\@4xl\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@container (min-width: 1400px) {

  .\@\[1400px\]\:w-\[530px\] {
    width: 530px;
  }
}

@media not all and (min-width: 1900px) {

  .max-3xl\:fixed {
    position: fixed;
  }

  .max-3xl\:absolute {
    position: absolute;
  }

  .max-3xl\:inset-0 {
    inset: 0px;
  }

  .max-3xl\:-right-10 {
    right: -2.5rem;
  }

  .max-3xl\:left-auto {
    left: auto;
  }

  .max-3xl\:right-0 {
    right: 0px;
  }

  .max-3xl\:right-auto {
    right: auto;
  }

  .max-3xl\:top-0 {
    top: 0px;
  }

  .max-3xl\:z-\[9999999\] {
    z-index: 9999999;
  }

  .max-3xl\:z-\[999999\] {
    z-index: 999999;
  }

  .max-3xl\:mt-5 {
    margin-top: 1.25rem;
  }

  .max-3xl\:block {
    display: block;
  }

  .max-3xl\:hidden {
    display: none;
  }

  .max-3xl\:h-\[calc\(100vh-90px\)\] {
    height: calc(100vh - 90px);
  }

  .max-3xl\:scale-150 {
    --tw-scale-x: 1.5;
    --tw-scale-y: 1.5;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .max-3xl\:border-r {
    border-right-width: 1px;
  }

  .max-3xl\:pr-4 {
    padding-right: 1rem;
  }
}

@media not all and (min-width: 1536px) {

  .max-2xl\:mb-\[30px\] {
    margin-bottom: 30px;
  }

  .max-2xl\:hidden {
    display: none;
  }

  .max-2xl\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .max-2xl\:flex-col {
    flex-direction: column;
  }

  .max-2xl\:gap-0 {
    gap: 0px;
  }

  .max-2xl\:divide-y > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-y-reverse: 0;
    border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
    border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
  }
}

@media not all and (min-width: 1280px) {

  .max-xl\:fixed {
    position: fixed;
  }

  .max-xl\:absolute {
    position: absolute;
  }

  .max-xl\:mb-5 {
    margin-bottom: 1.25rem;
  }

  .max-xl\:mt-10 {
    margin-top: 2.5rem;
  }

  .max-xl\:block {
    display: block;
  }

  .max-xl\:\!hidden {
    display: none !important;
  }

  .max-xl\:w-\[90\%\] {
    width: 90%;
  }

  .max-xl\:max-w-\[90\%\] {
    max-width: 90%;
  }

  .max-xl\:scale-75 {
    --tw-scale-x: .75;
    --tw-scale-y: .75;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .max-xl\:flex-col {
    flex-direction: column;
  }

  .max-xl\:flex-wrap {
    flex-wrap: wrap;
  }

  .max-xl\:bg-\[var\(--bgColor\)\] {
    background-color: var(--bgColor);
  }

  .max-xl\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .max-xl\:pt-10 {
    padding-top: 2.5rem;
  }

  .max-xl\:pt-14 {
    padding-top: 3.5rem;
  }
}

@media not all and (min-width: 1024px) {

  .max-lg\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .max-lg\:mt-4 {
    margin-top: 1rem;
  }

  .max-lg\:flex {
    display: flex;
  }

  .max-lg\:hidden {
    display: none;
  }

  .max-lg\:min-h-\[180px\] {
    min-height: 180px;
  }

  .max-lg\:flex-col {
    flex-direction: column;
  }

  .max-lg\:flex-col-reverse {
    flex-direction: column-reverse;
  }

  .max-lg\:rounded-t {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .max-lg\:border-b {
    border-bottom-width: 1px;
  }

  .max-lg\:\!pt-\[85px\] {
    padding-top: 85px !important;
  }
}

@media not all and (min-width: 768px) {

  .max-md\:absolute {
    position: absolute;
  }

  .max-md\:sticky {
    position: sticky;
  }

  .max-md\:\!-left-\[0px\] {
    left: -0px !important;
  }

  .max-md\:\!-left-\[70px\] {
    left: -70px !important;
  }

  .max-md\:left-0 {
    left: 0px;
  }

  .max-md\:top-0 {
    top: 0px;
  }

  .max-md\:top-full {
    top: 100%;
  }

  .max-md\:z-20 {
    z-index: 20;
  }

  .max-md\:mx-5 {
    margin-left: 1.25rem;
    margin-right: 1.25rem;
  }

  .max-md\:my-5 {
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .max-md\:-ml-5 {
    margin-left: -1.25rem;
  }

  .max-md\:mb-5 {
    margin-bottom: 1.25rem;
  }

  .max-md\:mt-3 {
    margin-top: 0.75rem;
  }

  .max-md\:inline-block {
    display: inline-block;
  }

  .max-md\:hidden {
    display: none;
  }

  .max-md\:h-9 {
    height: 2.25rem;
  }

  .max-md\:w-9 {
    width: 2.25rem;
  }

  .max-md\:w-\[80vw\] {
    width: 80vw;
  }

  .max-md\:w-\[calc\(100\%\+40px\)\] {
    width: calc(100% + 40px);
  }

  .max-md\:w-full {
    width: 100%;
  }

  .max-md\:flex-1 {
    flex: 1 1 0%;
  }

  .max-md\:origin-bottom {
    transform-origin: bottom;
  }

  .max-md\:origin-top-right {
    transform-origin: top right;
  }

  .max-md\:scale-75 {
    --tw-scale-x: .75;
    --tw-scale-y: .75;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .max-md\:scale-\[0\.70\] {
    --tw-scale-x: 0.70;
    --tw-scale-y: 0.70;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .max-md\:flex-col {
    flex-direction: column;
  }

  .max-md\:flex-wrap {
    flex-wrap: wrap;
  }

  .max-md\:justify-end {
    justify-content: flex-end;
  }

  .max-md\:justify-between {
    justify-content: space-between;
  }

  .max-md\:gap-x-1 {
    -moz-column-gap: 0.25rem;
         column-gap: 0.25rem;
  }

  .max-md\:overflow-auto {
    overflow: auto;
  }

  .max-md\:rounded {
    border-radius: 0.25rem;
  }

  .max-md\:border-l-0 {
    border-left-width: 0px;
  }

  .max-md\:border-t {
    border-top-width: 1px;
  }

  .max-md\:bg-\[\#484848\] {
    --tw-bg-opacity: 1;
    background-color: rgb(72 72 72 / var(--tw-bg-opacity, 1));
  }

  .max-md\:bg-\[var\(--boxBg\)\] {
    background-color: var(--boxBg);
  }

  .max-md\:bg-\[var\(--dynamicBg\)\] {
    background-color: var(--dynamicBg);
  }

  .max-md\:px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .max-md\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .max-md\:py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .max-md\:py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .max-md\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .max-md\:text-center {
    text-align: center;
  }

  .max-md\:text-\[14px\] {
    font-size: 14px;
  }

  .max-md\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .max-md\:leading-\[30px\] {
    line-height: 30px;
  }

  .max-md\:backdrop-blur-xl {
    --tw-backdrop-blur: blur(24px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  }

  .group:hover .max-md\:group-hover\:flex {
    display: flex;
  }
}

@media (max-width: 650px) {

  .max-\[650px\]\:flex-col {
    flex-direction: column;
  }
}

@media not all and (min-width: 460px) {

  .max-xsm\:flex-col-reverse {
    flex-direction: column-reverse;
  }
}

@media not all and (min-width: 360px) {

  .max-sm\:table-cell {
    display: table-cell;
  }

  .max-sm\:flex-col {
    flex-direction: column;
  }

  .max-sm\:pl-2 {
    padding-left: 0.5rem;
  }
}

@media (min-width: 360px) {

  .sm\:right-full {
    right: 100%;
  }

  .sm\:-mx-6 {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }

  .sm\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .sm\:mr-3 {
    margin-right: 0.75rem;
  }

  .sm\:block {
    display: block;
  }

  .sm\:inline-block {
    display: inline-block;
  }

  .sm\:flex {
    display: flex;
  }

  .sm\:size-\[20px\] {
    width: 20px;
    height: 20px;
  }

  .sm\:size-\[30px\] {
    width: 30px;
    height: 30px;
  }

  .sm\:h-screen {
    height: 100vh;
  }

  .sm\:translate-x-0 {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\:translate-x-2 {
    --tw-translate-x: 0.5rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\:translate-y-0 {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\:scale-\[0\.7\] {
    --tw-scale-x: 0.7;
    --tw-scale-y: 0.7;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\:items-start {
    align-items: flex-start;
  }

  .sm\:items-end {
    align-items: flex-end;
  }

  .sm\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\:p-0 {
    padding: 0px;
  }

  .sm\:p-6 {
    padding: 1.5rem;
  }

  .sm\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sm\:align-middle {
    vertical-align: middle;
  }

  .sm\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .sm\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 460px) {

  .xsm\:mb-0 {
    margin-bottom: 0px;
  }

  .xsm\:flex {
    display: flex;
  }

  .xsm\:size-6 {
    width: 1.5rem;
    height: 1.5rem;
  }

  .xsm\:size-\[60px\] {
    width: 60px;
    height: 60px;
  }

  .xsm\:w-20 {
    width: 5rem;
  }

  .xsm\:w-\[172px\] {
    width: 172px;
  }

  .xsm\:w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }

  .xsm\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .xsm\:flex-row {
    flex-direction: row;
  }

  .xsm\:justify-center {
    justify-content: center;
  }

  .xsm\:truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .xsm\:text-\[15px\] {
    font-size: 15px;
  }

  .xsm\:text-\[16px\] {
    font-size: 16px;
  }

  .xsm\:text-\[20px\] {
    font-size: 20px;
  }
}

@media (min-width: 640px) {

  .xmd\:mt-0 {
    margin-top: 0px;
  }

  .xmd\:h-\[50px\] {
    height: 50px;
  }

  .xmd\:w-\[400px\] {
    width: 400px;
  }

  .xmd\:w-auto {
    width: auto;
  }

  .xmd\:flex-nowrap {
    flex-wrap: nowrap;
  }

  .xmd\:justify-start {
    justify-content: flex-start;
  }

  .xmd\:rounded-r-lg {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
  }

  .xmd\:rounded-tr-lg {
    border-top-right-radius: 0.5rem;
  }

  .xmd\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

@media (min-width: 768px) {

  .md\:static {
    position: static;
  }

  .md\:absolute {
    position: absolute;
  }

  .md\:relative {
    position: relative;
  }

  .md\:sticky {
    position: sticky;
  }

  .md\:inset-0 {
    inset: 0px;
  }

  .md\:-top-3 {
    top: -0.75rem;
  }

  .md\:-top-5 {
    top: -1.25rem;
  }

  .md\:bottom-0 {
    bottom: 0px;
  }

  .md\:left-1\/2 {
    left: 50%;
  }

  .md\:left-6 {
    left: 1.5rem;
  }

  .md\:right-0 {
    right: 0px;
  }

  .md\:right-5 {
    right: 1.25rem;
  }

  .md\:top-0 {
    top: 0px;
  }

  .md\:top-1\/2 {
    top: 50%;
  }

  .md\:top-6 {
    top: 1.5rem;
  }

  .md\:order-1 {
    order: 1;
  }

  .md\:col-span-1 {
    grid-column: span 1 / span 1;
  }

  .md\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .md\:-mx-10 {
    margin-left: -2.5rem;
    margin-right: -2.5rem;
  }

  .md\:mx-0 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .md\:my-12 {
    margin-top: 3rem;
    margin-bottom: 3rem;
  }

  .md\:-ml-10 {
    margin-left: -2.5rem;
  }

  .md\:-mr-10 {
    margin-right: -2.5rem;
  }

  .md\:-mt-8 {
    margin-top: -2rem;
  }

  .md\:mb-0 {
    margin-bottom: 0px;
  }

  .md\:mb-1 {
    margin-bottom: 0.25rem;
  }

  .md\:mb-10 {
    margin-bottom: 2.5rem;
  }

  .md\:mb-11 {
    margin-bottom: 2.75rem;
  }

  .md\:mb-5 {
    margin-bottom: 1.25rem;
  }

  .md\:mb-\[30px\] {
    margin-bottom: 30px;
  }

  .md\:ml-0 {
    margin-left: 0px;
  }

  .md\:ml-2 {
    margin-left: 0.5rem;
  }

  .md\:ml-auto {
    margin-left: auto;
  }

  .md\:mr-0 {
    margin-right: 0px;
  }

  .md\:mr-10 {
    margin-right: 2.5rem;
  }

  .md\:mr-3 {
    margin-right: 0.75rem;
  }

  .md\:mr-7 {
    margin-right: 1.75rem;
  }

  .md\:mr-auto {
    margin-right: auto;
  }

  .md\:mt-0 {
    margin-top: 0px;
  }

  .md\:mt-1 {
    margin-top: 0.25rem;
  }

  .md\:mt-10 {
    margin-top: 2.5rem;
  }

  .md\:mt-12 {
    margin-top: 3rem;
  }

  .md\:mt-2 {
    margin-top: 0.5rem;
  }

  .md\:mt-5 {
    margin-top: 1.25rem;
  }

  .md\:mt-6 {
    margin-top: 1.5rem;
  }

  .md\:mt-7 {
    margin-top: 1.75rem;
  }

  .md\:mt-8 {
    margin-top: 2rem;
  }

  .md\:mt-9 {
    margin-top: 2.25rem;
  }

  .md\:mt-\[38px\] {
    margin-top: 38px;
  }

  .md\:mt-\[63px\] {
    margin-top: 63px;
  }

  .md\:line-clamp-none {
    overflow: visible;
    display: block;
    -webkit-box-orient: horizontal;
    -webkit-line-clamp: none;
  }

  .md\:block {
    display: block;
  }

  .md\:inline-block {
    display: inline-block;
  }

  .md\:inline {
    display: inline;
  }

  .md\:flex {
    display: flex;
  }

  .md\:table-cell {
    display: table-cell;
  }

  .md\:grid {
    display: grid;
  }

  .md\:hidden {
    display: none;
  }

  .md\:size-10 {
    width: 2.5rem;
    height: 2.5rem;
  }

  .md\:size-8 {
    width: 2rem;
    height: 2rem;
  }

  .md\:size-9 {
    width: 2.25rem;
    height: 2.25rem;
  }

  .md\:size-\[100px\] {
    width: 100px;
    height: 100px;
  }

  .md\:size-\[110px\] {
    width: 110px;
    height: 110px;
  }

  .md\:size-\[24px\] {
    width: 24px;
    height: 24px;
  }

  .md\:size-\[29px\] {
    width: 29px;
    height: 29px;
  }

  .md\:size-\[35px\] {
    width: 35px;
    height: 35px;
  }

  .md\:h-10 {
    height: 2.5rem;
  }

  .md\:h-5 {
    height: 1.25rem;
  }

  .md\:h-6 {
    height: 1.5rem;
  }

  .md\:h-7 {
    height: 1.75rem;
  }

  .md\:h-8 {
    height: 2rem;
  }

  .md\:h-\[110px\] {
    height: 110px;
  }

  .md\:h-\[150px\] {
    height: 150px;
  }

  .md\:h-\[35px\] {
    height: 35px;
  }

  .md\:h-\[38px\] {
    height: 38px;
  }

  .md\:h-\[40px\] {
    height: 40px;
  }

  .md\:h-\[54px\] {
    height: 54px;
  }

  .md\:h-\[55px\] {
    height: 55px;
  }

  .md\:h-\[60px\] {
    height: 60px;
  }

  .md\:h-\[61px\] {
    height: 61px;
  }

  .md\:h-\[705px\] {
    height: 705px;
  }

  .md\:h-\[890px\] {
    height: 890px;
  }

  .md\:h-\[calc\(100dvh-140px\)\] {
    height: calc(100dvh - 140px);
  }

  .md\:h-\[calc\(100dvh-74px\)\] {
    height: calc(100dvh - 74px);
  }

  .md\:h-\[calc\(100svh-165px\)\] {
    height: calc(100svh - 165px);
  }

  .md\:h-\[calc\(100vh-60px\)\] {
    height: calc(100vh - 60px);
  }

  .md\:h-full {
    height: 100%;
  }

  .md\:\!min-h-\[120px\] {
    min-height: 120px !important;
  }

  .md\:\!min-h-\[140px\] {
    min-height: 140px !important;
  }

  .md\:\!min-h-\[150px\] {
    min-height: 150px !important;
  }

  .md\:min-h-\[110px\] {
    min-height: 110px;
  }

  .md\:min-h-\[128px\] {
    min-height: 128px;
  }

  .md\:min-h-\[133px\] {
    min-height: 133px;
  }

  .md\:min-h-\[184px\] {
    min-height: 184px;
  }

  .md\:min-h-\[80px\] {
    min-height: 80px;
  }

  .md\:w-1\/2 {
    width: 50%;
  }

  .md\:w-10 {
    width: 2.5rem;
  }

  .md\:w-5 {
    width: 1.25rem;
  }

  .md\:w-6 {
    width: 1.5rem;
  }

  .md\:w-7 {
    width: 1.75rem;
  }

  .md\:w-8 {
    width: 2rem;
  }

  .md\:w-\[100px\] {
    width: 100px;
  }

  .md\:w-\[1316px\] {
    width: 1316px;
  }

  .md\:w-\[154\.65px\] {
    width: 154.65px;
  }

  .md\:w-\[160px\] {
    width: 160px;
  }

  .md\:w-\[200px\] {
    width: 200px;
  }

  .md\:w-\[20px\] {
    width: 20px;
  }

  .md\:w-\[260px\] {
    width: 260px;
  }

  .md\:w-\[262px\] {
    width: 262px;
  }

  .md\:w-\[278px\] {
    width: 278px;
  }

  .md\:w-\[300px\] {
    width: 300px;
  }

  .md\:w-\[310px\] {
    width: 310px;
  }

  .md\:w-\[35px\] {
    width: 35px;
  }

  .md\:w-\[400px\] {
    width: 400px;
  }

  .md\:w-\[40px\] {
    width: 40px;
  }

  .md\:w-\[470px\] {
    width: 470px;
  }

  .md\:w-\[50\%\] {
    width: 50%;
  }

  .md\:w-\[540px\] {
    width: 540px;
  }

  .md\:w-\[60px\] {
    width: 60px;
  }

  .md\:w-\[61px\] {
    width: 61px;
  }

  .md\:w-\[624px\] {
    width: 624px;
  }

  .md\:w-\[64px\] {
    width: 64px;
  }

  .md\:w-\[663px\] {
    width: 663px;
  }

  .md\:w-\[70px\] {
    width: 70px;
  }

  .md\:w-\[70vw\] {
    width: 70vw;
  }

  .md\:w-\[71px\] {
    width: 71px;
  }

  .md\:w-\[calc\(100\%-205px-15px\)\] {
    width: calc(100% - 205px - 15px);
  }

  .md\:w-\[calc\(100vw-70px\)\] {
    width: calc(100vw - 70px);
  }

  .md\:w-full {
    width: 100%;
  }

  .md\:min-w-\[177px\] {
    min-width: 177px;
  }

  .md\:min-w-\[280px\] {
    min-width: 280px;
  }

  .md\:min-w-\[300px\] {
    min-width: 300px;
  }

  .md\:min-w-\[350px\] {
    min-width: 350px;
  }

  .md\:min-w-\[500px\] {
    min-width: 500px;
  }

  .md\:max-w-\[300px\] {
    max-width: 300px;
  }

  .md\:max-w-\[360px\] {
    max-width: 360px;
  }

  .md\:max-w-\[361px\] {
    max-width: 361px;
  }

  .md\:max-w-\[392px\] {
    max-width: 392px;
  }

  .md\:max-w-\[500px\] {
    max-width: 500px;
  }

  .md\:max-w-\[calc\(100\%-410px-40px\)\] {
    max-width: calc(100% - 410px - 40px);
  }

  .md\:max-w-\[calc\(100vw-200px\)\] {
    max-width: calc(100vw - 200px);
  }

  .md\:max-w-full {
    max-width: 100%;
  }

  .md\:flex-grow {
    flex-grow: 1;
  }

  .md\:-translate-x-0 {
    --tw-translate-x: -0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .md\:-translate-x-1\/2 {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .md\:-translate-y-0 {
    --tw-translate-y: -0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .md\:translate-x-0 {
    --tw-translate-x: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .md\:scale-100 {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .md\:columns-2 {
    -moz-columns: 2;
         columns: 2;
  }

  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\:flex-row {
    flex-direction: row;
  }

  .md\:flex-col {
    flex-direction: column;
  }

  .md\:flex-nowrap {
    flex-wrap: nowrap;
  }

  .md\:items-start {
    align-items: flex-start;
  }

  .md\:items-end {
    align-items: flex-end;
  }

  .md\:items-center {
    align-items: center;
  }

  .md\:justify-start {
    justify-content: flex-start;
  }

  .md\:justify-between {
    justify-content: space-between;
  }

  .md\:gap-0 {
    gap: 0px;
  }

  .md\:gap-10 {
    gap: 2.5rem;
  }

  .md\:gap-11 {
    gap: 2.75rem;
  }

  .md\:gap-12 {
    gap: 3rem;
  }

  .md\:gap-3 {
    gap: 0.75rem;
  }

  .md\:gap-3\.5 {
    gap: 0.875rem;
  }

  .md\:gap-4 {
    gap: 1rem;
  }

  .md\:gap-5 {
    gap: 1.25rem;
  }

  .md\:gap-6 {
    gap: 1.5rem;
  }

  .md\:gap-8 {
    gap: 2rem;
  }

  .md\:gap-\[10px\] {
    gap: 10px;
  }

  .md\:gap-\[15px\] {
    gap: 15px;
  }

  .md\:gap-\[18px\] {
    gap: 18px;
  }

  .md\:gap-\[30px\] {
    gap: 30px;
  }

  .md\:gap-\[40px\] {
    gap: 40px;
  }

  .md\:gap-\[60px\] {
    gap: 60px;
  }

  .md\:gap-x-3 {
    -moz-column-gap: 0.75rem;
         column-gap: 0.75rem;
  }

  .md\:gap-x-4 {
    -moz-column-gap: 1rem;
         column-gap: 1rem;
  }

  .md\:gap-x-6 {
    -moz-column-gap: 1.5rem;
         column-gap: 1.5rem;
  }

  .md\:gap-x-\[22px\] {
    -moz-column-gap: 22px;
         column-gap: 22px;
  }

  .md\:gap-x-\[30px\] {
    -moz-column-gap: 30px;
         column-gap: 30px;
  }

  .md\:gap-x-\[34px\] {
    -moz-column-gap: 34px;
         column-gap: 34px;
  }

  .md\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .md\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .md\:space-y-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1rem * var(--tw-space-y-reverse));
  }

  .md\:space-y-\[36px\] > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(36px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(36px * var(--tw-space-y-reverse));
  }

  .md\:divide-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-y-reverse: 0;
    border-top-width: calc(0px * calc(1 - var(--tw-divide-y-reverse)));
    border-bottom-width: calc(0px * var(--tw-divide-y-reverse));
  }

  .md\:overflow-y-auto {
    overflow-y: auto;
  }

  .md\:truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .md\:whitespace-nowrap {
    white-space: nowrap;
  }

  .md\:rounded-lg {
    border-radius: 0.5rem;
  }

  .md\:\!rounded-l-none {
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }

  .md\:\!rounded-r {
    border-top-right-radius: 0.25rem !important;
    border-bottom-right-radius: 0.25rem !important;
  }

  .md\:border {
    border-width: 1px;
  }

  .md\:border-b {
    border-bottom-width: 1px;
  }

  .md\:border-b-0 {
    border-bottom-width: 0px;
  }

  .md\:border-l {
    border-left-width: 1px;
  }

  .md\:border-l-0 {
    border-left-width: 0px;
  }

  .md\:border-r {
    border-right-width: 1px;
  }

  .md\:bg-transparent {
    background-color: transparent;
  }

  .md\:\!p-1 {
    padding: 0.25rem !important;
  }

  .md\:p-0 {
    padding: 0px;
  }

  .md\:p-10 {
    padding: 2.5rem;
  }

  .md\:p-2 {
    padding: 0.5rem;
  }

  .md\:p-2\.5 {
    padding: 0.625rem;
  }

  .md\:p-5 {
    padding: 1.25rem;
  }

  .md\:p-6 {
    padding: 1.5rem;
  }

  .md\:p-7 {
    padding: 1.75rem;
  }

  .md\:p-\[30px\] {
    padding: 30px;
  }

  .md\:p-\[40px\] {
    padding: 40px;
  }

  .md\:\!py-1 {
    padding-top: 0.25rem !important;
    padding-bottom: 0.25rem !important;
  }

  .md\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .md\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .md\:px-12 {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .md\:px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .md\:px-20 {
    padding-left: 5rem;
    padding-right: 5rem;
  }

  .md\:px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .md\:px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .md\:px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .md\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\:px-7 {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }

  .md\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .md\:px-9 {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }

  .md\:px-\[16px\] {
    padding-left: 16px;
    padding-right: 16px;
  }

  .md\:px-\[18px\] {
    padding-left: 18px;
    padding-right: 18px;
  }

  .md\:px-\[20px\] {
    padding-left: 20px;
    padding-right: 20px;
  }

  .md\:px-\[23px\] {
    padding-left: 23px;
    padding-right: 23px;
  }

  .md\:px-\[26px\] {
    padding-left: 26px;
    padding-right: 26px;
  }

  .md\:px-\[34px\] {
    padding-left: 34px;
    padding-right: 34px;
  }

  .md\:px-\[40px\] {
    padding-left: 40px;
    padding-right: 40px;
  }

  .md\:px-\[45px\] {
    padding-left: 45px;
    padding-right: 45px;
  }

  .md\:px-\[55px\] {
    padding-left: 55px;
    padding-right: 55px;
  }

  .md\:px-\[70px\] {
    padding-left: 70px;
    padding-right: 70px;
  }

  .md\:py-0 {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .md\:py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }

  .md\:py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .md\:py-14 {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  .md\:py-2\.5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }

  .md\:py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }

  .md\:py-7 {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
  }

  .md\:py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .md\:py-\[10px\] {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .md\:py-\[14px\] {
    padding-top: 14px;
    padding-bottom: 14px;
  }

  .md\:py-\[18px\] {
    padding-top: 18px;
    padding-bottom: 18px;
  }

  .md\:py-\[20px\] {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .md\:py-\[24px\] {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .md\:py-\[30px\] {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .md\:py-\[40px\] {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .md\:py-\[48px\] {
    padding-top: 48px;
    padding-bottom: 48px;
  }

  .md\:pb-11 {
    padding-bottom: 2.75rem;
  }

  .md\:pb-\[100px\] {
    padding-bottom: 100px;
  }

  .md\:pb-\[28px\] {
    padding-bottom: 28px;
  }

  .md\:pb-\[50px\] {
    padding-bottom: 50px;
  }

  .md\:pb-\[70px\] {
    padding-bottom: 70px;
  }

  .md\:pb-\[74px\] {
    padding-bottom: 74px;
  }

  .md\:pl-1 {
    padding-left: 0.25rem;
  }

  .md\:pl-10 {
    padding-left: 2.5rem;
  }

  .md\:pl-3 {
    padding-left: 0.75rem;
  }

  .md\:pl-4 {
    padding-left: 1rem;
  }

  .md\:pl-\[19px\] {
    padding-left: 19px;
  }

  .md\:pl-\[22px\] {
    padding-left: 22px;
  }

  .md\:pl-\[35px\] {
    padding-left: 35px;
  }

  .md\:pl-\[50px\] {
    padding-left: 50px;
  }

  .md\:pl-\[56px\] {
    padding-left: 56px;
  }

  .md\:pr-10 {
    padding-right: 2.5rem;
  }

  .md\:pr-12 {
    padding-right: 3rem;
  }

  .md\:pr-5 {
    padding-right: 1.25rem;
  }

  .md\:pr-7 {
    padding-right: 1.75rem;
  }

  .md\:pr-\[38px\] {
    padding-right: 38px;
  }

  .md\:pr-\[44px\] {
    padding-right: 44px;
  }

  .md\:pr-\[52px\] {
    padding-right: 52px;
  }

  .md\:pt-0 {
    padding-top: 0px;
  }

  .md\:pt-10 {
    padding-top: 2.5rem;
  }

  .md\:pt-4 {
    padding-top: 1rem;
  }

  .md\:pt-5 {
    padding-top: 1.25rem;
  }

  .md\:pt-8 {
    padding-top: 2rem;
  }

  .md\:pt-\[100px\] {
    padding-top: 100px;
  }

  .md\:pt-\[127px\] {
    padding-top: 127px;
  }

  .md\:pt-\[145px\] {
    padding-top: 145px;
  }

  .md\:pt-\[28px\] {
    padding-top: 28px;
  }

  .md\:pt-\[30px\] {
    padding-top: 30px;
  }

  .md\:pt-\[36px\] {
    padding-top: 36px;
  }

  .md\:pt-\[40px\] {
    padding-top: 40px;
  }

  .md\:pt-\[50px\] {
    padding-top: 50px;
  }

  .md\:pt-\[58px\] {
    padding-top: 58px;
  }

  .md\:pt-\[64px\] {
    padding-top: 64px;
  }

  .md\:pt-\[74px\] {
    padding-top: 74px;
  }

  .md\:text-left {
    text-align: left;
  }

  .md\:\!text-2xl {
    font-size: 1.5rem !important;
    line-height: 2rem !important;
  }

  .md\:\!text-lg {
    font-size: 1.125rem !important;
    line-height: 1.75rem !important;
  }

  .md\:\!text-xl {
    font-size: 1.25rem !important;
    line-height: 1.75rem !important;
  }

  .md\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .md\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .md\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .md\:text-\[14px\] {
    font-size: 14px;
  }

  .md\:text-\[16px\] {
    font-size: 16px;
  }

  .md\:text-\[17px\] {
    font-size: 17px;
  }

  .md\:text-\[18px\] {
    font-size: 18px;
  }

  .md\:text-\[20px\] {
    font-size: 20px;
  }

  .md\:text-\[22px\] {
    font-size: 22px;
  }

  .md\:text-\[24px\] {
    font-size: 24px;
  }

  .md\:text-\[25px\] {
    font-size: 25px;
  }

  .md\:text-\[26px\] {
    font-size: 26px;
  }

  .md\:text-\[28px\] {
    font-size: 28px;
  }

  .md\:text-\[30px\] {
    font-size: 30px;
  }

  .md\:text-\[35px\] {
    font-size: 35px;
  }

  .md\:text-\[36px\] {
    font-size: 36px;
  }

  .md\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .md\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .md\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .md\:font-\[800\] {
    font-weight: 800;
  }

  .md\:font-bold {
    font-weight: 700;
  }

  .md\:font-semibold {
    font-weight: 600;
  }

  .md\:leading-\[28px\] {
    line-height: 28px;
  }

  .md\:leading-\[30px\] {
    line-height: 30px;
  }

  .md\:leading-normal {
    line-height: 1.5;
  }

  .group:hover .md\:group-hover\:flex {
    display: flex;
  }
}

@media (min-width: 820px) {

  .min-\[820px\]\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}

@media (min-width: 1024px) {

  .lg\:absolute {
    position: absolute;
  }

  .lg\:-right-2 {
    right: -0.5rem;
  }

  .lg\:right-10 {
    right: 2.5rem;
  }

  .lg\:right-7 {
    right: 1.75rem;
  }

  .lg\:top-2\.5 {
    top: 0.625rem;
  }

  .lg\:top-6 {
    top: 1.5rem;
  }

  .lg\:top-\[101px\] {
    top: 101px;
  }

  .lg\:col-span-2 {
    grid-column: span 2 / span 2;
  }

  .lg\:-mx-8 {
    margin-left: -2rem;
    margin-right: -2rem;
  }

  .lg\:mx-12 {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  .lg\:-ml-1\.5 {
    margin-left: -0.375rem;
  }

  .lg\:-ml-10 {
    margin-left: -2.5rem;
  }

  .lg\:-mt-4 {
    margin-top: -1rem;
  }

  .lg\:mb-\[36px\] {
    margin-bottom: 36px;
  }

  .lg\:mr-\[20px\] {
    margin-right: 20px;
  }

  .lg\:mt-10 {
    margin-top: 2.5rem;
  }

  .lg\:mt-8 {
    margin-top: 2rem;
  }

  .lg\:mt-\[72px\] {
    margin-top: 72px;
  }

  .lg\:mt-\[80px\] {
    margin-top: 80px;
  }

  .lg\:block {
    display: block;
  }

  .lg\:inline-block {
    display: inline-block;
  }

  .lg\:flex {
    display: flex;
  }

  .lg\:hidden {
    display: none;
  }

  .lg\:h-\[180px\] {
    height: 180px;
  }

  .lg\:h-\[58px\] {
    height: 58px;
  }

  .lg\:h-\[60px\] {
    height: 60px;
  }

  .lg\:h-\[80vh\] {
    height: 80vh;
  }

  .lg\:h-\[calc\(100\%-60px\)\] {
    height: calc(100% - 60px);
  }

  .lg\:h-\[calc\(100dvh-108px\)\] {
    height: calc(100dvh - 108px);
  }

  .lg\:min-h-20 {
    min-height: 5rem;
  }

  .lg\:min-h-\[137px\] {
    min-height: 137px;
  }

  .lg\:w-40 {
    width: 10rem;
  }

  .lg\:w-\[250px\] {
    width: 250px;
  }

  .lg\:w-\[30\%\] {
    width: 30%;
  }

  .lg\:w-\[341px\] {
    width: 341px;
  }

  .lg\:w-\[35\%\] {
    width: 35%;
  }

  .lg\:w-\[404px\] {
    width: 404px;
  }

  .lg\:w-\[420px\] {
    width: 420px;
  }

  .lg\:w-\[442px\] {
    width: 442px;
  }

  .lg\:w-\[540px\] {
    width: 540px;
  }

  .lg\:w-\[58px\] {
    width: 58px;
  }

  .lg\:w-\[600px\] {
    width: 600px;
  }

  .lg\:w-\[696px\] {
    width: 696px;
  }

  .lg\:w-\[719px\] {
    width: 719px;
  }

  .lg\:w-\[800px\] {
    width: 800px;
  }

  .lg\:w-auto {
    width: auto;
  }

  .lg\:max-w-\[165px\] {
    max-width: 165px;
  }

  .lg\:max-w-\[948px\] {
    max-width: 948px;
  }

  .lg\:flex-1 {
    flex: 1 1 0%;
  }

  .lg\:flex-grow {
    flex-grow: 1;
  }

  .lg\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\:flex-row {
    flex-direction: row;
  }

  .lg\:justify-end {
    justify-content: flex-end;
  }

  .lg\:justify-between {
    justify-content: space-between;
  }

  .lg\:gap-10 {
    gap: 2.5rem;
  }

  .lg\:gap-14 {
    gap: 3.5rem;
  }

  .lg\:gap-5 {
    gap: 1.25rem;
  }

  .lg\:gap-8 {
    gap: 2rem;
  }

  .lg\:gap-x-4 {
    -moz-column-gap: 1rem;
         column-gap: 1rem;
  }

  .lg\:gap-x-\[30px\] {
    -moz-column-gap: 30px;
         column-gap: 30px;
  }

  .lg\:gap-y-10 {
    row-gap: 2.5rem;
  }

  .lg\:space-x-7 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1.75rem * var(--tw-space-x-reverse));
    margin-left: calc(1.75rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .lg\:overflow-auto {
    overflow: auto;
  }

  .lg\:rounded-\[10px\] {
    border-radius: 10px;
  }

  .lg\:rounded-r {
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .lg\:border-l {
    border-left-width: 1px;
  }

  .lg\:border-l-0 {
    border-left-width: 0px;
  }

  .lg\:border-r {
    border-right-width: 1px;
  }

  .lg\:border-none {
    border-style: none;
  }

  .lg\:p-10 {
    padding: 2.5rem;
  }

  .lg\:p-4 {
    padding: 1rem;
  }

  .lg\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .lg\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .lg\:px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .lg\:px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .lg\:px-7 {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }

  .lg\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\:px-\[100px\] {
    padding-left: 100px;
    padding-right: 100px;
  }

  .lg\:px-\[40px\] {
    padding-left: 40px;
    padding-right: 40px;
  }

  .lg\:px-\[50px\] {
    padding-left: 50px;
    padding-right: 50px;
  }

  .lg\:px-\[67px\] {
    padding-left: 67px;
    padding-right: 67px;
  }

  .lg\:py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .lg\:py-2\.5 {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
  }

  .lg\:pb-10 {
    padding-bottom: 2.5rem;
  }

  .lg\:pb-8 {
    padding-bottom: 2rem;
  }

  .lg\:pb-\[100px\] {
    padding-bottom: 100px;
  }

  .lg\:pl-10 {
    padding-left: 2.5rem;
  }

  .lg\:pl-3 {
    padding-left: 0.75rem;
  }

  .lg\:pl-\[64px\] {
    padding-left: 64px;
  }

  .lg\:pl-\[74px\] {
    padding-left: 74px;
  }

  .lg\:pr-10 {
    padding-right: 2.5rem;
  }

  .lg\:pr-11 {
    padding-right: 2.75rem;
  }

  .lg\:pr-14 {
    padding-right: 3.5rem;
  }

  .lg\:pr-3 {
    padding-right: 0.75rem;
  }

  .lg\:pr-6 {
    padding-right: 1.5rem;
  }

  .lg\:pr-8 {
    padding-right: 2rem;
  }

  .lg\:pr-\[30px\] {
    padding-right: 30px;
  }

  .lg\:pt-24 {
    padding-top: 6rem;
  }

  .lg\:pt-6 {
    padding-top: 1.5rem;
  }

  .lg\:pt-\[0px\] {
    padding-top: 0px;
  }

  .lg\:pt-\[100px\] {
    padding-top: 100px;
  }

  .lg\:pt-\[120px\] {
    padding-top: 120px;
  }

  .lg\:pt-\[127px\] {
    padding-top: 127px;
  }

  .lg\:pt-\[40px\] {
    padding-top: 40px;
  }

  .lg\:pt-\[50px\] {
    padding-top: 50px;
  }

  .lg\:pt-\[60px\] {
    padding-top: 60px;
  }

  .lg\:pt-\[80px\] {
    padding-top: 80px;
  }

  .lg\:pt-\[83px\] {
    padding-top: 83px;
  }

  .lg\:text-left {
    text-align: left;
  }

  .lg\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .lg\:text-\[16px\] {
    font-size: 16px;
  }

  .lg\:text-\[18px\] {
    font-size: 18px;
  }

  .lg\:text-\[20px\] {
    font-size: 20px;
  }

  .lg\:text-\[22px\] {
    font-size: 22px;
  }

  .lg\:text-\[24px\] {
    font-size: 24px;
  }

  .lg\:text-\[28px\] {
    font-size: 28px;
  }

  .lg\:text-\[31px\] {
    font-size: 31px;
  }

  .lg\:text-\[32px\] {
    font-size: 32px;
  }

  .lg\:text-\[35px\] {
    font-size: 35px;
  }

  .lg\:text-\[52px\] {
    font-size: 52px;
  }

  .lg\:text-\[58px\] {
    font-size: 58px;
  }

  .lg\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .lg\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .lg\:leading-\[40px\] {
    line-height: 40px;
  }

  .lg\:leading-\[45px\] {
    line-height: 45px;
  }

  .lg\:leading-\[74px\] {
    line-height: 74px;
  }
}

@media (min-width: 1280px) {

  .xl\:static {
    position: static;
  }

  .xl\:\!relative {
    position: relative !important;
  }

  .xl\:relative {
    position: relative;
  }

  .xl\:left-0 {
    left: 0px;
  }

  .xl\:left-auto {
    left: auto;
  }

  .xl\:right-5 {
    right: 1.25rem;
  }

  .xl\:right-auto {
    right: auto;
  }

  .xl\:top-0 {
    top: 0px;
  }

  .xl\:top-auto {
    top: auto;
  }

  .xl\:-mx-0 {
    margin-left: -0px;
    margin-right: -0px;
  }

  .xl\:-mb-\[18px\] {
    margin-bottom: -18px;
  }

  .xl\:-mt-4 {
    margin-top: -1rem;
  }

  .xl\:-mt-\[21px\] {
    margin-top: -21px;
  }

  .xl\:mb-5 {
    margin-bottom: 1.25rem;
  }

  .xl\:mb-7 {
    margin-bottom: 1.75rem;
  }

  .xl\:mb-\[36px\] {
    margin-bottom: 36px;
  }

  .xl\:ml-0 {
    margin-left: 0px;
  }

  .xl\:ml-5 {
    margin-left: 1.25rem;
  }

  .xl\:ml-\[16px\] {
    margin-left: 16px;
  }

  .xl\:ml-\[54px\] {
    margin-left: 54px;
  }

  .xl\:mr-0 {
    margin-right: 0px;
  }

  .xl\:mr-3 {
    margin-right: 0.75rem;
  }

  .xl\:mr-\[107px\] {
    margin-right: 107px;
  }

  .xl\:mt-0 {
    margin-top: 0px;
  }

  .xl\:mt-10 {
    margin-top: 2.5rem;
  }

  .xl\:mt-12 {
    margin-top: 3rem;
  }

  .xl\:mt-4 {
    margin-top: 1rem;
  }

  .xl\:mt-7 {
    margin-top: 1.75rem;
  }

  .xl\:mt-\[168px\] {
    margin-top: 168px;
  }

  .xl\:mt-\[30px\] {
    margin-top: 30px;
  }

  .xl\:mt-\[35px\] {
    margin-top: 35px;
  }

  .xl\:mt-\[50px\] {
    margin-top: 50px;
  }

  .xl\:mt-\[64px\] {
    margin-top: 64px;
  }

  .xl\:mt-\[67px\] {
    margin-top: 67px;
  }

  .xl\:block {
    display: block;
  }

  .xl\:inline-block {
    display: inline-block;
  }

  .xl\:flex {
    display: flex;
  }

  .xl\:grid {
    display: grid;
  }

  .xl\:hidden {
    display: none;
  }

  .xl\:size-10 {
    width: 2.5rem;
    height: 2.5rem;
  }

  .xl\:size-8 {
    width: 2rem;
    height: 2rem;
  }

  .xl\:\!h-\[24px\] {
    height: 24px !important;
  }

  .xl\:h-7 {
    height: 1.75rem;
  }

  .xl\:h-\[108px\] {
    height: 108px;
  }

  .xl\:h-\[160px\] {
    height: 160px;
  }

  .xl\:h-\[186px\] {
    height: 186px;
  }

  .xl\:h-\[620px\] {
    height: 620px;
  }

  .xl\:h-\[851px\] {
    height: 851px;
  }

  .xl\:h-\[calc\(100dvh-90px\)\] {
    height: calc(100dvh - 90px);
  }

  .xl\:h-\[calc\(100vh-70px\)\] {
    height: calc(100vh - 70px);
  }

  .xl\:h-full {
    height: 100%;
  }

  .xl\:h-screen {
    height: 100vh;
  }

  .xl\:\!min-h-\[300px\] {
    min-height: 300px !important;
  }

  .xl\:min-h-\[400px\] {
    min-height: 400px;
  }

  .xl\:min-h-\[778px\] {
    min-height: 778px;
  }

  .xl\:\!w-\[24px\] {
    width: 24px !important;
  }

  .xl\:w-7 {
    width: 1.75rem;
  }

  .xl\:w-\[127px\] {
    width: 127px;
  }

  .xl\:w-\[24\%\] {
    width: 24%;
  }

  .xl\:w-\[30\%\] {
    width: 30%;
  }

  .xl\:w-\[30px\] {
    width: 30px;
  }

  .xl\:w-\[355px\] {
    width: 355px;
  }

  .xl\:w-\[375px\] {
    width: 375px;
  }

  .xl\:w-\[460px\] {
    width: 460px;
  }

  .xl\:w-\[560px\] {
    width: 560px;
  }

  .xl\:w-\[622px\] {
    width: 622px;
  }

  .xl\:w-\[80px\] {
    width: 80px;
  }

  .xl\:w-\[94\%\] {
    width: 94%;
  }

  .xl\:w-auto {
    width: auto;
  }

  .xl\:w-fit {
    width: -moz-fit-content;
    width: fit-content;
  }

  .xl\:w-full {
    width: 100%;
  }

  .xl\:min-w-\[391px\] {
    min-width: 391px;
  }

  .xl\:min-w-\[400px\] {
    min-width: 400px;
  }

  .xl\:min-w-\[496px\] {
    min-width: 496px;
  }

  .xl\:max-w-\[320px\] {
    max-width: 320px;
  }

  .xl\:max-w-\[45\%\] {
    max-width: 45%;
  }

  .xl\:max-w-\[50\%\] {
    max-width: 50%;
  }

  .xl\:max-w-\[580px\] {
    max-width: 580px;
  }

  .xl\:max-w-\[604px\] {
    max-width: 604px;
  }

  .xl\:max-w-\[860px\] {
    max-width: 860px;
  }

  .xl\:flex-shrink {
    flex-shrink: 1;
  }

  .xl\:origin-left {
    transform-origin: left;
  }

  .xl\:scale-\[1\] {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .xl\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .xl\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .xl\:grid-cols-\[160px_1fr\] {
    grid-template-columns: 160px 1fr;
  }

  .xl\:grid-cols-\[1fr_400px\] {
    grid-template-columns: 1fr 400px;
  }

  .xl\:grid-cols-\[1fr_555px\] {
    grid-template-columns: 1fr 555px;
  }

  .xl\:flex-row {
    flex-direction: row;
  }

  .xl\:flex-nowrap {
    flex-wrap: nowrap;
  }

  .xl\:place-content-center {
    place-content: center;
  }

  .xl\:items-end {
    align-items: flex-end;
  }

  .xl\:items-center {
    align-items: center;
  }

  .xl\:justify-start {
    justify-content: flex-start;
  }

  .xl\:justify-end {
    justify-content: flex-end;
  }

  .xl\:justify-between {
    justify-content: space-between;
  }

  .xl\:gap-10 {
    gap: 2.5rem;
  }

  .xl\:gap-4 {
    gap: 1rem;
  }

  .xl\:gap-6 {
    gap: 1.5rem;
  }

  .xl\:gap-8 {
    gap: 2rem;
  }

  .xl\:gap-\[26px\] {
    gap: 26px;
  }

  .xl\:gap-\[30px\] {
    gap: 30px;
  }

  .xl\:gap-\[35px\] {
    gap: 35px;
  }

  .xl\:gap-\[48px\] {
    gap: 48px;
  }

  .xl\:gap-x-6 {
    -moz-column-gap: 1.5rem;
         column-gap: 1.5rem;
  }

  .xl\:gap-y-5 {
    row-gap: 1.25rem;
  }

  .xl\:gap-y-\[30px\] {
    row-gap: 30px;
  }

  .xl\:space-y-3 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));
  }

  .xl\:overflow-y-auto {
    overflow-y: auto;
  }

  .xl\:rounded-\[2px\] {
    border-radius: 2px;
  }

  .xl\:rounded-xl {
    border-radius: 0.75rem;
  }

  .xl\:border {
    border-width: 1px;
  }

  .xl\:border-l {
    border-left-width: 1px;
  }

  .xl\:border-l-0 {
    border-left-width: 0px;
  }

  .xl\:border-r {
    border-right-width: 1px;
  }

  .xl\:border-r-0 {
    border-right-width: 0px;
  }

  .xl\:border-secondary-five {
    --tw-border-opacity: 1;
    border-color: rgb(201 201 201 / var(--tw-border-opacity, 1));
  }

  .xl\:border-secondary-four {
    --tw-border-opacity: 1;
    border-color: rgb(226 226 226 / var(--tw-border-opacity, 1));
  }

  .xl\:border-transparent {
    border-color: transparent;
  }

  .xl\:bg-transparent {
    background-color: transparent;
  }

  .xl\:bg-white {
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
  }

  .xl\:p-0 {
    padding: 0px;
  }

  .xl\:p-10 {
    padding: 2.5rem;
  }

  .xl\:p-2 {
    padding: 0.5rem;
  }

  .xl\:p-5 {
    padding: 1.25rem;
  }

  .xl\:p-\[40px\] {
    padding: 40px;
  }

  .xl\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .xl\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .xl\:px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  .xl\:px-7 {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }

  .xl\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .xl\:px-\[40px\] {
    padding-left: 40px;
    padding-right: 40px;
  }

  .xl\:px-\[78px\] {
    padding-left: 78px;
    padding-right: 78px;
  }

  .xl\:px-\[7px\] {
    padding-left: 7px;
    padding-right: 7px;
  }

  .xl\:px-\[83px\] {
    padding-left: 83px;
    padding-right: 83px;
  }

  .xl\:px-\[86px\] {
    padding-left: 86px;
    padding-right: 86px;
  }

  .xl\:py-0 {
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .xl\:py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .xl\:py-3\.5 {
    padding-top: 0.875rem;
    padding-bottom: 0.875rem;
  }

  .xl\:py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .xl\:py-\[102px\] {
    padding-top: 102px;
    padding-bottom: 102px;
  }

  .xl\:py-\[50px\] {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .xl\:py-\[64px\] {
    padding-top: 64px;
    padding-bottom: 64px;
  }

  .xl\:py-\[70px\] {
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .xl\:py-\[74px\] {
    padding-top: 74px;
    padding-bottom: 74px;
  }

  .xl\:py-\[77px\] {
    padding-top: 77px;
    padding-bottom: 77px;
  }

  .xl\:py-\[7px\] {
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .xl\:py-\[84px\] {
    padding-top: 84px;
    padding-bottom: 84px;
  }

  .xl\:pb-0 {
    padding-bottom: 0px;
  }

  .xl\:pb-\[175px\] {
    padding-bottom: 175px;
  }

  .xl\:pb-\[30px\] {
    padding-bottom: 30px;
  }

  .xl\:pl-4 {
    padding-left: 1rem;
  }

  .xl\:pl-6 {
    padding-left: 1.5rem;
  }

  .xl\:pl-7 {
    padding-left: 1.75rem;
  }

  .xl\:pl-8 {
    padding-left: 2rem;
  }

  .xl\:pl-\[35px\] {
    padding-left: 35px;
  }

  .xl\:pl-\[85px\] {
    padding-left: 85px;
  }

  .xl\:pr-4 {
    padding-right: 1rem;
  }

  .xl\:pr-5 {
    padding-right: 1.25rem;
  }

  .xl\:pr-\[160px\] {
    padding-right: 160px;
  }

  .xl\:pr-\[60px\] {
    padding-right: 60px;
  }

  .xl\:pt-0 {
    padding-top: 0px;
  }

  .xl\:pt-10 {
    padding-top: 2.5rem;
  }

  .xl\:pt-12 {
    padding-top: 3rem;
  }

  .xl\:pt-8 {
    padding-top: 2rem;
  }

  .xl\:pt-\[100px\] {
    padding-top: 100px;
  }

  .xl\:pt-\[130px\] {
    padding-top: 130px;
  }

  .xl\:pt-\[145px\] {
    padding-top: 145px;
  }

  .xl\:pt-\[150px\] {
    padding-top: 150px;
  }

  .xl\:pt-\[50px\] {
    padding-top: 50px;
  }

  .xl\:pt-\[60px\] {
    padding-top: 60px;
  }

  .xl\:pt-\[90px\] {
    padding-top: 90px;
  }

  .xl\:text-left {
    text-align: left;
  }

  .xl\:\!text-2xl {
    font-size: 1.5rem !important;
    line-height: 2rem !important;
  }

  .xl\:\!text-\[20px\] {
    font-size: 20px !important;
  }

  .xl\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .xl\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .xl\:text-\[20px\] {
    font-size: 20px;
  }

  .xl\:text-\[22px\] {
    font-size: 22px;
  }

  .xl\:text-\[24px\] {
    font-size: 24px;
  }

  .xl\:text-\[28px\] {
    font-size: 28px;
  }

  .xl\:text-\[30px\] {
    font-size: 30px;
  }

  .xl\:text-\[31px\] {
    font-size: 31px;
  }

  .xl\:text-\[32px\] {
    font-size: 32px;
  }

  .xl\:text-\[36px\] {
    font-size: 36px;
  }

  .xl\:text-\[42px\] {
    font-size: 42px;
  }

  .xl\:text-\[46px\] {
    font-size: 46px;
  }

  .xl\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .xl\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .xl\:leading-\[45px\] {
    line-height: 45px;
  }

  .xl\:backdrop-blur-0 {
    --tw-backdrop-blur: blur(0);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
    backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  }

  .xl\:duration-0 {
    transition-duration: 0s;
  }

  .group:hover .xl\:group-hover\:flex {
    display: flex;
  }

  .min-\[1280px\]\:right-10 {
    right: 2.5rem;
  }
}

@media (min-width: 1365px) {

  .min-\[1365px\]\:hidden {
    display: none;
  }
}

@media (min-width: 1536px) {

  .\\32xl\:static {
    position: static;
  }

  .\\32xl\:absolute {
    position: absolute;
  }

  .\\32xl\:relative {
    position: relative;
  }

  .\\32xl\:col-span-3 {
    grid-column: span 3 / span 3;
  }

  .\\32xl\:mx-0 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .\\32xl\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .\\32xl\:-ml-\[15px\] {
    margin-left: -15px;
  }

  .\\32xl\:-ml-\[5px\] {
    margin-left: -5px;
  }

  .\\32xl\:-mt-10 {
    margin-top: -2.5rem;
  }

  .\\32xl\:mb-0 {
    margin-bottom: 0px;
  }

  .\\32xl\:mb-\[128px\] {
    margin-bottom: 128px;
  }

  .\\32xl\:mb-\[130px\] {
    margin-bottom: 130px;
  }

  .\\32xl\:ml-0 {
    margin-left: 0px;
  }

  .\\32xl\:ml-12 {
    margin-left: 3rem;
  }

  .\\32xl\:mr-0 {
    margin-right: 0px;
  }

  .\\32xl\:mt-10 {
    margin-top: 2.5rem;
  }

  .\\32xl\:mt-2 {
    margin-top: 0.5rem;
  }

  .\\32xl\:mt-\[100px\] {
    margin-top: 100px;
  }

  .\\32xl\:mt-\[75px\] {
    margin-top: 75px;
  }

  .\\32xl\:block {
    display: block;
  }

  .\\32xl\:inline {
    display: inline;
  }

  .\\32xl\:flex {
    display: flex;
  }

  .\\32xl\:hidden {
    display: none;
  }

  .\\32xl\:h-\[266px\] {
    height: 266px;
  }

  .\\32xl\:h-\[70px\] {
    height: 70px;
  }

  .\\32xl\:h-\[800px\] {
    height: 800px;
  }

  .\\32xl\:h-\[calc\(100dvh-108px\)\] {
    height: calc(100dvh - 108px);
  }

  .\\32xl\:h-auto {
    height: auto;
  }

  .\\32xl\:min-h-\[741px\] {
    min-height: 741px;
  }

  .\\32xl\:min-h-\[850px\] {
    min-height: 850px;
  }

  .\\32xl\:w-\[1024px\] {
    width: 1024px;
  }

  .\\32xl\:w-\[130px\] {
    width: 130px;
  }

  .\\32xl\:w-\[1480px\] {
    width: 1480px;
  }

  .\\32xl\:w-\[350px\] {
    width: 350px;
  }

  .\\32xl\:w-\[400px\] {
    width: 400px;
  }

  .\\32xl\:w-\[423px\] {
    width: 423px;
  }

  .\\32xl\:w-\[760px\] {
    width: 760px;
  }

  .\\32xl\:max-w-\[100\%\] {
    max-width: 100%;
  }

  .\\32xl\:max-w-\[38\%\] {
    max-width: 38%;
  }

  .\\32xl\:max-w-\[500px\] {
    max-width: 500px;
  }

  .\\32xl\:max-w-\[510px\] {
    max-width: 510px;
  }

  .\\32xl\:max-w-\[660px\] {
    max-width: 660px;
  }

  .\\32xl\:max-w-\[calc\(100\%-355px\)\] {
    max-width: calc(100% - 355px);
  }

  .\\32xl\:columns-4 {
    -moz-columns: 4;
         columns: 4;
  }

  .\\32xl\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .\\32xl\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .\\32xl\:grid-cols-\[130px_1fr\] {
    grid-template-columns: 130px 1fr;
  }

  .\\32xl\:grid-cols-\[405px_1fr_570px\] {
    grid-template-columns: 405px 1fr 570px;
  }

  .\\32xl\:flex-row {
    flex-direction: row;
  }

  .\\32xl\:items-start {
    align-items: flex-start;
  }

  .\\32xl\:justify-between {
    justify-content: space-between;
  }

  .\\32xl\:gap-10 {
    gap: 2.5rem;
  }

  .\\32xl\:gap-8 {
    gap: 2rem;
  }

  .\\32xl\:gap-\[30px\] {
    gap: 30px;
  }

  .\\32xl\:gap-x-10 {
    -moz-column-gap: 2.5rem;
         column-gap: 2.5rem;
  }

  .\\32xl\:gap-x-5 {
    -moz-column-gap: 1.25rem;
         column-gap: 1.25rem;
  }

  .\\32xl\:gap-x-\[60px\] {
    -moz-column-gap: 60px;
         column-gap: 60px;
  }

  .\\32xl\:gap-y-\[40px\] {
    row-gap: 40px;
  }

  .\\32xl\:space-y-5 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
  }

  .\\32xl\:border-r {
    border-right-width: 1px;
  }

  .\\32xl\:border-transparent {
    border-color: transparent;
  }

  .\\32xl\:bg-transparent {
    background-color: transparent;
  }

  .\\32xl\:p-0 {
    padding: 0px;
  }

  .\\32xl\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .\\32xl\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .\\32xl\:px-\[100px\] {
    padding-left: 100px;
    padding-right: 100px;
  }

  .\\32xl\:px-\[360px\] {
    padding-left: 360px;
    padding-right: 360px;
  }

  .\\32xl\:px-\[44px\] {
    padding-left: 44px;
    padding-right: 44px;
  }

  .\\32xl\:px-\[80px\] {
    padding-left: 80px;
    padding-right: 80px;
  }

  .\\32xl\:px-\[86px\] {
    padding-left: 86px;
    padding-right: 86px;
  }

  .\\32xl\:py-\[50px\] {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .\\32xl\:py-\[60px\] {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .\\32xl\:py-\[67px\] {
    padding-top: 67px;
    padding-bottom: 67px;
  }

  .\\32xl\:py-\[80px\] {
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .\\32xl\:pl-10 {
    padding-left: 2.5rem;
  }

  .\\32xl\:pl-14 {
    padding-left: 3.5rem;
  }

  .\\32xl\:pl-\[101px\] {
    padding-left: 101px;
  }

  .\\32xl\:pl-\[113px\] {
    padding-left: 113px;
  }

  .\\32xl\:pl-\[202px\] {
    padding-left: 202px;
  }

  .\\32xl\:pl-\[203px\] {
    padding-left: 203px;
  }

  .\\32xl\:pl-\[20px\] {
    padding-left: 20px;
  }

  .\\32xl\:pl-\[50px\] {
    padding-left: 50px;
  }

  .\\32xl\:pl-\[52px\] {
    padding-left: 52px;
  }

  .\\32xl\:pl-\[75px\] {
    padding-left: 75px;
  }

  .\\32xl\:pr-1 {
    padding-right: 0.25rem;
  }

  .\\32xl\:pr-10 {
    padding-right: 2.5rem;
  }

  .\\32xl\:pr-5 {
    padding-right: 1.25rem;
  }

  .\\32xl\:pr-\[100px\] {
    padding-right: 100px;
  }

  .\\32xl\:pr-\[285px\] {
    padding-right: 285px;
  }

  .\\32xl\:pr-\[45px\] {
    padding-right: 45px;
  }

  .\\32xl\:pr-\[63px\] {
    padding-right: 63px;
  }

  .\\32xl\:pr-\[80px\] {
    padding-right: 80px;
  }

  .\\32xl\:pr-\[91px\] {
    padding-right: 91px;
  }

  .\\32xl\:pt-0 {
    padding-top: 0px;
  }

  .\\32xl\:pt-2\.5 {
    padding-top: 0.625rem;
  }

  .\\32xl\:pt-\[120px\] {
    padding-top: 120px;
  }

  .\\32xl\:pt-\[155px\] {
    padding-top: 155px;
  }

  .\\32xl\:pt-\[247px\] {
    padding-top: 247px;
  }

  .\\32xl\:pt-\[83px\] {
    padding-top: 83px;
  }

  .\\32xl\:text-left {
    text-align: left;
  }

  .\\32xl\:\!text-3xl {
    font-size: 1.875rem !important;
    line-height: 2.25rem !important;
  }

  .\\32xl\:text-\[24px\] {
    font-size: 24px;
  }

  .\\32xl\:text-\[30px\] {
    font-size: 30px;
  }

  .\\32xl\:text-\[40px\] {
    font-size: 40px;
  }

  .\\32xl\:text-\[42px\] {
    font-size: 42px;
  }

  .\\32xl\:text-\[52px\] {
    font-size: 52px;
  }

  .\\32xl\:leading-\[55px\] {
    line-height: 55px;
  }

  .group:hover .\\32xl\:group-hover\:hidden {
    display: none;
  }
}

@media (min-width: 1600px) {

  .min-\[1600px\]\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
}

@media (min-width: 1900px) {

  .\\33xl\:-right-3 {
    right: -0.75rem;
  }

  .\\33xl\:top-28 {
    top: 7rem;
  }

  .\\33xl\:mt-\[60px\] {
    margin-top: 60px;
  }

  .\\33xl\:flex {
    display: flex;
  }

  .\\33xl\:hidden {
    display: none;
  }

  .\\33xl\:size-6 {
    width: 1.5rem;
    height: 1.5rem;
  }

  .\\33xl\:size-\[40px\] {
    width: 40px;
    height: 40px;
  }

  .\\33xl\:w-\[1344px\] {
    width: 1344px;
  }

  .\\33xl\:w-\[1468px\] {
    width: 1468px;
  }

  .\\33xl\:w-\[312px\] {
    width: 312px;
  }

  .\\33xl\:w-\[482px\] {
    width: 482px;
  }

  .\\33xl\:w-\[580px\] {
    width: 580px;
  }

  .\\33xl\:w-\[597px\] {
    width: 597px;
  }

  .\\33xl\:w-\[676px\] {
    width: 676px;
  }

  .\\33xl\:w-\[calc\(100\%-60px\)\] {
    width: calc(100% - 60px);
  }

  .\\33xl\:max-w-\[calc\(100vw-1225px\)\] {
    max-width: calc(100vw - 1225px);
  }

  .\\33xl\:max-w-\[calc\(100vw-700px\)\] {
    max-width: calc(100vw - 700px);
  }

  .\\33xl\:max-w-\[calc\(100vw-780px\)\] {
    max-width: calc(100vw - 780px);
  }

  .\\33xl\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .\\33xl\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .\\33xl\:flex-nowrap {
    flex-wrap: nowrap;
  }

  .\\33xl\:justify-end {
    justify-content: flex-end;
  }

  .\\33xl\:justify-center {
    justify-content: center;
  }

  .\\33xl\:justify-between {
    justify-content: space-between;
  }

  .\\33xl\:gap-6 {
    gap: 1.5rem;
  }

  .\\33xl\:gap-\[28px\] {
    gap: 28px;
  }

  .\\33xl\:gap-\[34px\] {
    gap: 34px;
  }

  .\\33xl\:gap-\[45px\] {
    gap: 45px;
  }

  .\\33xl\:overflow-hidden {
    overflow: hidden;
  }

  .\\33xl\:overflow-y-auto {
    overflow-y: auto;
  }

  .\\33xl\:border-r {
    border-right-width: 1px;
  }

  .\\33xl\:px-0 {
    padding-left: 0px;
    padding-right: 0px;
  }

  .\\33xl\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .\\33xl\:px-\[52px\] {
    padding-left: 52px;
    padding-right: 52px;
  }

  .\\33xl\:px-\[61px\] {
    padding-left: 61px;
    padding-right: 61px;
  }

  .\\33xl\:px-\[70px\] {
    padding-left: 70px;
    padding-right: 70px;
  }

  .\\33xl\:px-\[86px\] {
    padding-left: 86px;
    padding-right: 86px;
  }

  .\\33xl\:py-\[40px\] {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .\\33xl\:pb-0 {
    padding-bottom: 0px;
  }

  .\\33xl\:pb-\[107px\] {
    padding-bottom: 107px;
  }

  .\\33xl\:pb-\[45px\] {
    padding-bottom: 45px;
  }

  .\\33xl\:pl-\[65px\] {
    padding-left: 65px;
  }

  .\\33xl\:pl-\[70px\] {
    padding-left: 70px;
  }

  .\\33xl\:pl-\[73px\] {
    padding-left: 73px;
  }

  .\\33xl\:pl-\[78px\] {
    padding-left: 78px;
  }

  .\\33xl\:pr-16 {
    padding-right: 4rem;
  }

  .\\33xl\:pr-\[40px\] {
    padding-right: 40px;
  }

  .\\33xl\:pr-\[61px\] {
    padding-right: 61px;
  }

  .\\33xl\:pr-\[63px\] {
    padding-right: 63px;
  }

  .\\33xl\:pr-\[93px\] {
    padding-right: 93px;
  }

  .\\33xl\:pr-\[94px\] {
    padding-right: 94px;
  }

  .\\33xl\:pt-\[34px\] {
    padding-top: 34px;
  }

  .\\33xl\:pt-\[66px\] {
    padding-top: 66px;
  }

  .\\33xl\:pt-\[83px\] {
    padding-top: 83px;
  }

  .\\33xl\:text-\[50px\] {
    font-size: 50px;
  }
}

.peer:checked ~ .rtl\:peer-checked\:after\:-translate-x-full:where([dir="rtl"], [dir="rtl"] *)::after {
  content: var(--tw-content);
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@media (prefers-color-scheme: dark) {

  .dark\:bg-gray-600 {
    --tw-bg-opacity: 1;
    background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1));
  }

  .dark\:bg-gray-700 {
    --tw-bg-opacity: 1;
    background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1));
  }

  .dark\:bg-gray-800 {
    --tw-bg-opacity: 1;
    background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1));
  }
}

@media print {

  .print\:m-0 {
    margin: 0px;
  }

  .print\:mb-0 {
    margin-bottom: 0px;
  }

  .print\:mt-0 {
    margin-top: 0px;
  }

  .print\:hidden {
    display: none;
  }

  .print\:h-auto {
    height: auto;
  }

  .print\:p-0 {
    padding: 0px;
  }

  .print\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
}

.\[\&\>\*\+\*\]\:border-t>*+* {
  border-top-width: 1px;
}

@media (min-width: 768px) {

  .md\:\[\&\>\*\+\*\]\:pl-\[30px\]>*+* {
    padding-left: 30px;
  }
}

.\[\&\>\*\]\:flex-shrink-0>* {
  flex-shrink: 0;
}

.\[\&\>path\]\:stroke-current>path {
  stroke: currentColor;
}


*, ::before, ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
}



                  /*
 * Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/*
 * Note: This file should contain the wireframe styles only. But since there are no such styles,
 * it acts as a message to the builder telling that it should look for the corresponding styles
 * **in the theme** when compiling the editor.
 */
/*
 * Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/*
 * Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */

/*
 * Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/**
 * A class which indicates that an element holding it is disabled.
 */

/*
 * Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/**
 * A helper to combine multiple shadows.
 */

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */

/*
 * Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/**
 * A visual style of focused element's border.
 */

/*
 * Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}
.ck .ck-widget.ck-widget_with-selection-handle {
    position: relative;
}
    .ck-content .table {
    display: block;
    min-width: 100%;
    max-width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    margin: 0;
}
    .ck .ck-widget {
    outline-width: 3px;
    outline-style: solid;
    outline-color: transparent;
    
}
    .ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
    padding: 4px;
    box-sizing: border-box;
    background-color: transparent;
    opacity: 0;
    transition: background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);
    border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
    transform: translateY(-100%);
    left: calc(0px - var(--ck-widget-outline-thickness));
    top: 0;
}
.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
    position: absolute;
}
.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	border-radius: 0;
	.ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
	}
}

.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
		/* Disable native outline. */
		outline: none;
		border: var(--ck-focus-ring);
		box-shadow: var(--ck-inner-shadow), 0 0;
	}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;
}

.ck.ck-editor__editable_inline[dir="ltr"] {
		text-align: left;
	}

.ck.ck-editor__editable_inline[dir="rtl"] {
		text-align: right;
	}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */

.ck.ck-editor__editable_inline > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

/* https://github.com/ckeditor/ckeditor5/issues/847 */

.ck.ck-editor__editable_inline > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

/* https://github.com/ckeditor/ckeditor5/issues/6517 */

.ck.ck-editor__editable_inline.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"]::after {
		border-bottom-color: var(--ck-color-panel-background);
	}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"]::after {
		border-top-color: var(--ck-color-panel-background);
	}



  /*
 * Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
    table-layout: fixed;
}
.ck-content .table table {
    overflow: hidden;
}
    .ck-content .table table td {
    border: 1px solid #bfbfbf !important;
}
.ck-content .table table td, .ck-content .table table th {
    min-width: 2em;
    padding: .4em;
    border: 1px solid hsl(0, 0%, 75%);
}
.ck-content .table td, .ck-content .table th {
    overflow-wrap: break-word;
    position: relative;
}
.ck .ck-editor__nested-editable {
    border: 1px solid transparent;
}
.ck-content td, .ck-content th {
    display: table-cell;
    vertical-align: inherit;
}
    .ck-editor__editable .ck-table-bogus-paragraph {
    display: inline-block;
    width: 100%;
}
    .ck-content tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.ck-content .table table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    height: 100%;
    border: 1px double hsl(0, 0%, 70%);
}

.ck-content table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: gray;
}
.ck-content table {
    display: inline-block;
    overflow: auto;
    max-width: 100%;
    font-size: 20px;
    font-family: 'Poppins light';
    margin-bottom: 28px !important;
    line-height: var(--strategySectionLineHeight);
}
table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}






                    /* General Styles */
                    
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        margin: 0;
                        padding: 20px;
                    }
                    h1, h2, h3, h4, h5, h6 {
                        margin: 20px 0 10px;
                        font-weight: bold;
                    }
                    h1 { font-size: 2.5em; }
                    h2 { font-size: 2em; }
                    h3 { font-size: 1.75em; }
                    h4 { font-size: 1.5em; }
                    h5 { font-size: 1.25em; }
                    h6 { font-size: 1em; }
                    p {
                        margin: 10px 0;
                    }
                    a {
                        color: #007BFF;
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                    ul, ol {
                        margin: 10px 0 10px 20px;
                        padding: 0;
                    }
                    li {
                        margin-bottom: 5px;
                    }
                    blockquote {
                        margin: 10px 0;
                        padding: 10px 20px;
                        background-color: #f9f9f9;
                        border-left: 4px solid #ccc;
                        font-style: italic;
                    }
                    pre {
                        background-color: #f4f4f4;
                        padding: 10px;
                        overflow-x: auto;
                        font-family: monospace;
                        border: 1px solid #ddd;
                    }
                    code {
                        background-color: #f4f4f4;
                        padding: 2px 4px;
                        font-family: monospace;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f4f4f4;
                        font-weight: bold;
                    }
                     ck.ck-editor__editable_inline > *:last-child {
    margin-bottom: var(--ck-spacing-large);
}
.ck.ck-editor__editable_inline > *:first-child {
    margin-top: var(--ck-spacing-large);
}
                    
                    figcaption {
                        text-align: center;
                        font-style: italic;
                        font-size: 0.9em;
                    }
                    hr {
                        border: 0;
                        border-top: 1px solid #ddd;
                        margin: 20px 0;
                    }
                    /* Forms */
                    input, textarea, select, button {
                        font-family: inherit;
                        font-size: inherit;
                        margin: 5px 0;
                        padding: 10px;
                        border: 1px solid #ddd;
                        border-radius: 4px;
                        width: 100%;
                    }
                    button {
                        background-color: #007BFF;
                        color: #fff;
                        border: none;
                        cursor: pointer;
                    }
                    button:hover {
                        background-color: #0056b3;
                    }
                    /* Headers and Footers */
                    header, footer {
                        background-color: #f4f4f4;
                        padding: 20px;
                        text-align: center;
                    }
                    footer {
                        font-size: 0.8em;
                        color: #666;
                    }
                    .vgl-layout{--vgl-placeholder-bg: red;--vgl-placeholder-opacity: 20%;--vgl-placeholder-z-index: 2;--vgl-item-resizing-z-index: 3;--vgl-item-resizing-opacity: 60%;--vgl-item-dragging-z-index: 3;--vgl-item-dragging-opacity: 100%;--vgl-resizer-size: 10px;--vgl-resizer-border-color: #444;--vgl-resizer-border-width: 2px;position:relative;box-sizing:border-box;transition:height .2s ease}.vgl-item{position:absolute;box-sizing:border-box;transition:.2s ease;transition-property:left,top,right}.vgl-item--placeholder{z-index:var(--vgl-placeholder-z-index, 2);-webkit-user-select:none;-moz-user-select:none;user-select:none;background-color:var(--vgl-placeholder-bg, red);opacity:var(--vgl-placeholder-opacity, 20%);transition-duration:.1s}.vgl-item--no-touch{touch-action:none}.vgl-item--transform{right:auto;left:0;transition-property:transform}.vgl-item--transform.vgl-item--rtl{right:0;left:auto}.vgl-item--resizing{z-index:var(--vgl-item-resizing-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-resizing-opacity, 60%)}.vgl-item--dragging{z-index:var(--vgl-item-dragging-z-index, 3);-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--vgl-item-dragging-opacity, 100%);transition:none}.vgl-item__resizer{position:absolute;right:0;bottom:0;box-sizing:border-box;width:var(--vgl-resizer-size);height:var(--vgl-resizer-size);cursor:se-resize}.vgl-item__resizer:before{position:absolute;top:0;right:3px;bottom:3px;left:0;content:"";border:0 solid var(--vgl-resizer-border-color);border-right-width:var(--vgl-resizer-border-width);border-bottom-width:var(--vgl-resizer-border-width)}.vgl-item__resizer--rtl{right:auto;left:0;cursor:sw-resize}.vgl-item__resizer--rtl:before{top:0;right:0;bottom:3px;left:3px;border-right-width:0;border-bottom-width:var(--vgl-resizer-border-width);border-left-width:var(--vgl-resizer-border-width)}

                    .ck.ck-editor__editable .image.ck-widget_selected {
    z-index: 2;
}
.ck.ck-editor__editable .image, .ck.ck-editor__editable .image-inline {
    position: relative;
}
.ck.ck-editor__editable .image {
    z-index: 1;
}
.ck .ck-widget.ck-widget_selected, .ck .ck-widget.ck-widget_selected:hover {
    outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
}
.ck-content .image {
    display: table;
    clear: both;
    text-align: center;
    margin: 0.9em auto;
    min-width: 50px;
}
.ck .ck-widget_with-resizer {
    position: relative;
}
.ck .ck-widget {
    outline-width: var(--ck-widget-outline-thickness);
    outline-style: solid;
    outline-color: transparent;
    transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);
}
.ck .ck-widget {
    position: relative;
}

blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin: 0;
}
    .ck-content .image img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    min-width: 100%;
    height: auto;
}

ck.ck-reset_all, .ck-reset_all *:not(.ck-reset_all-excluded *) {
    border-collapse: collapse;
    font: normal normal normal var(--ck-font-size-base) / var(--ck-line-height-base) var(--ck-font-face);
    color: var(--ck-color-text);
    text-align: left;
    white-space: nowrap;
    cursor: auto;
    float: none;
}
.ck.ck-reset, .ck.ck-reset_all, .ck-reset_all *:not(.ck-reset_all-excluded *) {
    box-sizing: border-box;
    width: auto;
    height: auto;
    position: static;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    text-decoration: none;
    vertical-align: middle;
    transition: none;
    word-wrap: break-word;
}
    .ck .ck-widget__resizer {
    outline: 1px solid var(--ck-color-resizer);
}
    .ck-focused .ck-widget_with-resizer.ck-widget_selected > .ck-widget__resizer {
    display: block;
}
    
.ck .ck-widget__resizer {
    display: none;
    position: absolute;
    pointer-events: none;
    left: 0;
    top: 0;
}
.ck.ck-reset_all, .ck-reset_all *:not(.ck-reset_all-excluded *) {
    border-collapse: collapse;
    font: normal normal normal var(--ck-font-size-base) / var(--ck-line-height-base) var(--ck-font-face);
    color: var(--ck-color-text);
    text-align: left;
    white-space: nowrap;
    cursor: auto;
    float: none;
}
.ck.ck-reset, .ck.ck-reset_all, .ck-reset_all *:not(.ck-reset_all-excluded *) {
    box-sizing: border-box;
    width: auto;
    height: auto;
    position: static;
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    text-decoration: none;
    vertical-align: middle;
    transition: none;
    word-wrap: break-word;
}
.ck-hidden {
    display: none !important;
}

img, video {
    max-width: 100%;
    height: auto;
}
img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
}
                    
                </style>
            </head>
            <body>
              ${htmlContent}
            </body>
        </html>`;

    await page.setContent(styledHtml, {
      waitUntil: "networkidle0"
    });

    // Wait for charts / grid / CKEditor images to fully render
    //await page.waitforti;

    // const screenshotBuffer = await page.screenshot({
    //   type: "png",
    //   fullPage: true
    // });
    await page.screenshot({path: 'screenshot.png', fullPage: true});

    await browser.close();

    // Return the PNG file to the client
    // res.setHeader("Content-Type", "image/png");
    // res.send(screenshotBuffer);

  } catch (error) {
    console.error("Screenshot generation error:", error);
    res.status(500).json({ error: "Failed to generate screenshot" });
  }
});

app.listen(PORT, () =>
  console.log(`Screenshot server running on http://localhost:${PORT}`)
);
