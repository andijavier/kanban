<template>
  <div id="navbar">
      <!-- NAVBAR -->
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" >Kanban</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li v-if="page === 'register'" id="menu-login" class="nav-item">
                    <a @click.prevent="changePage('login')" href="#" class="btn nav-link active" >Log In</a>
                  </li>
                  <li v-if="page === 'login'" id="menu-regist" class="nav-item">
                    <a @click.prevent="changePage('register')" href="#" class="btn nav-link active" >Register</a>
                  </li>
                </ul>
                <form class="d-flex">
                  <button @click="logout" v-if="page === 'home'" id="menu-logout" class="btn btn-outline-danger" type="submit">Log Out</button>
                </form>
              </div>
            </div>
        </nav>
        <!-- END NAVBAR -->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['page'],
  methods: {
    changePage(page) {
      this.$emit('changePage', page)
    },
    logout() {
      localStorage.clear()
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
    }
  }
}
</script>

<style>

</style>