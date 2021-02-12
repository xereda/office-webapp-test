<template>
  <section class="flex justify-between items-center bg-red-100">
    <div>
      <h1>Titulo do card</h1>
      <h2>Detalhe do título</h2>
    </div>
    <button @click="toggleContentVisibility">{{ labelButton }}</button>
  </section>
  <section v-if="showContent">
    conteudo do card
  </section>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      showContent: false,
    };
  },
  computed: {
    labelButton() {
      return this.showContent ? 'Fechar' : 'Abrir';
    },
  },
  methods: {
    toggleContentVisibility() {
      this.showContent = !this.showContent;
    },
  },
};
</script>
