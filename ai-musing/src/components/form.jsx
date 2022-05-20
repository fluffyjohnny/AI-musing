import { useEffect, useState, useRef } from "react";
import {
  Typography,
  Container,
  Button,
  TextareaAutosize,
} from "@mui/material";

const Form = (props) => {

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
            <Typography>
              hello 
            </Typography>
          </Container>
        </div>
  )
}

export default Form;