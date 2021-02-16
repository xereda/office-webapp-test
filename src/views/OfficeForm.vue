<template>
  <header>{{ formTitle }}</header>
  <form action="" class="mt-6">
    <div class="my-5 text-sm">
      <label for="title" class="block text-black">Title *</label>
      <input
        v-model="office.title"
        autofocus
        type="text"
        id="title"
        class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
      />
    </div>
    <div class="my-5 text-sm">
      <label for="address" class="block text-black">Enter the address *</label>
      <input
        v-model="office.address"
        type="text"
        id="address"
        class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
      />
    </div>
    <div class="my-5 text-sm">
      <label for="fullName" class="block text-black">Full name *</label>
      <input
        v-model="office.fullName"
        type="text"
        id="fullName"
        class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
      />
    </div>
    <div class="my-5 text-sm">
      <label for="jobPosition" class="block text-black">Job position *</label>
      <input
        v-model="office.jobPosition"
        type="text"
        id="jobPosition"
        class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
      />
    </div>
    <div class="my-5 text-sm">
      <label for="email" class="block text-black">Email address *</label>
      <input
        v-model="office.email"
        type="email"
        id="email"
        class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
      />
    </div>
    <div class="my-5 text-sm">
      <label for="phone" class="block text-black">Phone *</label>
      <input
        v-model="office.phone"
        type="text"
        id="phone"
        class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
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

export default {
  name: 'OfficeForm',
  props: {
    officeId: {
      type: String,
      required: true,
    },
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
  },
};
</script>
