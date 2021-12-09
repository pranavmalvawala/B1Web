import React from "react";
export const About: React.FC = () => (
  <div id="aboutSection" className="homeSection alt">
    <div className="container">

      <div className="row">
        <div className="col-lg-3 offset-lg-1"><img src="/images/phone-logo.png" alt="B1 Church App" className="img-fluid" /></div>
        <div className="col-lg-7">
          <div className="title">Engage Your Congregation</div>
          <h2>About <span>B1.Church</span></h2>
          <p style={{ marginTop: 20 }} className="lead">B1.church is a mobile app and website that helps congregations stay connected.</p>
          <p>Providing a simple and seemless way for your congregation to connect is a critical need in the modern church.  B1.church provides a way to do this at home, at church or wherever they may be, via their phone.</p>
          <p>B1 integrates all of the ChurchApps services and external resources into one simple app which can be fully customized to meet your congregational needs.  This includes all of the most common needs such as online giving, attendance, self check-in, access to your live stream, quick Bible reference, a member directory, announcements, small group lessons, and more.</p>
        </div>
      </div>
    </div>
  </div>
)
