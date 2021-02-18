<template>
  <notice-bar v-if="showNoticeBar" @close="onCloseNoticeBar" />
  <section class="block pt-28 p-10">
    <page-title>Offices</page-title>
    <button
      v-if="showAddButton"
      type="submit"
      class="w-full my-5 bg-blue-500 p-4"
      @click="onClickAddNewLocation"
    >
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
import NoticeBar from '@/components/NoticeBar.vue';
import PageTitle from '@/components/PageTitle.vue';

export default {
  name: 'Offices',
  props: {
    officeId: String,
  },
  components: {
    Card,
    NoticeBar,
    OfficeDetail,
    OfficeTitle,
    PageTitle,
  },
  data() {
    return {
      idCardOpened: null,
      showNoticeBar: false,
      offices: [],
    };
  },
  created() {
    this.loadOffices();
  },
  beforeRouteUpdate(to, from, next) {
    this.loadOffices();

    next();
  },
  computed: {
    filteredOffices() {
      return this?.offices.filter(office => office.id !== this.officeId) ?? [];
    },
    isAddMode() {
      return this.$route.name === 'add';
    },
    showAddButton() {
      return !this.isAddMode;
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
      this.showNoticeBar = true;
    },
    isCardOpen(officeId) {
      return this.idCardOpened === officeId;
    },
    onClickAddNewLocation() {
      this.idCardOpened = null;
      this.$router.push({ name: 'add' });
    },
    onCloseNoticeBar() {
      console.log('onCloseNoticeBar');
      this.showNoticeBar = false;
    },
  },
};
</script>
