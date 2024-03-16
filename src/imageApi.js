import axios from 'axios';

export const getImage = async (query, page) => {
  const key = 'ZRB6rrH-ic_wbuS1QwO-jq8KwlqzjzWyknfJp1Bh7Jo';
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      client_id: key,
      query: query.split('/')[1],
      page,
      per_page: 20,
    },
  });
  return response.data;
};
