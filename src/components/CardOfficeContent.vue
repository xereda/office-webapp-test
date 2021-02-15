<template>
  <div class="text-gray-600">
    <p>
      {{ office.contact.fullName }}
    </p>
    <p>
      {{ office.contact.jobPosition }}
    </p>
    <p>
      {{ office.contact.email }}
    </p>
    <p>
      {{ office.contact.phone }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CardOfficeContent',
  props: {
    office: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
