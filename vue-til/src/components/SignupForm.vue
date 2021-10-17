<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form v-on:submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username">
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password">
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname">
        </div>
        <button v-bind:disabled="!isUsernameValid" type="submit">Signup</button>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
// index.js 자동으로 인식 되나보다
// import {registerUser} from "@/api/index";
import {registerUser} from "@/api";
import {validateEmail} from "@/utils/validation";

export default {
  data() {
    return {
      // form value
      username: '',
      password: '',
      nickname: '',

      // log
      logMessage: '',
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async submitForm() {
      console.log('form submit');
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname
      };

      // destructuring
      const {data} = await registerUser(userData);
      console.log(data.username);
      this.logMessage = `${data.username}님이 가입되었습니둥`;
      this.initForm();
    },
    initForm() {
      this.username = '';
      this.nickname = '';
      this.password = '';
    },
  }
}
</script>

<style>

</style>