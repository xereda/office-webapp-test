<template>
  <section class="flex justify-between items-center bg-red-100">
    <div class="w-full" @click="$emit('click', isOpened)">
      <slot name="title" />
    </div>
    <img v-if="isOpened" :src="ChevronUp" class="icon" />
    <img v-else :src="ChevronDown" class="icon" />
  </section>
  <section v-if="isOpened">
    <slot name="detail" />
  </section>
</template>

<script>
import ChevronDown from '@/assets/icons/ChevronDown.svg';
import ChevronUp from '@/assets/icons/ChevronUp.svg';

export default {
  name: 'Card',
  props: {
    isOpened: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['click'],
  data() {
    return {
      ChevronDown,
      ChevronUp,
    };
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 20px;
}
</style>
