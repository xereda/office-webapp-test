<template>
  <label :for="id" class="block text-gray-500 font-light text-base">
    {{ label }}
    <span v-if="required" class="text-sm text-gray-300"> *</span>
  </label>
  <input
    v-bind="{ value, type, id, placeholder, disabled }"
    class="
      text-base text-gray-500 font-light border border-gray-400 rounded-md bg-white shadow-sm
      px-4 py-3 mt-1 focus:outline-none w-full placeholder-gray-300 disabled:opacity-40"
    :class="{
      'border-red-300': showError,
      'border-gray-900': isReady,
      'focus:border-dp-green': !showError,
    }"
    :ref="id"
    @input="onInput"
    @blur="onBlur"
  />
  <div v-if="showError" class="icon-error">
    <svg-icon class="h-6 w-6 text-red-400" icon="exclamation-circle" />
  </div>
  <p v-if="showError" class="block text-xs mt-1 text-red-300">
    <span v-if="isEmpty">
      This field cannot be empty
    </span>
    <span v-else-if="hasEmailError">
      Invalid email address
    </span>
  </p>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';

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
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    focus: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    SvgIcon,
  },
  emits: ['input', 'validation'],
  data() {
    return {
      imputed: false,
      blurred: false,
    };
  },
  watch: {
    hasError: {
      handler: function(hasError) {
        this.$emit('validation', { [this.id]: { hasError } });
      },
      immediate: true,
    },
    value: {
      immediate: true,
      handler() {
        this.focus &&
          this.$nextTick(() => {
            this.$refs[this.id]?.focus();
          });
      },
    },
  },
  computed: {
    isEmpty() {
      return !this.value;
    },
    interacted() {
      return this.imputed && this.blurred;
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
      return this.interacted && this.hasError;
    },
    isReady() {
      return !this.showError && !this.isEmpty;
    },
  },
  methods: {
    onInput({ target }) {
      this.imputed = true;

      this.$emit('input', { value: target?.value, field: this.id });
    },
    onBlur() {
      this.blurred = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-error {
  position: relative;
  float: right;
  bottom: 36px;
  right: 15px;
}
</style>
