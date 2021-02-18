<template>
  <section class="fixed w-full bg-white h-20 flex items-center">
    <div class="fixed w-full text-center flex items-center justify-center">
      <icon-check />
      <div class="text-xs text-gray-600">
        LOCATION HAS BEEN REMOVED.
      </div>
    </div>
    <div class="w-full flex justify-end">
      <icon-times @click="$emit('close')" />
    </div>
  </section>
</template>

<script>
import IconCheck from '@/icons/IconCheck.vue';
import IconTimes from '@/icons/IconTimes.vue';

export default {
  name: 'NoticeBar',
  components: {
    IconCheck,
    IconTimes,
  },
  emits: ['close'],
};
</script>
