import { useCreateBlockNote } from "@blocknote/react";
// Or, you can use ariakit, shadcn, etc.
import { BlockNoteView } from "@blocknote/mantine";
import { ko } from "@blockNote/core/locales";
// Default styles for the mantine editor
import "@blocknote/mantine/style.css";
// Include the included Inter font
import "@blocknote/core/fonts/inter.css";

export function AppEditor() {
  const locale = ko;
  // Create a new editor instance
  const editor = useCreateBlockNote();

  // Render the editor
  return <BlockNoteView editor={editor} />;
}
