import "./App.css";
import {
  Container,
  CssBaseline,
  Grid,
} from "@mui/material";

import { useState } from "react";
import "./styles.scss";
import Form from "./components/Form";
import Response from "./components/response";
import Footer from "./components/Footer";
import Header from "./components/Header"





function App() {
  const [responses, setResponses] = useState([]);

  function addResponse(prompt, response) {
    const newResponse = {
      prompt: prompt,
      response: response.choices[0].text,
    };
    setResponses([...responses, newResponse]);
  }

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Container sx={{ marginBottom: "20px", backgroundColor: "#dae9ff" }}>
        <Form addResponse={addResponse} />
        <Container maxWidth="100%">
          <Grid container sx={{ justifyContent: 'center'}}>
            {responses.map((response, index) => (
              <Grid item key={index} sx={{ margin: "15px 15px"}} xs={12} sm={5} lg={3}>
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
    </div>
  );
}

export default App;
