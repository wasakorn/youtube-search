import axios from "axios";
import APIKey from "./Key";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: APIKey
  }
});

export default youtube;
