// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".quiz-card {\n  background: var(--color-verylightgreen);\n  text-align: center;\n  margin: 15px;\n  border-radius: 15px;\n  padding-bottom: 10px;\n  position: relative;\n}\n\n.quiz-card__bookmark {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  right: 20px;\n  top: -3px;\n}\n\n.quiz-card__bookmarked {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  right: 20px;\n  top: -3px;\n}\n\n.quiz-card__summary {\n  list-style: none;\n  background: var(--color-green);\n  margin: 0 100px;\n  padding: 2px 0;\n  border-radius: 15px;\n  filter: drop-shadow(0 0 0.1rem #000);\n  transition: all 0.6s ease-in-out;\n}\n\n.quiz-card__summary:focus {\n  border: 5px dotted var(--color-verylightgreen);\n  filter: drop-shadow(0 0 0.1rem #000);\n  margin: 20px;\n}\n\n.quiz-card__question {\n  background: var(--color-lightgreen);\n  border-radius: 15px 15px 0 0;\n  padding: 30px 0;\n  font-size: 20px;\n}\n\n.quiz-card__answer {\n  margin: 20px;\n  padding: 20px;\n}\n\ndetails {\n  transition: height 1s ease-in-out;\n  overflow-y: visible;\n}\n\ndetails:not([open]) {\n  height: 2em;\n}\n\ndetails[open] {\n  height: 8em;\n}\n\n.quiz-card__tags {\n  margin: 5px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}