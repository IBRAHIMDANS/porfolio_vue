<template>
  <NavBar/>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import NavBar from "@/components/NavBar";

export default {
  components: { NavBar },
  // mounted() {
  //   !this.$store.getters.getUser.login  && this.getInfos();
  // },
  // methods: {
  //   getInfos(payload) {
  //     this.$store.dispatch({
  //       type: "getUser",
  //       value: payload !== undefined ? payload : "ibrahimdans",
  //     });
  //   }
  // },
};
</script>
