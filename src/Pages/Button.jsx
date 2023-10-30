import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import CloudUpload from '@mui/icons-material/CloudUpload'

function Create() {
    const handleUpload = () => {
        const inputFile = document.createElement('input')
        inputFile.type ='file';
        inputFile.accept = 'image/*';
        console.log(inputFile)
        inputFile.click()
    }
    
  return (
    <div>
      <Typography
        component="h3"
        variant="h6"
        color="GrayText"
        align="center"
        gutterBottom
        noWrap
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam labore
        laborum sapiente, corrupti explicabo aliquam voluptatem quisquam
        praesentium commodi accusamus, a ipsam molestias modi laboriosam enim
        qui quasi expedita illum!
      </Typography>

      <Button
        onClick={() => console.log("Clicked contained Button")}
        variant="contained"
      >
        Click Me!
      </Button>
      <br />
      <Button
        onClick={() => console.log("Clicked contained Button")}
        variant="outlined"
        disableElevation
      >
        Click Me!
      </Button>
      <br />
      <Button
        onClick={() => console.log("Clicked contained Button")}
        variant="contained"
        href="https://mui.com/material-ui/react-button/#outlined-buttons"
        size="large"
      >
        <Delete fontSize="large"/> Click Me!
      </Button>
      <br />

      {/* Now am going to practise IconButton */}

      <Button variant="contained">
        Send {<SendIcon fontSize="large"/>}
      </Button>

      <br />

      <IconButton>
        <Delete />
      </IconButton>

      <br />

      <IconButton>
        <Delete />
      </IconButton>

      <br />

      <Button onClick={handleUpload} type="file" variant="contained" size="large" startIcon={<CloudUpload/>}>
         Uplaod File
      </Button>
    </div>
  );
}

export default Create;
