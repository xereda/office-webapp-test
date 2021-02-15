<template>
  <div class="text-gray-600">
    <p>
      {{ office.contact.fullName }}
    </p>
    <p>
      {{ office.contact.jobPosition }}
    </p>
    <p>
      {{ office.contact.email }}
    </p>
    <p>
      {{ office.contact.phone }}
    </p>
  </div>
  <div class="flex justify-between">
    <button class="p-3" @click="$emit('edit', office.index)">EDIT</button>
    <button class="p-3" @click="$emit('remove', office.index)">DELETE</button>
  </div>
</template>

<script>
export default {
  name: 'OfficeDetail',
  props: {
    office: {
      type: Object,
      default: () => {},
    },
  },
  emits: ['edit', 'remove'],
};
</script>
