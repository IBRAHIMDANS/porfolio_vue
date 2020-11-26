<template>
  <form
      id="app"
      @submit.prevent="submitForm"
      method="post"
      novalidate="true"
  >
    <input class="text-center" v-model="username" placeholder="username" debounce="500" />
    <a type="submit" value="submit"></a>
  </form>
</template>

<script>

export default {
  name: "input-custom",
  components: {},
  data() {
    return {
      username:  "ibrahimdans",
    };
  },
  mounted() {
    this.username = this.$store.getters.getUser.login ? this.$store.getters.getUser.login : "ibrahimdans"
  },
  methods: {
    submitForm(e) {
      this.$emit("username", this.username);
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
