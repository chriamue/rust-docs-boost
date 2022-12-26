// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "rust-docs-boost" is now active!'
  );

  let command = vscode.commands.registerCommand(
    "rust-docs-boost.improveDocumentation",
    () => {
      // retrieve the current text editor and selection
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        // no active text editor, do nothing
        return;
      }
      const selection = editor.selection;

      // improve the documentation for the selected function
      improve_documentation(editor, selection);
    }
  );

  context.subscriptions.push(command);
}

// This method is called when your extension is deactivated
export function deactivate() {}

function improve_documentation(
  editor: vscode.TextEditor,
  selection: vscode.Selection
) {
  let text = editor.document.getText(selection);
  vscode.window.showInputBox({
    prompt: "Improved Documentation:",
    placeHolder: text,
    value: text,
    password: false,
    ignoreFocusOut: true,
    validateInput: (value: string) => {
      if (!value) {
        return "Text is required";
      }
      return undefined;
    },
  }).then((text) => {
    if (text) {
      // copy the text to the clipboard
      vscode.env.clipboard.writeText(text);
    }
  });
}
