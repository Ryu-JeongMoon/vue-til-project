<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username">
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password">
        </div>
        <!--    <button v-bind:disabled="!isUsernameValid" type="submit">Login</button>-->
        <!--    v-bind 는 생략 가능?-->
        <button :disabled="!isUsernameValid || !isPasswordValid" type="submit">Login</button>
        <p>{{ logMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script>
import {loginUser} from "@/api";
import {validateEmail} from "@/utils/validation";

export default {
  data() {
    return {
      // form value
      username: '',
      password: '',

      // log
      logMessage: '',
    }
  },
  computed: {
    isUsernameValid() {
      return validateEmail(this.username);
    },
    isPasswordValid() {
      return true;
    }
  },
  methods: {
    async submitForm() {
      try {
        const userData = {
          username: this.username,
          password: this.password,
        }
        const {data} = await loginUser(userData);
        console.log(data.user.username);
        this.$store.commit('setUsername', data.user.username);
        this.$router.push('/main');
        // this.logMessage = `${data.user.username}님이 로그인했습니다`
      } catch (error) {
        this.logMessage = `${error.response.data}`
        console.log(error.response);
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    }
  }
}
</script>

<style>
btn {
  color: white;
}
</style>