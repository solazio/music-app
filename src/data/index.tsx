import axios from "axios";

export const getMusicData = (term: string, searchType: string, offset: number) => {
  return axios.get(`/api/music?term=${term}&entity=${searchType}&limit=10&offset=${offset}`).then(res => res.data);
}

