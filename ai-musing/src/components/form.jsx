import { useState } from "react";
import { Typography, Container, Button, TextareaAutosize } from "@mui/material";

const Form = (props) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  function handleFocus() {
    setError(false);
    setLoading(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError(false);
    setLoading(true);

    const data = {
      prompt: input,
      temperature: 0.5,
      max_tokens: 128,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    const response = await fetch(
      `https://api.openai.com/v1/engines/text-curie-001/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(data),
      }
    );

    props.addResponse(input, await response.json());

    setError(false);
    setLoading(false);

    document.getElementById("prompt").value = "";
  }

  return (
    <div>
      <Container maxWidth="sm" style={{ marginTop: "50px" }}>
        <Typography
          variant="h4"
          align="center"
          color="textPrimary"
          fontFamily="monospace"
          gutterBottom
        >
          Enter Your Prompt
        </Typography>
        <Typography
          variant="h5"
          align="center"
          fontFamily="monospace"
          color="textSecondary"
          paragraph
        >
          What's on your mind?
        </Typography>
        <form>
          <TextareaAutosize
            id="prompt"
            aria-label="textarea"
            minRows={6}
            placeholder="If you stare at the Sun long enough, you get a dog... "
            style={{ width: "80%", resize: "vertical" }}
            onChange={(e) => setInput(e.target.value)}
            onFocus={handleFocus}
          />
        </form>
        <br />
        <Button
          onClick={handleSubmit}
          variant="outlined"
          color="info"
          disabled={loading}
          size="large"
          fontFamily="monospace"
        >
          Submit
        </Button>
      </Container>
      <br />
    </div>
  );
};

export default Form;
