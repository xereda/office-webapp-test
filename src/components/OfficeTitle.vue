<template>
  <strong class="text-xl leading-10">{{ title }}</strong>
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
