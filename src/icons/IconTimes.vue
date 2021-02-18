<template>
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
</template>
