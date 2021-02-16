<template>
  <strong>{{ title }}</strong>
  <p class="text-gray-400">{{ address }}</p>
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
