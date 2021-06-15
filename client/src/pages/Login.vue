<template>
  <div id="login">
      <!-- LOGIN -->
      <form>
          <h2 class="text-light" style="text-align: center; margin-top: 14vh">Login</h2>
          <div class="card justify-content mx-auto mt-5 p-3" style="width: 50vh">
              <div class="form-floating mb-3">
                <input type="email" v-model="email" class="form-control" id="InputEmail" placeholder="example@mail.com" aria-describedby="emailHelp">
                <label for="InputEmail" class="">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" v-model="password" class="form-control" placeholder="password" id="InputPassword">
                <label for="InputPassword" class="">Password</label>
              </div>
              <button @click.prevent="login" type="submit" class="btn btn-primary">Login</button>
              <GoogleLogin :params="params" class="mx-auto mt-2" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
          </div>
      </form>
      <!-- END LOGIN -->
  </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      params: {
        client_id: '1038483676329-pf68j48gruue2toftc3o0c7j7mvmfdc4.apps.googleusercontent.com'
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: false
      }
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    login() {
      const { email, password } = this
      this.$emit('login', { email, password })
    },
    onSuccess(googleUser) {
      const id_token = googleUser.getAuthResponse().id_token
      this.$emit('googleLogin', id_token)
    },
    onFailure(googleUser){
      console.log(googleUser);
    }
  }

}
</script>

<style scoped>
</style>