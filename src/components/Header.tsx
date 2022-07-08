import React from "react";
import { Link } from "react-router-dom";
import { Container, AppBar, Stack, Box, Button } from "@mui/material";

export const Header: React.FC = () => (
  <>
    <AppBar id="navbar" position="fixed">
      <Container>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <a href="/" className="logo"><img src="/images/logo-nav.png" alt="logo" /></a>
          <Box sx={{display: "flex", alignItems: "center", whiteSpace: "nowrap"}}>
            <Button href="#register" variant="contained" size="small" color="success" disableElevation sx={{ "&:focus": { outline: "none", color: "white" }, textTransform: "capitalize" }}>Register</Button>
            <Link to="/login">
              <Button variant="contained" size="small" disableElevation sx={{ "&:focus": { outline: "none", color: "white" }, textTransform: "capitalize", marginLeft: "10px" }}>Login</Button>
            </Link>
          </Box>
        </Stack>
      </Container>
    </AppBar>
    <div id="navSpacer"></div>
  </>
)
