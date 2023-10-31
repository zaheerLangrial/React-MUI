import { Button, Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function MUIForm() {
  const navigate = useNavigate()
    const [serverData , setServerData] = useState([])
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('')
    const [gander , setGender] = useState('')

    const handlePost = async (data) => {
        const res = await axios.post('http://localhost:3000/Notes' , data)
    }
    useEffect(() => {
        dataGetForObjLength()
    }, [])
    const dataGetForObjLength = async () => {
        const res = await axios.get('http://localhost:3000/Notes')
        setServerData(res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const obj = {
            id : serverData.length + 1,
            email : email,
            password : password,
            gander : gander
        }
        handlePost(obj)
        navigate('/notes')
    }
  return (
    <Container>
      
      <form onSubmit={handleSubmit} >
      <Typography variant="h3" color="secondary" sx={{ font: "bold", mt:2}}>
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
        <FormControl sx={{display: "block" , mt:2}}>
        <FormLabel>
                Gender
            </FormLabel>
            <RadioGroup defaultValue='female' onChange={(e) => setGender(e.target.value)}>
        <FormControlLabel value='female' control={<Radio />} label='Female' />
        <FormControlLabel value='male' control={<Radio color="success"/>} label='Male' />
        <FormControlLabel value='other' control={<Radio />} label='Other'/>
        </RadioGroup>
        </FormControl>
            
        
        

        <Button sx={{mt:2}} type="submit" variant="outlined" size="large" color="primary">
          Save
        </Button>
      </form>
    </Container>
  );
}

export default MUIForm;
