const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = async query => {
  const response = await fetch(HN_BASE_URL + query);
  return response.json();
};
export { fetchStories };
