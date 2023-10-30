import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function MUIForm() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Your Email : ' , email);
        console.log('Your Password : ' , password)
    }
  return (
    <Container>
      
      <form onSubmit={handleSubmit}>
      <Typography variant="h3" color="secondary" sx={{ font: "bold" }}>
        Enter Details
      </Typography>
        <TextField
          variant="standard"
          label="Email"
          fullWidth
          sx={{ marginTop: 2, mb: 2 }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          variant="standard"
          label="Password"
          type="password"
          fullWidth
          sx={{ marginTop: 2, mb: 2 }}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="outlined" size="large" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
}

export default MUIForm;
