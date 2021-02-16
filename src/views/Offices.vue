<template>
  <section class="m-5">
    <h1 class="text-5xl">Offices</h1>
    <button type="submit" class="w-full my-5 bg-blue-500 p-4">
      Add New Location
    </button>
    <router-view />
    <div v-for="office in offices" class="my-5" :key="office.id">
      <card
        :is-opened="isCardOpen(office.id)"
        @click="onClickTitleCard(office.id, $event)"
      >
        <template v-slot:title>
          <office-title v-bind="{ office }" />
        </template>
        <template v-slot:detail>
          <office-detail
            v-if="isCardOpen(office.id)"
            v-bind="{ office }"
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
import { makeOfficesMock } from '@/utils/index.js';

export default {
  name: 'Offices',
  components: { Card, OfficeTitle, OfficeDetail },
  data() {
    return {
      offices: makeOfficesMock(),
      idCardOpened: null,
    };
  },
  methods: {
    onClickTitleCard(cardIndex, isOpened) {
      console.log('onClickTitleCard', cardIndex, isOpened);
      this.idCardOpened = isOpened ? null : cardIndex;
    },
    onEdit(officeId) {
      console.log('onEdit', officeId);
      this.$router.push({ name: 'edit', params: { officeId } });
    },
    onRemove(officeId) {
      console.log('onRemove', officeId);
      this.offices = this.offices.filter(office => office.id !== officeId);
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
