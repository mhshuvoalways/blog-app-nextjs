import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://daringpage.vercel.app/api"
    : "http://localhost:3000/api";

const instance = axios.create({
  baseURL,
});

export default instance;
