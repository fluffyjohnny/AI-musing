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
  TextareaAutosize,
} from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";

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
              sx={sx}
            >
              About This API
            </BootstrapButton>
            <BootstrapButton
              key="2"
              href="https://github.com/fluffyjohnny"
              size="medium"
              sx={sx}
            >
              Author
            </BootstrapButton>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" style={{ marginTop: "50px" }}>
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Enter Your Prompt -
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              What's on your mind?
            </Typography>
            <form>
            <TextareaAutosize
              aria-label="textarea"
              minRows={6}
              placeholder="If you stare at the Sun long enough, you get a dog... "
              style={{ width: "100%", resize: 'vertical' }}
            />
          </form>
          <Button>
            Hello
            </Button>
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;
