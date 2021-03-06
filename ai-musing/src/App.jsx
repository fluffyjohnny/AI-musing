import "./App.css";
import {
  Container,
  CssBaseline,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";

import { useState } from "react";
import "./styles/footer.scss";
import Form from "./components/Form";
import Response from "./components/Response";
import Footer from "./components/Footer";
import Header from "./components/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d1d1d1",
      second: "#e2e2e2",
    },
    secondary: {
      main: "#e1dbd6",
      second: "#f9f6f2",
    },
  },
});

function App() {
  const [responses, setResponses] = useState([]);

  function addResponse(prompt, response) {
    const newResponse = {
      prompt: prompt,
      response: response.choices[0].text,
    };
    setResponses([newResponse, ...responses]);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container
          sx={{
            marginBottom: "20px",
            backgroundColor: theme.palette.secondary,
          }}
        >
          <Form addResponse={addResponse} />
          <Container maxWidth="100%">
            <Grid container sx={{ justifyContent: "center" }}>
              {responses.map((response, index) => (
                <Grid
                  item
                  key={index}
                  sx={{ margin: "15px 15px" }}
                  xs={12}
                  sm={5}
                  lg={3}
                >
                  <Response key={index} data={response} />
                </Grid>
              ))}
            </Grid>
            <br />
            <br />
            <br />
          </Container>
        </Container>
        <br />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
