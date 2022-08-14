import { Box, IconButton, TextField } from '@mui/material'
import React from 'react'
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';

const Side2 = () => {
  return (
    <Box sx={{ width: "100%", height: "650px", backgroundColor: "#eee" }}>
      <img src={"assets/bg.png"} width="100%" height="590px" alt="" />
      <Box sx={{ backgroundColor: "#eee",paddingTop:"10px"}}>
        <IconButton>
          <SentimentSatisfiedOutlinedIcon />
        </IconButton>
        <IconButton>
          <AttachFileOutlinedIcon />
        </IconButton>
        <TextField size='small' fullWidth sx={{ width: "85%" }} />
        <IconButton>
          <MicNoneOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default Side2