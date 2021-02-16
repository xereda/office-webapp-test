<template>
  <div class="text-gray-600">
    <p>
      {{ fullName }}
    </p>
    <p>
      {{ jobPosition }}
    </p>
    <p>
      {{ email }}
    </p>
    <p>
      {{ phone }}
    </p>
  </div>
  <div class="flex justify-between">
    <button class="p-3" @click="$emit('edit', id)">EDIT</button>
    <button class="p-3" @click="$emit('remove', id)">DELETE</button>
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
