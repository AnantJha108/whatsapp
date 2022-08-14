import { AppBar, Avatar, Box, IconButton, Toolbar } from '@mui/material'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react'

const Header2 = () => {
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
                            <SearchOutlinedIcon/>
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

export default Header2