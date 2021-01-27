// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".navigation {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-around;\n  align-items: center;\n  overflow: auto;\n  padding-top: 12px;\n}\n\n.navigation__icons {\n  filter: invert(58%) sepia(17%) saturate(285%) hue-rotate(78deg)\n    brightness(93%) contrast(84%);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}