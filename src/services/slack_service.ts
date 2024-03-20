
import { fetchJoke, Joke } from "./joke_service";

export const updateToSlack = async (payload: string) => {
  try {
    const slackWebhookUrl: string = process.env.SLACK_WEBHOOK_URL ?? "";
    const joke = await fetchJoke();
    // await axios.post(slackWebhookUrl, { text: quote });
    const formatData = JSON.parse(payload);

    let formattedText = formatText(formatData);
    if (joke) {
      formattedText = addAJoke(formattedText, joke);
    }

    const opts = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: formattedText,
          })
      };
    const response = await fetch(slackWebhookUrl, opts);

    return response.status == 200;
    // console.log("Data sent to Slack successfully");
  } catch (error) {
    throw new Error("Failed to send data to Slack");
  }
};

export const formatText = (formatData: any) => {
  const { action, title, author, repositoryName, html_url } = formatData;
  let text = `💡 There's been a new *Pull Request* ${action} by ${author} called _<${html_url}|${title}>_ in the ${repositoryName} repo. Nice work!`;
  return text;
};

export function addAJoke(text: string, joke: Joke): string {
  let mrkdwn =
    text + `\n *Joke of the PR* 🤖 ${joke.setup} ... 👉 ${joke.punchline} 🤣🙄`;
  return mrkdwn;
}
