import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (content) => {
  const object = { content, votes: 0 };
  const response = await axios.post(baseUrl, object);
  return response.data;
};

const anecdoteList = async (anecdotes) => {
  const response = await axios.post(baseUrl, anecdotes);
  return response.data;
};

const addVote = async (id) => {
  const getRecords = await getAll();
  const recordToAddVote = getRecords.filter((item) => item.id === id);
  const object = recordToAddVote[0];
  object.votes += 1;
  const response = await axios.put(`${baseUrl}/${id}`, object);
  return response.data;
};
export default { getAll, createNew, anecdoteList, addVote };
