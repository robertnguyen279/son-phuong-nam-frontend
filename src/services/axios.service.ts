import axios from 'axios';

// dev
// const baseURL = 'https://tcbg3jx755.execute-api.ap-southeast-1.amazonaws.com';

// prod
const baseURL = 'https://bdxuiwz26k.execute-api.ap-southeast-1.amazonaws.com';

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
