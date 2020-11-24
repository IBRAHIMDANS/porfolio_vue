<template>
  <button
      class="btn-default disabled:opacity-50"
      :class="{ 'bg-gray-800': disabled, 'bg-blue-500': !disabled, 'btn-active': !disabled, 'cursor-not-allowed': disabled}"
      :disabled="disabled"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "base-button",
  props: {
    text: String,
    disabled: Boolean,
  }
}
</script>

<style lang="scss" scoped>
.btn-default {
  @apply px-4 py-2 rounded text-white
}

.btn-active {
  @apply focus:bg-blue-200 hover:bg-blue-300
}
</style>
