<template>
  <section class="fixed w-full bg-white h-20 flex items-center">
    <div class="fixed w-full text-center flex items-center justify-center">
      <svg-icon class="w-7 h-7 mr-4 text-green-600" icon="check" />
      <div class="text-xs text-gray-600">
        LOCATION HAS BEEN REMOVED.
      </div>
    </div>
    <div class="w-full flex justify-end">
      <svg-icon
        class="w-7 h-7 mr-8 text-gray-400 z-10 cursor-pointer"
        icon="times"
        @click="$emit('close')"
      />
    </div>
  </section>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'NoticeBar',
  components: {
    SvgIcon,
  },
  emits: ['close'],
};
</script>
