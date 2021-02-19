<template>
  <slot v-if="showContent" />
  <div v-else class="flex items-center flex-col py-12 text-gray-400">
    <div v-if="!isLoading">
      <svg-icon class="w-16 mb-3" icon="information-circle" />
    </div>
    <div>
      {{ messageFeedback }}
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'Placeholder',
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    noContent: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SvgIcon,
  },
  computed: {
    messageFeedback() {
      if (this.isLoading) {
        return 'Loading data...';
      }

      return 'No content!';
    },
    showContent() {
      return !this.isLoading && !this.noContent;
    },
  },
};
</script>
