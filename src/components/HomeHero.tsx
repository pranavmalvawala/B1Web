import React from "react";
import { Container,Typography, Box, Button } from "@mui/material";

export const HomeHero: React.FC = () => (
  <div id="hero">
    <Container fixed>
      <Box sx={{textAlign: "center"}}>
        <div className="title">Be One Church</div>
        <Typography component="h2" sx={{fontSize: "32px", fontWeight: 700, lineHeight: 1.2, marginBottom: "8px"}}>Keeping Congregations Connected</Typography>
        <p style={{marginTop: 0}}>B1.church is a mobile app and website that helps churches connect with their members.</p>
        <Button href="#register" variant="contained" size="large" disableElevation sx={{ "&:focus": { outline: "none", color: "white" }, fontSize: "20px", textTransform: "capitalize", marginBottom: "20px" }}>Get Started Now</Button>
      </Box>
    </Container>
  </div>
)
