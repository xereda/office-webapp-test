<template>
  <strong>{{ office.title }}</strong>
  <p class="text-gray-400">{{ office.address }}</p>
</template>

<script>
export default {
  name: 'OfficeTitle',
  props: {
    office: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
