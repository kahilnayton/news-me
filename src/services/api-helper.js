import axios from 'axios';
const apiKey = "8ff8c1536f0645d68c258fc65e3a77b8";


// Get everything on bitcoin
export const getCategories = async (category) => {
  const resp = await axios(`https://newsapi.org/v2/everything?q=${category}&apiKey=8ff8c1536f0645d68c258fc65e3a77b8`);
  return resp.data;
}

// Get images
export const getImage = async (category) => {
  const resp = await axios('')
  return resp.data[0].url;
}

// Api to get the voice recording
export const getVoice = async () => {
  const resp = axios('http://api.voicerss.org/?key=1db3115dfe6042cd9ac5e51f232cfcc9&hl=en-us&src=Hello, world!')
  return resp.data
}

// Top headlines
export const getCurrent = async () => {
  const resp = await axios('https://newsapi.org/v2/top-headlines?country=us&apiKey=8ff8c1536f0645d68c258fc65e3a77b8');
  return resp.data;
}

