<template>
  <div class=" pt-6 space-y-4 justify-center hover:bg-purple-200 " @click="goToProjet">
    <div class="group">
      <p class="text-lg font-bold group-hover:text-white-500">
        Nom du Projet: {{ projet?.name }}
      </p>
      <p class="text-lg font-semibold group-hover:text-white-500">
        {{
          projet?.description && `Desciption : ${projet?.description}`
        }}
        {{
          projet?.license && `Licence :  ${projet?.license?.name}`
        }}
      </p>
    </div>
<!--    <div class="font-medium">-->
<!--      <div class="text-gray-500 group-hover:text-white-500">-->
<!--        {{this.languages && `Languages :  ${this?.languages.slice()}` }}-->
<!--      </div>-->
<!--    </div>-->
    <div class="font-medium">
      <div class="text-gray-500 group-hover:text-white-500">
        {{ projet?.owner?.login }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projet-card",
  props: {
    projet: Object
  },
  mounted() {
    this.projet && this.getLanguages() ;
  },
  computed: {
    languages : function() {
      return this.$store.getters.getLanguages;
    }
  },
  methods: {
    goToProjet: function() {
      this.projet &&  window.open(this.projet.html_url, '_blank')
    },
    getLanguages() {
      this.projet && this.$store.dispatch({
        type: "getLanguages",
        value: this.projet.languages_url,
      });
    },
  },
};
</script>

<style scoped lang="scss">
</style>
