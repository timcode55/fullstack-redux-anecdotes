import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  console.log(content, "CONTENT IN CREATENEW");
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const anecdoteList = async (anecdotes) => {
  const response = await axios.post(baseUrl, anecdotes);
  return response.data;
};

export default { getAll, createNew, anecdoteList };
