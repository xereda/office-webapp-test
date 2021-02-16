<template>
  <header>{{ formTitle }}</header>
  <form class="mt-6">
    <div class="my-5 text-sm">
      <field-input
        label="Title"
        id="title"
        :value="office.title"
        @input="onInputValue($event)"
      />
    </div>
    <div class="my-5 text-sm">
      <field-input
        label="Enter the address"
        id="address"
        :value="office.address"
        @input="onInputValue($event)"
      />
    </div>
    <div class="my-5 text-sm">
      <field-input
        label="Full name"
        id="fullName"
        :value="office.fullName"
        @input="onInputValue($event)"
      />
    </div>
    <div class="my-5 text-sm">
      <field-input
        label="Job position"
        id="jobPosition"
        :value="office.jobPosition"
        @input="onInputValue($event)"
      />
    </div>
    <div class="my-5 text-sm">
      <field-input
        label="Email address"
        id="email"
        :value="office.email"
        @input="onInputValue($event)"
      />
    </div>
    <div class="my-5 text-sm">
      <field-input
        label="Phone"
        id="phone"
        :value="office.phone"
        @input="onInputValue($event)"
      />
    </div>
  </form>
  <footer class="flex justify-between">
    <button
      class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black"
      @click="onSave"
    >
      Save
    </button>
  </footer>
</template>

<script>
import { getOneOffice, updateOffice, addOffice } from '@/services/index.js';
import FieldInput from '@/components/FieldInput.vue';

export default {
  name: 'OfficeForm',
  props: {
    officeId: String,
  },
  components: {
    FieldInput,
  },
  data() {
    return {
      office: {},
    };
  },
  created() {
    this.loadOffice(this.officeId);
    console.log('created', this.officeId);
  },
  beforeRouteUpdate({ params }, from, next) {
    this.loadOffice(params.officeId);

    next();
  },
  computed: {
    formTitle() {
      return this.office.id ? 'Edit location' : 'New location';
    },
  },
  methods: {
    async loadOffice(officeId) {
      this.office = officeId ? await getOneOffice(officeId) : {};
    },
    async onSave() {
      this.office.id
        ? await updateOffice(this.office)
        : await addOffice(this.office);

      this.$router.push({ name: 'offices' });
    },
    onInputValue({ value, field }) {
      this.office[field] = value;
    },
  },
};
</script>
