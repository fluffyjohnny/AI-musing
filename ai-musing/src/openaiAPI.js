const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  organization: 'org-HXiUbqrr17pkabRC3fKcJTDO',
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion("text-curie-001", {
  prompt: "Say this is a test",
  temperature: 0.7,
  max_tokens: 5,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});