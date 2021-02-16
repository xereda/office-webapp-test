<template>
  <label :for="id" class="block text-black">
    {{ fieldLabel }}
  </label>
  <input
    v-bind="{ value, type, id }"
    class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
    @input="$emit('input', { value: $event?.target?.value, field: id })"
  />
</template>

<script>
export default {
  name: 'FieldInput',
  props: {
    value: [Number, String],
    label: { type: String, required: true },
    type: { type: String, default: 'text' },
    id: { type: String, required: true },
    required: { type: Boolean, default: true },
  },
  emits: ['input'],
  computed: {
    fieldLabel() {
      return this.required ? `${this.label} *` : this.label;
    },
  },
};
</script>
