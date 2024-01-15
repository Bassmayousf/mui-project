import React, { useEffect, useState } from 'react';
import "./home.css"
import { Box, Button, IconButton, Paper, Typography, styled } from '@mui/material';
import { Close } from '@mui/icons-material';
import { purple } from '@mui/material/colors';
export default function Home() {
  const [data,setData]=useState([])
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  
  useEffect(()=>{
    fetch("http://localhost:3100/mydata")
    .then((response) => response.json())
    .then((data) => {
      setData(data)
    })
    .catch(console.error);
  },[data])
let totalPrice = 0
  return (
    <Box>
      {data.map((item)=>{
      Number(  totalPrice += item.price)
        return(
          <Paper key={item.id} sx={ {mb:"20px",width:"366px",display:"flex",justifyContent:"space-between",padding:"20px 30px",alignItems:"center",position:"relative"}}>
         <Typography  variant='h6'>
            {item.title}
          </Typography>
          <Typography variant='h6'>
            ${item.price}
          </Typography>
          <IconButton   sx={{position:"absolute",top:"0px",right:"0px",padding:"2px 7px 8px" }} onClick={(e)=>{
              fetch(`http://localhost:3100/mydata/${item.id}`, {
                method: "DELETE",
              })  
            }}>
            <Close  sx={{fontSize:"18px"}}/>
          </IconButton>
        </Paper>
        )
        
      })}
    <Typography variant='body1'>
    &#128073; you spent total  <ColorButton sx={{fontSize:"16px"}} variant="contained"> ${totalPrice}</ColorButton>

    </Typography>
    </Box>
  );
}
