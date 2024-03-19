import { NextFunction, Response, Request } from "express";
import { Webhook } from "../models/webhook_model";
import axios from "axios";

export const updateToSlack = async (payload: string) => {
  try {
    console.log("Inside Update to Slack");
    const slackWebhookUrl =
      "https://hooks.slack.com/services/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";
    //const quote = await fetchQuote();
    // await axios.post(slackWebhookUrl, { text: quote });
    const formatData = JSON.parse(payload);
    console.log(formatData);
    const formattedData = formatDataToSlack(formatData);
    await axios.post(slackWebhookUrl, {
      text: `New data received: ${JSON.stringify(formattedData)}`,
    });
    // console.log("Data sent to Slack successfully");
    return true;
  } catch (error) {
    throw new Error("Failed to send data to Slack");
  }
};

export const formatDataToSlack = (formatData: any) => {
  const {
    action,
    title,
    state,
    repositoryName,
    author,
    created_at,
    updated_at,
    html_url,
  } = formatData;
  const formattedMessage = {
    text: `Updates from *${author}*`,
    attachments: [
      {
        fields: [
          {
            "*Action*": action,
            "*Repository URL*": html_url,
            "*Repository Name*": repositoryName,
            "*Title*": title,
            "*Created*": created_at,
            "*Last Updated*": updated_at,
            "*State*": state,
          },
        ],
      },
    ],
  };
  return formattedMessage;
};

// Function to fetch a quote from public API
async function fetchQuote() {
  try {
    const response = await axios.get(
      "https://quotes.rest/qod?category=inspire"
    );
    const quote = response.data.contents.quotes[0];
    return `${quote.quote} - ${quote.author}`;
  } catch (error) {
    console.error("Error fetching quote:", error);
    throw new Error("Failed to fetch quote");
  }
}
