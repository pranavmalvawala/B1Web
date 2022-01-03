import React from "react";
export const Attendance: React.FC = () => (
  <div id="attendanceSection" className="homeSection alt">
    <div className="container">

      <div className="row">
        <div className="col-lg-2"><img src="/images/phone-attendance.png" alt="B1 Church App" className="img-fluid" /></div>
        <div className="col-lg-9">
          <div className="title">Ditch Paper Attendance Cards</div>
          <h2>Self-Serve Attendance</h2>
          <p>Eliminate the need to print paper communication cards with online attendance.  Both members and visitors can easily mark themselves and their family members in attendance and specify the exact services and classes attended.</p>
          <p>All information entered is automatically fed into <a href="https://chums.org/">CHUMS</a> saving your church staff a significant amount of time each week that would otherwise be spent transcribing data from the paper communication cards.  Within CHUMS you can pull reports, see trends over time and attendance break downs by service times and attended groups.</p>
          <p>In addition to self-reported attendances, classroom teachers can use CHUMS to take attendance for their class and church staff can still manually enter attendance.  Regardless of the source, all the information is kept in sync and can be easily reviewed by all parties.</p>
        </div>

      </div>
    </div>
  </div>
)
