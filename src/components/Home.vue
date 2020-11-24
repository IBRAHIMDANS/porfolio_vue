<template>
  {{ user }}

  <div class="grid grid-cols-1 gap-4 md:container md:mx-auto" v-show="user">
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
    <div class="flex m-3 justify-center flew-wrap">
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
  props: {
    user: Object,
  },
  mounted() {
    return {
      user : this.user,
    }
  },
  data() {
    return {
      avatarUrl: `${this.user?.avatar_url}.png`,
      link: `${this.user?.html_url}`,
      login: `${this.user?.login}`,
      publicRepos: `${this.user?.public_repos}`,
      followers: `${this.user?.followers}`,
      following: `${this.user?.following}`,
      company: `${this.user?.company}`,
      location: `${this.user?.location}`,
      name: `${this.user?.name}`,

    };
  },
  computed: {},
};
</script>
