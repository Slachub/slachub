# Slachub

_This is a project created as part of the Tech Returners course. The repo has been envisioned and coded by Ramya, Victor and Stu in less than a week, following the brief for this final group project._

## Vision

The idea behind Slachub is to support developers in their work, by posting useful messages into a Slack channel when certain Github events occur, thereby alerting developers about tasks that need fulfilling. Additionally, to lighten their day, the alerts also include a joke from the public [Jokes API](https://publicapis.io/jokes-api).

The vision initially included also automatically closing Github Issues and moving cards in Github Projects, such as to the 'Done' column when a Pull Request is merged and the corresponding Issue is closed.

## Key Features

As currently implemented, Slachub relies on Github Webhooks being setup that are activated when a pull request (PR) event occurs. The webhook makes a POST request to the Slachub API, which results in a message being POSTed to a Slack channel that contains the most relevant information regarding a PR, including the link, and adds a joke about programming.

The endpoint for this on the production server is here: http://35.243.247.227:8080/api/v1/hooks

Additionally, a log of all the received webhooks and the relevant data once it has been processed can be viewed: http://35.243.247.227:8080/api/v1/log

Finally, the health of the application can be viewed: http://35.243.247.227:8080/api/v1/log

## Installation

Clone the repo.

`npm install`

Make sure to set up the environment variables:

1. `WEBHOOK_SECRET`
2. `SLACK_WEBHOOK_URL`

### Deployment

SSH into the server: `ssh [user]@35.243.247.227`

Pull the image from Dockerhub: `docker pull vmatekole/slachub`

Check the existing instance: `docker ps`

Stop the existing instance: `docker stop [Instance name]`

Launch the server: `docker run -d -p 8080:3000 vmatekole/slachub`

## Assumptions

We assumed it would be just as easy to handle Github webhooks and the Slack API (requiring authentication) as it would have been to work with the data from more public APIs!

## Approaches

We brought an approach that prioritised unit testing and an MVC architecture.

The approach to receiving the webhooks was to put them into a queue (FIFO), as a way to handle cases where multiple webhooks could be fired simultaneously, and to ensure all webhooks we wanted to process are processed. For this sample project, we left the queue as an object in memory.

Once the item in the queue was being processed, the approach used was to isolate the service so that it could be tested independently, using Jest tests and mocking.

## Future Thoughts

Giving the app more resilience could be accomplished by storing the queue in a database 'on disk'. Such persistent storage could be used to bring resilience both if the Slachub app were to fail, or in the case of the Slack service going down.

The functionality could be easily extended to include alerts triggered by other Github events, like push, commits, issues etc.

Another idea would be to auto-update (i.e. close) Github issues when PRs are merged, and further, for the corresponding cards in Github Projects to update their status, for example, to be moved to "In Progress" when a branch is created, and to "Done" when the PR merged/Issue closed.
