<template>
  <main class="h-full w-full min-h-screen">
    <router-view />
  </main>
</template>

<style lang="scss">
body {
  width: calc(100vw - 15px);
  background-color: #eeeeee;
}

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
