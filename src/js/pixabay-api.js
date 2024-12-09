import axios from 'axios';

const API_KEY = '47396593-fa81edaacd7e53da3770e0abc';

export async function getImages(search, page) {
  const { data } = await axios(`https://pixabay.com/api/?`, {
    params: {
      key: API_KEY,
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  return data;
}
