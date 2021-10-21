import {postInstance} from "@/api/index";

function fetchPosts() {
  return postInstance.get('/');
}

function fetchPost(postId) {
  return postInstance.get(postId);
}

function createPost(postData) {
  return postInstance.post('/', postData);
}

function deletePost(postId) {
  return postInstance.delete(postId);
}

function editPost(postId, postData) {
  return postInstance.put(postId, postData);
}

export {
  fetchPosts,
  fetchPost,
  createPost,
  deletePost,
  editPost
}