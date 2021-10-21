import {postInstance} from "@/api/index";

function fetchPosts() {
  return postInstance.get('/');
}

function createPost(postData) {
  return postInstance.post('/', postData);
}

function deletePost(postId) {
  return postInstance.delete(postId);
}

export {
  fetchPosts,
  createPost,
  deletePost
}