import { Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Notes() {
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    dataGetForObjLength();
  }, []);
  const dataGetForObjLength = async () => {
    try {
      const res = await axios.get("http://localhost:3000/Notes");
      setServerData(res.data);
      console.log(res.data)
    } catch (error) {
      console.log(Error);
    }
  };
  return (
    <Container>
      <Grid container spacing={3}>
        {serverData.map((item) => {
          return (
            <Grid item key={item.id} xs={12} md={6} lg={4}>
            <Paper>
            {item.email}
            </Paper>
          </Grid>
          )
        })}
          
        
      </Grid>
    </Container>
  );
}

export default Notes;
