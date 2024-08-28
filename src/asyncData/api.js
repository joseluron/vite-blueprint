import axios from "axios";

export const axiosInstance = axios.create({
  timeout: 5000,
});

const buildOptions = () => {
  return { headers: { "Content-Type": "application/json" } };
};

export const get = async (url) => {
  const res = await axiosInstance.get(url, buildOptions)

  return res
}
