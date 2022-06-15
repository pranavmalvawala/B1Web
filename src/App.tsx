import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { Routing } from "./Routing";
import { UserProvider } from "./UserContext";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const App: React.FC = () => {

  const mdTheme = createTheme({
    palette: { secondary: { main: "#444444" } },
    components: {
      MuiTextField: { defaultProps: { margin: "normal" } },
      MuiFormControl: { defaultProps: { margin: "normal" } }
    }
  });

  return (<UserProvider>
    <CookiesProvider>
      <ThemeProvider theme={mdTheme}>
        <CssBaseline />
        <Router>
          <Routing />
        </Router>
      </ThemeProvider>
    </CookiesProvider>
  </UserProvider>);
}
export default App;

