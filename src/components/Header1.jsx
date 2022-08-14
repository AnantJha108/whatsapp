import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import React from 'react'

const Header1 = () => {
    return (
        <Box>
            <AppBar position='static' sx={{backgroundColor:"#f0f2f5",boxShadow:"none"}}>
                <Toolbar>
                    <Box sx={{flexGrow:1}}>
                        <IconButton>
                            <Avatar />
                        </IconButton>
                    </Box>
                    <Box>
                        <IconButton>
                            <AutorenewOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <ChatOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertOutlinedIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header1