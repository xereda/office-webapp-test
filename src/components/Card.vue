<template>
  <section
    ref="card"
    class="
      w-full flex justify-between items-center px-7 py-6 shadow-lg rounded-lg bg-white transition-all
      duration-500 cursor-pointer"
    :class="{ 'bg-gray-400 opacity-70 text-white rounded-b-none': isOpened }"
    @click="$emit('click', isOpened)"
  >
    <div>
      <slot v-bind="{ widthCard }" name="title" />
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
    class="w-full smooth-effect-closed rounded-b-lg shadow-lg"
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
  mounted() {
    this.$nextTick(() => {
      console.log('card: ', this.$refs.card.offsetWidth);
      this.widthCard = this.$refs.card.offsetWidth;
    });
  },
  data() {
    return {
      widthCard: 0,
    };
  },
};
</script>
