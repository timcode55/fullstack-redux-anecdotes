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
  console.log(response, "RESPONSE IN CREATENEW");
  return response.data;
};

const anecdoteList = async (anecdotes) => {
  const response = await axios.post(baseUrl, anecdotes);
  return response.data;
};

const addVote = async (id) => {
  console.log(typeof id, "ID AFTER VOTE CLICK");
  const getRecords = await getAll();
  const recordToAddVote = getRecords.filter((item) => item.id === id);
  console.log(recordToAddVote[0], "TEST IN GETALL");
  const object = recordToAddVote[0];
  object.votes += 1;
  console.log(object, "OBJECT TO MAN");
  const response = await axios.put(baseUrl, object);
  console.log(response, "RESPONSE IN ADDVOTE*****");
  return response.data;
  // const response = await axios.post(baseUrl, anecdotes);
  // return response.data;
};
addVote();
export default { getAll, createNew, anecdoteList, addVote };
