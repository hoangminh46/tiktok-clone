import * as request from '../utils/request';

export const search = async (q, type = 'less') => {
  try {
    // Lấy API
    const res = await request.get('users/search', {
      params: {
        q,
        type,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
