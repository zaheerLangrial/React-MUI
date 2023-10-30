import { Container } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

function Text_Field() {
  return (
    <Container>
        <br />
        <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
        <br />
        <hr />
        <br />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <br />
        <hr />
        <br />
<TextField id="standard-basic" label="Standard" variant="standard" />
<br />
        <hr />
        <br />

        <TextField error id="standard-basic" label="Standard" variant="standard" />
        <br />
        <TextField multiline maxRows={5} id="outlined-basic" label="Outlined" variant="outlined" margin="dense"/>
<br />
        <TextField error id="standard-basic" label="Standard" variant="standard" margin='dense' fullWidth/>

        <TextField id="outlined-basic" label="Outlined" variant="outlined" margin='dense' color='success'/>


    </Container>

    
  )
}

export default Text_Field