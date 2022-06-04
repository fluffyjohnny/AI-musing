import { Typography, Button } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <Typography
        variant="subtitle1"
        align="center"
        fontFamily="monospace"
        gutterBottom
      >
        Designed and built by
        <Button
          sx={{
            fontFamily: "monospace",
            color: "white",
          }}
          href="https://github.com/fluffyjohnny/"
          target="_blank"
        >
          John Chia
        </Button>
      </Typography>
      <Typography
        variant="body2"
        align="center"
        fontFamily="monospace"
        color="textSecondary"
      >
        Buily by OpenAI Completion API
      </Typography>
    </footer>
  );
};

export default Footer;
