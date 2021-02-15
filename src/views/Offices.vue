<template>
  <section class="m-5">
    <h1 class="text-5xl">Offices</h1>
    <button type="submit" class="w-full my-5 bg-blue-500 p-4">
      Add New Location
    </button>
    <div v-for="office in offices" class="my-5" :key="office.index">
      <card
        :is-opened="isCardOpen(office.index)"
        @click="onClickTitleCard(office.index, $event)"
      >
        <template v-slot:title>
          <office-title v-bind="{ office }" />
        </template>
        <template v-slot:detail>
          <office-form
            v-if="isEditing(office.index)"
            v-bind="{ office }"
            @save="onSave"
          />
          <office-detail
            v-else
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
import OfficeForm from '@/components/OfficeForm.vue';

const makeOfficesMock = () => [
  {
    index: '1111',
    title: 'Office 1',
    address: 'Rua Dona Francisca, 1883',
    contact: {
      fullName: 'Jackson Reagan',
      jobPosition: 'Frontend developer',
      email: 'jackson.reagan@dogpony.io',
      phone: '(047) 91546.5169',
    },
  },
  {
    index: '2222',
    title: 'Office 2',
    address: 'Frederico Paraguaçú, 345',
    contact: {
      fullName: 'Marcel Santos',
      jobPosition: 'UX Designer',
      email: 'marcel.santos@ux.mail.com',
      phone: '(450) 11234.9999',
    },
  },
  {
    index: '3333',
    title: 'Dog and Pony Studios',
    address: '1151 St Clair Ave W, Toronto',
    contact: {
      fullName: 'Ricardo Cerutti',
      jobPosition: 'Tech recruiter',
      email: 'ricardo@hrcenter.com',
      phone: '(411) 21356.9006',
    },
  },
];

export default {
  name: 'Offices',
  components: { Card, OfficeTitle, OfficeDetail, OfficeForm },
  data() {
    return {
      offices: makeOfficesMock(),
      formEditingIndex: null,
      cardOpenedIndex: null,
    };
  },
  methods: {
    onClickTitleCard(cardIndex, isOpened) {
      console.log('onClickTitleCard', cardIndex, isOpened);
      this.cardOpenedIndex = isOpened ? null : cardIndex;
    },
    onEdit(officeIndex) {
      console.log('onEdit', officeIndex);
      this.formEditingIndex = officeIndex;
    },
    onRemove(officeIndex) {
      console.log('onRemove', officeIndex);
      this.offices = this.offices.filter(
        office => office.index !== officeIndex,
      );
    },
    onSave() {
      console.log('onSave');
    },
    isCardOpen(officeIndex) {
      return this.cardOpenedIndex === officeIndex;
    },
    isEditing(officeIndex) {
      return this.formEditingIndex === officeIndex;
    },
  },
};
</script>
