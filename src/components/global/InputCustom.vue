<template>
  <form
      id="app"
      @submit.prevent="submitForm"
      method="post"
      novalidate="true"
  >
    <input v-model="username" placeholder="username" debounce="500" />
    <a type="submit" value="submit"></a>
  </form>
</template>

<script>

export default {
  name: "input-custom",
  components: {},
  data() {
    return {
      username: "ibrahimdans",
    };
  },
  methods: {
    submitForm(e) {
      console.log(this.username);
      this.$emit("username", this.username);
      e.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
