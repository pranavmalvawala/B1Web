import * as React from "react";
import { ErrorMessages, EnvironmentHelper } from "./"
import { Register } from "../appBase/pageComponents/components/Register"

export function HomeRegister() {
  const [customErrors, setCustomErrors] = React.useState<string[]>([]);

  return (
    <div id="register">
      <div className="container">
        <div className="text-center">
          <h2 style={{ marginBottom: 20 }}>Register <span>for Free</span></h2>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <p>These are just some examples of what your church can do with the B1 Church mobile app.  You can also embed any web page you wish such as your church's website, or registration forms.  You can also easily embed the Bible and small group lessons from <a href="https://lessons.church/">Lesson.church</a>.</p>
            <p>This is a <b><u>completely free</u></b> service offered to churches by <a href="https://livecs.org/">Live Church Solutions</a>, a 501(c)(3) organization with EIN 45-5349618, that was founded in 2012 with the goal of helping small churches with their technical needs.</p>
            <p>If you would like to help support our mission of enabling churches to thrive with technology solutions, please consider <a href="https://livecs.org/partner/">partnering with us</a>.</p>
          </div>
          <div className="col-lg-6">
            <ErrorMessages errors={customErrors} />
            <div id="registerBox">
              <Register updateErrors={setCustomErrors} appName="ChurchApps" appUrl={EnvironmentHelper.AccountsAppUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
