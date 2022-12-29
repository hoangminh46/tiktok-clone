import axios from 'axios';

// Tạo ra một URL chung có thể dùng dc ở nhiều nơi
// Ko cần copy URL dài nữa

const request = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};

export default request;
