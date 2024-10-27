"use client";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./style.css";

export default function DeletePostButton(props: { username: string | null | undefined }) {
  const user = props.username;
  async function deletePost() {
    console.log("Post deleted");
  }
  return (
    <div>
      <AlertDialog.Root>
        <AlertDialog.Trigger asChild>
          <button className="Button">Delete post</button>
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className="AlertDialogOverlay" />
          <AlertDialog.Content className="AlertDialogContent">
            <AlertDialog.Title className="AlertDialogTitle">Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Description className="AlertDialogDescription">
              Once thou art purge thine post, the great consequences cannot be undone.
            </AlertDialog.Description>
            <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
              <AlertDialog.Cancel asChild>
                <button className="Button">Cancel</button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <button type="button" className="Button" onClick={deletePost}>
                  Et tu, {user}?
                </button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </div>
  );
}
