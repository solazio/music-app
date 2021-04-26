const fetchData = async (term: string, entity: string, offset: number) => {
  const response = await fetch(
    `https://itunes.apple.com/search?term=${term}&entity=${entity}&limit=10&offset=${offset}`
  );
  const json = await response.json();
  return json;
};

export default fetchData;
