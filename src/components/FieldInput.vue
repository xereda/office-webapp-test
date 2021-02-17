<template>
  <label :for="id" class="block text-black">
    {{ fieldLabel }}
  </label>
  <input
    v-bind="{ value, type, id }"
    class="border rounded-md px-4 py-3 mt-1 focus:outline-none bg-gray-100 w-full"
    :class="{ 'border-red-600': showError }"
    @input="$emit('input', { value: $event?.target?.value, field: id })"
    @blur="setToTouchedState"
    @focus="setToTouchedState"
  />
  <p v-if="showError" class="block text-xs mt-1 text-red-600">
    <span v-if="isEmpty">
      This field cannot be empty
    </span>
    <span v-else-if="hasEmailError">
      Invalid email address
    </span>
  </p>
</template>

<script>
const REGEX_EMAIL_VALIDATION = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  name: 'FieldInput',
  props: {
    value: [Number, String],
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    id: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['input', 'validation'],
  data() {
    return {
      wasTouched: false,
    };
  },
  watch: {
    hasError: {
      handler: function(hasError) {
        this.$emit('validation', { [this.id]: { hasError } });
      },
      immediate: true,
    },
  },
  computed: {
    fieldLabel() {
      return this.required ? `${this.label} *` : this.label;
    },
    isEmpty() {
      return !this.value;
    },
    emailAdressIsInvalid() {
      return !REGEX_EMAIL_VALIDATION.test(this.value);
    },
    hasEmailError() {
      return this.type === 'email' && this.emailAdressIsInvalid;
    },
    hasError() {
      return this.isEmpty || this.hasEmailError;
    },
    showError() {
      return this.wasTouched && this.hasError;
    },
  },
  methods: {
    setToTouchedState() {
      if (!this.isEmpty) {
        this.wasTouched = true;
      }
    },
  },
};
</script>
