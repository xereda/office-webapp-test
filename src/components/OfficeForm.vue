<template>
  <div class="text-gray-600">
    office form
  </div>
  <div class="flex justify-between">
    <button class="p-3" @click="$emit('save')">Save</button>
  </div>
</template>

<script>
export default {
  name: 'OfficeForm',
  props: {
    office: {
      type: Object,
      default: () => {},
    },
  },
  emits: ['save'],
};
</script>
