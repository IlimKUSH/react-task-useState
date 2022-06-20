import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    if (!title || !price || !image) {
      alert("Type in!");
    } else {
      navigate("/");
    }
  }
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}>
      <TextField
        value={title}
        label="Title"
        variant="outlined"
        onChange={e => setTitle(e.target.value)}
      />
      <TextField
        value={price}
        style={{ marginTop: "25px" }}
        label="Price"
        onChange={e => setPrice(e.target.value)}
        variant="outlined"
      />
      <TextField
        value={image}
        style={{ marginTop: "25px" }}
        label="Image"
        onChange={e => setImage(e.target.value)}
        variant="outlined"
      />
      <Button
        onClick={() => {
          handleSave();
        }}
        sx={{ m: 1 }}
        variant="contained">
        Save
      </Button>
    </Box>
  );
};

export default AddProduct;
