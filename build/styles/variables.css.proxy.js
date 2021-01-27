// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n  --color-darkgreen: #2e3532;\n  --color-green: #7e9181;\n  --color-lightgreen: #a3b0ae;\n  --color-verylightgreen: #b5bfc5;\n  --color-grey: #c7cedb;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}