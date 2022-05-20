import logo from "./logo.svg";
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
import { useEffect, useState } from "react";
import { OpenAIApi, Configuration } from "openai";
import './styles.scss';
import Form from "./components/form";

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

const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

const configuration = new Configuration({
  apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = async () => await openai.createCompletion("text-curie-001", {
  prompt: "Say this is a test",
  temperature: 0.7,
  max_tokens: 20,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
}).then((res) => {
  console.log(res.data.choices['0'].text)
})
.catch((err) => {
  console.log('err', err.response.data)
});

const hello = response();


function App() {




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
        <Form />
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          hehe
        </Typography>
      </footer>
    </div>
  );
}

export default App;
