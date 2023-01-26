<template>
  <div class="login">
        <h1>Добро пожаловать</h1>
        <h1>Войдите</h1>

        <div class="login__fields">
            <p><input type="text" required v-model="login" placeholder="Логин"></p>

            <p><input type="password" required v-model="password" placeholder="Пароль"></p>

            <p><a href="#">Забыли пароль?</a></p>

            <p><input type="submit" value="Вход" @click="authorize"></p>
        </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import api from '../api/api'

export default class Authorize extends Vue {
    password = '';
    login = '';

    async authorize () {
      const res = await api.query('accounts/login', 'POST', { username: this.login, password: this.password })

      api.setToken(res.token)
    }
}
</script>

<style scoped lang="scss">
    .login {
        margin: 50px auto;
        width: 300px;

        &__fields input[type="text"],
        input[type="password"] {
            appearance: none;
            background: #e5e5e5;
            border: none;
            border-radius: 3px;
            color: #5a5656;
            font-family: inherit;
            font-size: 14px;
            height: 50px;
            outline: none;
            padding: 0px 10px;
            width: 280px;
        }

        &__fields input[type="submit"] {
            appearance: none;
            background-color: #008dde;
            border: none;
            border-radius: 3px;
            color: #f4f4f4;
            cursor: pointer;
            font-family: inherit;
            height: 50px;
            text-transform: uppercase;
            width: 300px;
        }

        &__fields a {
            color: #5a5656;
            font-size: 10px;
        }

        &__fields a:hover { text-decoration: underline; }
    }

</style>
