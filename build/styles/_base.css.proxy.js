// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n  font-size: 112.5%;\n  line-height: 1.5;\n  margin: 0;\n}\n\nh1 {\n  line-height: 1.3;\n  margin: 0;\n}\n\nh2 {\n  font-family: 'Fredoka One', cursive;\n  font-size: 22px;\n  text-align: center;\n}\n\nh3 {\n  display: inline-block;\n  font-family: 'Fredoka One', cursive;\n  font-size: 20px;\n  text-align: center;\n  margin: 5px;\n  padding: 5px 20px;\n  background: var(--color-lightgreen);\n  border-radius: 15px;\n}\n\nbutton {\n  font-size: 1em;\n}\n\n.logo {\n  margin-right: 10px;\n}\n\n.active {\n  border: 5px dotted;\n  border-radius: 15px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}