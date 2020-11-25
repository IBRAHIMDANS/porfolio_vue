<template>
  <div class="home">
    <InputCustom @username="getInfos" class="mb-3" />
    <HomeComponent />
  </div>
</template>

<script>

import HomeComponent from "@/components/Home";
import InputCustom from "@/components/global/InputCustom";

export default {
  name: "Home",
  components: { InputCustom, HomeComponent },
  data() {
    return {
      user: undefined,
    };
  },
  mounted() {
    this.getInfos();
  },
  methods: {
    getInfos(payload) {
      this.$store.dispatch({
        type: "getUser",
        value: payload !== undefined ? payload : "ibrahimdans",
      });
      // return userService.getUser(payload !== undefined ? payload : "ibrahimdans").then(r => this.user = r);
    },

  },
};
</script>
