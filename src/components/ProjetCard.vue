<template>
      <a class="pt-6 space-y-4 justify-center">
        <blockquote>
          <p class="text-lg font-bold">
           Name: {{projet?.name}}
          </p>
          <p class="text-lg font-semibold">
            {{
              projet?.description
            }}
            Licence {{
              projet?.license?.name
            }}
          </p>
        </blockquote>
        <div class="font-medium">
          <div class="text-gray-500">
            {{ projet?.owner?.login }}
          </div>
        </div>
      </a>
</template>

<script>
export default {
  name: "projet-card",
  props: {
    projet: Object
  }
}
</script>

<style scoped lang="scss">
</style>
