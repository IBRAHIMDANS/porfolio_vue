<template>
  <div class="home">
    <HomeComponent :user=user />
  </div>
</template>

<script>

import HomeComponent from "@/components/Home";
import { userService } from "@/services/userServices";

export default {
  name: "Home",
  components: { HomeComponent },
  data() {
    return {
      user: undefined,
    };
  },
  mounted() {
    this.getInfos()
  },
  methods: {
    getInfos() {
      return userService.getUser("ibrahimdans").then(r => this.user = r);
    },

  },
};
</script>
