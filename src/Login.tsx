import React from "react";
import { useCookies } from "react-cookie";
import UserContext from "./UserContext";
import { LoginPage } from "./appBase/pageComponents/LoginPage";
import { EnvironmentHelper } from "./helpers"
import { UserHelper } from "./appBase/helpers"

export const Login: React.FC = (props: any) => {
  const [cookies] = useCookies(["jwt"]);
  const context = React.useContext(UserContext);

  let search = new URLSearchParams(props.location?.search);
  let jwt = search.get("jwt") || cookies.jwt;
  let auth = search.get("auth");
  if (!jwt) jwt = "";
  if (!auth) auth = "";

  const handleLogin = () => {
    const url = EnvironmentHelper.SubUrl.replace("{subDomain}", UserHelper.currentChurch.subDomain) + "/login?jwt=" + UserHelper.currentChurch.jwt;
    window.location.href = url;
  }

  return (<LoginPage auth={auth} context={context} jwt={jwt} appName="B1" loginSuccessOverride={handleLogin} />);

};
