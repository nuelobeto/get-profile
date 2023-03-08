import { BASE_URL } from "../config/baseurl";

export const getProfile = async () => {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  return data;
};
