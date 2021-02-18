<template>
  <section class="bg-white p-7 shadow-lg rounded-lg">
    <header class="flex justify-between">
      <h1 class="font-semibold text-gray-600">
        {{ formTitle }}
      </h1>
      <div>
        <svg-icon
          class="w-7 h-7 text-gray-300 cursor-pointer"
          icon="times"
          @click="onCloseForm"
        />
      </div>
    </header>
    <form class="mt-6">
      <div class="my-5 text-sm">
        <field-input
          label="Title"
          id="title"
          :value="office.title"
          @input="onInputValue"
          @validation="onValidation"
        />
      </div>
      <div class="mt-5 mb-8 text-sm">
        <field-input
          label="Enter the address"
          id="address"
          :value="office.address"
          @input="onInputValue"
          @validation="onValidation"
        />
      </div>
      <div class="text-xs text-dp-green border-b border-gray-200 pb-3">
        CONTACT INFORMATION
      </div>
      <div class="mb-5 mt-8 text-sm">
        <field-input
          label="Full name"
          id="fullName"
          :value="office.fullName"
          @input="onInputValue"
          @validation="onValidation"
        />
      </div>
      <div class="my-5 text-sm">
        <field-input
          label="Job position"
          id="jobPosition"
          :value="office.jobPosition"
          @input="onInputValue"
          @validation="onValidation"
        />
      </div>
      <div class="my-5 text-sm">
        <field-input
          label="Email address"
          id="email"
          type="email"
          placeholder="name@example.com"
          :value="office.email"
          @input="onInputValue"
          @validation="onValidation"
        />
      </div>
      <div class="my-5 text-sm">
        <field-input
          label="Phone"
          id="phone"
          placeholder="(xxx) xxx-xxxx"
          :value="office.phone"
          @input="onInputValue"
          @validation="onValidation"
        />
      </div>
    </form>
    <footer class="flex justify-between">
      <button
        class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black"
        :class="{ 'opacity-30 cursor-not-allowed': hasError }"
        :disabled="hasError"
        @click="onSave"
      >
        Save
      </button>
    </footer>
  </section>
</template>

<script>
import { getOneOffice, updateOffice, addOffice } from '@/services/index.js';
import FieldInput from '@/components/FieldInput.vue';
import SvgIcon from '@/components/SvgIcon.vue';

export default {
  name: 'OfficeForm',
  props: {
    officeId: String,
  },
  components: {
    FieldInput,
    SvgIcon,
  },
  data() {
    return {
      office: {},
      formErrors: [],
    };
  },
  created() {
    this.loadOffice(this.officeId);
    console.log('created', this.officeId);
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');

    next(vm => (vm.office = {}));
  },
  beforeRouteUpdate({ params }, from, next) {
    console.log('beforeRouteUpdate', params);
    this.loadOffice(params.officeId);

    next();
  },
  computed: {
    formTitle() {
      return this.office.id ? 'Edit location' : 'New location';
    },
    hasError() {
      const formFieldsValidationState = Object.values(this.formErrors);

      return formFieldsValidationState.some(
        formFieldState => formFieldState.hasError,
      );
    },
  },
  methods: {
    async loadOffice(officeId) {
      this.office = officeId ? await getOneOffice(officeId) : {};
    },
    async onSave() {
      console.log('onsave');
      this.office.id
        ? await updateOffice(this.office)
        : await addOffice(this.office);

      this.$router.push({ name: 'offices' });
    },
    onInputValue({ value, field }) {
      this.office[field] = value;
    },
    onCloseForm() {
      this.$router.push({ name: 'offices' });
    },
    onValidation(fieldStateError) {
      console.log('onValidation', fieldStateError);

      this.formErrors = { ...this.formErrors, ...fieldStateError };
    },
  },
};
</script>
