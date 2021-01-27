// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".app-grid {\n  display: grid;\n  background: hotpink;\n  grid-template-rows: 55px auto 55px;\n  height: 100vh;\n}\n\n.app-grid__heading {\n  background-image: linear-gradient(#7e9181, #c7cedb);\n}\n\n.app-grid__header {\n  font-family: 'Fredoka One', cursive;\n  text-align: center;\n  margin: 5px;\n}\n\n.app-grid__content {\n  background: var(--color-grey);\n  overflow-y: auto;\n}\n\n.app-grid__navigation {\n  background: var(--color-darkgreen);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}