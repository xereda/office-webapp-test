<template>
  <div :style="`width: calc(${widthCard - 90}px)`">
    <p v-bind="{ title }" class="text-xl font-semibold leading-10 truncate">
      {{ title }}
    </p>
    <p class="font-light opacity-60">{{ address }}</p>
  </div>
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
    widthCard: Number,
  },
};
</script>
