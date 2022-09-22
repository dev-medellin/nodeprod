export const getters = {
    isAuthenticated(state) {
      return state.auth_client_.loggedIn; // auth object as default will be added in vuex state, when you initialize nuxt auth
    },
    getUserInfo(state) {
      return state.auth_client_.user;
    }
  };

  export default {getters}