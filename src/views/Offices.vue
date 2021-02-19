<template>
  <section>
    <transition name="fade">
      <notice-bar v-if="showNoticeBar" @close="onCloseNoticeBar" />
    </transition>
    <div class="pt-28 pl-4 pr-4 sm:max-w-md mx-auto">
      <page-title class="mb-16">Offices</page-title>
      <main-button
        v-if="showAddButton"
        class="mb-6"
        @click="onClickAddNewLocation"
      >
        Add New Location
      </main-button>
      <router-view />
      <placeholder v-bind="{ isLoading, noContent }">
        <div v-for="office in filteredOffices" class="my-5" :key="office.id">
          <card
            :is-opened="isCardOpen(office.id)"
            @click="onToggleCard(office.id, $event)"
          >
            <template v-slot:title="slotTitleProps">
              <office-title
                :title="office.title"
                :address="office.address"
                :width-card="slotTitleProps.widthCard"
              />
            </template>
            <template v-slot:detail>
              <office-detail
                :id="office.id"
                :full-name="office.fullName"
                :job-position="office.jobPosition"
                :email="office.email"
                :phone="office.phone"
                :is-removing="isRemoving"
                @edit="onEdit"
                @remove="onRemove"
              />
            </template>
          </card>
        </div>
      </placeholder>
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
import MainButton from '@/components/MainButton.vue';
import Placeholder from '@/components/Placeholder.vue';

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
    MainButton,
    Placeholder,
  },
  data() {
    return {
      idCardOpened: null,
      showNoticeBar: false,
      isLoading: false,
      isRemoving: false,
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
    noContent() {
      return !this.offices?.length;
    },
  },
  methods: {
    async loadOffices() {
      this.isLoading = true;
      this.offices = await getAllOffices();
      this.isLoading = false;
    },
    onToggleCard(cardIndex, isOpened) {
      console.log('onToggleCard', cardIndex, isOpened);
      this.idCardOpened = isOpened ? null : cardIndex;
    },
    onEdit(officeId) {
      console.log('onEdit', officeId);
      this.idCardOpened = null;
      this.$router.push({ name: 'edit', params: { officeId } });
    },
    async onRemove(officeId) {
      console.log('onRemove', officeId);
      this.isRemoving = true;

      await removeOffice(officeId);
      this.$router.push({ name: 'offices' });
      this.loadOffices();

      this.showNoticeBar = true;
      setTimeout(() => (this.showNoticeBar = false), 3000);
      this.isRemoving = false;
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
