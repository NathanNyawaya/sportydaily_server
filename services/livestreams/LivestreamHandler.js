import axios from "axios";

export const fetchLiveFootball = async () => {
  const options = {
    method: "GET",
    url: "https://football-live-stream-api.p.rapidapi.com/index.php",
    headers: {
      "X-RapidAPI-Key": "a91c39ba04msh138dde153e692afp15cff6jsnbd732b41d133",
      "X-RapidAPI-Host": "football-live-stream-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    if (response.status === 200) {
      // console.log(response);
      return response;
    }
  } catch (error) {
    return error;
    console.error(error.response.status);
  }
};


export const fetchLinks = async (S_ID) => {
  const options = {
    method: "GET",
    url: "https://football-live-stream-api.p.rapidapi.com/stream.php",
    params: { matchid: `${S_ID}` },
    headers: {
      "X-RapidAPI-Key": "a91c39ba04msh138dde153e692afp15cff6jsnbd732b41d133",
      "X-RapidAPI-Host": "football-live-stream-api.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response)
    return response;
  } catch (error) {
    console.error(error);
  }
};