<template>
  <label :for="id" class="block text-black">
    {{ fieldLabel }}
  </label>
  <input
    v-bind="{ value, type, id }"
    class="border rounded-md px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
    :class="{ 'border-red-600': isEmpty }"
    @input="$emit('input', { value: $event?.target?.value, field: id })"
  />
  <p v-if="isEmpty" class="block text-xs mt-1 text-red-600">
    This field cannot be empty
  </p>
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
    isEmpty() {
      return !this.value;
    },
  },
};
</script>
