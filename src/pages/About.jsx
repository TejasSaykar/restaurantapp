import React from 'react'
import Layout from '../components/Layouts/Layout';
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign : 'center',
        p : 3,
        "& h4" : {
          fontWeight :  "bold"
        },
        "& p" : {
          textAlign : 'justify'
        },
        "@media (max-width : 600px)" : {
          mt : 0,
          "& h4" : {
            fontSize : '1.5rem',
            mb : 2
          }
        }
      }}>
        <Typography variant='h4'>
          Welcome To My Restaurant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repellat, voluptates recusandae sint ex alias pariatur quidem labore molestias autem esse repellendus facere incidunt illo id quam blanditiis cum eum exercitationem perferendis iste debitis saepe quasi. Illum libero minus, perspiciatis voluptas numquam ad tempora officiis rem ea veniam veritatis? Tempore qui adipisci excepturi perspiciatis esse ratione eaque, iste vitae officia ipsa tempora, provident aliquid labore facere veritatis nisi sed temporibus dignissimos minima. Iure cum odio nemo excepturi reprehenderit culpa mollitia fugiat praesentium laborum, ab temporibus reiciendis natus quod numquam illo, non accusamus, dicta a facilis ipsum autem aspernatur omnis optio.
        </p>
        <br />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut consequuntur ratione, doloribus officiis sit expedita suscipit exercitationem consectetur adipisci molestiae similique voluptas dicta! Molestiae enim et eius sunt fugit sequi a, eos voluptate ab accusamus tempora magnam omnis quasi reiciendis cumque amet quo soluta sit eaque, repellendus dolores libero quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error numquam quis ipsam aperiam qui, quo vitae inventore ea consequatur quaerat aut itaque dolore deserunt sed praesentium amet facilis temporibus harum? Provident odit sunt quasi dolore fuga molestias, hic, commodi veritatis magnam neque veniam quaerat ad cum ipsam! Corrupti, tenetur facere!</p>
      </Box>
    </Layout>
  )
}

export default About
