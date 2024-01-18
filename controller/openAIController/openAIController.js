import OpenAI from "openai";
import { config } from "dotenv";
config({
  path: ".env",
});

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

const assistantID = process.env.OPEN_AI_ASSISTANT_ID;

const checkStatus = async (threadID, runID) => {
  const runs = await openai.beta.threads.runs.retrieve(threadID, runID);
  return runs.status;
};

const waitForCompletion = async (runStatus, runID, threadID) => {
  let measure = 0;
  while (runStatus !== "completed") {
    await sleep(1000);
    console.log(measure);
    measure++;
    runStatus = await checkStatus(threadID, runID);
  }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const callAssistant = async (text) => {
  // create thread
  const thread = await openai.beta.threads.create();
  // message thread
  const message = await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: `${text}`,
  });
  // run thread
  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: assistantID,
    instructions:
      "You are a police advisor chatbot you take in different queries from the user or the policeman and provide them deeper insights regarding Indian Law. ",
  });
  // get thread op
  await waitForCompletion(run.status, run.id, thread.id);

  const messages = await openai.beta.threads.messages.list(thread.id);

  // send op in json
  return messages.body.data[0].content[0].text.value;
};

export const generateResponse = async (req, res) => {
  const { text } = req.body;
  try {
    const data = await callAssistant(text);
    if (data)
      res.status(200).send({
        success: true,
        data,
      });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Error fetching subjects from DB",
    });
  }
};
