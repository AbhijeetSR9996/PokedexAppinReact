import axios from "axios";

const api = axios.create({
  baseURL: "your_api_base_url",
});

export const fetchData = async () => {
  try {
    const response = await api.get("/your_api_endpoint");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
