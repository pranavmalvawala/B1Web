import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";

export const Attendance: React.FC = () => (
  <div id="attendanceSection" className="homeSection alt">
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item md={3} xs={12}>
          <Box maxWidth="170px" m="0 auto">
            <img src="/images/phone-attendance.png" alt="B1 Church App" />
          </Box>
        </Grid>
        <Grid item md={9} xs={12}>
          <div className="title">Ditch Paper Attendance Cards</div>
          <Typography component="h2" sx={{fontSize: "32px", fontWeight: 700, lineHeight: 1.2, margin: "0 0 8px 0"}}>Self-Serve Attendance</Typography>
          <p>Eliminate the need to print paper communication cards with online attendance.  Both members and visitors can easily mark themselves and their family members in attendance and specify the exact services and classes attended.</p>
          <p>All information entered is automatically fed into <a href="https://chums.org/">CHUMS</a> saving your church staff a significant amount of time each week that would otherwise be spent transcribing data from the paper communication cards.  Within CHUMS you can pull reports, see trends over time and attendance break downs by service times and attended groups.</p>
          <p>In addition to self-reported attendances, classroom teachers can use CHUMS to take attendance for their class and church staff can still manually enter attendance.  Regardless of the source, all the information is kept in sync and can be easily reviewed by all parties.</p>
        </Grid>
      </Grid>
    </Container>
  </div>
)
