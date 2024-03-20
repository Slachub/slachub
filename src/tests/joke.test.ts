import * as jokeService from "../services/joke_service";
import { addAJoke } from "../services/slack_service";

jest.mock("../services/joke_service");

afterEach(() => {
  jest.clearAllMocks();
});

const joke = {
  type: "programming",
  setup: "Where did the API go to eat?",
  punchline: "To the RESTaurant.",
  id: 398,
};

describe("Adding a joke to the Slack Message", () => {
  it("should append a joke and some emoji to a slack message", () => {
    // Arrange
    const expectedText =
      "[Slack message].\n *Joke of the PR* 🤖 Where did the API go to eat? ... 👉 To the RESTaurant. 🤣🙄";
    // Act
    const output = addAJoke("[Slack message].", joke);
    // Assert
    expect(output).toEqual(expectedText);
  });
});

describe("Getting a joke from the API", () => {
  test("should return a joke when the API is reached successfully", async () => {
    jest.spyOn(jokeService, "fetchJoke").mockResolvedValue(joke);

    const returnedJoke = await jokeService.fetchJoke();

    expect(returnedJoke).toEqual(joke);
  });

  test("should throw an error when the API cannot be reached", async () => {
    jest
      .spyOn(jokeService, "fetchJoke")
      .mockRejectedValue(new Error("Failed to fetch joke"))
      .mockResolvedValue(undefined);

    const returnedJoke = await jokeService.fetchJoke();

    expect(returnedJoke).toBe(undefined);
  });
});
