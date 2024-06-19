import axios from 'axios';
import { page } from "../main";
export default async function makeRequest(userInput) {
  axios.defaults.baseURL = 'https://pixabay.com/api/?';
  const searchParams = new URLSearchParams({
    key: '44460301-2102a6dd6fc86b62b9707eae5',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    limit: 40,
  });

  // -------------------------------
  try {
    const response = await axios.get(`&q=${userInput}&${searchParams}&${page}`);
    return response;
  } catch (error) {}
}
