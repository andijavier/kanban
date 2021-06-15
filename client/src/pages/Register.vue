<template>
  <div id="register">
      <!-- register -->
      <form>
        <h2 class="text-light" style="text-align: center; margin-top: 14vh">Register</h2>
          <div class="card justify-content mx-auto mt-5 p-3" style="width: 50vh">
              <div class="mb-3">
                <label for="InputRegist" class="form-label">Email address</label>
                <input v-model="email" type="email" class="form-control" id="InputRegist" placeholder="example@mail.com" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div class="mb-3">
                <label for="InputUsername" class="form-label">Username</label>
                <input v-model="username" type="text" class="form-control" id="InputUsername" placeholder="example">
              </div>
              <div class="mb-3">
                <label for="InputOrganization" class="form-label">Organization</label>
                <input v-model="organization" type="text" class="form-control" id="InputOrganization" placeholder="example">
              </div>
              <div class="mb-3 form-floating">
                <input v-model="password" type="password" class="form-control" placeholder="password" id="RegistPassword">
                <label for="RegistPassword" class="form-label">Password</label>
              </div>
              <button @click.prevent="register" type="submit" class="btn btn-primary">Register</button>
          </div>
      </form>
      <!-- END register -->
  </div>
</template>

<script>
export default {
  name: 'RegistPage',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      organization: ''
    }
  },
  methods: {
    register() {
      const { email, password, username, organization } = this
      this.$emit('register' , {email, password, username, organization})
    }
  }
}
</script>

<style>

</style>