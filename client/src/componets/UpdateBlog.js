import React, { useState } from "react";
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";

const labelStyles = { mb: 1, mt: 2, fontSize: "20px", fontWeight: "bold" };

const UpdateBlog = () => {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your update logic here (API call)
    console.log(inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        borderRadius={10}
        boxShadow="10px 10px 20px #ccc"
        padding={3}
        margin={"auto"}
        marginTop={3}
        display="flex"
        flexDirection={"column"}
        width={"80%"}
      >
        <Typography fontWeight="bold" padding={3} color="grey" variant="h4" textAlign="center">
          Update Blog
        </Typography>
        <InputLabel sx={labelStyles}>Title</InputLabel>
        <TextField
          name="title"
          onChange={handleChange}
          value={inputs.title}
          margin="normal"
          variant="outlined"
        />
        <InputLabel sx={labelStyles}>Description</InputLabel>
        <TextField
          name="description"
          onChange={handleChange}
          value={inputs.description}
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
        <InputLabel sx={labelStyles}>Image URL</InputLabel>
        <TextField
          name="imageURL"
          onChange={handleChange}
          value={inputs.imageURL}
          margin="normal"
          variant="outlined"
        />
        <Button
          sx={{ mt: 2, borderRadius: 4 }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Update
        </Button>
      </Box>
    </form>
  );
};

export default UpdateBlog;