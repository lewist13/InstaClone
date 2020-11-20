import ApiClient from "../axios";

export const __UploadPost = async (formData, userId) => {
  try {
    const res = await ApiClient.post(`/posts/${userId}/?active=true`, formData);
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetPosts = async (page, limit) => {
  try {
    const res = await ApiClient.get(
      `/posts?page=${page || 1}&limit=${limit || 10}`
    );
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __GetPost = async (postId) => {
  try {
    const res = await ApiClient.get(`/posts/${postId}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

// export const __EditPost = async (formData, postid) => {
//   try {
//     const response = await ApiClient.put(`/posts/edit/${postid}`, formData);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const __UpdatePost = async (formData, postId) => {
  try {
    console.log(formData, postId);
    const res = await ApiClient.put(
      `/posts/update/${postId}?active=true`,
      formData
    );
    console.log("Data here", res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const __DeletePost = async (postId) => {
  try {
    const res = await ApiClient.delete(`/posts/${postId}?active=true`);
    return res;
  } catch (error) {
    throw error;
  }
};
