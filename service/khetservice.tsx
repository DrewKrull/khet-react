import {
  loadGameEndpoint,
  loginEndpoint,
  makeMoveEndpoint,
  newGameEndpoint,
  registerUserEndpoint,
  savedGamesEndpoint,
} from "@/constants/KhetConstants";
export async function getSavedGameData() {
  try {
    const response = await fetch(savedGamesEndpoint);

    if (!response.ok) {
      throw new Error("Response status: ${response.status}");
    }

    // Read in the actual data
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
}

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

export async function login(userName, password) {
  try {
    const requestBody = {
      userName,
      password,
    };
    const requestBodyString = JSON.stringify(requestBody);
    const response = await fetch(loginEndpoint, {
      method: "POST",
      body: requestBodyString,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });

    if (!response.ok) {
      throw new Error("Response status: ${response.status}");
    }

    // Read in the actual data
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
}
export async function loadGame(loadGameId) {
  try {
    const params = new URLSearchParams({ gameId: loadGameId });
    const fetchUrl = loadGameEndpoint + "?" + params;
    const response = await fetch(fetchUrl);

    if (!response.ok) {
      throw new Error("Response status: ${response.status}");
    }

    // Read in the actual data
    const responseData = await response.json();
    const responseValue = responseData["loadedGame"];
    return responseValue;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
}
export async function makeMove(gameId, move) {
  try {
    const requestBody = move;
    console.log(requestBody + " for " + gameId);
    const requestBodyString = JSON.stringify(requestBody);

    const params = new URLSearchParams({ gameId: gameId });
    const fetchUrl = makeMoveEndpoint + "?" + params;
    const response = await fetch(fetchUrl, {
      method: "POST",
      body: requestBodyString,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });

    if (!response.ok) {
      throw new Error("Response status: ${response.status}");
    }

    // Read in the actual data
    const responseData = await response.json();
    const responseValue = responseData["loadedGame"];
    return responseValue;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
}
export async function registerUser(
  userName: string,
  password: string,
  displayname: string,
) {
  try {
    const requestBody = {
      userName: userName,
      userPassword: password,
      userDisplayName: displayname,
    };
    const requestBodyString = JSON.stringify(requestBody);
    console.log(requestBodyString);
    const response = await fetch(registerUserEndpoint, {
      method: "POST",
      body: requestBodyString,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
    });

    if (!response.ok) {
      throw new Error("Response status: ${response.status}");
    }

    // // Read in the actual data
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    if (error instanceof Error) console.error(error.message);
  }
}
