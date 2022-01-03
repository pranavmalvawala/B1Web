import React from "react";
export const Directory: React.FC = () => (
  <div className="homeSection">
    <div className="container">

      <div className="row">
        <div className="col-lg-9">
          <div className="title">Stay Connected</div>
          <h2>Member Directory</h2>
          <p>Easily allow your members to look up contact info for other members by enabling the member directory option within the B1 app.</p>
          <p>The directory is fully interactive and searchable.  Find other members, view family relationships, put names to faces and keep in touch throughout the week.</p>

          <p>The member directory is fully integrated with the <a href="https://chums.org/">CHUMS</a> church management software backend, providing a single centralized place to manage all of your members and guests.  The member directory can only be accessed by members of your church that you explicitly authorize, not by guests using the app.</p>
        </div>
        <div className="col-lg-3"><img src="/images/phone-directory.png" alt="B1 Church App" className="img-fluid" /></div>
      </div>
    </div>
  </div>
)
