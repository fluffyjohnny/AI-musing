import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";

const Response = (props) => {
  let { prompt, response } = props.data;
  return (
    <Card variant="outlined" sx={{ minHeight: "250px" }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 16, fontFamily: "monospace" }}
          color="text.secondary"
          gutterBottom
        >
          Prompt:
        </Typography>
        <Typography variant="h6" component="div" gutterBottom>
          {prompt}
        </Typography>
        <Typography
          sx={{ fontSize: 16, fontFamily: "monospace" }}
          color="text.secondary"
          gutterBottom
        >
          Response:
        </Typography>
        <Typography variant="h6" component="div" gutterBottom overflow="auto">
          {response}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Response;
