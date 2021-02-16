<template>
  <section class="m-5">
    <h1 class="text-5xl">Offices</h1>
    <button type="submit" class="w-full my-5 bg-blue-500 p-4">
      Add New Location
    </button>
    <router-view />
    <div v-for="office in filteredOffices" class="my-5" :key="office.id">
      <card
        :is-opened="isCardOpen(office.id)"
        @click="onClickTitleCard(office.id, $event)"
      >
        <template v-slot:title>
          <office-title :title="office.title" :address="office.address" />
        </template>
        <template v-slot:detail>
          <office-detail
            v-if="isCardOpen(office.id)"
            :id="office.id"
            :full-name="office.fullName"
            :job-position="office.jobPosition"
            :email="office.email"
            :phone="office.phone"
            @edit="onEdit"
            @remove="onRemove"
          />
        </template>
      </card>
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card.vue';
import OfficeTitle from '@/components/OfficeTitle.vue';
import OfficeDetail from '@/components/OfficeDetail.vue';
import { getAllOffices, removeOffice } from '@/services/index.js';

export default {
  name: 'Offices',
  props: {
    officeId: String,
  },
  components: { Card, OfficeTitle, OfficeDetail },
  data() {
    return {
      idCardOpened: null,
      offices: [],
    };
  },
  created() {
    this.loadOffices();
  },
  computed: {
    filteredOffices() {
      return this?.offices.filter(office => office.id !== this.officeId) ?? [];
    },
  },
  methods: {
    async loadOffices() {
      this.offices = await getAllOffices();
    },
    onClickTitleCard(cardIndex, isOpened) {
      console.log('onClickTitleCard', cardIndex, isOpened);
      this.$router.push({ name: 'offices' });
      this.idCardOpened = isOpened ? null : cardIndex;
    },
    onEdit(officeId) {
      console.log('onEdit', officeId);
      this.idCardOpened = null;
      this.$router.push({ name: 'edit', params: { officeId } });
    },
    async onRemove(officeId) {
      console.log('onRemove', officeId);
      await removeOffice(officeId);
      this.loadOffices();
    },
    onSave() {
      console.log('onSave');
    },
    isCardOpen(officeId) {
      return this.idCardOpened === officeId;
    },
  },
};
</script>
