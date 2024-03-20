import axios from "axios";

export interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

// Function to fetch a Joke from public API
export async function fetchJoke(): Promise<Joke | undefined> {
  const joke = axios
    .get("https://official-joke-api.appspot.com/jokes/programming/random")
    .then((response) => {
      const joke: Joke = response.data[0];
      return joke;
    })
    .catch((error) => {
      throw new Error("Failed to fetch joke");
    });
  return joke;
}
