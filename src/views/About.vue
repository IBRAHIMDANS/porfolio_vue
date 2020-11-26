<template>
  <div class="about">
    <h1>{{ getBio }}</h1>
  </div>
</template>
<script>
export default {
  name: "About",
  mounted() {
    this.user;
  },
  computed: {
    user: function() {
      return this.$store.getters.getUser;
    },
    getBio: function() {
      return this.user.bio ? this.user.bio : "No Bio 😭";
    },
  },
};
</script>
