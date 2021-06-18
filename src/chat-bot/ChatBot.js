import dialogflow from "@google-cloud/dialogflow";
import { v4 } from "uuid";

/**
 * Send a query to the dialogflow agent, and return the query result.
 * @param {string} projectId The project to be used
 */

const chatBot = async (req, res) => {
  const message = req.body.message;
  const result = await runSample("chatbot-hms--iduw", message);
  res.send({
    user: "bot",
    message: result,
  });
  return;
};

export default chatBot;

const sessionId = v4();

async function runSample(projectId, message) {
  try {
    const sessionClient = new dialogflow.SessionsClient({
      keyFilename: "./src/chat-bot/chatbot-hms--iduw-4ce6489e5099.json",
    });
    const sessionPath = sessionClient.projectAgentSessionPath(
      projectId,
      sessionId
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: message,
          languageCode: "en-US",
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    return result.fulfillmentText;
  } catch (error) {
    console.log(error);
  }
}
