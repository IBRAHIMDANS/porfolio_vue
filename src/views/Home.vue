<template>
  <div class="home">
    <InputCustom @username="getInfos" class="mb-3"/>
    <HomeComponent :user=user />
  </div>
</template>

<script>

import HomeComponent from "@/components/Home";
import { userService } from "@/services/userServices";
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
      console.log("payload",payload);
      return userService.getUser(payload !== undefined ? payload : "ibrahimdans").then(r => this.user = r);
    },

  },
};
</script>
