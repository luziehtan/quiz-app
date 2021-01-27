// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "input[type='text'],\nselect,\ntextarea {\n  width: 80%;\n  padding: 12px;\n  border: 1.5px solid var(--color-darkgreen);\n  border-radius: 4px;\n  box-sizing: border-box;\n  margin-top: 6px;\n  margin-bottom: 16px;\n  resize: vertical;\n  text-align: center;\n  background: #e2e6ec;\n}\n\ninput[type='submit'] {\n  background-color: var(--color-green);\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.create-new__container {\n  border-radius: 15px;\n  background-color: #b5bfc5;\n  padding: 20px;\n  margin: 20px;\n  text-align: center;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}