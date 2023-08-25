import React from 'react'
import Layout from '../components/Layouts/Layout';
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';



const Contact = () => {
  return (
    <Layout>
      <Box sx={{ mb: 10, px: 10, "& h4": { fontWeight: 'bold', mb: 2, mt:3 } }}>
        <Typography variant='h4'>Contact My Restaurant</Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ducimus, eos maxime placeat neque aperiam commodi laboriosam sequi impedit labore omnis voluptates iusto aliquid non. Itaque illum delectus eos voluptate.</p>
      </Box>
      <Box>
        <TableContainer>
          <Table aria-label='contact table' sx={{width : '50%', margin : 'auto', mb : 3, p : 3}}>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor: 'black', color: "white"}} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell sx={{"@media (max-width : 600px)" : {
                  display : 'flex',
                  flexDirection : 'column',
                  "& span" : {
                    ml : 3
                  }
                }}}><SupportAgentIcon sx={{ color: 'red', pt: 1 }} /> <span>1800-00-0000 (Toll Free)</span> </TableCell>
              </TableRow>
              <TableRow>
                <TableCell><MailIcon sx={{ color: 'skyblue', pt: 1 }} />help@tejas.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><CallIcon sx={{ color: 'green', pt: 1 }} />12334567890</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
