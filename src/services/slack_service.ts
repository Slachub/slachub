import { NextFunction, Response, Request } from "express";
import { Webhook } from "../models/webhook_model";
import axios from "axios";
import * as dotenv from "dotenv";

export const updateToSlack = async (payload: string) => {
  try {
    const slackWebhookUrl: string = process.env.SLACK_WEBHOOK_URL ?? "";
    //const quote = await fetchQuote();
    // await axios.post(slackWebhookUrl, { text: quote });
    const formatData = JSON.parse(payload);
    const formattedText = formatText(formatData);
    await axios.post(slackWebhookUrl, {
      text: formattedText,
    });
    // console.log("Data sent to Slack successfully");
    return true;
  } catch (error) {
    throw new Error("Failed to send data to Slack");
  }
};

export const formatText = (formatData: any) => {
  const { action, title, author, repositoryName, html_url } = formatData;
  let text = `💡 There's been a new *Pull Request* ${action} by ${author} called _<${html_url}|${title}>_ in the ${repositoryName} repo.`;
  return text;
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
