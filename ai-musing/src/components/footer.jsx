import { Typography } from "@mui/material";


const Footer =  () => {
  return (
    <footer>
        <Typography variant="subtitle1" align="center" fontFamily='monospace' gutterBottom>
          Designed and built by John Chia
        </Typography>
        <Typography variant="body2" align="center" fontFamily='monospace' color="textSecondary">
          Buily by OpenAI Completion API
        </Typography>
      </footer>
  )
}

export default Footer;