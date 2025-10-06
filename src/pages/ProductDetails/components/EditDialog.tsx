import React from "react";
import { Button, TextField } from "@mui/material";
import type { ProductItemType } from "../../../types/types";

interface EditDialogProps {
  item: ProductItemType;
  onCancel: () => void;
}

export const EditDialog = (props: EditDialogProps) => {
  const { onCancel } = props;
  const { title, description } = props.item;

  const [localTitle, setLocalTitle] = React.useState(title);
  const [localDescription, setLocalDescription] = React.useState(description);

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocalTitle(e.target.value);
  }

  const changeDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setLocalDescription(e.target.value);
  }

  return (
    <div className="fixed top-0 left-0 size-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="w-full max-w-[600px] bg-white rounded-lg shadow-md border border-gray-300 p-4">
        <h1 className="text-2xl text-blue-700 mb-4">Edit product</h1>
        <div className="flex w-full gap-3 flex-col">
          <div>
            <p>Title:</p>
            <TextField
              type="text"
              className="w-full"
              size="small"
              defaultValue={localTitle}
              onChange={(e) => changeTitle(e)}
            />
          </div>
          <div>
            <p>Description:</p>
            <TextField
              type="text"
              className="w-full"
              size="small"
              defaultValue={localDescription}
              onChange={(e) => changeDescription(e)}
            />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <Button variant="contained" onClick={() => onCancel()}>Cancel</Button>
          <Button variant="contained" color="success">Save</Button>
        </div>
      </div>
    </div>
  )
}
