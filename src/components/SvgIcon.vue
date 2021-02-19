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
        chevronUp: 'M5 15l7-7 7 7',
        chevronDown: 'M19 9l-7 7-7-7',
        pencil:
          'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
        trash:
          'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
        'exclamation-circle':
          'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        'information-circle':
          'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      },
    };
  },
};
</script>
