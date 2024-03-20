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

## Assumptions

Little did we know the headaches we would get in around authentication, both to verify that it was actually Github sending the webhook POST to our API, and to be able to communicate with Slack!

## Approaches

## Future Thoughts
