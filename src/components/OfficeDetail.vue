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
    <div
      class="flex justify-between items-center border-t pt-4 mt-4 text-gray-300"
    >
      <div class="flex items-center cursor-pointer" @click="$emit('edit', id)">
        <div>
          <svg-icon class="w-7 h-7" icon="pencil" />
        </div>
        <div class="text-xs ml-2">EDIT</div>
      </div>
      <div
        class="flex items-center cursor-pointer text-red-300"
        @click="$emit('remove', id)"
      >
        <div v-if="!isRemoving">
          <svg-icon class="w-7 h-7" icon="trash" />
        </div>
        <div class="text-xs ml-2">
          {{ isRemoving ? 'Removing office... ' : 'DELETE' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'OfficeDetail',
  components: {
    SvgIcon,
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
