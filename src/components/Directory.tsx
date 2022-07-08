import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

export const Directory: React.FC = () => (
  <div className="homeSection">
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item md={9} xs={12}>
          <div className="title">Stay Connected</div>
          <Typography component="h2" sx={{fontSize: "32px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 8px 0"}}>Member Directory</Typography>
          <p>Easily allow your members to look up contact info for other members by enabling the member directory option within the B1 app.</p>
          <p>The directory is fully interactive and searchable.  Find other members, view family relationships, put names to faces and keep in touch throughout the week.</p>
          <p>The member directory is fully integrated with the <a href="https://chums.org/">CHUMS</a> church management software backend, providing a single centralized place to manage all of your members and guests.  The member directory can only be accessed by members of your church that you explicitly authorize, not by guests using the app.</p>
        </Grid>
        <Grid item md={3} xs={12}>
          <Box maxWidth="310px" m="0 auto">
            <img src="/images/phone-directory.png" alt="B1 Church App" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  </div>
)
