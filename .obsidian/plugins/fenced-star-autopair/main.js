const { MarkdownView, Plugin } = require("obsidian");

function isStar(event) {
  return event.key === "*" || (event.code === "Digit8" && event.shiftKey);
}

class FencedStarAutopair extends Plugin {
  onload() {
    this.registerDomEvent(document, "keydown", (event) => {
      if (!isStar(event)) return;

      const view = this.app.workspace.getActiveViewOfType(MarkdownView);
      if (!view || !view.editor) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      view.editor.replaceSelection("*");
    }, true);
  }
}

module.exports = { default: FencedStarAutopair };
