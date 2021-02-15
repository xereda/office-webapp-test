<template>
  <section class="flex justify-between items-center bg-red-100">
    <div class="w-full" @click="toggleContentVisibility">
      <slot name="title" />
    </div>
    <img v-if="showContent" :src="ChevronUp" class="icon" />
    <img v-else :src="ChevronDown" class="icon" />
  </section>
  <section v-if="showContent">
    <slot name="content" />
  </section>
</template>

<script>
import ChevronDown from '@/assets/icons/ChevronDown.svg';
import ChevronUp from '@/assets/icons/ChevronUp.svg';

export default {
  name: 'Card',
  data() {
    return {
      showContent: false,
      ChevronDown,
      ChevronUp,
    };
  },
  methods: {
    toggleContentVisibility() {
      this.showContent = !this.showContent;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 20px;
}
</style>
