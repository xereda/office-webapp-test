<template>
  <button
    class="w-full shadow-lg rounded-lg font-light bg-dp-green text-white p-4 pl-7 pr-7 flex justify-between"
    @click="$emit('click')"
  >
    <slot />
    <div>
      <svg-icon class="w-7 h-7 text-white" icon="plus" />
    </div>
  </button>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'MainButton',
  components: {
    SvgIcon,
  },
  emits: ['click'],
};
</script>
