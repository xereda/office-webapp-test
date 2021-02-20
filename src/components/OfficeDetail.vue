<template>
  <div class="text-gray-600 bg-white p-7 leading-9 font-light">
    <p class="text-xl font-semibold truncate">
      {{ fullName }}
    </p>
    <p class="truncate">
      {{ jobPosition }}
    </p>
    <p class="text-dp-green truncate">
      {{ email }}
    </p>
    <p>
      {{ phone }}
    </p>
    <div class="flex justify-between items-center border-t pt-4 mt-4">
      <simple-button icon="pencil" label="EDIT" @click="$emit('edit', id)" />
      <simple-button
        icon="trash"
        label="DELETE"
        class="text-red-300"
        :is-loading="isRemoving"
        @click="$emit('remove', id)"
      />
    </div>
  </div>
</template>

<script>
import SimpleButton from '@/components/SimpleButton.vue';

export default {
  name: 'OfficeDetail',
  components: {
    SimpleButton,
  },
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
    isRemoving: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['edit', 'remove'],
};
</script>
