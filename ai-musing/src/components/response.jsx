import { CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";

const Response = (props) => {
  let { prompt, response } = props.data;
  return (
    <Card sx={{ minWidth: 300, maxWidth: 600 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Prompt:
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          {prompt}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Response:
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          {response}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Response;
