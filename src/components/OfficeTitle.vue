<template>
  <p v-bind="{ title }" class="text-xl font-semibold leading-10 truncate w-64">
    {{ title }}
  </p>
  <p class="font-light opacity-60">{{ address }}</p>
</template>

<script>
export default {
  name: 'OfficeTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    address: {
      type: String,
      default: '',
    },
  },
};
</script>
