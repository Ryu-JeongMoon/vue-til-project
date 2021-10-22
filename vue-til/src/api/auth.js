// login, signup, sign-out
import { instance } from '@/api';

function registerUser(userData) {
  // url -> endpoint 라고도 함
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
