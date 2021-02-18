<template>
  <div class="text-gray-600 bg-white pt-7 px-7 leading-9 font-light">
    <strong class="text-xl font-semibold">
      {{ fullName }}
    </strong>
    <p>
      {{ jobPosition }}
    </p>
    <p class="text-dp-green">
      {{ email }}
    </p>
    <p>
      {{ phone }}
    </p>
    <div class="flex justify-between border-t mt-4">
      <button class="p-3" @click="$emit('edit', id)">EDIT</button>
      <button class="p-3" @click="$emit('remove', id)">DELETE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfficeDetail',
  props: {
    id: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      default: '',
    },
    jobPosition: {
      type: String,
      default: '',
    },
    email: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
  },
  emits: ['edit', 'remove'],
};
</script>
