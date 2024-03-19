import { NextFunction, Response, Request } from "express";
import { Webhook } from "../models/webhook_model";
import axios from "axios";

export const updateToSlack = async (payload: string) => {
  try {
    console.log("Inside Updateto Slack");
    const slackWebhookUrl =
      "https://hooks.slack.com/services/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";  
    //const quote = await fetchQuote();
    // await axios.post(slackWebhookUrl, { text: quote });
    const formatData = JSON.parse(payload);   
    const formattedData = formatDataToSlack(formatData)
    await axios.post(slackWebhookUrl, {
      text: `Updates from Github: ${JSON.stringify(formattedData)}`,
    });
    console.log("Data sent to Slack successfully");
    return true;
  } catch (error) {
    throw new Error("Failed to send data to Slack");
  }
};

export const formatDataToSlack = (formatData: any) => {
  const { action, title, state, repositoryName,author,created_at,updated_at, html_url} = formatData;
  const formattedMessage = {
    text: `Updates from GitHub: *${author}*`,
    attachments: [
        {
            color: '#36a64f', // Green color
            fields: [
              {
                title: 'Action',
                value: `<${action}>`, // Format as a clickable link
                short: false
              },
                {
                    title: 'Repository URL',
                    value: `<${html_url}>`, // Format as a clickable link
                    short: false
                },
                {
                  title: 'Repository Name',
                  value: `<${repositoryName}>`, // Format as a clickable link
                  short: false
              },
                {
                    title: 'Title',
                    value: title,
                    short: true
                },
                {
                  title: 'Created',
                  value: created_at,
                  short: true
                },
                {
                  title: 'Last Updated',
                  value: updated_at,
                  short: true
                },
                {
                 title: 'State',
                 value: state,
                 short: true
                }
                
            ]
        }
    ]
}
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
