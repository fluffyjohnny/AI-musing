import { useEffect, useState, useRef } from "react";
import { Typography, Container, Button, TextareaAutosize } from "@mui/material";

const Form = (props) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const promptTextArea = useRef < HTMLTextAreaElement > null;

  function handleFocus() {
    setError(false);
    setLoading(false);
  }

  function handleChange() {
    if (promptTextArea.current) {
      setPrompt(promptTextArea.current.value);
    }

    setError(false);
    setLoading(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError(false);
    setLoading(true);

    // Data for completions endpoint
    const data = {
      prompt: prompt,
      temperature: 0.5,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    };

    // Send request to completions endpoint
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

 

    // Reset states
    setPrompt("");
    setError(false);
    setLoading(false);
  }

  return (
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
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          What's on your mind?
        </Typography>
        <form>
          <TextareaAutosize
            aria-label="textarea"
            minRows={6}
            placeholder="If you stare at the Sun long enough, you get a dog... "
            style={{ width: "100%", resize: "vertical" }}
          />
        </form>
        <Button>Hello</Button>
        <Typography>hello</Typography>
      </Container>
    </div>
  );
};

export default Form;
