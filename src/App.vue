<template>
  <main class="h-full w-full bg-gray-100 min-h-screen">
    <router-view />
  </main>
</template>

<style lang="scss">
.smooth-effect-closed {
  max-height: 0px;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
}

.smooth-effect-opened {
  max-height: 500px;
  transition: max-height 0.8s ease-in-out;
  transition-delay: 0s !important;
}
</style>
