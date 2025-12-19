import axios from "axios";

const httpRequest = axios.create({
  baseURL: "https://api01.f8team.dev/api",
});

httpRequest.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
let isRefreshing = false;
let queueJobs = [];

const sendRefreshToken = async (original, refreshToken) => {
  isRefreshing = true;
  const response = await axios.post(`${original.baseURL}/auth/refresh-token`, {
    refresh_token: refreshToken,
  });
  localStorage.setItem("accessToken", response.data.data.access_token),
    localStorage.setItem("refreshToken", response.data.data.refresh_token);
};
httpRequest.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (error.status === 401 && refreshToken) {
      console.log(error);
      const original = error.config;
      try {
        if (isRefreshing) {
          await new Promise((resolve, reject) => {
            queueJobs.push({ resolve, reject });
          });
        } else {
          await sendRefreshToken(original, refreshToken);
          queueJobs.forEach((job) => job.resolve());
          queueJobs = [];
        }
        return await httpRequest(original);
      } catch (error) {
        queueJobs.forEach((job) => job.resolve());
        queueJobs = [];
        return Promise.reject(error);
      }
    }
  }
);

export default httpRequest;
