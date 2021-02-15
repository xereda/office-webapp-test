<template>
  <strong>{{ office.title }}</strong>
  <p class="text-gray-400">{{ office.address }}</p>
</template>

<script>
export default {
  name: 'CardOfficeTitle',
  props: {
    office: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
