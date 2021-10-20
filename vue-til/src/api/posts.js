import {postInstance} from "@/api/index";

function fetchPosts() {
  return postInstance.get('/');
}

function createPost(postData) {
  return postInstance.post('/', postData);
}

export {
  fetchPosts,
  createPost,
}