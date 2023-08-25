import React from 'react';
import { Box, Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: "#1a1a19", color: "white", p: 3 }}>
                <Box sx={{
                    my: 2, "& svg":
                    {
                        fontSize: '60px',
                        cursor: "pointer",
                        mr: 2
                    },
                    "& svg:hover": {
                        color: 'goldenrod',
                        transform: 'translateY(-5px)',
                        transition: 'all ease 400ms'
                    }
                }} >
                    <InstagramIcon />
                    <TwitterIcon />
                    <GitHubIcon />
                    <LinkedInIcon />
                </Box>
                <Typography variant='h5' sx={{ "@media (max-width : 600px)": { fontSize: "1rem" } }} >
                    All Rights Reserved &copy; Tejas Saykar
                </Typography>

            </Box>
        </>
    )
}

export default Footer
