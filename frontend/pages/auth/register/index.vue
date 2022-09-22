<template>
    <div>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="email" class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="registerData.email"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input
            type="password"
            v-model="registerData.password"
            class="form-control"
            id="password"
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
      </form>
    </div>
</template>
  <script>
  import qs from 'query-string';
  export default {
    data() {
      return {
        registerData: {
          role: "basic",
          email: "",
          password: ""
        }
      };
    },
    methods: {
      async register() {
        try {
          const user = await this.$axios.$post("/signup", new URLSearchParams({
                  role: "basic",
                  email: this.registerData.email,
                  password: this.registerData.password
                }));
          console.log(user);
        } catch (err) {
          console.log(err);
        }
      }
    }
  };
  </script>