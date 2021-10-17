import axios from "axios";

// url 공통화, .env 에 작성하고 VUE_APP_ 을 prefix 로 붙이면 자동 로드!! 개꿀
const instance = axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  // url -> endpoint 라고도 함
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export {registerUser, loginUser};