import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "e3a244fa4dmsh2c3078ae9f1eeb8p161763jsn9ce8c455c956",
    },
  });

  return data;
};
