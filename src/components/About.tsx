import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

export const About: React.FC = () => (
  <div id="aboutSection" className="homeSection alt">
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Box maxWidth="270px" m="0 auto">
            <img src="/images/phone-logo.png" alt="B1 Church App" />
          </Box>
        </Grid>
        <Grid item md={8} xs={12}>
          <div className="title">Engage Your Congregation</div>
          <Typography component="h2" sx={{fontSize: "32px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 8px 0"}}>About <span>B1.Church</span></Typography>
          <p style={{ marginTop: 20 }} className="lead">B1.church is a mobile app and website that helps congregations stay connected.</p>
          <p>Providing a simple and seemless way for your congregation to connect is a critical need in the modern church.  B1.church provides a way to do this at home, at church or wherever they may be, via their phone.</p>
          <p>B1 integrates all of the ChurchApps services and external resources into one simple app which can be fully customized to meet your congregational needs.  This includes all of the most common needs such as online giving, attendance, self check-in, access to your live stream, quick Bible reference, a member directory, announcements, small group lessons, and more.</p>
        </Grid>
      </Grid>
    </Container>
  </div>
)
