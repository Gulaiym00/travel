import axios from "axios";

export const commentApi = axios.create({
  baseURL: "https://api-crud.elcho.dev/api/v1/d7002-e8c6f-5b9df/comment",
});
