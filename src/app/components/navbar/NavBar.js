import { Box, Typography } from '@mui/material';
import React from 'react';
import DarkModeToggler from './darkModeToggler/DarkModeToggler';

const NavBar = () => {
    
    return (
        <nav className="flex flex-row py-2">
            <Box className="basis-1/6">
                <Typography className='text-sky-900 text-3xl'>FaceHub</Typography>
            </Box>
            <Box className="basis-1/2 items-center">
                <Typography>Home</Typography>
            </Box>
            <Box className="basis-1/3">
                <Typography>Contact Us</Typography>
            </Box>
            <Box>
                <DarkModeToggler />
            </Box>
        </nav>
    )
}

export default NavBar