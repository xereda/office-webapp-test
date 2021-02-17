<template>
  <section class="fixed w-full bg-white h-20 flex items-center">
    <div class="fixed w-full text-center flex items-center justify-center">
      <svg
        class="w-7 h-7 mr-4 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <div class="text-xs text-gray-600">
        LOCATION HAS BEEN REMOVED.
      </div>
    </div>
    <div class="w-full flex justify-end">
      <svg
        class="w-7 h-7 mr-8 text-gray-400 z-10 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        @click="$emit('close')"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NoticeBar',
  emits: ['close'],
};
</script>
