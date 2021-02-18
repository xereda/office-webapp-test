<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      :d="types[icon]"
    />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true,
    },
    strokeWidth: {
      type: String,
      default: '1.5',
    },
  },
  data() {
    return {
      types: {
        plus: 'M12 6v6m0 0v6m0-6h6m-6 0H6',
        times: 'M6 18L18 6M6 6l12 12',
        check: 'M5 13l4 4L19 7',
      },
    };
  },
};
</script>
