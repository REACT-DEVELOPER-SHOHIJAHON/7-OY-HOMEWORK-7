import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 10000,
  headers: {
    "Content-Type" : "application/json"
  }
})

export default apiInstance