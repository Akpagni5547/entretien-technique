import React from "react";
import { Button } from "antd";
import { useState } from "react";
import CollectionCreateForm from "./CollectionCreateForm";

const CardModal: React.FC = () => {
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => {

          setOpen(true);
        }}
      >
        Ajoutez une recette
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default CardModal;
