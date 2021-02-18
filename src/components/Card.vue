<template>
  <section
    class="flex justify-between items-center px-7 py-6 shadow-lg rounded-lg bg-white transition-all duration-500"
    :class="{ 'bg-gray-400 opacity-70 text-white rounded-b-none': isOpened }"
    @click="$emit('click', isOpened)"
  >
    <div class="w-full">
      <slot name="title" />
    </div>
    <div>
      <svg-icon
        class="w-7 h-7 text-gray-300 transition duration-300"
        :class="{ 'transform rotate-180': isOpened }"
        icon="chevronDown"
      />
    </div>
  </section>
  <section
    class="smooth-effect-closed rounded-b-lg shadow-lg"
    :class="{
      'smooth-effect-opened': isOpened,
    }"
  >
    <slot name="detail" />
  </section>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'Card',
  props: {
    isOpened: {
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
