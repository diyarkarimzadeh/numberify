import Axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiVersion = process.env.NEXT_PUBLIC_API_VERSION;

export const config = Axios.create({
  baseURL: `${apiUrl}${apiVersion}.php/`,
});
