import axios from 'axios';
import {setInterceptors} from "@/api/common/interceptors";

function createInstance() {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
  });
  return setInterceptors(instance);
}

const instance = createInstance();

function registerUser(userData) {
  // url -> endpoint 라고도 함
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

function fetchPosts() {
  return instance.get('posts');
}

export {registerUser, loginUser, fetchPosts};