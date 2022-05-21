import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Tabs,
  styled,
  CssBaseline,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useState } from "react";
import "./styles.scss";
import Form from "./components/form";
import Response from "./components/response";
import Footer from "./components/footer";

const sx = {
  mr: 1,
  color: "white",
  display: "block",
  letterSpacing: ".2em",
  fontFamily: "monospace",
  align: "left",
  fontWeight: 500,
};

const BootstrapButton = styled(Button)({
  boxShadow: "5px, 10px",
  textTransform: "none",
  fontSize: 12,
  padding: "6px 12px",
  "&:hover": {
    transform: "translateY(-0.25em)",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#4287f5",
    borderColor: "#005cbf",
  },
});


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
      <AppBar position="relative">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SmartToyIcon sx={{ mr: 3 }} />
            <Typography
              variant="h7"
              noWrap
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 800,
                letterSpacing: ".4rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              AI-musing
            </Typography>
            <Tabs sx={{ marginLeft: "auto" }} />

            <BootstrapButton
              key="1"
              href="https://beta.openai.com/docs/guides/completion"
              size="medium"
              target="_blank"
              sx={sx}
            >
              About This API
            </BootstrapButton>
            <BootstrapButton
              key="2"
              href="https://github.com/fluffyjohnny"
              size="medium"
              target="_blank"
              sx={sx}
            >
              GitHub
            </BootstrapButton>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Form addResponse={addResponse} />
        {responses.map((response, index) => (
          <Response key={index} data={response} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
