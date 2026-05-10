import { newGameEndpoint } from "@/constants/KhetConstants";
export async function getNewGameData(
  greyPlayerName,
  redPlayerName,
  selectedConfig,
) {
  try {
    const requestBody = {
      greyPlayerName,
      redPlayerName,
      selectedConfig,
    };
    const requestBodyString = JSON.stringify(requestBody);

    const response = await fetch(newGameEndpoint, {
      method: "POST",
      body: requestBodyString,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });

    if (!response.ok) {
      throw new Error("Response status: ${response.status}");
    }

    // Read in the actual data
    const responseData = await response.json();
    return responseData.board;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
}
