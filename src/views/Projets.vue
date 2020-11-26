<template>
  <div class="about">
    <!--    <h1>{{ user }}</h1>-->
    <h1 class="m2 bold"> Liste des projets </h1>
    <div class="grid-container flex flex-wrap justify-center">
    <span class="grid-item" v-for="projet in projets" :key="projet.name">
      <ProjetCard  class="shadow bg-gray-100 rounded-xl p-8 m-5 w-96 h-auto hover:color-blue" :projet="projet" />
    </span>
    </div>
  </div>
</template>
<script>
import ProjetCard from "@/components/ProjetCard";

export default {
  name: "Projets",
  components: { ProjetCard },
  mounted() {
    this.user;
    this.getProjets();
  },
  computed: {
    user: function() {
      return this.$store.getters.getUser;
    },
    projets: function() {
      return this.$store.getters.getProjets;
    },
  },
  methods: {
    getProjets() {
      this.user.repos_url && this.$store.dispatch({
        type: "getProjets",
        value: this.user.repos_url,
      });
      // return userService.getUser(payload !== undefined ? payload : "ibrahimdans").then(r => this.user = r);
    },
  },
};
</script>
