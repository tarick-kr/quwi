<template>
  <div class="login">
    <auth-card class="page-auth-login">
      <template #header>
        <img class="logo" src="~/assets/img/logo.svg" alt="Logo Test" />
      </template>
      <template #content>
        <form-input-email
          v-model.trim="form.email"
          :error.sync="errors.email"
          placeholder="Email"
          label="Email"
        />
        <form-input-password
          v-model.trim="form.password"
          :error.sync="errors.password"
          placeholder="Password"
          label="Password"
        />
        <base-button @click="login">
          Login
        </base-button>
      </template>
      <template #footer>
        <nuxt-link to="">Forgot password?</nuxt-link>
      </template>
    </auth-card>
  </div>
</template>

<script>
import { handleAuthErrors } from '~/utils'

export default {
  name: 'PageAuthLogin',

  layout: 'auth',

  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      errors: {}
    }
  },

  methods: {
    async login() {
      try {
        const { token } = await this.$login(this.form)
        this.$cookies.set('TOKEN', token, { path: '/', maxAge: 60 * 60 * 24 * 30 });
        this.$store.commit('auth/SET_TOKEN', token)
        await this.$router.push('/')
      } catch (err) {
        this.errors = handleAuthErrors(err);
        console.log('err: ', err.response);
      }
    }
  }
};
</script>

<style lang="scss">

</style>
