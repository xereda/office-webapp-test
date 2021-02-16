<template>
  <header>Edit location</header>
  <form action="" class="mt-6">
    <div class="my-5 text-sm">
      <label for="title" class="block text-black">Title *</label>
      <input
        autofocus
        type="text"
        id="title"
        class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
        :value="office.title"
      />
    </div>
    <div class="my-5 text-sm">
      <label for="address" class="block text-black">Enter the address *</label>
      <input
        type="text"
        id="address"
        class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
        :value="office.address"
      />
    </div>
  </form>
  <footer class="flex justify-between">
    <button
      class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black"
      @click="$emit('save')"
    >
      Save
    </button>
  </footer>
</template>

<script>
import { getOneOffice } from '@/services/index.js';

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
  emits: ['save'],
  created() {
    this.loadOffice(this.officeId);
    console.log('created', this.officeId);
  },
  beforeRouteUpdate({ params }, from, next) {
    this.loadOffice(params.officeId);

    next();
  },
  methods: {
    async loadOffice(officeId) {
      this.office = await getOneOffice(officeId);
    },
  },
};
</script>
