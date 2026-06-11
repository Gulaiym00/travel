import axios from "axios";

export const travelApi = axios.create({
  baseURL: "https://api-crud.elcho.dev/api/v1/d5873-636d5-87f8c/travel",
});
