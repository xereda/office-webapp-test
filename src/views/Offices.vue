<template>
  <p class="fixed" v-if="E2ERunner">#cypress-e2e-runner</p>
  <section>
    <transition name="fade">
      <notice-bar
        v-if="isNoticeBarVisible"
        :message="noticeBarMessage"
        @close="onCloseNoticeBar"
      />
    </transition>
    <div class="pt-28 pl-4 max-w-sm sm:max-w-md mx-auto">
      <page-title class="mb-16">Offices - test</page-title>
      <main-button
        v-if="showAddButton"
        class="mb-6"
        @click="onClickAddNewLocation"
      >
        Add New Location
      </main-button>
      <router-view />
      <placeholder v-bind="{ isLoading, noContent }">
        <div v-for="office in filteredOffices" class="my-5" :key="office.index">
          <card
            :is-opened="isCardOpen(office.index)"
            @click="onToggleCard(office.index, $event)"
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
                :index="office.index"
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
    officeIndex: String,
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
      E2ERunner: false,
      idCardOpened: null,
      isNoticeBarVisible: false,
      noticeBarMessage: '',
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
  mounted() {
    this.$nextTick(() => {
      window.Cypress && (this.E2ERunner = true);
    });
  },
  computed: {
    filteredOffices() {
      return (
        this.offices.filter(office => office._id !== this.officeIndex) ?? []
      );
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
      this.idCardOpened = isOpened ? null : cardIndex;
    },
    onEdit(officeIndex) {
      this.idCardOpened = null;
      this.$router.push({ name: 'edit', params: { officeIndex } });
    },
    async onRemove(officeIndex) {
      this.isRemoving = true;

      await removeOffice(officeIndex);
      this.$router.push({ name: 'offices' });
      this.loadOffices();
      this.showNoticeBar('LOCATION HAS BEEN REMOVED.');
      this.isRemoving = false;
    },
    isCardOpen(officeIndex) {
      return this.idCardOpened === officeIndex;
    },
    onClickAddNewLocation() {
      this.idCardOpened = null;
      this.$router.push({ name: 'add' });
    },
    onCloseNoticeBar() {
      this.isNoticeBarVisible = false;
    },
    showNoticeBar(message) {
      this.noticeBarMessage = message;
      this.isNoticeBarVisible = true;
      setTimeout(() => (this.isNoticeBarVisible = false), 3000);
    },
  },
};
</script>
