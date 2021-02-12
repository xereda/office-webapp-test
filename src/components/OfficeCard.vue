<template>
  <div>
    <strong>{{ office.title }}</strong>
    <p class="text-gray-400">{{ office.address }}</p>
  </div>
</template>

<script>
export default {
  name: 'OfficeCard',
  props: {
    office: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
