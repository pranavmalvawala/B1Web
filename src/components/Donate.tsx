import React from "react";
export const Donate: React.FC = () => (
  <div className="homeSection">
    <div className="container">

      <div className="row">
        <div className="col-lg-9">
          <div className="title">Donations Made Easy</div>
          <h2>Simple Online Giving</h2>
          <p>Your church members have easy access to manage all of their donations.  Link a bank account or enter credit card info and use either payment method to make a donation at any time or set up recurring donations.</p>
          <p>Your members have full control over their own donations.  This includes the ability to see a full history of all donations they have made and the ability to edit, cancel or add new recurring donations at any time.  They can even choose which fund(s) they wish to give to if your church provides that option.</p>

          <p>Setting up donations is easy for churches.  Unlike many other platforms, <u>B1 does not collect any fees</u>.  Your church will set up an account directly with Stripe and all payments are processed securely by Stripe with no sensitive information going to B1 servers.  Stripe offers discounts for non-profits of 2.2% + $0.30 for credit cards and 0.8% for bank accounts.</p>
        </div>
        <div className="col-lg-3"><img src="/images/phone-donate.png" alt="B1 Church App" className="img-fluid" /></div>
      </div>
    </div>
  </div >
)
