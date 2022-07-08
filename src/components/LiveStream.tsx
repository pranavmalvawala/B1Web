import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

export const LiveStream: React.FC = () => (
  <div className="homeSection alt">
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Box maxWidth="170px" m="0 auto">
            <img src="/images/phone-stream.png" alt="B1 Church App" />
          </Box>
        </Grid>
        <Grid item md={9} xs={12}>
          <div className="title">Stay Connected While Away</div>
          <Typography component="h2" sx={{fontSize: "32px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 8px 0"}}>Live Stream</Typography>
          <p>In the last few years live streaming church services has gone from a luxury to a necessity.  With the B1.church app you're members have one place to go to in order to access all the resources your church has to offer, including your live stream.</p>
          <p>Having everything together makes it easy for your members to flip between tabs to mark themselves in attendance, give, chat with others and look up scripture without ever leaving the app, all while participating in your services online.</p>
          <p>Churches can easily enable this option by using <a href="https://streaminglive.church/">StreamingLive</a>, another free service from <a href="https://livecs.org/">Live Church Solutions</a> or by embeding the url of any other provider you choose.  Either way, you set it up once and the new service will always be available to your users.</p>
        </Grid>
      </Grid>
    </Container>
  </div>
)
