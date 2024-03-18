(self.webpackChunkyorkie_ui_poc=self.webpackChunkyorkie_ui_poc||[]).push([[179],{"./node_modules/@storybook/addon-interactions/dist sync recursive":r=>{function a(o){var e=new Error("Cannot find module '"+o+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=()=>[],a.resolve=a,a.id="./node_modules/@storybook/addon-interactions/dist sync recursive",r.exports=a},"./.storybook/preview.tsx":(r,a,o)=>{"use strict";o.r(a),o.d(a,{decorators:()=>x,default:()=>k});var e=o("./node_modules/next/dist/compiled/react/jsx-runtime.js"),t=o("./node_modules/next/dist/compiled/react/index.js"),s=o("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),c=o.n(s),l=o("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),i=o.n(l),m=o("./node_modules/style-loader/dist/runtime/insertBySelector.js"),p=o.n(m),v=o("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),n=o.n(v),d=o("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),u=o.n(d),f=o("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),b=o.n(f),h=o("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/styles/globals.css"),g={};g.styleTagTransform=b(),g.setAttributes=n(),g.insert=p().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=u();var y=c()(h.default,g);const w=h.default&&h.default.locals?h.default.locals:void 0,_={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},options:{storySort:{method:"alphabetical",order:["Introduction","THEME","CONFIG","TYPOGRAPHY"],includeName:!0}},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},nextjs:{appDirectory:!0}}},x=[z=>(0,e.jsx)("div",{children:(0,e.jsx)(z,{})})],k=_},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./src/styles/globals.css":(r,a,o)=>{"use strict";o.r(a),o.d(a,{default:()=>i});var e=o("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),t=o.n(e),s=o("./node_modules/css-loader/dist/runtime/api.js"),c=o.n(s),l=c()(t());l.push([r.id,`@layer reset, base, tokens, recipes, utilities;@layer reset {
  html {
    --font-fallback: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-tab-size: 4;
    tab-size: 4;
    line-height: 1.5;
    font-family: var(--global-font-body, var(--font-fallback));
}

  * {
    margin: 0px;
    padding: 0px;
    font: inherit;
}

  *,*::before,*::after {
    box-sizing: border-box;
    border-width: 0px;
    border-style: solid;
    border-color: var(--global-color-border, currentColor);
}

  hr {
    height: 0px;
    color: inherit;
    border-top-width: 1px;
}

  body {
    height: 100%;
}

  img {
    border-style: none;
}

  img,svg,video,canvas,audio,iframe,embed,object {
    display: block;
    vertical-align: middle;
}

  img,video {
    max-width: 100%;
    height: auto;
}

  p,h1,h2,h3,h4,h5,h6 {
    overflow-wrap: break-word;
}

  ol,ul {
    list-style: none;
}

  code,kbd,pre,samp {
    font-size: 1em;
}

  button,[type='button'],[type='reset'],[type='submit'] {
    -webkit-appearance: button;
    background-color: var(--colors-transparent);
    background-image: none;
}

  button,input,optgroup,select,textarea {
    color: inherit;
}

  button,select {
    text-transform: none;
}

  table {
    text-indent: 0px;
    border-collapse: collapse;
    border-color: inherit;
}

  input::placeholder,textarea::placeholder {
    opacity: 1;
    color: var(--global-color-placeholder, #9ca3af);
}

  textarea {
    resize: vertical;
}

  summary {
    display: list-item;
}

  small {
    font-size: 80%;
}

  sub,sup {
    position: relative;
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
}

  sub {
    bottom: -0.25em;
}

  sup {
    top: -0.5em;
}

  dialog {
    padding: 0px;
}

  a {
    color: inherit;
    text-decoration: inherit;
}

  abbr:where([title]) {
    text-decoration: underline dotted;
}

  b,strong {
    font-weight: bolder;
}

  code,kbd,samp,pre {
    --font-mono-fallback: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New';
    font-size: 1em;
    font-family: var(--global-font-mono, var(--font-mono-fallback));
}

  input[type="text"],input[type="email"],input[type="search"],input[type="password"] {
    -webkit-appearance: none;
    -moz-appearance: none;
}

  input[type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

  ::-webkit-search-decoration,::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

  input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button {
    height: auto;
}

  input[type='number'] {
    -moz-appearance: textfield;
}

  :-moz-ui-invalid {
    box-shadow: none;
}

  :-moz-focusring {
    outline: auto;
}

  [hidden] {
    display: none !important;
}
}@layer base {
  :root {
    --made-with-panda: '\u{1F43C}';
}

  *,*::before,*::after,::backdrop {
    --blur: /*-*/ /*-*/;
    --brightness: /*-*/ /*-*/;
    --contrast: /*-*/ /*-*/;
    --grayscale: /*-*/ /*-*/;
    --hue-rotate: /*-*/ /*-*/;
    --invert: /*-*/ /*-*/;
    --saturate: /*-*/ /*-*/;
    --sepia: /*-*/ /*-*/;
    --drop-shadow: /*-*/ /*-*/;
    --backdrop-blur: /*-*/ /*-*/;
    --backdrop-brightness: /*-*/ /*-*/;
    --backdrop-contrast: /*-*/ /*-*/;
    --backdrop-grayscale: /*-*/ /*-*/;
    --backdrop-hue-rotate: /*-*/ /*-*/;
    --backdrop-invert: /*-*/ /*-*/;
    --backdrop-opacity: /*-*/ /*-*/;
    --backdrop-saturate: /*-*/ /*-*/;
    --backdrop-sepia: /*-*/ /*-*/;
    --scroll-snap-strictness: proximity;
    --border-spacing-x: 0;
    --border-spacing-y: 0;
    --translate-x: 0;
    --translate-y: 0;
    --rotate: 0;
    --skew-x: 0;
    --skew-y: 0;
    --scale-x: 1;
    --scale-y: 1;
}

  html {
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    line-height: 1.5;
}

  body {
    background: var(--colors-bg-canvas);
    color: var(--colors-fg-default);
}

  [data-theme=dark] body {
    color-scheme: dark;
}

  *,*::before,*::after {
    box-sizing: border-box;
    border-color: var(--colors-border-subtle);
    border-style: solid;
}

  *::placeholder {
    opacity: 1;
    color: var(--colors-fg-subtle);
}

  *::selection {
    background: var(--colors-accent-a4);
}
}@layer tokens {
  :where(:root, :host) {
    --animations-backdrop-in: fade-in 250ms var(--easings-emphasized-in);
    --animations-backdrop-out: fade-out 200ms var(--easings-emphasized-out);
    --animations-dialog-in: slide-in 400ms var(--easings-emphasized-in);
    --animations-dialog-out: slide-out 200ms var(--easings-emphasized-out);
    --animations-drawer-in-left: slide-in-left 400ms var(--easings-emphasized-in);
    --animations-drawer-out-left: slide-out-left 200ms var(--easings-emphasized-out);
    --animations-drawer-in-right: slide-in-right 400ms var(--easings-emphasized-in);
    --animations-drawer-out-right: slide-out-right 200ms var(--easings-emphasized-out);
    --animations-skeleton-pulse: skeleton-pulse 2s var(--easings-pulse) infinite;
    --animations-fade-in: fade-in 400ms var(--easings-emphasized-in);
    --animations-collapse-in: collapse-in 250ms var(--easings-emphasized-in);
    --animations-collapse-out: collapse-out 200ms var(--easings-emphasized-out);
    --blurs-sm: 4px;
    --blurs-base: 8px;
    --blurs-md: 12px;
    --blurs-lg: 16px;
    --blurs-xl: 24px;
    --blurs-2xl: 40px;
    --blurs-3xl: 64px;
    --borders-none: none;
    --colors-current: currentColor;
    --colors-black: #000000;
    --colors-black-a1: rgba(0, 0, 0, 0.05);
    --colors-black-a2: rgba(0, 0, 0, 0.1);
    --colors-black-a3: rgba(0, 0, 0, 0.15);
    --colors-black-a4: rgba(0, 0, 0, 0.2);
    --colors-black-a5: rgba(0, 0, 0, 0.3);
    --colors-black-a6: rgba(0, 0, 0, 0.4);
    --colors-black-a7: rgba(0, 0, 0, 0.5);
    --colors-black-a8: rgba(0, 0, 0, 0.6);
    --colors-black-a9: rgba(0, 0, 0, 0.7);
    --colors-black-a10: rgba(0, 0, 0, 0.8);
    --colors-black-a11: rgba(0, 0, 0, 0.9);
    --colors-black-a12: rgba(0, 0, 0, 0.95);
    --colors-white: #ffffff;
    --colors-white-a1: rgba(255, 255, 255, 0.05);
    --colors-white-a2: rgba(255, 255, 255, 0.1);
    --colors-white-a3: rgba(255, 255, 255, 0.15);
    --colors-white-a4: rgba(255, 255, 255, 0.2);
    --colors-white-a5: rgba(255, 255, 255, 0.3);
    --colors-white-a6: rgba(255, 255, 255, 0.4);
    --colors-white-a7: rgba(255, 255, 255, 0.5);
    --colors-white-a8: rgba(255, 255, 255, 0.6);
    --colors-white-a9: rgba(255, 255, 255, 0.7);
    --colors-white-a10: rgba(255, 255, 255, 0.8);
    --colors-white-a11: rgba(255, 255, 255, 0.9);
    --colors-white-a12: rgba(255, 255, 255, 0.95);
    --colors-transparent: rgb(0 0 0 / 0);
    --colors-gray-light-1: #fcfcfc;
    --colors-gray-light-2: #f9f9f9;
    --colors-gray-light-3: #f0f0f0;
    --colors-gray-light-4: #e8e8e8;
    --colors-gray-light-5: #e0e0e0;
    --colors-gray-light-6: #d9d9d9;
    --colors-gray-light-7: #cecece;
    --colors-gray-light-8: #bbbbbb;
    --colors-gray-light-9: #8d8d8d;
    --colors-gray-light-10: #838383;
    --colors-gray-light-11: #646464;
    --colors-gray-light-12: #202020;
    --colors-gray-light-a1: #00000003;
    --colors-gray-light-a2: #00000006;
    --colors-gray-light-a3: #0000000f;
    --colors-gray-light-a4: #00000017;
    --colors-gray-light-a5: #0000001f;
    --colors-gray-light-a6: #00000026;
    --colors-gray-light-a7: #00000031;
    --colors-gray-light-a8: #00000044;
    --colors-gray-light-a9: #00000072;
    --colors-gray-light-a10: #0000007c;
    --colors-gray-light-a11: #0000009b;
    --colors-gray-light-a12: #000000df;
    --colors-gray-dark-1: #111111;
    --colors-gray-dark-2: #191919;
    --colors-gray-dark-3: #222222;
    --colors-gray-dark-4: #2a2a2a;
    --colors-gray-dark-5: #313131;
    --colors-gray-dark-6: #3a3a3a;
    --colors-gray-dark-7: #484848;
    --colors-gray-dark-8: #606060;
    --colors-gray-dark-9: #6e6e6e;
    --colors-gray-dark-10: #7b7b7b;
    --colors-gray-dark-11: #b4b4b4;
    --colors-gray-dark-12: #eeeeee;
    --colors-gray-dark-a1: #00000000;
    --colors-gray-dark-a2: #ffffff09;
    --colors-gray-dark-a3: #ffffff12;
    --colors-gray-dark-a4: #ffffff1b;
    --colors-gray-dark-a5: #ffffff22;
    --colors-gray-dark-a6: #ffffff2c;
    --colors-gray-dark-a7: #ffffff3b;
    --colors-gray-dark-a8: #ffffff55;
    --colors-gray-dark-a9: #ffffff64;
    --colors-gray-dark-a10: #ffffff72;
    --colors-gray-dark-a11: #ffffffaf;
    --colors-gray-dark-a12: #ffffffed;
    --colors-orange-light-1: #fefcfb;
    --colors-orange-light-2: #fff7ed;
    --colors-orange-light-3: #ffefd6;
    --colors-orange-light-4: #ffdfb5;
    --colors-orange-light-5: #ffd19a;
    --colors-orange-light-6: #ffc182;
    --colors-orange-light-7: #f5ae73;
    --colors-orange-light-8: #ec9455;
    --colors-orange-light-9: #f76b15;
    --colors-orange-light-10: #ef5f00;
    --colors-orange-light-11: #cc4e00;
    --colors-orange-light-12: #582d1d;
    --colors-orange-light-a1: #c0400004;
    --colors-orange-light-a2: #ff8e0012;
    --colors-orange-light-a3: #ff9c0029;
    --colors-orange-light-a4: #ff91014a;
    --colors-orange-light-a5: #ff8b0065;
    --colors-orange-light-a6: #ff81007d;
    --colors-orange-light-a7: #ed6c008c;
    --colors-orange-light-a8: #e35f00aa;
    --colors-orange-light-a9: #f65e00ea;
    --colors-orange-light-a10: #ef5f00;
    --colors-orange-light-a11: #cc4e00;
    --colors-orange-light-a12: #431200e2;
    --colors-orange-dark-1: #17120e;
    --colors-orange-dark-2: #1e160f;
    --colors-orange-dark-3: #331e0b;
    --colors-orange-dark-4: #462100;
    --colors-orange-dark-5: #562800;
    --colors-orange-dark-6: #66350c;
    --colors-orange-dark-7: #7e451d;
    --colors-orange-dark-8: #a35829;
    --colors-orange-dark-9: #f76b15;
    --colors-orange-dark-10: #ff801f;
    --colors-orange-dark-11: #ffa057;
    --colors-orange-dark-12: #ffe0c2;
    --colors-orange-dark-a1: #ec360007;
    --colors-orange-dark-a2: #fe6d000e;
    --colors-orange-dark-a3: #fb6a0025;
    --colors-orange-dark-a4: #ff590039;
    --colors-orange-dark-a5: #ff61004a;
    --colors-orange-dark-a6: #fd75045c;
    --colors-orange-dark-a7: #ff832c75;
    --colors-orange-dark-a8: #fe84389d;
    --colors-orange-dark-a9: #fe6d15f7;
    --colors-orange-dark-a10: #ff801f;
    --colors-orange-dark-a11: #ffa057;
    --colors-orange-dark-a12: #ffe0c2;
    --colors-neutral-light-1: #fcfcfc;
    --colors-neutral-light-2: #f9f9f9;
    --colors-neutral-light-3: #f0f0f0;
    --colors-neutral-light-4: #e8e8e8;
    --colors-neutral-light-5: #e0e0e0;
    --colors-neutral-light-6: #d9d9d9;
    --colors-neutral-light-7: #cecece;
    --colors-neutral-light-8: #bbbbbb;
    --colors-neutral-light-9: #8d8d8d;
    --colors-neutral-light-10: #838383;
    --colors-neutral-light-11: #646464;
    --colors-neutral-light-12: #202020;
    --colors-neutral-light-a1: #00000003;
    --colors-neutral-light-a2: #00000006;
    --colors-neutral-light-a3: #0000000f;
    --colors-neutral-light-a4: #00000017;
    --colors-neutral-light-a5: #0000001f;
    --colors-neutral-light-a6: #00000026;
    --colors-neutral-light-a7: #00000031;
    --colors-neutral-light-a8: #00000044;
    --colors-neutral-light-a9: #00000072;
    --colors-neutral-light-a10: #0000007c;
    --colors-neutral-light-a11: #0000009b;
    --colors-neutral-light-a12: #000000df;
    --colors-neutral-dark-1: #111111;
    --colors-neutral-dark-2: #191919;
    --colors-neutral-dark-3: #222222;
    --colors-neutral-dark-4: #2a2a2a;
    --colors-neutral-dark-5: #313131;
    --colors-neutral-dark-6: #3a3a3a;
    --colors-neutral-dark-7: #484848;
    --colors-neutral-dark-8: #606060;
    --colors-neutral-dark-9: #6e6e6e;
    --colors-neutral-dark-10: #7b7b7b;
    --colors-neutral-dark-11: #b4b4b4;
    --colors-neutral-dark-12: #eeeeee;
    --colors-neutral-dark-a1: #00000000;
    --colors-neutral-dark-a2: #ffffff09;
    --colors-neutral-dark-a3: #ffffff12;
    --colors-neutral-dark-a4: #ffffff1b;
    --colors-neutral-dark-a5: #ffffff22;
    --colors-neutral-dark-a6: #ffffff2c;
    --colors-neutral-dark-a7: #ffffff3b;
    --colors-neutral-dark-a8: #ffffff55;
    --colors-neutral-dark-a9: #ffffff64;
    --colors-neutral-dark-a10: #ffffff72;
    --colors-neutral-dark-a11: #ffffffaf;
    --colors-neutral-dark-a12: #ffffffed;
    --durations-fastest: 50ms;
    --durations-faster: 100ms;
    --durations-fast: 150ms;
    --durations-normal: 200ms;
    --durations-slow: 300ms;
    --durations-slower: 400ms;
    --durations-slowest: 500ms;
    --easings-pulse: cubic-bezier(0.4, 0.0, 0.6, 1.0);
    --easings-default: cubic-bezier(0.2, 0.0, 0, 1.0);
    --easings-emphasized-in: cubic-bezier(0.05, 0.7, 0.1, 1.0);
    --easings-emphasized-out: cubic-bezier(0.3, 0.0, 0.8, 0.15);
    --fonts-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --fonts-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
    --fonts-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --font-sizes-2xs: 0.5rem;
    --font-sizes-xs: 0.75rem;
    --font-sizes-sm: 0.875rem;
    --font-sizes-md: 1rem;
    --font-sizes-lg: 1.125rem;
    --font-sizes-xl: 1.25rem;
    --font-sizes-2xl: 1.5rem;
    --font-sizes-3xl: 1.875rem;
    --font-sizes-4xl: 2.25rem;
    --font-sizes-5xl: 3rem;
    --font-sizes-6xl: 3.75rem;
    --font-sizes-7xl: 4.5rem;
    --font-sizes-8xl: 6rem;
    --font-sizes-9xl: 8rem;
    --font-weights-thin: 100;
    --font-weights-extralight: 200;
    --font-weights-light: 300;
    --font-weights-normal: 400;
    --font-weights-medium: 500;
    --font-weights-semibold: 600;
    --font-weights-bold: 700;
    --font-weights-extrabold: 800;
    --font-weights-black: 900;
    --letter-spacings-tighter: -0.05em;
    --letter-spacings-tight: -0.025em;
    --letter-spacings-normal: 0em;
    --letter-spacings-wide: 0.025em;
    --letter-spacings-wider: 0.05em;
    --letter-spacings-widest: 0.1em;
    --line-heights-none: 1;
    --line-heights-tight: 1.25;
    --line-heights-normal: 1.5;
    --line-heights-relaxed: 1.75;
    --line-heights-loose: 2;
    --radii-none: 0;
    --radii-2xs: 0.0625rem;
    --radii-xs: 0.125rem;
    --radii-sm: 0.25rem;
    --radii-md: 0.375rem;
    --radii-lg: 0.5rem;
    --radii-xl: 0.75rem;
    --radii-2xl: 1rem;
    --radii-3xl: 1.5rem;
    --radii-full: 9999px;
    --sizes-0: 0rem;
    --sizes-1: 0.25rem;
    --sizes-2: 0.5rem;
    --sizes-3: 0.75rem;
    --sizes-4: 1rem;
    --sizes-5: 1.25rem;
    --sizes-6: 1.5rem;
    --sizes-7: 1.75rem;
    --sizes-8: 2rem;
    --sizes-9: 2.25rem;
    --sizes-10: 2.5rem;
    --sizes-11: 2.75rem;
    --sizes-12: 3rem;
    --sizes-14: 3.5rem;
    --sizes-16: 4rem;
    --sizes-20: 5rem;
    --sizes-24: 6rem;
    --sizes-28: 7rem;
    --sizes-32: 8rem;
    --sizes-36: 9rem;
    --sizes-40: 10rem;
    --sizes-44: 11rem;
    --sizes-48: 12rem;
    --sizes-52: 13rem;
    --sizes-56: 14rem;
    --sizes-60: 15rem;
    --sizes-64: 16rem;
    --sizes-72: 18rem;
    --sizes-80: 20rem;
    --sizes-96: 24rem;
    --sizes-0\\.5: 0.125rem;
    --sizes-1\\.5: 0.375rem;
    --sizes-2\\.5: 0.625rem;
    --sizes-3\\.5: 0.875rem;
    --sizes-4\\.5: 1.125rem;
    --sizes-2xs: 16rem;
    --sizes-xs: 20rem;
    --sizes-sm: 24rem;
    --sizes-md: 28rem;
    --sizes-lg: 32rem;
    --sizes-xl: 36rem;
    --sizes-2xl: 42rem;
    --sizes-3xl: 48rem;
    --sizes-4xl: 56rem;
    --sizes-5xl: 64rem;
    --sizes-6xl: 72rem;
    --sizes-7xl: 80rem;
    --sizes-8xl: 90rem;
    --sizes-full: 100%;
    --sizes-min: min-content;
    --sizes-max: max-content;
    --sizes-fit: fit-content;
    --sizes-breakpoint-sm: 640px;
    --sizes-breakpoint-md: 768px;
    --sizes-breakpoint-lg: 1024px;
    --sizes-breakpoint-xl: 1280px;
    --sizes-breakpoint-2xl: 1536px;
    --spacing-0: 0rem;
    --spacing-1: 0.25rem;
    --spacing-2: 0.5rem;
    --spacing-3: 0.75rem;
    --spacing-4: 1rem;
    --spacing-5: 1.25rem;
    --spacing-6: 1.5rem;
    --spacing-7: 1.75rem;
    --spacing-8: 2rem;
    --spacing-9: 2.25rem;
    --spacing-10: 2.5rem;
    --spacing-11: 2.75rem;
    --spacing-12: 3rem;
    --spacing-14: 3.5rem;
    --spacing-16: 4rem;
    --spacing-20: 5rem;
    --spacing-24: 6rem;
    --spacing-28: 7rem;
    --spacing-32: 8rem;
    --spacing-36: 9rem;
    --spacing-40: 10rem;
    --spacing-44: 11rem;
    --spacing-48: 12rem;
    --spacing-52: 13rem;
    --spacing-56: 14rem;
    --spacing-60: 15rem;
    --spacing-64: 16rem;
    --spacing-72: 18rem;
    --spacing-80: 20rem;
    --spacing-96: 24rem;
    --spacing-0\\.5: 0.125rem;
    --spacing-1\\.5: 0.375rem;
    --spacing-2\\.5: 0.625rem;
    --spacing-3\\.5: 0.875rem;
    --spacing-4\\.5: 1.125rem;
    --z-index-hide: -1;
    --z-index-base: 0;
    --z-index-docked: 10;
    --z-index-dropdown: 1000;
    --z-index-sticky: 1100;
    --z-index-banner: 1200;
    --z-index-overlay: 1300;
    --z-index-modal: 1400;
    --z-index-popover: 1500;
    --z-index-skip-link: 1600;
    --z-index-toast: 1700;
    --z-index-tooltip: 1800;
    --breakpoints-sm: 640px;
    --breakpoints-md: 768px;
    --breakpoints-lg: 1024px;
    --breakpoints-xl: 1280px;
    --breakpoints-2xl: 1536px;
    --colors-neutral-1: var(--colors-neutral-light-1);
    --colors-neutral-2: var(--colors-neutral-light-2);
    --colors-neutral-3: var(--colors-neutral-light-3);
    --colors-neutral-4: var(--colors-neutral-light-4);
    --colors-neutral-5: var(--colors-neutral-light-5);
    --colors-neutral-6: var(--colors-neutral-light-6);
    --colors-neutral-7: var(--colors-neutral-light-7);
    --colors-neutral-8: var(--colors-neutral-light-8);
    --colors-neutral-9: var(--colors-neutral-light-9);
    --colors-neutral-10: var(--colors-neutral-light-10);
    --colors-neutral-11: var(--colors-neutral-light-11);
    --colors-neutral-12: var(--colors-neutral-light-12);
    --colors-neutral-a1: var(--colors-neutral-light-a1);
    --colors-neutral-a2: var(--colors-neutral-light-a2);
    --colors-neutral-a3: var(--colors-neutral-light-a3);
    --colors-neutral-a4: var(--colors-neutral-light-a4);
    --colors-neutral-a5: var(--colors-neutral-light-a5);
    --colors-neutral-a6: var(--colors-neutral-light-a6);
    --colors-neutral-a7: var(--colors-neutral-light-a7);
    --colors-neutral-a8: var(--colors-neutral-light-a8);
    --colors-neutral-a9: var(--colors-neutral-light-a9);
    --colors-neutral-a10: var(--colors-neutral-light-a10);
    --colors-neutral-a11: var(--colors-neutral-light-a11);
    --colors-neutral-a12: var(--colors-neutral-light-a12);
    --colors-neutral-default: black;
    --colors-neutral-emphasized: var(--colors-gray-12);
    --colors-neutral-fg: white;
    --colors-neutral-text: black;
    --colors-orange-1: var(--colors-orange-light-1);
    --colors-orange-2: var(--colors-orange-light-2);
    --colors-orange-3: var(--colors-orange-light-3);
    --colors-orange-4: var(--colors-orange-light-4);
    --colors-orange-5: var(--colors-orange-light-5);
    --colors-orange-6: var(--colors-orange-light-6);
    --colors-orange-7: var(--colors-orange-light-7);
    --colors-orange-8: var(--colors-orange-light-8);
    --colors-orange-9: var(--colors-orange-light-9);
    --colors-orange-10: var(--colors-orange-light-10);
    --colors-orange-11: var(--colors-orange-light-11);
    --colors-orange-12: var(--colors-orange-light-12);
    --colors-orange-a1: var(--colors-orange-light-a1);
    --colors-orange-a2: var(--colors-orange-light-a2);
    --colors-orange-a3: var(--colors-orange-light-a3);
    --colors-orange-a4: var(--colors-orange-light-a4);
    --colors-orange-a5: var(--colors-orange-light-a5);
    --colors-orange-a6: var(--colors-orange-light-a6);
    --colors-orange-a7: var(--colors-orange-light-a7);
    --colors-orange-a8: var(--colors-orange-light-a8);
    --colors-orange-a9: var(--colors-orange-light-a9);
    --colors-orange-a10: var(--colors-orange-light-a10);
    --colors-orange-a11: var(--colors-orange-light-a11);
    --colors-orange-a12: var(--colors-orange-light-a12);
    --colors-orange-default: var(--colors-orange-9);
    --colors-orange-emphasized: var(--colors-orange-10);
    --colors-orange-fg: white;
    --colors-orange-text: var(--colors-orange-a11);
    --colors-gray-1: var(--colors-neutral-light-1);
    --colors-gray-2: var(--colors-neutral-light-2);
    --colors-gray-3: var(--colors-neutral-light-3);
    --colors-gray-4: var(--colors-neutral-light-4);
    --colors-gray-5: var(--colors-neutral-light-5);
    --colors-gray-6: var(--colors-neutral-light-6);
    --colors-gray-7: var(--colors-neutral-light-7);
    --colors-gray-8: var(--colors-neutral-light-8);
    --colors-gray-9: var(--colors-neutral-light-9);
    --colors-gray-10: var(--colors-neutral-light-10);
    --colors-gray-11: var(--colors-neutral-light-11);
    --colors-gray-12: var(--colors-neutral-light-12);
    --colors-gray-a1: var(--colors-neutral-light-a1);
    --colors-gray-a2: var(--colors-neutral-light-a2);
    --colors-gray-a3: var(--colors-neutral-light-a3);
    --colors-gray-a4: var(--colors-neutral-light-a4);
    --colors-gray-a5: var(--colors-neutral-light-a5);
    --colors-gray-a6: var(--colors-neutral-light-a6);
    --colors-gray-a7: var(--colors-neutral-light-a7);
    --colors-gray-a8: var(--colors-neutral-light-a8);
    --colors-gray-a9: var(--colors-neutral-light-a9);
    --colors-gray-a10: var(--colors-neutral-light-a10);
    --colors-gray-a11: var(--colors-neutral-light-a11);
    --colors-gray-a12: var(--colors-neutral-light-a12);
    --colors-gray-default: black;
    --colors-gray-emphasized: var(--colors-gray-12);
    --colors-gray-fg: white;
    --colors-gray-text: black;
    --colors-accent-1: var(--colors-orange-light-1);
    --colors-accent-2: var(--colors-orange-light-2);
    --colors-accent-3: var(--colors-orange-light-3);
    --colors-accent-4: var(--colors-orange-light-4);
    --colors-accent-5: var(--colors-orange-light-5);
    --colors-accent-6: var(--colors-orange-light-6);
    --colors-accent-7: var(--colors-orange-light-7);
    --colors-accent-8: var(--colors-orange-light-8);
    --colors-accent-9: var(--colors-orange-light-9);
    --colors-accent-10: var(--colors-orange-light-10);
    --colors-accent-11: var(--colors-orange-light-11);
    --colors-accent-12: var(--colors-orange-light-12);
    --colors-accent-a1: var(--colors-orange-light-a1);
    --colors-accent-a2: var(--colors-orange-light-a2);
    --colors-accent-a3: var(--colors-orange-light-a3);
    --colors-accent-a4: var(--colors-orange-light-a4);
    --colors-accent-a5: var(--colors-orange-light-a5);
    --colors-accent-a6: var(--colors-orange-light-a6);
    --colors-accent-a7: var(--colors-orange-light-a7);
    --colors-accent-a8: var(--colors-orange-light-a8);
    --colors-accent-a9: var(--colors-orange-light-a9);
    --colors-accent-a10: var(--colors-orange-light-a10);
    --colors-accent-a11: var(--colors-orange-light-a11);
    --colors-accent-a12: var(--colors-orange-light-a12);
    --colors-accent-default: var(--colors-orange-9);
    --colors-accent-emphasized: var(--colors-orange-10);
    --colors-accent-fg: white;
    --colors-accent-text: var(--colors-orange-a11);
    --colors-bg-canvas: var(--colors-gray-1);
    --colors-bg-default: white;
    --colors-bg-subtle: var(--colors-gray-2);
    --colors-bg-muted: var(--colors-gray-3);
    --colors-bg-emphasized: var(--colors-gray-4);
    --colors-bg-disabled: var(--colors-gray-3);
    --colors-fg-default: var(--colors-gray-12);
    --colors-fg-muted: var(--colors-gray-11);
    --colors-fg-subtle: var(--colors-gray-10);
    --colors-fg-disabled: var(--colors-gray-7);
    --colors-border-default: var(--colors-gray-7);
    --colors-border-muted: var(--colors-gray-6);
    --colors-border-subtle: var(--colors-gray-4);
    --colors-border-disabled: var(--colors-gray-5);
    --colors-border-outline: var(--colors-gray-a9);
    --shadows-xs: 0px 1px 2px var(--colors-gray-a5), 0px 0px 1px var(--colors-gray-a7);
    --shadows-sm: 0px 2px 4px var(--colors-gray-a3), 0px 0px 1px var(--colors-gray-a7);
    --shadows-md: 0px 4px 8px var(--colors-gray-a3), 0px 0px 1px var(--colors-gray-a7);
    --shadows-lg: 0px 8px 16px var(--colors-gray-a3), 0px 0px 1px var(--colors-gray-a7);
    --shadows-xl: 0px 16px 24px var(--colors-gray-a3), 0px 0px 1px var(--colors-gray-a7);
    --shadows-2xl: 0px 24px 40px var(--colors-gray-a3), 0px 0px 1px var(--colors-gray-a7);
    --radii-l1: var(--radii-xs);
    --radii-l2: var(--radii-sm);
    --radii-l3: var(--radii-md);
}

  [data-theme=dark] {
    --colors-neutral-1: var(--colors-neutral-dark-1);
    --colors-neutral-2: var(--colors-neutral-dark-2);
    --colors-neutral-3: var(--colors-neutral-dark-3);
    --colors-neutral-4: var(--colors-neutral-dark-4);
    --colors-neutral-5: var(--colors-neutral-dark-5);
    --colors-neutral-6: var(--colors-neutral-dark-6);
    --colors-neutral-7: var(--colors-neutral-dark-7);
    --colors-neutral-8: var(--colors-neutral-dark-8);
    --colors-neutral-9: var(--colors-neutral-dark-9);
    --colors-neutral-10: var(--colors-neutral-dark-10);
    --colors-neutral-11: var(--colors-neutral-dark-11);
    --colors-neutral-12: var(--colors-neutral-dark-12);
    --colors-neutral-a1: var(--colors-neutral-dark-a1);
    --colors-neutral-a2: var(--colors-neutral-dark-a2);
    --colors-neutral-a3: var(--colors-neutral-dark-a3);
    --colors-neutral-a4: var(--colors-neutral-dark-a4);
    --colors-neutral-a5: var(--colors-neutral-dark-a5);
    --colors-neutral-a6: var(--colors-neutral-dark-a6);
    --colors-neutral-a7: var(--colors-neutral-dark-a7);
    --colors-neutral-a8: var(--colors-neutral-dark-a8);
    --colors-neutral-a9: var(--colors-neutral-dark-a9);
    --colors-neutral-a10: var(--colors-neutral-dark-a10);
    --colors-neutral-a11: var(--colors-neutral-dark-a11);
    --colors-neutral-a12: var(--colors-neutral-dark-a12);
    --colors-neutral-default: white;
    --colors-neutral-fg: black;
    --colors-neutral-text: white;
    --colors-orange-1: var(--colors-orange-dark-1);
    --colors-orange-2: var(--colors-orange-dark-2);
    --colors-orange-3: var(--colors-orange-dark-3);
    --colors-orange-4: var(--colors-orange-dark-4);
    --colors-orange-5: var(--colors-orange-dark-5);
    --colors-orange-6: var(--colors-orange-dark-6);
    --colors-orange-7: var(--colors-orange-dark-7);
    --colors-orange-8: var(--colors-orange-dark-8);
    --colors-orange-9: var(--colors-orange-dark-9);
    --colors-orange-10: var(--colors-orange-dark-10);
    --colors-orange-11: var(--colors-orange-dark-11);
    --colors-orange-12: var(--colors-orange-dark-12);
    --colors-orange-a1: var(--colors-orange-dark-a1);
    --colors-orange-a2: var(--colors-orange-dark-a2);
    --colors-orange-a3: var(--colors-orange-dark-a3);
    --colors-orange-a4: var(--colors-orange-dark-a4);
    --colors-orange-a5: var(--colors-orange-dark-a5);
    --colors-orange-a6: var(--colors-orange-dark-a6);
    --colors-orange-a7: var(--colors-orange-dark-a7);
    --colors-orange-a8: var(--colors-orange-dark-a8);
    --colors-orange-a9: var(--colors-orange-dark-a9);
    --colors-orange-a10: var(--colors-orange-dark-a10);
    --colors-orange-a11: var(--colors-orange-dark-a11);
    --colors-orange-a12: var(--colors-orange-dark-a12);
    --colors-gray-1: var(--colors-neutral-dark-1);
    --colors-gray-2: var(--colors-neutral-dark-2);
    --colors-gray-3: var(--colors-neutral-dark-3);
    --colors-gray-4: var(--colors-neutral-dark-4);
    --colors-gray-5: var(--colors-neutral-dark-5);
    --colors-gray-6: var(--colors-neutral-dark-6);
    --colors-gray-7: var(--colors-neutral-dark-7);
    --colors-gray-8: var(--colors-neutral-dark-8);
    --colors-gray-9: var(--colors-neutral-dark-9);
    --colors-gray-10: var(--colors-neutral-dark-10);
    --colors-gray-11: var(--colors-neutral-dark-11);
    --colors-gray-12: var(--colors-neutral-dark-12);
    --colors-gray-a1: var(--colors-neutral-dark-a1);
    --colors-gray-a2: var(--colors-neutral-dark-a2);
    --colors-gray-a3: var(--colors-neutral-dark-a3);
    --colors-gray-a4: var(--colors-neutral-dark-a4);
    --colors-gray-a5: var(--colors-neutral-dark-a5);
    --colors-gray-a6: var(--colors-neutral-dark-a6);
    --colors-gray-a7: var(--colors-neutral-dark-a7);
    --colors-gray-a8: var(--colors-neutral-dark-a8);
    --colors-gray-a9: var(--colors-neutral-dark-a9);
    --colors-gray-a10: var(--colors-neutral-dark-a10);
    --colors-gray-a11: var(--colors-neutral-dark-a11);
    --colors-gray-a12: var(--colors-neutral-dark-a12);
    --colors-gray-default: white;
    --colors-gray-fg: black;
    --colors-gray-text: white;
    --colors-accent-1: var(--colors-orange-dark-1);
    --colors-accent-2: var(--colors-orange-dark-2);
    --colors-accent-3: var(--colors-orange-dark-3);
    --colors-accent-4: var(--colors-orange-dark-4);
    --colors-accent-5: var(--colors-orange-dark-5);
    --colors-accent-6: var(--colors-orange-dark-6);
    --colors-accent-7: var(--colors-orange-dark-7);
    --colors-accent-8: var(--colors-orange-dark-8);
    --colors-accent-9: var(--colors-orange-dark-9);
    --colors-accent-10: var(--colors-orange-dark-10);
    --colors-accent-11: var(--colors-orange-dark-11);
    --colors-accent-12: var(--colors-orange-dark-12);
    --colors-accent-a1: var(--colors-orange-dark-a1);
    --colors-accent-a2: var(--colors-orange-dark-a2);
    --colors-accent-a3: var(--colors-orange-dark-a3);
    --colors-accent-a4: var(--colors-orange-dark-a4);
    --colors-accent-a5: var(--colors-orange-dark-a5);
    --colors-accent-a6: var(--colors-orange-dark-a6);
    --colors-accent-a7: var(--colors-orange-dark-a7);
    --colors-accent-a8: var(--colors-orange-dark-a8);
    --colors-accent-a9: var(--colors-orange-dark-a9);
    --colors-accent-a10: var(--colors-orange-dark-a10);
    --colors-accent-a11: var(--colors-orange-dark-a11);
    --colors-accent-a12: var(--colors-orange-dark-a12);
    --colors-bg-default: var(--colors-gray-2);
    --colors-bg-subtle: var(--colors-gray-3);
    --colors-bg-muted: var(--colors-gray-4);
    --colors-bg-emphasized: var(--colors-gray-5);
    --colors-bg-disabled: var(--colors-gray-4);
    --shadows-xs: 0px 1px 1px var(--colors-black-a12), 0px 0px 1px inset var(--colors-gray-a7);
    --shadows-sm: 0px 2px 4px var(--colors-black-a10), 0px 0px 1px inset var(--colors-gray-a7);
    --shadows-md: 0px 4px 8px var(--colors-black-a10), 0px 0px 1px inset var(--colors-gray-a7);
    --shadows-lg: 0px 8px 16px var(--colors-black-a10), 0px 0px 1px inset var(--colors-gray-a7);
    --shadows-xl: 0px 16px 24px var(--colors-black-a10), 0px 0px 1px inset var(--colors-gray-a7);
    --shadows-2xl: 0px 24px 40px var(--colors-black-a10), 0px 0px 1px inset var(--colors-gray-a7)
}

  @keyframes fade-in {
    from {
      opacity: 0;
}

    to {
      opacity: 1;
}
}

  @keyframes fade-out {
    from {
      opacity: 1;
}

    to {
      opacity: 0;
}
}

  @keyframes slide-in {
    0% {
      opacity: 0;
      transform: translateY(64px);
}

    100% {
      opacity: 1;
      transform: translateY(0);
}
}

  @keyframes slide-out {
    0% {
      opacity: 1;
      transform: translateY(0);
}

    100% {
      opacity: 0;
      transform: translateY(64px);
}
}

  @keyframes slide-in-left {
    0% {
      transform: translateX(-100%);
}

    100% {
      transform: translateX(0%);
}
}

  @keyframes slide-out-left {
    0% {
      transform: translateX(0%);
}

    100% {
      transform: translateX(-100%);
}
}

  @keyframes slide-in-right {
    0% {
      transform: translateX(100%);
}

    100% {
      transform: translateX(0%);
}
}

  @keyframes slide-out-right {
    0% {
      transform: translateX(0%);
}

    100% {
      transform: translateX(100%);
}
}

  @keyframes collapse-in {
    0% {
      height: var(--sizes-0);
}

    100% {
      height: var(--height);
}
}

  @keyframes collapse-out {
    0% {
      height: var(--height);
}

    100% {
      height: var(--sizes-0);
}
}

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-4px);
}

    100% {
      opacity: 1;
      transform: translateY(0);
}
}

  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: translateY(0);
}

    100% {
      opacity: 0;
      transform: translateY(-4px);
}
}

  @keyframes skeleton-pulse {
    50% {
      opacity: 0.5;
}
}
}@layer recipes {
  @layer _base {
    .link {
      color: var(--colors-fg-default);
      --colors-color-palette-1: var(--colors-accent-1);
      --colors-color-palette-2: var(--colors-accent-2);
      --colors-color-palette-3: var(--colors-accent-3);
      --colors-color-palette-4: var(--colors-accent-4);
      --colors-color-palette-5: var(--colors-accent-5);
      --colors-color-palette-6: var(--colors-accent-6);
      --colors-color-palette-7: var(--colors-accent-7);
      --colors-color-palette-8: var(--colors-accent-8);
      --colors-color-palette-9: var(--colors-accent-9);
      --colors-color-palette-10: var(--colors-accent-10);
      --colors-color-palette-11: var(--colors-accent-11);
      --colors-color-palette-12: var(--colors-accent-12);
      --colors-color-palette-a1: var(--colors-accent-a1);
      --colors-color-palette-a2: var(--colors-accent-a2);
      --colors-color-palette-a3: var(--colors-accent-a3);
      --colors-color-palette-a4: var(--colors-accent-a4);
      --colors-color-palette-a5: var(--colors-accent-a5);
      --colors-color-palette-a6: var(--colors-accent-a6);
      --colors-color-palette-a7: var(--colors-accent-a7);
      --colors-color-palette-a8: var(--colors-accent-a8);
      --colors-color-palette-a9: var(--colors-accent-a9);
      --colors-color-palette-a10: var(--colors-accent-a10);
      --colors-color-palette-a11: var(--colors-accent-a11);
      --colors-color-palette-a12: var(--colors-accent-a12);
      --colors-color-palette-default: var(--colors-accent-default);
      --colors-color-palette-emphasized: var(--colors-accent-emphasized);
      --colors-color-palette-fg: var(--colors-accent-fg);
      --colors-color-palette-text: var(--colors-accent-text);
      cursor: pointer;
      display: inline-flex;
      gap: var(--spacing-2);
      text-decoration: underline 0.1em transparent;
      text-underline-offset: 0.125em;
      align-items: center;
      font-weight: var(--font-weights-medium);
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: text-decoration-color;
      transition-property: text-decoration-color;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .link svg {
      width: 1em;
      height: 1em;
}

    .link:is(:hover, [data-hover]) {
      text-decoration-color: var(--colors-color-palette-default);
}

    .badge {
      border-radius: var(--radii-full);
      --colors-color-palette-1: var(--colors-accent-1);
      --colors-color-palette-2: var(--colors-accent-2);
      --colors-color-palette-3: var(--colors-accent-3);
      --colors-color-palette-4: var(--colors-accent-4);
      --colors-color-palette-5: var(--colors-accent-5);
      --colors-color-palette-6: var(--colors-accent-6);
      --colors-color-palette-7: var(--colors-accent-7);
      --colors-color-palette-8: var(--colors-accent-8);
      --colors-color-palette-9: var(--colors-accent-9);
      --colors-color-palette-10: var(--colors-accent-10);
      --colors-color-palette-11: var(--colors-accent-11);
      --colors-color-palette-12: var(--colors-accent-12);
      --colors-color-palette-a1: var(--colors-accent-a1);
      --colors-color-palette-a2: var(--colors-accent-a2);
      --colors-color-palette-a3: var(--colors-accent-a3);
      --colors-color-palette-a4: var(--colors-accent-a4);
      --colors-color-palette-a5: var(--colors-accent-a5);
      --colors-color-palette-a6: var(--colors-accent-a6);
      --colors-color-palette-a7: var(--colors-accent-a7);
      --colors-color-palette-a8: var(--colors-accent-a8);
      --colors-color-palette-a9: var(--colors-accent-a9);
      --colors-color-palette-a10: var(--colors-accent-a10);
      --colors-color-palette-a11: var(--colors-accent-a11);
      --colors-color-palette-a12: var(--colors-accent-a12);
      --colors-color-palette-default: var(--colors-accent-default);
      --colors-color-palette-emphasized: var(--colors-accent-emphasized);
      --colors-color-palette-fg: var(--colors-accent-fg);
      --colors-color-palette-text: var(--colors-accent-text);
      font-weight: var(--font-weights-medium);
}

    .badge,.button {
      display: inline-flex;
      -webkit-user-select: none;
      user-select: none;
      white-space: nowrap;
      align-items: center;
}

    .button {
      appearance: none;
      -webkit-appearance: none;
      border-radius: var(--radii-l2);
      cursor: pointer;
      min-width: var(--sizes-0);
      outline: var(--borders-none);
      vertical-align: middle;
      font-weight: var(--font-weights-semibold);
      justify-content: center;
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: background, border-color, color, box-shadow;
      transition-property: background, border-color, color, box-shadow;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .button:is([hidden]) {
      display: none;
}

    .input {
      appearance: none;
      -webkit-appearance: none;
      background: none;
      border-radius: var(--radii-l2);
      --colors-color-palette-1: var(--colors-accent-1);
      --colors-color-palette-2: var(--colors-accent-2);
      --colors-color-palette-3: var(--colors-accent-3);
      --colors-color-palette-4: var(--colors-accent-4);
      --colors-color-palette-5: var(--colors-accent-5);
      --colors-color-palette-6: var(--colors-accent-6);
      --colors-color-palette-7: var(--colors-accent-7);
      --colors-color-palette-8: var(--colors-accent-8);
      --colors-color-palette-9: var(--colors-accent-9);
      --colors-color-palette-10: var(--colors-accent-10);
      --colors-color-palette-11: var(--colors-accent-11);
      --colors-color-palette-12: var(--colors-accent-12);
      --colors-color-palette-a1: var(--colors-accent-a1);
      --colors-color-palette-a2: var(--colors-accent-a2);
      --colors-color-palette-a3: var(--colors-accent-a3);
      --colors-color-palette-a4: var(--colors-accent-a4);
      --colors-color-palette-a5: var(--colors-accent-a5);
      --colors-color-palette-a6: var(--colors-accent-a6);
      --colors-color-palette-a7: var(--colors-accent-a7);
      --colors-color-palette-a8: var(--colors-accent-a8);
      --colors-color-palette-a9: var(--colors-accent-a9);
      --colors-color-palette-a10: var(--colors-accent-a10);
      --colors-color-palette-a11: var(--colors-accent-a11);
      --colors-color-palette-a12: var(--colors-accent-a12);
      --colors-color-palette-default: var(--colors-accent-default);
      --colors-color-palette-emphasized: var(--colors-accent-emphasized);
      --colors-color-palette-fg: var(--colors-accent-fg);
      --colors-color-palette-text: var(--colors-accent-text);
      color: var(--colors-fg-default);
      outline: 0;
      position: relative;
      width: var(--sizes-full);
      border-color: var(--colors-border-default);
      border-width: 1px;
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: box-shadow, border-color;
      transition-property: box-shadow, border-color;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .input:is(:disabled, [disabled], [data-disabled]) {
      opacity: 0.4;
      cursor: not-allowed;
}

    .input:is(:focus, [data-focus]) {
      box-shadow: 0 0 0 1px var(--colors-color-palette-default);
      border-color: var(--colors-color-palette-default);
}

    .code {
      background: var(--colors-bg-subtle);
      border-radius: var(--radii-l2);
      color: var(--colors-fg-default);
      display: inline-flex;
      align-items: center;
      font-weight: var(--font-weights-medium) !important;
      font-family: var(--fonts-code);
}

    .icon {
      color: currentcolor;
      display: inline-block;
      vertical-align: middle;
      flex-shrink: 0;
      line-height: 1em;
}
}

  .badge--variant_subtle {
    background: var(--colors-bg-subtle);
    color: var(--colors-fg-default);
    border-color: var(--colors-border-subtle);
    border-width: 1px;
}

  .badge--variant_subtle svg {
    color: var(--colors-fg-muted);
}

  .badge--size_md {
    font-size: var(--font-sizes-xs);
    line-height: 1.125rem;
    padding-inline: var(--spacing-2\\.5);
    height: var(--sizes-6);
    gap: var(--spacing-1\\.5);
}

  .badge--size_md svg {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .badge--size_sm {
    font-size: var(--font-sizes-xs);
    line-height: 1.125rem;
    padding-inline: var(--spacing-2);
    height: var(--sizes-5);
    gap: var(--spacing-1);
}

  .badge--size_sm svg {
    width: var(--sizes-3);
    height: var(--sizes-3);
}

  .badge--size_lg {
    font-size: var(--font-sizes-sm);
    line-height: 1.25rem;
    padding-inline: var(--spacing-3);
    height: var(--sizes-7);
    gap: var(--spacing-1\\.5);
}

  .badge--size_lg svg {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .badge--variant_solid {
    background: var(--colors-color-palette-default);
    color: var(--colors-color-palette-fg);
}

  .badge--variant_outline {
    border-width: 2px;
    border-color: var(--colors-border-default);
}

  .button--variant_outline {
    color: var(--colors-color-palette-text);
    --colors-color-palette-light-1: var(--colors-gray-light-1);
    --colors-color-palette-light-2: var(--colors-gray-light-2);
    --colors-color-palette-light-3: var(--colors-gray-light-3);
    --colors-color-palette-light-4: var(--colors-gray-light-4);
    --colors-color-palette-light-5: var(--colors-gray-light-5);
    --colors-color-palette-light-6: var(--colors-gray-light-6);
    --colors-color-palette-light-7: var(--colors-gray-light-7);
    --colors-color-palette-light-8: var(--colors-gray-light-8);
    --colors-color-palette-light-9: var(--colors-gray-light-9);
    --colors-color-palette-light-10: var(--colors-gray-light-10);
    --colors-color-palette-light-11: var(--colors-gray-light-11);
    --colors-color-palette-light-12: var(--colors-gray-light-12);
    --colors-color-palette-light-a1: var(--colors-gray-light-a1);
    --colors-color-palette-light-a2: var(--colors-gray-light-a2);
    --colors-color-palette-light-a3: var(--colors-gray-light-a3);
    --colors-color-palette-light-a4: var(--colors-gray-light-a4);
    --colors-color-palette-light-a5: var(--colors-gray-light-a5);
    --colors-color-palette-light-a6: var(--colors-gray-light-a6);
    --colors-color-palette-light-a7: var(--colors-gray-light-a7);
    --colors-color-palette-light-a8: var(--colors-gray-light-a8);
    --colors-color-palette-light-a9: var(--colors-gray-light-a9);
    --colors-color-palette-light-a10: var(--colors-gray-light-a10);
    --colors-color-palette-light-a11: var(--colors-gray-light-a11);
    --colors-color-palette-light-a12: var(--colors-gray-light-a12);
    --colors-color-palette-dark-1: var(--colors-gray-dark-1);
    --colors-color-palette-dark-2: var(--colors-gray-dark-2);
    --colors-color-palette-dark-3: var(--colors-gray-dark-3);
    --colors-color-palette-dark-4: var(--colors-gray-dark-4);
    --colors-color-palette-dark-5: var(--colors-gray-dark-5);
    --colors-color-palette-dark-6: var(--colors-gray-dark-6);
    --colors-color-palette-dark-7: var(--colors-gray-dark-7);
    --colors-color-palette-dark-8: var(--colors-gray-dark-8);
    --colors-color-palette-dark-9: var(--colors-gray-dark-9);
    --colors-color-palette-dark-10: var(--colors-gray-dark-10);
    --colors-color-palette-dark-11: var(--colors-gray-dark-11);
    --colors-color-palette-dark-12: var(--colors-gray-dark-12);
    --colors-color-palette-dark-a1: var(--colors-gray-dark-a1);
    --colors-color-palette-dark-a2: var(--colors-gray-dark-a2);
    --colors-color-palette-dark-a3: var(--colors-gray-dark-a3);
    --colors-color-palette-dark-a4: var(--colors-gray-dark-a4);
    --colors-color-palette-dark-a5: var(--colors-gray-dark-a5);
    --colors-color-palette-dark-a6: var(--colors-gray-dark-a6);
    --colors-color-palette-dark-a7: var(--colors-gray-dark-a7);
    --colors-color-palette-dark-a8: var(--colors-gray-dark-a8);
    --colors-color-palette-dark-a9: var(--colors-gray-dark-a9);
    --colors-color-palette-dark-a10: var(--colors-gray-dark-a10);
    --colors-color-palette-dark-a11: var(--colors-gray-dark-a11);
    --colors-color-palette-dark-a12: var(--colors-gray-dark-a12);
    --colors-color-palette-1: var(--colors-gray-1);
    --colors-color-palette-2: var(--colors-gray-2);
    --colors-color-palette-3: var(--colors-gray-3);
    --colors-color-palette-4: var(--colors-gray-4);
    --colors-color-palette-5: var(--colors-gray-5);
    --colors-color-palette-6: var(--colors-gray-6);
    --colors-color-palette-7: var(--colors-gray-7);
    --colors-color-palette-8: var(--colors-gray-8);
    --colors-color-palette-9: var(--colors-gray-9);
    --colors-color-palette-10: var(--colors-gray-10);
    --colors-color-palette-11: var(--colors-gray-11);
    --colors-color-palette-12: var(--colors-gray-12);
    --colors-color-palette-a1: var(--colors-gray-a1);
    --colors-color-palette-a2: var(--colors-gray-a2);
    --colors-color-palette-a3: var(--colors-gray-a3);
    --colors-color-palette-a4: var(--colors-gray-a4);
    --colors-color-palette-a5: var(--colors-gray-a5);
    --colors-color-palette-a6: var(--colors-gray-a6);
    --colors-color-palette-a7: var(--colors-gray-a7);
    --colors-color-palette-a8: var(--colors-gray-a8);
    --colors-color-palette-a9: var(--colors-gray-a9);
    --colors-color-palette-a10: var(--colors-gray-a10);
    --colors-color-palette-a11: var(--colors-gray-a11);
    --colors-color-palette-a12: var(--colors-gray-a12);
    --colors-color-palette-default: var(--colors-gray-default);
    --colors-color-palette-emphasized: var(--colors-gray-emphasized);
    --colors-color-palette-fg: var(--colors-gray-fg);
    --colors-color-palette-text: var(--colors-gray-text);
    border-width: 1px;
    border-color: var(--colors-color-palette-a8);
}

  .button--variant_outline:is(:disabled, [disabled], [data-disabled]) {
    color: var(--colors-fg-disabled);
    cursor: not-allowed;
    border-color: var(--colors-border-disabled);
}

  .button--variant_outline:is(:disabled, [disabled], [data-disabled]):is(:hover, [data-hover]) {
    background: var(--colors-transparent);
    color: var(--colors-fg-disabled);
    border-color: var(--colors-border-disabled);
}

  .button--variant_outline:is([aria-selected=true], [data-selected]) {
    background: var(--colors-accent-default);
    color: var(--colors-accent-fg);
    border-color: var(--colors-accent-default);
}

  .button--variant_outline:is([aria-selected=true], [data-selected]):is(:hover, [data-hover]) {
    background: var(--colors-accent-emphasized);
    border-color: var(--colors-accent-emphasized);
}

  .button--variant_outline:is(:focus-visible, [data-focus-visible]) {
    outline: 2px solid;
    outline-offset: 2px;
    outline-color: var(--colors-color-palette-default);
}

  .button--variant_outline:is(:hover, [data-hover]) {
    background: var(--colors-color-palette-a2);
}

  .button--size_md {
    height: var(--sizes-10);
    min-width: var(--sizes-10);
    font-size: var(--font-sizes-sm);
    line-height: 1.25rem;
    padding-inline: var(--spacing-4);
    gap: var(--spacing-2);
}

  .button--size_md svg {
    width: var(--sizes-5);
    height: var(--sizes-5);
}

  .button--variant_solid {
    background: var(--colors-color-palette-default);
    color: var(--colors-color-palette-fg);
    --colors-color-palette-1: var(--colors-accent-1);
    --colors-color-palette-2: var(--colors-accent-2);
    --colors-color-palette-3: var(--colors-accent-3);
    --colors-color-palette-4: var(--colors-accent-4);
    --colors-color-palette-5: var(--colors-accent-5);
    --colors-color-palette-6: var(--colors-accent-6);
    --colors-color-palette-7: var(--colors-accent-7);
    --colors-color-palette-8: var(--colors-accent-8);
    --colors-color-palette-9: var(--colors-accent-9);
    --colors-color-palette-10: var(--colors-accent-10);
    --colors-color-palette-11: var(--colors-accent-11);
    --colors-color-palette-12: var(--colors-accent-12);
    --colors-color-palette-a1: var(--colors-accent-a1);
    --colors-color-palette-a2: var(--colors-accent-a2);
    --colors-color-palette-a3: var(--colors-accent-a3);
    --colors-color-palette-a4: var(--colors-accent-a4);
    --colors-color-palette-a5: var(--colors-accent-a5);
    --colors-color-palette-a6: var(--colors-accent-a6);
    --colors-color-palette-a7: var(--colors-accent-a7);
    --colors-color-palette-a8: var(--colors-accent-a8);
    --colors-color-palette-a9: var(--colors-accent-a9);
    --colors-color-palette-a10: var(--colors-accent-a10);
    --colors-color-palette-a11: var(--colors-accent-a11);
    --colors-color-palette-a12: var(--colors-accent-a12);
    --colors-color-palette-default: var(--colors-accent-default);
    --colors-color-palette-emphasized: var(--colors-accent-emphasized);
    --colors-color-palette-fg: var(--colors-accent-fg);
    --colors-color-palette-text: var(--colors-accent-text);
}

  .button--variant_solid:is(:disabled, [disabled], [data-disabled]) {
    color: var(--colors-fg-disabled);
    background: var(--colors-bg-disabled);
    cursor: not-allowed;
}

  .button--variant_solid:is(:disabled, [disabled], [data-disabled]):is(:hover, [data-hover]) {
    color: var(--colors-fg-disabled);
    background: var(--colors-bg-disabled);
}

  .button--variant_solid:is(:focus-visible, [data-focus-visible]) {
    outline: 2px solid;
    outline-offset: 2px;
    outline-color: var(--colors-color-palette-default);
}

  .button--variant_solid:is(:hover, [data-hover]) {
    background: var(--colors-color-palette-emphasized);
}

  .button--size_xs {
    height: var(--sizes-8);
    min-width: var(--sizes-8);
    font-size: var(--font-sizes-xs);
    line-height: 1.125rem;
    padding-inline: var(--spacing-3);
    gap: var(--spacing-2);
}

  .button--size_xs svg {
    width: var(--sizes-4);
    height: var(--sizes-4);
    font-size: var(--font-sizes-md);
}

  .button--size_sm {
    height: var(--sizes-9);
    min-width: var(--sizes-9);
    font-size: var(--font-sizes-sm);
    line-height: 1.25rem;
    padding-inline: var(--spacing-3\\.5);
    gap: var(--spacing-2);
}

  .button--size_sm svg {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .button--size_lg {
    height: var(--sizes-11);
    min-width: var(--sizes-11);
    font-size: var(--font-sizes-md);
    line-height: 1.5rem;
    padding-inline: var(--spacing-4\\.5);
    gap: var(--spacing-2);
}

  .button--size_lg svg {
    width: var(--sizes-5);
    height: var(--sizes-5);
}

  .button--size_xl {
    height: var(--sizes-12);
    min-width: var(--sizes-12);
    font-size: var(--font-sizes-md);
    line-height: 1.5rem;
    padding-inline: var(--spacing-5);
    gap: var(--spacing-2\\.5);
}

  .button--size_xl svg {
    width: var(--sizes-5);
    height: var(--sizes-5);
}

  .button--size_2xl {
    height: var(--sizes-16);
    min-width: var(--sizes-16);
    font-size: var(--font-sizes-lg);
    line-height: 1.75rem;
    padding-inline: var(--spacing-7);
    gap: var(--spacing-3);
}

  .button--size_2xl svg {
    width: var(--sizes-6);
    height: var(--sizes-6);
}

  .button--variant_ghost {
    color: var(--colors-color-palette-text);
    --colors-color-palette-light-1: var(--colors-gray-light-1);
    --colors-color-palette-light-2: var(--colors-gray-light-2);
    --colors-color-palette-light-3: var(--colors-gray-light-3);
    --colors-color-palette-light-4: var(--colors-gray-light-4);
    --colors-color-palette-light-5: var(--colors-gray-light-5);
    --colors-color-palette-light-6: var(--colors-gray-light-6);
    --colors-color-palette-light-7: var(--colors-gray-light-7);
    --colors-color-palette-light-8: var(--colors-gray-light-8);
    --colors-color-palette-light-9: var(--colors-gray-light-9);
    --colors-color-palette-light-10: var(--colors-gray-light-10);
    --colors-color-palette-light-11: var(--colors-gray-light-11);
    --colors-color-palette-light-12: var(--colors-gray-light-12);
    --colors-color-palette-light-a1: var(--colors-gray-light-a1);
    --colors-color-palette-light-a2: var(--colors-gray-light-a2);
    --colors-color-palette-light-a3: var(--colors-gray-light-a3);
    --colors-color-palette-light-a4: var(--colors-gray-light-a4);
    --colors-color-palette-light-a5: var(--colors-gray-light-a5);
    --colors-color-palette-light-a6: var(--colors-gray-light-a6);
    --colors-color-palette-light-a7: var(--colors-gray-light-a7);
    --colors-color-palette-light-a8: var(--colors-gray-light-a8);
    --colors-color-palette-light-a9: var(--colors-gray-light-a9);
    --colors-color-palette-light-a10: var(--colors-gray-light-a10);
    --colors-color-palette-light-a11: var(--colors-gray-light-a11);
    --colors-color-palette-light-a12: var(--colors-gray-light-a12);
    --colors-color-palette-dark-1: var(--colors-gray-dark-1);
    --colors-color-palette-dark-2: var(--colors-gray-dark-2);
    --colors-color-palette-dark-3: var(--colors-gray-dark-3);
    --colors-color-palette-dark-4: var(--colors-gray-dark-4);
    --colors-color-palette-dark-5: var(--colors-gray-dark-5);
    --colors-color-palette-dark-6: var(--colors-gray-dark-6);
    --colors-color-palette-dark-7: var(--colors-gray-dark-7);
    --colors-color-palette-dark-8: var(--colors-gray-dark-8);
    --colors-color-palette-dark-9: var(--colors-gray-dark-9);
    --colors-color-palette-dark-10: var(--colors-gray-dark-10);
    --colors-color-palette-dark-11: var(--colors-gray-dark-11);
    --colors-color-palette-dark-12: var(--colors-gray-dark-12);
    --colors-color-palette-dark-a1: var(--colors-gray-dark-a1);
    --colors-color-palette-dark-a2: var(--colors-gray-dark-a2);
    --colors-color-palette-dark-a3: var(--colors-gray-dark-a3);
    --colors-color-palette-dark-a4: var(--colors-gray-dark-a4);
    --colors-color-palette-dark-a5: var(--colors-gray-dark-a5);
    --colors-color-palette-dark-a6: var(--colors-gray-dark-a6);
    --colors-color-palette-dark-a7: var(--colors-gray-dark-a7);
    --colors-color-palette-dark-a8: var(--colors-gray-dark-a8);
    --colors-color-palette-dark-a9: var(--colors-gray-dark-a9);
    --colors-color-palette-dark-a10: var(--colors-gray-dark-a10);
    --colors-color-palette-dark-a11: var(--colors-gray-dark-a11);
    --colors-color-palette-dark-a12: var(--colors-gray-dark-a12);
    --colors-color-palette-1: var(--colors-gray-1);
    --colors-color-palette-2: var(--colors-gray-2);
    --colors-color-palette-3: var(--colors-gray-3);
    --colors-color-palette-4: var(--colors-gray-4);
    --colors-color-palette-5: var(--colors-gray-5);
    --colors-color-palette-6: var(--colors-gray-6);
    --colors-color-palette-7: var(--colors-gray-7);
    --colors-color-palette-8: var(--colors-gray-8);
    --colors-color-palette-9: var(--colors-gray-9);
    --colors-color-palette-10: var(--colors-gray-10);
    --colors-color-palette-11: var(--colors-gray-11);
    --colors-color-palette-12: var(--colors-gray-12);
    --colors-color-palette-a1: var(--colors-gray-a1);
    --colors-color-palette-a2: var(--colors-gray-a2);
    --colors-color-palette-a3: var(--colors-gray-a3);
    --colors-color-palette-a4: var(--colors-gray-a4);
    --colors-color-palette-a5: var(--colors-gray-a5);
    --colors-color-palette-a6: var(--colors-gray-a6);
    --colors-color-palette-a7: var(--colors-gray-a7);
    --colors-color-palette-a8: var(--colors-gray-a8);
    --colors-color-palette-a9: var(--colors-gray-a9);
    --colors-color-palette-a10: var(--colors-gray-a10);
    --colors-color-palette-a11: var(--colors-gray-a11);
    --colors-color-palette-a12: var(--colors-gray-a12);
    --colors-color-palette-default: var(--colors-gray-default);
    --colors-color-palette-emphasized: var(--colors-gray-emphasized);
    --colors-color-palette-fg: var(--colors-gray-fg);
    --colors-color-palette-text: var(--colors-gray-text);
}

  .button--variant_ghost:is([aria-selected=true], [data-selected]) {
    background: var(--colors-color-palette-a3);
}

  .button--variant_ghost:is(:disabled, [disabled], [data-disabled]) {
    color: var(--colors-fg-disabled);
    cursor: not-allowed;
}

  .button--variant_ghost:is(:disabled, [disabled], [data-disabled]):is(:hover, [data-hover]) {
    background: var(--colors-transparent);
    color: var(--colors-fg-disabled);
}

  .button--variant_ghost:is(:focus-visible, [data-focus-visible]) {
    outline: 2px solid;
    outline-offset: 2px;
    outline-color: var(--colors-color-palette-default);
}

  .button--variant_ghost:is(:hover, [data-hover]) {
    background: var(--colors-color-palette-a3);
}

  .button--variant_link {
    vertical-align: baseline;
    height: auto !important;
    padding-inline: var(--spacing-0) !important;
    min-width: var(--sizes-0) !important;
}

  .button--variant_link:is(:disabled, [disabled], [data-disabled]) {
    color: var(--colors-border-disabled);
    cursor: not-allowed;
}

  .button--variant_link:is(:disabled, [disabled], [data-disabled]):is(:hover, [data-hover]) {
    color: var(--colors-border-disabled);
}

  .input--size_md {
    padding-inline: var(--spacing-3);
    height: var(--sizes-10);
    min-width: var(--sizes-10);
    font-size: var(--font-sizes-md);
}

  .input--size_2xs {
    padding-inline: var(--spacing-1\\.5);
    height: var(--sizes-7);
    min-width: var(--sizes-7);
}

  .input--size_2xs,.input--size_xs {
    font-size: var(--font-sizes-xs);
}

  .input--size_xs {
    padding-inline: var(--spacing-2);
    height: var(--sizes-8);
    min-width: var(--sizes-8);
}

  .input--size_sm {
    padding-inline: var(--spacing-2\\.5);
    height: var(--sizes-9);
    min-width: var(--sizes-9);
    font-size: var(--font-sizes-sm);
}

  .input--size_lg {
    padding-inline: var(--spacing-3\\.5);
    height: var(--sizes-11);
    min-width: var(--sizes-11);
    font-size: var(--font-sizes-md);
}

  .input--size_xl {
    padding-inline: var(--spacing-4);
    height: var(--sizes-12);
    min-width: var(--sizes-12);
    font-size: var(--font-sizes-lg);
}

  .input--size_2xl {
    padding-inline: var(--spacing-2);
    height: var(--sizes-16);
    min-width: var(--sizes-16);
    font-size: var(--font-sizes-3xl);
    line-height: 2.375rem;
}

  .code--size_md {
    min-height: var(--sizes-6);
    font-size: var(--font-sizes-sm);
    line-height: 1.25rem;
    padding-inline: var(--spacing-1);
    padding-block: 1px;
}

  .code--variant_outline {
    border-width: 1px;
}

  .icon--size_md {
    width: var(--sizes-5);
    height: var(--sizes-5);
}

  .icon--size_xs {
    width: var(--sizes-3);
    height: var(--sizes-3);
}

  .icon--size_sm {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .icon--size_xl {
    width: var(--sizes-7);
    height: var(--sizes-7);
}

  .icon--size_2xl {
    width: var(--sizes-8);
    height: var(--sizes-8);
}

  .text--size_xs {
    font-size: var(--font-sizes-xs);
    line-height: 1.125rem;
}

  .text--size_sm {
    font-size: var(--font-sizes-sm);
    line-height: 1.25rem;
}

  .text--size_md {
    font-size: var(--font-sizes-md);
    line-height: 1.5rem;
}

  .text--size_lg {
    font-size: var(--font-sizes-lg);
    line-height: 1.75rem;
}

  .text--size_xl {
    font-size: var(--font-sizes-xl);
    line-height: 1.875rem;
}

  .text--size_2xl {
    font-size: var(--font-sizes-2xl);
    line-height: 2rem;
}

  .text--size_3xl {
    font-size: var(--font-sizes-3xl);
    line-height: 2.375rem;
}

  .text--size_4xl {
    letter-spacing: -0.02em;
    font-size: var(--font-sizes-4xl);
    line-height: 2.75rem;
}

  .text--size_5xl {
    letter-spacing: -0.02em;
    font-size: var(--font-sizes-5xl);
    line-height: 3.75rem;
}

  .text--size_6xl {
    letter-spacing: -0.02em;
    font-size: var(--font-sizes-6xl);
    line-height: 4.5rem;
}

  .text--size_7xl {
    letter-spacing: -0.02em;
    font-size: var(--font-sizes-7xl);
    line-height: 5.75rem;
}

  .text--variant_heading {
    font-weight: var(--font-weights-semibold);
}
}@layer recipes.slots {
  @layer _base {
    .card__root {
      background: var(--colors-bg-default);
      border-radius: var(--radii-l3);
      box-shadow: var(--shadows-lg);
      overflow: hidden;
      position: relative;
}

    .card__root,.card__header {
      display: flex;
      flex-direction: column;
}

    .card__header {
      gap: var(--spacing-1);
      padding: var(--spacing-6);
}

    .card__body {
      flex: 1 1 0%;
      flex-direction: column;
}

    .card__body,.card__footer {
      display: flex;
      padding-inline: var(--spacing-6);
      padding-bottom: var(--spacing-6);
}

    .card__footer {
      justify-content: flex-end;
      padding-top: var(--spacing-2);
}

    .card__title {
      color: var(--colors-fg-default);
      font-size: var(--font-sizes-lg);
      line-height: 1.75rem;
      font-weight: var(--font-weights-semibold);
}

    .card__description {
      color: var(--colors-fg-muted);
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
}

    .accordion__root > :not([hidden]) ~ :not([hidden]) {
      border-top-width: 1px;
      border-bottom-width: 0px;
}

    .accordion__root {
      width: var(--sizes-full);
      border-top-width: 1px;
      border-bottom-width: 1px;
}

    .accordion__itemTrigger {
      color: var(--colors-fg-default);
      cursor: pointer;
      display: flex;
      gap: var(--spacing-3);
      font-size: var(--font-sizes-lg);
      line-height: 1.75rem;
      text-align: left;
      width: var(--sizes-full);
      align-items: center;
      font-weight: var(--font-weights-semibold);
      justify-content: space-between;
}

    .accordion__itemTrigger:is(:disabled, [disabled], [data-disabled]) {
      color: var(--colors-fg-disabled);
      cursor: not-allowed;
}

    .accordion__itemContent {
      display: grid;
      color: var(--colors-fg-muted);
      overflow: hidden;
      grid-template-rows: 0fr;
      --transition-prop: padding-bottom;
      transition-property: padding-bottom;
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .accordion__itemContent > div {
      overflow: hidden;
}

    .accordion__itemContent:is([open], [data-state=open]) {
      animation: var(--animations-collapse-in);
      grid-template-rows: 1fr;
}

    .accordion__itemContent:is([data-state=closed]) {
      animation: var(--animations-collapse-out);
}

    .accordion__itemIndicator {
      color: var(--colors-fg-muted);
      transform-origin: center;
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: transform;
      transition-property: transform;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .accordion__itemIndicator:is([open], [data-state=open]) {
      transform: rotate(-180deg);
}

    .avatar__root {
      border-radius: var(--radii-full);
      flex-shrink: 0;
}

    .avatar__image {
      object-fit: cover;
}

    .avatar__fallback {
      width: inherit;
      background: var(--colors-bg-subtle);
      border-radius: var(--radii-full);
      color: var(--colors-fg-default);
      display: flex;
      height: inherit;
      align-items: center;
      border-width: 1px;
      font-weight: var(--font-weights-semibold);
      justify-content: center;
}

    .avatar__fallback:is([hidden]) {
      display: none;
}

    .checkbox__root {
      --colors-color-palette-1: var(--colors-accent-1);
      --colors-color-palette-2: var(--colors-accent-2);
      --colors-color-palette-3: var(--colors-accent-3);
      --colors-color-palette-4: var(--colors-accent-4);
      --colors-color-palette-5: var(--colors-accent-5);
      --colors-color-palette-6: var(--colors-accent-6);
      --colors-color-palette-7: var(--colors-accent-7);
      --colors-color-palette-8: var(--colors-accent-8);
      --colors-color-palette-9: var(--colors-accent-9);
      --colors-color-palette-10: var(--colors-accent-10);
      --colors-color-palette-11: var(--colors-accent-11);
      --colors-color-palette-12: var(--colors-accent-12);
      --colors-color-palette-a1: var(--colors-accent-a1);
      --colors-color-palette-a2: var(--colors-accent-a2);
      --colors-color-palette-a3: var(--colors-accent-a3);
      --colors-color-palette-a4: var(--colors-accent-a4);
      --colors-color-palette-a5: var(--colors-accent-a5);
      --colors-color-palette-a6: var(--colors-accent-a6);
      --colors-color-palette-a7: var(--colors-accent-a7);
      --colors-color-palette-a8: var(--colors-accent-a8);
      --colors-color-palette-a9: var(--colors-accent-a9);
      --colors-color-palette-a10: var(--colors-accent-a10);
      --colors-color-palette-a11: var(--colors-accent-a11);
      --colors-color-palette-a12: var(--colors-accent-a12);
      --colors-color-palette-default: var(--colors-accent-default);
      --colors-color-palette-emphasized: var(--colors-accent-emphasized);
      --colors-color-palette-fg: var(--colors-accent-fg);
      --colors-color-palette-text: var(--colors-accent-text);
      display: flex;
      align-items: center;
}

    .checkbox__label {
      color: var(--colors-fg-default);
      font-weight: var(--font-weights-medium);
}

    .checkbox__control {
      color: var(--colors-color-palette-fg);
      cursor: pointer;
      display: flex;
      align-items: center;
      border-color: var(--colors-border-default);
      border-width: 1px;
      justify-content: center;
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: border-color, background;
      transition-property: border-color, background;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .checkbox__control:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) {
      background: var(--colors-color-palette-default);
      border-color: var(--colors-color-palette-default);
}

    .checkbox__control:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]):is(:hover, [data-hover]) {
      background: var(--colors-color-palette-default);
}

    .checkbox__control:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate]) {
      background: var(--colors-color-palette-default);
      border-color: var(--colors-color-palette-default);
}

    .checkbox__control:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate]):is(:hover, [data-hover]) {
      background: var(--colors-color-palette-default);
}

    .checkbox__control:has(+ :focus-visible) {
      outline-offset: 2px;
      outline: 2px solid;
      outline-color: var(--colors-border-outline);
}

    .checkbox__control:has(+ :focus-visible):is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) {
      outline-color: var(--colors-color-palette-default);
}

    .checkbox__control:is(:hover, [data-hover]) {
      background: var(--colors-bg-subtle);
}

    .datePicker__root {
      --colors-color-palette-1: var(--colors-accent-1);
      --colors-color-palette-2: var(--colors-accent-2);
      --colors-color-palette-3: var(--colors-accent-3);
      --colors-color-palette-4: var(--colors-accent-4);
      --colors-color-palette-5: var(--colors-accent-5);
      --colors-color-palette-6: var(--colors-accent-6);
      --colors-color-palette-7: var(--colors-accent-7);
      --colors-color-palette-8: var(--colors-accent-8);
      --colors-color-palette-9: var(--colors-accent-9);
      --colors-color-palette-10: var(--colors-accent-10);
      --colors-color-palette-11: var(--colors-accent-11);
      --colors-color-palette-12: var(--colors-accent-12);
      --colors-color-palette-a1: var(--colors-accent-a1);
      --colors-color-palette-a2: var(--colors-accent-a2);
      --colors-color-palette-a3: var(--colors-accent-a3);
      --colors-color-palette-a4: var(--colors-accent-a4);
      --colors-color-palette-a5: var(--colors-accent-a5);
      --colors-color-palette-a6: var(--colors-accent-a6);
      --colors-color-palette-a7: var(--colors-accent-a7);
      --colors-color-palette-a8: var(--colors-accent-a8);
      --colors-color-palette-a9: var(--colors-accent-a9);
      --colors-color-palette-a10: var(--colors-accent-a10);
      --colors-color-palette-a11: var(--colors-accent-a11);
      --colors-color-palette-a12: var(--colors-accent-a12);
      --colors-color-palette-default: var(--colors-accent-default);
      --colors-color-palette-emphasized: var(--colors-accent-emphasized);
      --colors-color-palette-fg: var(--colors-accent-fg);
      --colors-color-palette-text: var(--colors-accent-text);
      display: flex;
      gap: var(--spacing-1\\.5);
      flex-direction: column;
}

    .datePicker__label {
      color: var(--colors-fg-default);
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
      font-weight: var(--font-weights-medium);
}

    .datePicker__content {
      background: var(--colors-bg-default);
      border-radius: var(--radii-l3);
      box-shadow: var(--shadows-lg);
      display: flex;
      gap: var(--spacing-3);
      padding: var(--spacing-4);
      width: 344px;
      z-index: var(--z-index-dropdown);
      flex-direction: column;
}

    .datePicker__content:is([open], [data-state=open]) {
      animation: fadeIn 0.25s ease-out;
}

    .datePicker__content:is([data-state=closed]) {
      animation: fadeOut 0.2s ease-out;
}

    .datePicker__content:is([hidden]) {
      display: none;
}

    .datePicker__control {
      display: flex;
      gap: var(--spacing-2);
      flex-direction: row;
}

    .datePicker__table {
      width: var(--sizes-full);
      border-collapse: separate;
      border-spacing: var(--spacing-1);
      margin: calc(var(--spacing-1) * -1);
}

    .datePicker__tableCell {
      text-align: center;
}

    .datePicker__tableCellTrigger {
      width: 100%;
}

    .datePicker__tableCellTrigger[data-in-range] {
      background: var(--colors-bg-muted);
}

    .datePicker__tableCellTrigger:is([data-today])::before {
      color: var(--colors-color-palette-default);
      position: absolute;
      content: '\u2212';
      margin-top: var(--spacing-6);
}

    .datePicker__tableCellTrigger:is([aria-selected=true], [data-selected])::before {
      color: var(--colors-color-palette-fg);
}

    .datePicker__tableHeader {
      color: var(--colors-fg-muted);
      height: var(--sizes-10);
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
      font-weight: var(--font-weights-semibold);
}

    .datePicker__viewControl {
      display: flex;
      gap: var(--spacing-2);
      justify-content: space-between;
}

    .datePicker__view {
      display: flex;
      gap: var(--spacing-3);
      flex-direction: column;
}

    .datePicker__view:is([hidden]) {
      display: none;
}

    .menu__triggerItem {
      border-radius: var(--radii-l1);
      cursor: pointer;
      display: flex;
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
      align-items: center;
      font-weight: var(--font-weights-medium);
      --transition-duration: var(--durations-fast);
      transition-duration: var(--durations-fast);
      --transition-prop: background, color;
      transition-property: background, color;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .menu__triggerItem[data-highlighted] {
      background: var(--colors-bg-muted);
}

    .menu__triggerItem :where(svg) {
      color: var(--colors-fg-muted);
}

    .menu__triggerItem:is(:hover, [data-hover]) {
      background: var(--colors-bg-muted);
}

    .menu__triggerItem:is(:hover, [data-hover]) :where(svg) {
      color: var(--colors-fg-default);
}

    .menu__positioner,.menu__content {
      z-index: var(--z-index-dropdown);
}

    .menu__content {
      background: var(--colors-bg-default);
      border-radius: var(--radii-l2);
      box-shadow: var(--shadows-lg);
      display: flex;
      outline: var(--borders-none);
      width: calc(100% + 2rem);
      flex-direction: column;
}

    .menu__content:is([hidden]) {
      display: none;
}

    .menu__content:is([open], [data-state=open]) {
      animation: fadeIn 0.25s ease-out;
}

    .menu__content:is([data-state=closed]) {
      animation: fadeOut 0.2s ease-out;
}

    .menu__item {
      border-radius: var(--radii-l1);
      cursor: pointer;
      display: flex;
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
      align-items: center;
      font-weight: var(--font-weights-medium);
      --transition-duration: var(--durations-fast);
      transition-duration: var(--durations-fast);
      --transition-prop: background, color;
      transition-property: background, color;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .menu__item[data-highlighted] {
      background: var(--colors-bg-muted);
}

    .menu__item :where(svg) {
      color: var(--colors-fg-muted);
}

    .menu__item:is(:hover, [data-hover]) {
      background: var(--colors-bg-muted);
}

    .menu__item:is(:hover, [data-hover]) :where(svg) {
      color: var(--colors-fg-default);
}

    .menu__optionItem {
      border-radius: var(--radii-l1);
      cursor: pointer;
      display: flex;
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
      align-items: center;
      font-weight: var(--font-weights-medium);
      --transition-duration: var(--durations-fast);
      transition-duration: var(--durations-fast);
      --transition-prop: background, color;
      transition-property: background, color;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .menu__optionItem[data-highlighted] {
      background: var(--colors-bg-muted);
}

    .menu__optionItem :where(svg) {
      color: var(--colors-fg-muted);
}

    .menu__optionItem:is(:hover, [data-hover]) {
      background: var(--colors-bg-muted);
}

    .menu__optionItem:is(:hover, [data-hover]) :where(svg) {
      color: var(--colors-fg-default);
}

    .menu__itemGroupLabel {
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
      font-weight: var(--font-weights-semibold);
}

    .menu__itemGroup {
      display: flex;
      flex-direction: column;
}

    .pagination__root {
      display: flex;
      gap: var(--spacing-2\\.5);
}

    .pagination__item {
      font-variant-numeric: tabular-nums;
}

    .pagination__ellipsis {
      color: var(--colors-fg-default);
      display: inline-flex;
      padding-inline: var(--spacing-2);
      align-items: center;
      font-weight: var(--font-weights-semibold);
}

    .popover__arrow {
      --arrow-size: var(--sizes-3);
      --arrow-background: var(--colors-bg-default);
}

    .popover__arrowTip {
      border-top-width: 1px;
      border-left-width: 1px;
}

    .popover__positioner {
      position: relative;
}

    .popover__content {
      background: var(--colors-bg-default);
      border-radius: var(--radii-l3);
      box-shadow: var(--shadows-lg);
      display: flex;
      max-width: var(--sizes-sm);
      z-index: var(--z-index-popover);
      padding: var(--spacing-4);
      flex-direction: column;
}

    .popover__content:is([open], [data-state=open]) {
      animation: fadeIn 0.25s ease-out;
}

    .popover__content:is([data-state=closed]) {
      animation: fadeOut 0.2s ease-out;
}

    .popover__content:is([hidden]) {
      display: none;
}

    .popover__title {
      font-weight: var(--font-weights-medium);
}

    .popover__title,.popover__description {
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
}

    .popover__description,.popover__closeTrigger {
      color: var(--colors-fg-muted);
}

    .radioGroup__root {
      --colors-color-palette-1: var(--colors-accent-1);
      --colors-color-palette-2: var(--colors-accent-2);
      --colors-color-palette-3: var(--colors-accent-3);
      --colors-color-palette-4: var(--colors-accent-4);
      --colors-color-palette-5: var(--colors-accent-5);
      --colors-color-palette-6: var(--colors-accent-6);
      --colors-color-palette-7: var(--colors-accent-7);
      --colors-color-palette-8: var(--colors-accent-8);
      --colors-color-palette-9: var(--colors-accent-9);
      --colors-color-palette-10: var(--colors-accent-10);
      --colors-color-palette-11: var(--colors-accent-11);
      --colors-color-palette-12: var(--colors-accent-12);
      --colors-color-palette-a1: var(--colors-accent-a1);
      --colors-color-palette-a2: var(--colors-accent-a2);
      --colors-color-palette-a3: var(--colors-accent-a3);
      --colors-color-palette-a4: var(--colors-accent-a4);
      --colors-color-palette-a5: var(--colors-accent-a5);
      --colors-color-palette-a6: var(--colors-accent-a6);
      --colors-color-palette-a7: var(--colors-accent-a7);
      --colors-color-palette-a8: var(--colors-accent-a8);
      --colors-color-palette-a9: var(--colors-accent-a9);
      --colors-color-palette-a10: var(--colors-accent-a10);
      --colors-color-palette-a11: var(--colors-accent-a11);
      --colors-color-palette-a12: var(--colors-accent-a12);
      --colors-color-palette-default: var(--colors-accent-default);
      --colors-color-palette-emphasized: var(--colors-accent-emphasized);
      --colors-color-palette-fg: var(--colors-accent-fg);
      --colors-color-palette-text: var(--colors-accent-text);
      display: flex;
}

    .radioGroup__root[data-orientation=vertical] {
      flex-direction: column;
}

    .radioGroup__root[data-orientation=horizontal] {
      flex-direction: row;
}

    .radioGroup__item {
      cursor: pointer;
      display: flex;
      align-items: center;
}

    .radioGroup__item:is(:disabled, [disabled], [data-disabled]) {
      cursor: not-allowed;
}

    .radioGroup__itemText {
      color: var(--colors-fg-default);
      font-weight: var(--font-weights-medium);
}

    .radioGroup__itemText:is(:disabled, [disabled], [data-disabled]) {
      color: var(--colors-fg-disabled);
}

    .radioGroup__itemControl {
      background: var(--colors-transparent);
      border-radius: var(--radii-full);
      border-color: var(--colors-border-default);
      border-width: 1px;
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: background;
      transition-property: background;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .radioGroup__itemControl:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) {
      background: var(--colors-color-palette-default);
      border-color: var(--colors-color-palette-default);
      outline-color: var(--colors-bg-default);
      outline-style: solid;
}

    .radioGroup__itemControl:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]):is(:hover, [data-hover]) {
      background: var(--colors-color-palette-default);
}

    .radioGroup__itemControl:is(:disabled, [disabled], [data-disabled]) {
      color: var(--colors-fg-disabled);
      border-color: var(--colors-border-disabled);
}

    .radioGroup__itemControl:is(:disabled, [disabled], [data-disabled]):is(:hover, [data-hover]) {
      background: initial;
      color: var(--colors-fg-disabled);
}

    .radioGroup__itemControl:is(:hover, [data-hover]) {
      background: var(--colors-bg-subtle);
}

    .select__label {
      font-weight: var(--font-weights-medium);
}

    .select__label,.select__trigger {
      color: var(--colors-fg-default);
}

    .select__trigger {
      appearance: none;
      -webkit-appearance: none;
      border-radius: var(--radii-l2);
      cursor: pointer;
      display: inline-flex;
      outline: 0;
      position: relative;
      width: var(--sizes-full);
      align-items: center;
      border-color: var(--colors-border-default);
      justify-content: space-between;
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: background, box-shadow, border-color;
      transition-property: background, box-shadow, border-color;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .select__trigger:is(:placeholder-shown, [data-placeholder-shown]) {
      color: var(--colors-fg-subtle);
}

    .select__trigger:is(:disabled, [disabled], [data-disabled]) {
      color: var(--colors-fg-disabled);
      cursor: not-allowed;
}

    .select__trigger:is(:disabled, [disabled], [data-disabled]) :where(svg) {
      color: var(--colors-fg-disabled);
}

    .select__trigger :where(svg) {
      color: var(--colors-fg-subtle);
}

    .select__item {
      border-radius: var(--radii-l1);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      --transition-duration: var(--durations-fast);
      transition-duration: var(--durations-fast);
      --transition-prop: background, color;
      transition-property: background, color;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .select__item[data-highlighted] {
      background: var(--colors-gray-a3);
      color: var(--colors-fg-default);
}

    .select__item:is([aria-selected=true], [data-selected]) {
      color: var(--colors-fg-default);
}

    .select__item:is(:disabled, [disabled], [data-disabled]) {
      color: var(--colors-fg-disabled);
      cursor: not-allowed;
}

    .select__item:is(:disabled, [disabled], [data-disabled]):is(:hover, [data-hover]) {
      background: var(--colors-transparent);
      color: var(--colors-fg-disabled);
}

    .select__item:is(:hover, [data-hover]) {
      background: var(--colors-gray-a3);
      color: var(--colors-fg-default);
}

    .select__itemIndicator {
      color: var(--colors-color-palette-default);
}

    .select__itemGroupLabel {
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
      font-weight: var(--font-weights-semibold);
}

    .select__content {
      background: var(--colors-bg-default);
      border-radius: var(--radii-l2);
      box-shadow: var(--shadows-lg);
      display: flex;
      z-index: var(--z-index-dropdown);
      flex-direction: column;
}

    .select__content:is([hidden]) {
      display: none;
}

    .select__content:is([open], [data-state=open]) {
      animation: fadeIn 0.25s ease-out;
}

    .select__content:is([data-state=closed]) {
      animation: fadeOut 0.2s ease-out;
}

    .select__content:is(:focus-visible, [data-focus-visible]) {
      outline-offset: 2px;
      outline: 2px solid;
      outline-color: var(--colors-border-outline);
}

    .select__root {
      gap: var(--spacing-1\\.5);
      width: var(--sizes-full);
      flex-direction: column;
}

    .select__root,.switchRecipe__root {
      --colors-color-palette-1: var(--colors-accent-1);
      --colors-color-palette-2: var(--colors-accent-2);
      --colors-color-palette-3: var(--colors-accent-3);
      --colors-color-palette-4: var(--colors-accent-4);
      --colors-color-palette-5: var(--colors-accent-5);
      --colors-color-palette-6: var(--colors-accent-6);
      --colors-color-palette-7: var(--colors-accent-7);
      --colors-color-palette-8: var(--colors-accent-8);
      --colors-color-palette-9: var(--colors-accent-9);
      --colors-color-palette-10: var(--colors-accent-10);
      --colors-color-palette-11: var(--colors-accent-11);
      --colors-color-palette-12: var(--colors-accent-12);
      --colors-color-palette-a1: var(--colors-accent-a1);
      --colors-color-palette-a2: var(--colors-accent-a2);
      --colors-color-palette-a3: var(--colors-accent-a3);
      --colors-color-palette-a4: var(--colors-accent-a4);
      --colors-color-palette-a5: var(--colors-accent-a5);
      --colors-color-palette-a6: var(--colors-accent-a6);
      --colors-color-palette-a7: var(--colors-accent-a7);
      --colors-color-palette-a8: var(--colors-accent-a8);
      --colors-color-palette-a9: var(--colors-accent-a9);
      --colors-color-palette-a10: var(--colors-accent-a10);
      --colors-color-palette-a11: var(--colors-accent-a11);
      --colors-color-palette-a12: var(--colors-accent-a12);
      --colors-color-palette-default: var(--colors-accent-default);
      --colors-color-palette-emphasized: var(--colors-accent-emphasized);
      --colors-color-palette-fg: var(--colors-accent-fg);
      --colors-color-palette-text: var(--colors-accent-text);
      display: flex;
}

    .switchRecipe__root {
      position: relative;
      align-items: center;
}

    .switchRecipe__label {
      color: var(--colors-fg-default);
      font-weight: var(--font-weights-medium);
}

    .switchRecipe__control {
      background: var(--colors-bg-emphasized);
      border-radius: var(--radii-full);
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: background;
      transition-property: background;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .switchRecipe__control:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) {
      background: var(--colors-color-palette-default);
}

    .switchRecipe__thumb {
      background: var(--colors-bg-default);
      border-radius: var(--radii-full);
      box-shadow: var(--shadows-xs);
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: transform, background;
      transition-property: transform, background;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .switchRecipe__thumb:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) {
      transform: translateX(100%);
      background: var(--colors-bg-default);
}

    [data-theme=dark] .switchRecipe__thumb:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) {
      background: var(--colors-color-palette-fg);
}

    .tabs__root {
      --colors-color-palette-1: var(--colors-accent-1);
      --colors-color-palette-2: var(--colors-accent-2);
      --colors-color-palette-3: var(--colors-accent-3);
      --colors-color-palette-4: var(--colors-accent-4);
      --colors-color-palette-5: var(--colors-accent-5);
      --colors-color-palette-6: var(--colors-accent-6);
      --colors-color-palette-7: var(--colors-accent-7);
      --colors-color-palette-8: var(--colors-accent-8);
      --colors-color-palette-9: var(--colors-accent-9);
      --colors-color-palette-10: var(--colors-accent-10);
      --colors-color-palette-11: var(--colors-accent-11);
      --colors-color-palette-12: var(--colors-accent-12);
      --colors-color-palette-a1: var(--colors-accent-a1);
      --colors-color-palette-a2: var(--colors-accent-a2);
      --colors-color-palette-a3: var(--colors-accent-a3);
      --colors-color-palette-a4: var(--colors-accent-a4);
      --colors-color-palette-a5: var(--colors-accent-a5);
      --colors-color-palette-a6: var(--colors-accent-a6);
      --colors-color-palette-a7: var(--colors-accent-a7);
      --colors-color-palette-a8: var(--colors-accent-a8);
      --colors-color-palette-a9: var(--colors-accent-a9);
      --colors-color-palette-a10: var(--colors-accent-a10);
      --colors-color-palette-a11: var(--colors-accent-a11);
      --colors-color-palette-a12: var(--colors-accent-a12);
      --colors-color-palette-default: var(--colors-accent-default);
      --colors-color-palette-emphasized: var(--colors-accent-emphasized);
      --colors-color-palette-fg: var(--colors-accent-fg);
      --colors-color-palette-text: var(--colors-accent-text);
      display: flex;
      width: var(--sizes-full);
}

    .tabs__root[data-orientation=horizontal] {
      flex-direction: column;
}

    .tabs__root[data-orientation=vertical] {
      flex-direction: row;
}

    .tabs__list {
      display: flex;
      overflow: auto;
      position: relative;
      scrollbar-width: none;
      flex-shrink: 0;
}

    .tabs__list::-webkit-scrollbar {
      display: none;
}

    .tabs__list[data-orientation=horizontal] {
      flex-direction: row;
}

    .tabs__list[data-orientation=vertical] {
      flex-direction: column;
}

    .tabs__trigger {
      color: var(--colors-fg-muted);
      cursor: pointer;
      display: inline-flex;
      gap: var(--spacing-2);
      white-space: nowrap;
      z-index: 1;
      align-items: center;
      flex-shrink: 0;
      font-weight: var(--font-weights-semibold);
      justify-content: center;
      --transition-duration: var(--durations-normal);
      transition-duration: var(--durations-normal);
      --transition-prop: color, background, border-color;
      transition-property: color, background, border-color;
      --transition-easing: var(--easings-default);
      transition-timing-function: var(--easings-default);
}

    .tabs__trigger:is(:disabled, [disabled], [data-disabled]) {
      color: var(--colors-fg-disabled);
      cursor: not-allowed;
}

    .tabs__trigger:is(:disabled, [disabled], [data-disabled]):is(:hover, [data-hover]) {
      color: var(--colors-fg-disabled);
}

    .tabs__trigger:is([aria-selected=true], [data-selected]) {
      color: var(--colors-fg-default);
}

    .tabs__trigger:is([aria-selected=true], [data-selected]):is(:hover, [data-hover]) {
      color: var(--colors-fg-default);
}

    .tabs__trigger[data-orientation=vertical] {
      justify-content: flex-start;
}

    .tabs__trigger:is(:hover, [data-hover]) {
      color: var(--colors-fg-muted);
}

    .toast__group,.toast__root {
      padding: var(--spacing-4);
}

    .toast__root {
      background: var(--colors-bg-default);
      border-radius: var(--radii-l3);
      box-shadow: var(--shadows-lg);
      min-width: var(--sizes-xs);
      position: relative;
}

    .toast__root:is([open], [data-state=open]) {
      animation: slideInFromBottom 0.2s ease-out;
}

    .toast__root:is([data-state=closed]) {
      animation: slideOutFromBottom 0.2s ease-out;
}

    .toast__title {
      color: var(--colors-fg-default);
      font-weight: var(--font-weights-semibold);
}

    .toast__title,.toast__description {
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
}

    .toast__description {
      color: var(--colors-fg-muted);
}

    .toast__closeTrigger {
      position: absolute;
      top: var(--spacing-3);
      right: var(--spacing-3);
}

    .tooltip__content {
      background: var(--colors-gray-a12);
      border-radius: var(--radii-l2);
      box-shadow: var(--shadows-sm);
      color: var(--colors-bg-default);
      padding-inline: var(--spacing-3);
      padding-block: var(--spacing-2);
      font-size: var(--font-sizes-xs);
      line-height: 1.125rem;
      max-width: var(--sizes-2xs);
      font-weight: var(--font-weights-semibold);
}

    .tooltip__content:is([open], [data-state=open]) {
      animation: fadeIn 0.25s ease-out;
}

    .tooltip__content:is([data-state=closed]) {
      animation: fadeOut 0.2s ease-out;
}
}

  .accordion__itemTrigger--size_md {
    padding-block: var(--spacing-4);
}

  .accordion__itemContent--size_md {
    padding-bottom: var(--spacing-6);
    padding-right: var(--spacing-8);
}

  .accordion__itemContent--size_md:is([data-state=closed]) {
    padding-bottom: var(--spacing-0);
}

  .avatar__root--size_md,.avatar__image--size_md {
    height: var(--sizes-10);
    width: var(--sizes-10);
}

  .avatar__fallback--size_md {
    font-size: var(--font-sizes-md);
    line-height: 1.5rem;
}

  .avatar__fallback--size_md svg {
    width: var(--sizes-5);
    height: var(--sizes-5);
}

  .avatar__root--size_xs,.avatar__image--size_xs {
    height: var(--sizes-8);
    width: var(--sizes-8);
}

  .avatar__fallback--size_xs {
    font-size: var(--font-sizes-xs);
    line-height: 1.125rem;
}

  .avatar__fallback--size_xs svg {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .avatar__root--size_sm,.avatar__image--size_sm {
    height: var(--sizes-9);
    width: var(--sizes-9);
}

  .avatar__fallback--size_sm {
    font-size: var(--font-sizes-sm);
    line-height: 1.25rem;
}

  .avatar__fallback--size_sm svg {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .avatar__root--size_lg,.avatar__image--size_lg {
    height: var(--sizes-11);
    width: var(--sizes-11);
}

  .avatar__fallback--size_lg {
    font-size: var(--font-sizes-lg);
    line-height: 1.75rem;
}

  .avatar__fallback--size_lg svg {
    width: var(--sizes-6);
    height: var(--sizes-6);
}

  .avatar__root--size_xl,.avatar__image--size_xl {
    height: var(--sizes-12);
    width: var(--sizes-12);
}

  .avatar__fallback--size_xl {
    font-size: var(--font-sizes-xl);
    line-height: 1.875rem;
}

  .avatar__fallback--size_xl svg {
    width: var(--sizes-7);
    height: var(--sizes-7);
}

  .avatar__root--size_2xl,.avatar__image--size_2xl {
    height: var(--sizes-16);
    width: var(--sizes-16);
}

  .avatar__fallback--size_2xl {
    font-size: var(--font-sizes-2xl);
    line-height: 2rem;
}

  .avatar__fallback--size_2xl svg {
    width: var(--sizes-8);
    height: var(--sizes-8);
}

  .checkbox__root--size_md {
    gap: var(--spacing-3);
}

  .checkbox__label--size_md {
    font-size: var(--font-sizes-md);
    line-height: 1.5rem;
}

  .checkbox__control--size_md {
    width: var(--sizes-5);
    height: var(--sizes-5);
    border-radius: var(--radii-l1);
}

  .checkbox__control--size_md svg {
    width: var(--sizes-3\\.5);
    height: var(--sizes-3\\.5);
}

  .checkbox__root--size_sm {
    gap: var(--spacing-2);
}

  .checkbox__label--size_sm {
    font-size: var(--font-sizes-sm);
    line-height: 1.25rem;
}

  .checkbox__control--size_sm {
    width: var(--sizes-4);
    height: var(--sizes-4);
    border-radius: var(--radii-l1);
}

  .checkbox__control--size_sm svg {
    width: var(--sizes-3);
    height: var(--sizes-3);
}

  .checkbox__root--size_lg {
    gap: var(--spacing-4);
}

  .checkbox__label--size_lg {
    font-size: var(--font-sizes-lg);
    line-height: 1.75rem;
}

  .checkbox__control--size_lg {
    width: var(--sizes-6);
    height: var(--sizes-6);
    border-radius: var(--radii-l1);
}

  .checkbox__control--size_lg svg {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .menu__triggerItem--size_md {
    height: var(--sizes-10);
    padding-inline: var(--spacing-2\\.5);
    margin-inline: var(--spacing-1\\.5);
}

  .menu__triggerItem--size_md :where(svg) {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .menu__content--size_md {
    padding-block: var(--spacing-1);
    gap: var(--spacing-1);
}

  .menu__item--size_md {
    height: var(--sizes-10);
    padding-inline: var(--spacing-2\\.5);
    margin-inline: var(--spacing-1);
}

  .menu__item--size_md :where(svg) {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .menu__optionItem--size_md {
    height: var(--sizes-10);
    padding-inline: var(--spacing-2\\.5);
    margin-inline: var(--spacing-1);
}

  .menu__optionItem--size_md :where(svg) {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .menu__itemGroupLabel--size_md {
    padding-block: var(--spacing-2\\.5);
    padding-inline: var(--spacing-2\\.5);
    margin-inline: var(--spacing-1);
}

  .menu__itemGroup--size_md {
    gap: var(--spacing-1);
}

  .radioGroup__root--size_md[data-orientation=vertical] {
    gap: var(--spacing-4);
}

  .radioGroup__root--size_md[data-orientation=horizontal] {
    gap: var(--spacing-6);
}

  .radioGroup__item--size_md {
    gap: var(--spacing-3);
}

  .radioGroup__itemText--size_md {
    font-size: var(--font-sizes-md);
    line-height: 1.5rem;
}

  .radioGroup__itemControl--size_md {
    width: var(--sizes-5);
    height: var(--sizes-5);
}

  .radioGroup__itemControl--size_md:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) {
    outline-offset: -5px;
    outline-width: 4px;
}

  .select__label--size_md {
    font-size: var(--font-sizes-sm);
    line-height: 1.25rem;
}

  .select__trigger--size_md {
    padding-inline: var(--spacing-3);
    height: var(--sizes-10);
    min-width: var(--sizes-10);
    gap: var(--spacing-2);
    font-size: var(--font-sizes-md);
}

  .select__trigger--size_md :where(svg) {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .select__item--size_md {
    font-size: var(--font-sizes-md);
    line-height: 1.5rem;
    padding-inline: var(--spacing-2);
    height: var(--sizes-10);
}

  .select__itemIndicator--size_md :where(svg) {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .select__itemGroupLabel--size_md {
    padding-inline: var(--spacing-2);
    padding-block: var(--spacing-1\\.5);
}

  .select__content--size_md {
    padding: var(--spacing-1);
    gap: var(--spacing-1);
}

  .select__trigger--variant_outline {
    border-width: 1px;
}

  .select__trigger--variant_outline:is(:focus, [data-focus]) {
    box-shadow: 0 0 0 1px var(--colors-color-palette-default);
    border-color: var(--colors-color-palette-default);
}

  .switchRecipe__root--size_md {
    gap: var(--spacing-3);
}

  .switchRecipe__label--size_md {
    font-size: var(--font-sizes-md);
    line-height: 1.5rem;
}

  .switchRecipe__control--size_md {
    width: var(--sizes-9);
    padding: var(--spacing-0\\.5);
}

  .switchRecipe__thumb--size_md {
    width: var(--sizes-4);
    height: var(--sizes-4);
}

  .tabs__trigger--size_md svg {
    width: var(--sizes-5);
    height: var(--sizes-5);
}

  .tabs__list--variant_line[data-orientation=horizontal] {
    box-shadow: 0 -1px 0 0 inset var(--colors-border-default);
    gap: var(--spacing-4);
}

  .tabs__list--variant_line[data-orientation=vertical] {
    box-shadow: 1px 0 0 0 inset var(--colors-border-default);
    gap: var(--spacing-1);
}

  .tabs__trigger--variant_line[data-orientation=horizontal] {
    padding-bottom: var(--spacing-2\\.5);
}

  .tabs__content--variant_line {
    padding-top: var(--spacing-4);
}

  .tabs__indicator--variant_line {
    background: var(--colors-color-palette-default);
}

  .tabs__indicator--variant_line[data-orientation=horizontal] {
    height: 2px;
    width: var(--width);
    bottom: var(--spacing-0);
}

  .tabs__indicator--variant_line[data-orientation=vertical] {
    height: var(--height);
    width: 2px;
    left: var(--spacing-0);
}
}@layer utilities {
  @layer compositions {
    .textStyle_sm {
      font-size: var(--font-sizes-sm);
      line-height: 1.25rem;
}

    .textStyle_md {
      font-size: var(--font-sizes-md);
      line-height: 1.5rem;
}
}

  .w_300 {
    width: 300px;
}

  .h_160 {
    height: 160px;
}

  .w_100 {
    width: 100px;
}

  .w_180 {
    width: 180px;
}

  .w_200 {
    width: 200px;
}

  .w_60 {
    width: var(--sizes-60);
}

  .h_60 {
    height: var(--sizes-60);
}

  .d_grid {
    display: grid;
}

  .gap_20px {
    gap: 20px;
}

  .h_280px {
    height: 280px;
}

  .w_auto {
    width: auto;
}

  .d_flex {
    display: flex;
}

  .h_100\\% {
    height: 100%;
}

  .pos_relative {
    position: relative;
}

  .max-w_400px {
    max-width: 400px;
}

  .object_cover {
    object-fit: cover;
}

  .gap_6 {
    gap: var(--spacing-6);
}

  .max-w_sm {
    max-width: var(--sizes-sm);
}

  .rounded_lg {
    border-radius: var(--radii-lg);
}

  .overflow_hidden {
    overflow: hidden;
}

  .p_6 {
    padding: var(--spacing-6);
}

  .text_gray\\.500 {
    color: gray.500;
}

  .tracking_wide {
    letter-spacing: var(--letter-spacings-wide);
}

  .text_uppercase {
    text-transform: uppercase;
}

  .w_400 {
    width: 400px;
}

  .h_100 {
    height: 100px;
}

  .rounded_full {
    border-radius: var(--radii-full);
}

  .px_2 {
    padding-inline: var(--spacing-2);
}

  .color-scheme_teal {
    color-scheme: teal;
}

  .w_sm {
    width: var(--sizes-sm);
}

  .gap_4 {
    gap: var(--spacing-4);
}

  .gap_1\\.5 {
    gap: var(--spacing-1\\.5);
}

  .gap_3 {
    gap: var(--spacing-3);
}

  .h_50px {
    height: 50px;
}

  .w_100\\% {
    width: 100%;
}

  .rounded_md {
    border-radius: var(--radii-md);
}

  .gap_10px {
    gap: 10px;
}

  .max-w_8xl {
    max-width: var(--sizes-8xl);
}

  .mx_auto {
    margin-inline: auto;
}

  .px_4 {
    padding-inline: var(--spacing-4);
}

  .w_breakpoint-sm {
    width: var(--sizes-breakpoint-sm);
}

  .bg_accent\\.2 {
    background: var(--colors-accent-2);
}

  .text_accent\\.text {
    color: var(--colors-accent-text);
}

  .w_breakpoint-md {
    width: var(--sizes-breakpoint-md);
}

  .bg_accent\\.3 {
    background: var(--colors-accent-3);
}

  .w_breakpoint-lg {
    width: var(--sizes-breakpoint-lg);
}

  .bg_accent\\.4 {
    background: var(--colors-accent-4);
}

  .h_160px {
    height: 160px;
}

  .min-w_max-content {
    min-width: max-content;
}

  .gap_2 {
    gap: var(--spacing-2);
}

  .p_2 {
    padding: var(--spacing-2);
}

  .p_10 {
    padding: var(--spacing-10);
}

  .bg_tomato {
    background: tomato;
}

  .flex_1 {
    flex: 1 1 0%;
}

  .h_200px {
    height: 200px;
}

  .row-span_3 {
    grid-row: span 3 / span 3;
}

  .col-span_3 {
    grid-column: span 3 / span 3;
}

  .gap_1 {
    gap: var(--spacing-1);
}

  .text_blackAlpha\\.700 {
    color: blackAlpha.700;
}

  .text_accent\\.fg {
    color: var(--colors-accent-fg);
}

  .bg_accent\\.default {
    background: var(--colors-accent-default);
}

  .h_10 {
    height: var(--sizes-10);
}

  .col-span_span_1 {
    grid-column: span 1;
}

  .row-span_2 {
    grid-row: span 2 / span 2;
}

  .col-span_span_2 {
    grid-column: span 2;
}

  .bg_papayawhip {
    background: papayawhip;
}

  .col-span_span_4 {
    grid-column: span 4;
}

  .h_20 {
    height: var(--sizes-20);
}

  .col-span_4 {
    grid-column: span 4 / span 4;
}

  .h_16 {
    height: var(--sizes-16);
}

  .col-span_2 {
    grid-column: span 2 / span 2;
}

  .grid-area_header {
    grid-area: header;
}

  .grid-area_nav {
    grid-area: nav;
}

  .grid-area_main {
    grid-area: main;
}

  .grid-area_footer {
    grid-area: footer;
}

  .w_2xs {
    width: var(--sizes-2xs);
}

  .h_240px {
    height: 240px;
}

  .pos_absolute {
    position: absolute;
}

  .border-b_1 {
    border-bottom: 1px;
}

  .p_4 {
    padding: var(--spacing-4);
}

  .h_40px {
    height: 40px;
}

  .text_white {
    color: var(--colors-white);
}

  .w_40px {
    width: 40px;
}

  .flex_0_0_auto {
    flex: 0 0 auto;
}

  .rounded_9999px {
    border-radius: 9999px;
}

  .h_8 {
    height: var(--sizes-8);
}

  .min-w_8 {
    min-width: var(--sizes-8);
}

  .px_3 {
    padding-inline: var(--spacing-3);
}

  .p_3\\.5 {
    padding: var(--spacing-3\\.5);
}

  .h_11 {
    height: var(--sizes-11);
}

  .h_9 {
    height: var(--sizes-9);
}

  .min-w_9 {
    min-width: var(--sizes-9);
}

  .px_3\\.5 {
    padding-inline: var(--spacing-3\\.5);
}

  .h_12 {
    height: var(--sizes-12);
}

  .min-w_10 {
    min-width: var(--sizes-10);
}

  .p_4\\.5 {
    padding: var(--spacing-4\\.5);
}

  .min-w_11 {
    min-width: var(--sizes-11);
}

  .px_4\\.5 {
    padding-inline: var(--spacing-4\\.5);
}

  .px_2\\.5 {
    padding-inline: var(--spacing-2\\.5);
}

  .grid-cols_repeat\\(3\\,_minmax\\(0\\,_1fr\\)\\) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

  .items_center {
    align-items: center;
}

  .justify_center {
    justify-content: center;
}

  .border-w_1px {
    border-width: 1px;
}

  .items_baseline {
    align-items: baseline;
}

  .font_semibold {
    font-weight: var(--font-weights-semibold);
}

  .fs_xs {
    font-size: var(--font-sizes-xs);
}

  .ml_2 {
    margin-left: var(--spacing-2);
}

  .mt_3 {
    margin-top: var(--spacing-3);
}

  .leading_tight {
    line-height: var(--line-heights-tight);
}

  .flex_column {
    flex-direction: column;
}

  .fs_2xl {
    font-size: var(--font-sizes-2xl);
}

  .pt_30 {
    padding-top: 30px;
}

  .mt_10 {
    margin-top: var(--spacing-10);
}

  .border-w_thin {
    border-width: thin;
}

  .border_gray\\.2 {
    border-color: var(--colors-gray-2);
}

  .grid-cols_repeat\\(6\\,_minmax\\(0\\,_1fr\\)\\) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
}

  .justify_space-between {
    justify-content: space-between;
}

  .font_700 {
    font-weight: 700;
}

  .self_stretch {
    align-self: stretch;
}

  .justify-self_stretch {
    justify-self: stretch;
}

  .grid-cols_repeat\\(4\\,_minmax\\(0\\,_1fr\\)\\) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

  .grid-cols_repeat\\(1\\,_minmax\\(0\\,_1fr\\)\\) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
}

  .grid-cols_repeat\\(5\\,_1fr\\) {
    grid-template-columns: repeat(5, 1fr);
}

  .grid-rows_repeat\\(2\\,_1fr\\) {
    grid-template-rows: repeat(2, 1fr);
}

  .grid-flow_row {
    grid-auto-flow: row;
}

  .grid-cols_150px_1fr {
    grid-template-columns: 150px 1fr;
}

  .grid-template-areas_\\"header_header\\"_\\"nav_main\\"_\\"nav_footer\\" {
    grid-template-areas: "header header" "nav main" "nav footer";
}

  .grid-rows_50px_1fr_30px {
    grid-template-rows: 50px 1fr 30px;
}

  .font_bold {
    font-weight: var(--font-weights-bold);
}

  .col-start_4 {
    grid-column-start: 4;
}

  .col-end_6 {
    grid-column-end: 6;
}

  .grid-row-start_2 {
    grid-row-start: 2;
}

  .grid-row-end_3 {
    grid-row-end: 3;
}

  .grid-row-start_1 {
    grid-row-start: 1;
}

  .grid-row-end_4 {
    grid-row-end: 4;
}

  .col-start_2 {
    grid-column-start: 2;
}

  .col-start_1 {
    grid-column-start: 1;
}

  .col-end_3 {
    grid-column-end: 3;
}

  .col-end_7 {
    grid-column-end: 7;
}

  .pl_2 {
    padding-left: var(--spacing-2);
}

  .font_light {
    font-weight: var(--font-weights-light);
}

  .font_normal {
    font-weight: var(--font-weights-normal);
}

  .font_medium {
    font-weight: var(--font-weights-medium);
}

  .top_1 {
    top: var(--spacing-1);
}

  .right_1 {
    right: var(--spacing-1);
}

  .grid-cols_repeat\\(2\\,_minmax\\(0\\,_1fr\\)\\) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

  .border-b_border\\.default {
    border-bottom-color: var(--colors-border-default);
}

  .border-style_solid {
    border-style: solid;
}

  .mt_4 {
    margin-top: var(--spacing-4);
}

  .mt_-4 {
    margin-top: calc(var(--spacing-4) * -1);
}

  .fs_lg {
    font-size: var(--font-sizes-lg);
}

  .flex_row {
    flex-direction: row;
}

  .mt_40px {
    margin-top: 40px;
}

  .fs_sm {
    font-size: var(--font-sizes-sm);
}

  .pt_3 {
    padding-top: var(--spacing-3);
}

  .fs_md {
    font-size: var(--font-sizes-md);
}

  .pt_4 {
    padding-top: var(--spacing-4);
}

  .pt_5 {
    padding-top: var(--spacing-5);
}

  .before\\:d_block::before {
    display: block;
}

  .before\\:h_0::before {
    height: var(--sizes-0);
}

  .\\[\\&\\>\\*\\]\\:d_flex>* {
    display: flex;
}

  .\\[\\&\\>\\*\\]\\:overflow_hidden>* {
    overflow: hidden;
}

  .\\[\\&\\>\\*\\]\\:pos_absolute>* {
    position: absolute;
}

  .\\[\\&\\>\\*\\]\\:inset_0>* {
    inset: var(--spacing-0);
}

  .\\[\\&\\>\\*\\]\\:w_100\\%>* {
    width: 100%;
}

  .\\[\\&\\>\\*\\]\\:h_100\\%>* {
    height: 100%;
}

  .\\[\\&\\>img\\,_\\&\\>video\\]\\:object_cover>img,.\\[\\&\\>img\\,_\\&\\>video\\]\\:object_cover>video {
    object-fit: cover;
}

  .before\\:content_\\"\\"::before {
    content: "";
}

  .before\\:pb_75\\%::before {
    padding-bottom: 75%;
}

  .\\[\\&\\>\\*\\]\\:justify_center>* {
    justify-content: center;
}

  .\\[\\&\\>\\*\\]\\:items_center>* {
    align-items: center;
}

  @media screen and (min-width: 40rem) {
    .sm\\:grid-cols_repeat\\(4\\,_minmax\\(0\\,_1fr\\)\\) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
}
}

  @media screen and (min-width: 48rem) {
    .md\\:px_6 {
      padding-inline: var(--spacing-6);
}

    .md\\:grid-cols_repeat\\(6\\,_minmax\\(0\\,_1fr\\)\\) {
      grid-template-columns: repeat(6, minmax(0, 1fr));
}
}

  @media screen and (min-width: 64rem) {
    .lg\\:px_8 {
      padding-inline: var(--spacing-8);
}

    .lg\\:grid-cols_repeat\\(10\\,_minmax\\(0\\,_1fr\\)\\) {
      grid-template-columns: repeat(10, minmax(0, 1fr));
}
}

  @media screen and (min-width: 80rem) {
    .xl\\:grid-cols_repeat\\(12\\,_minmax\\(0\\,_1fr\\)\\) {
      grid-template-columns: repeat(12, minmax(0, 1fr));
}
}
}
`,""]);const i=l},"./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(r,a,o)=>{var e={"./components/ui/accordion/Accordion.stories":["./src/components/ui/accordion/Accordion.stories.tsx",767,429,595,687,637],"./components/ui/accordion/Accordion.stories.tsx":["./src/components/ui/accordion/Accordion.stories.tsx",767,429,595,687,637],"./components/ui/aspect/AspectRatio.stories":["./src/components/ui/aspect/AspectRatio.stories.tsx",767,280,429,231,788,16,595,687,264,790],"./components/ui/aspect/AspectRatio.stories.tsx":["./src/components/ui/aspect/AspectRatio.stories.tsx",767,280,429,231,788,16,595,687,264,790],"./components/ui/avatar/Avatar.stories":["./src/components/ui/avatar/Avatar.stories.tsx",767,595,416],"./components/ui/avatar/Avatar.stories.tsx":["./src/components/ui/avatar/Avatar.stories.tsx",767,595,416],"./components/ui/badge/Badge.stories":["./src/components/ui/badge/Badge.stories.tsx",767,280,429,231,788,595,687,264,174],"./components/ui/badge/Badge.stories.tsx":["./src/components/ui/badge/Badge.stories.tsx",767,280,429,231,788,595,687,264,174],"./components/ui/box/Box.stories":["./src/components/ui/box/Box.stories.tsx",767,280,429,231,788,16,595,687,264,364],"./components/ui/box/Box.stories.tsx":["./src/components/ui/box/Box.stories.tsx",767,280,429,231,788,16,595,687,264,364],"./components/ui/button/Button.stories":["./src/components/ui/button/Button.stories.tsx",767,280,429,231,788,595,687,264,793],"./components/ui/button/Button.stories.tsx":["./src/components/ui/button/Button.stories.tsx",767,280,429,231,788,595,687,264,793],"./components/ui/card/Card.stories":["./src/components/ui/card/Card.stories.tsx",767,280,429,231,788,595,687,264,116],"./components/ui/card/Card.stories.tsx":["./src/components/ui/card/Card.stories.tsx",767,280,429,231,788,595,687,264,116],"./components/ui/checkbox/Checkbox.stories":["./src/components/ui/checkbox/Checkbox.stories.tsx",767,280,429,231,788,595,687,264,13],"./components/ui/checkbox/Checkbox.stories.tsx":["./src/components/ui/checkbox/Checkbox.stories.tsx",767,280,429,231,788,595,687,264,13],"./components/ui/code/Code.stories":["./src/components/ui/code/Code.stories.tsx",767,280,429,231,788,595,687,264,925],"./components/ui/code/Code.stories.tsx":["./src/components/ui/code/Code.stories.tsx",767,280,429,231,788,595,687,264,925],"./components/ui/colors/Colors.stories":["./src/components/ui/colors/Colors.stories.tsx",767,280,429,231,788,595,687,264,646],"./components/ui/colors/Colors.stories.tsx":["./src/components/ui/colors/Colors.stories.tsx",767,280,429,231,788,595,687,264,646],"./components/ui/container/Container.stories":["./src/components/ui/container/Container.stories.tsx",767,280,429,231,788,595,687,264,620],"./components/ui/container/Container.stories.tsx":["./src/components/ui/container/Container.stories.tsx",767,280,429,231,788,595,687,264,620],"./components/ui/datepicker/Datepicker.stories":["./src/components/ui/datepicker/Datepicker.stories.tsx",767,280,429,231,788,595,687,264,643],"./components/ui/datepicker/Datepicker.stories.tsx":["./src/components/ui/datepicker/Datepicker.stories.tsx",767,280,429,231,788,595,687,264,643],"./components/ui/flex/Flex.stories":["./src/components/ui/flex/Flex.stories.tsx",767,280,429,231,788,595,687,264,807],"./components/ui/flex/Flex.stories.tsx":["./src/components/ui/flex/Flex.stories.tsx",767,280,429,231,788,595,687,264,807],"./components/ui/grid/Grid.stories":["./src/components/ui/grid/Grid.stories.tsx",767,280,429,231,788,595,687,264,961],"./components/ui/grid/Grid.stories.tsx":["./src/components/ui/grid/Grid.stories.tsx",767,280,429,231,788,595,687,264,961],"./components/ui/heading/Heading.stories":["./src/components/ui/heading/Heading.stories.tsx",767,280,429,231,788,595,687,264,134],"./components/ui/heading/Heading.stories.tsx":["./src/components/ui/heading/Heading.stories.tsx",767,280,429,231,788,595,687,264,134],"./components/ui/icon/Icon.stories":["./src/components/ui/icon/Icon.stories.tsx",767,280,429,231,788,595,687,264,371],"./components/ui/icon/Icon.stories.tsx":["./src/components/ui/icon/Icon.stories.tsx",767,280,429,231,788,595,687,264,371],"./components/ui/input/Input.stories":["./src/components/ui/input/Input.stories.tsx",767,280,429,231,788,595,687,264,217],"./components/ui/input/Input.stories.tsx":["./src/components/ui/input/Input.stories.tsx",767,280,429,231,788,595,687,264,217],"./components/ui/label/Label.stories":["./src/components/ui/label/Label.stories.tsx",767,280,429,231,788,595,687,264,139],"./components/ui/label/Label.stories.tsx":["./src/components/ui/label/Label.stories.tsx",767,280,429,231,788,595,687,264,139],"./components/ui/menu/Menu.stories":["./src/components/ui/menu/Menu.stories.tsx",767,280,429,231,788,595,687,264,437],"./components/ui/menu/Menu.stories.tsx":["./src/components/ui/menu/Menu.stories.tsx",767,280,429,231,788,595,687,264,437],"./components/ui/pagination/Pagination.stories":["./src/components/ui/pagination/Pagination.stories.tsx",767,280,429,231,788,595,687,264,424],"./components/ui/pagination/Pagination.stories.tsx":["./src/components/ui/pagination/Pagination.stories.tsx",767,280,429,231,788,595,687,264,424],"./components/ui/popover/Popover.stories":["./src/components/ui/popover/Popover.stories.tsx",767,280,429,231,788,595,687,264,306],"./components/ui/popover/Popover.stories.tsx":["./src/components/ui/popover/Popover.stories.tsx",767,280,429,231,788,595,687,264,306],"./components/ui/props/Props.stories":["./src/components/ui/props/Props.stories.tsx",767,280,429,231,788,595,687,264,119],"./components/ui/props/Props.stories.tsx":["./src/components/ui/props/Props.stories.tsx",767,280,429,231,788,595,687,264,119],"./components/ui/radio/Radio.stories":["./src/components/ui/radio/Radio.stories.tsx",767,231,595,687,884],"./components/ui/radio/Radio.stories.tsx":["./src/components/ui/radio/Radio.stories.tsx",767,231,595,687,884],"./components/ui/select/Select.stories":["./src/components/ui/select/Select.stories.tsx",767,280,429,231,788,595,687,264,662],"./components/ui/select/Select.stories.tsx":["./src/components/ui/select/Select.stories.tsx",767,280,429,231,788,595,687,264,662],"./components/ui/shape/Shape.stories":["./src/components/ui/shape/Shape.stories.tsx",767,280,429,231,788,595,687,264,507],"./components/ui/shape/Shape.stories.tsx":["./src/components/ui/shape/Shape.stories.tsx",767,280,429,231,788,595,687,264,507],"./components/ui/switch/Switch.stories":["./src/components/ui/switch/Switch.stories.tsx",767,595,687,622],"./components/ui/switch/Switch.stories.tsx":["./src/components/ui/switch/Switch.stories.tsx",767,595,687,622],"./components/ui/tabs/Tab.stories":["./src/components/ui/tabs/Tab.stories.tsx",767,280,595,687,133],"./components/ui/tabs/Tab.stories.tsx":["./src/components/ui/tabs/Tab.stories.tsx",767,280,595,687,133],"./components/ui/text/Text.stories":["./src/components/ui/text/Text.stories.tsx",767,280,429,231,788,595,687,264,290],"./components/ui/text/Text.stories.tsx":["./src/components/ui/text/Text.stories.tsx",767,280,429,231,788,595,687,264,290],"./components/ui/toast/Toast.stories":["./src/components/ui/toast/Toast.stories.tsx",767,280,429,231,788,595,687,264,926],"./components/ui/toast/Toast.stories.tsx":["./src/components/ui/toast/Toast.stories.tsx",767,280,429,231,788,595,687,264,926],"./components/ui/tooltip/Tooltip.stories":["./src/components/ui/tooltip/Tooltip.stories.tsx",767,280,429,231,788,595,687,264,260],"./components/ui/tooltip/Tooltip.stories.tsx":["./src/components/ui/tooltip/Tooltip.stories.tsx",767,280,429,231,788,595,687,264,260]};function t(s){if(!o.o(e,s))return Promise.resolve().then(()=>{var i=new Error("Cannot find module '"+s+"'");throw i.code="MODULE_NOT_FOUND",i});var c=e[s],l=c[0];return Promise.all(c.slice(1).map(o.e)).then(()=>o(l))}t.keys=()=>Object.keys(e),t.id="./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",r.exports=t},"./storybook-config-entry.js":(r,a,o)=>{"use strict";o.r(a);var e=o("@storybook/global"),t=o("@storybook/preview-api");const s=__STORYBOOK_MODULE_CHANNELS__,c=n=>n(),l=[async n=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(n))return;const d=n.substring(6);return o("./src lazy recursive ^\\.\\/.*$ include: (?%21.*node_modules)(?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+d)}];async function i(n){for(let d=0;d<l.length;d++){const u=await c(()=>l[d](n));if(u)return u}}const m=()=>(0,t.composeConfigs)([o("./node_modules/@storybook/react/dist/entry-preview.mjs"),o("./node_modules/@storybook/react/dist/entry-preview-rsc.mjs"),o("./node_modules/@storybook/nextjs/dist/preview.mjs"),o("./node_modules/@storybook/addon-links/dist/preview.js"),o("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),o("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),o("./node_modules/@storybook/addon-essentials/dist/viewport/preview.js"),o("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),o("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),o("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),o("./node_modules/@storybook/addon-interactions/dist/preview.js"),o("./node_modules/@storybook/addon-themes/dist/preview.js"),o("./.storybook/preview.tsx")]),p=(0,s.createBrowserChannel)({page:"preview"});t.addons.setChannel(p),e.global.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const v=new t.PreviewWeb(i,m);window.__STORYBOOK_PREVIEW__=v,window.__STORYBOOK_STORY_STORE__=v.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=p},"@storybook/client-logger":r=>{"use strict";r.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events/preview-errors":r=>{"use strict";r.exports=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__},"@storybook/core-events":r=>{"use strict";r.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":r=>{"use strict";r.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":r=>{"use strict";r.exports=__STORYBOOK_MODULE_PREVIEW_API__}},r=>{var a=e=>r(r.s=e);r.O(0,[409],()=>a("./storybook-config-entry.js"));var o=r.O()}]);
