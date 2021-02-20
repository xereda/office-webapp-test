<template>
  <button
    class="inline-flex items-center text-gray-400 focus:outline-none"
    @click="$emit('click')"
  >
    <svg
      v-if="isLoading"
      class="animate-spin h-7 w-7"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
    <svg-icon v-else v-bind="{ icon }" class="w-7 h-7" />
    <span class="pl-2 text-xs font-light">{{ label }}</span>
  </button>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'SimpleButton',
  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SvgIcon,
  },
  emits: ['click'],
};
</script>
