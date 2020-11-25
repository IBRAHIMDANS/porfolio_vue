<template>
  <div class="grid grid-cols-1 border-pink-900 gap-4 mw-20 md:container md:mx-auto" v-show="user">
    <img
        class="w-32 h-32 rounded-full mx-auto rounded-xl ring-2 ring-white"
        :src=avatarUrl
        alt=""
        width="384"
        height="512">
    <p>Name : <a :href=link target="_blank"> {{ name }}</a></p>
    <p>Username : {{ login }}</p>
    <p>Github Url : <a :href=link target="_blank"> {{ login }}</a></p>
    <p>Public repos : {{ publicRepos }}</p>
    <div class="flex justify-center flew-wrap">
      <p class="mr-7">Followers : {{ followers }} </p>
      <p class="ml-7">Following : {{ following }} </p>
    </div>
    <p>Company : {{ company }} </p>
    <p>Location : {{ location }} </p>
  </div>
</template>

<script>
export default {
  name: "home-component",
  mounted() {
    console.log("user", this.$store.getters.getUser);
  },
  computed: {
    user: function() {
      return this.$store.getters.getUser;
    },
    avatarUrl: function() {
      return `${this.user?.avatar_url}`;
    },
    link: function() {
      return `${this.user?.html_url}`;
    }
    , login: function() {
      return `${this.user?.login}`;
    },
    publicRepos: function() {
      return `${this.user?.public_repos}`;
    },
    followers: function() {
      return `${this.user?.followers}`;
    },
    following: function() {
      return `${this.user?.following}`;
    },
    company: function() {
      return `${this.user?.company}`;
    },
    location: function() {
      return `${this.user?.location}`;
    },
    name: function() {
      return `${this.user?.name}`;
    },
  },
};
</script>
