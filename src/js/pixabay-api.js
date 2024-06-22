
import axios from 'axios';

export default async function makeRequest(data, page) {
  const { key, q, image_type, orientation, safesearch, per_page } = data;
  try {
    const response = await axios.get(`https://pixabay.com/api/?&page=${page}`, {
      params: {
        key,
        q,
        image_type,
        orientation,
        safesearch,
        per_page,
      },
    });
    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
