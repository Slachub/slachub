//Define the structure of webhook for Slack updates
export interface Webhook {
  action: string;
  title: string;
  state: string;
  repositoryName: string;
  author: string;
  created_at: number;
  updated_at: number;
  html_url: string;
}

export const createHook = (body: any): Webhook => {
  return {
    action: body.action,
    title: body.pull_request.title,
    state: body.pull_request.state,
    repositoryName: body.repository.name,
    author: body.sender.login,
    created_at: body.pull_request.created_at,
    updated_at: body.pull_request.updated_at,
    html_url: body.repository.html_url,
  };
};
