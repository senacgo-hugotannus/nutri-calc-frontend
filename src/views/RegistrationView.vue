<template>
  <div>
    <h1>Registro do Usuário</h1>
    <p></p>
  </div>
  <div class="card-list">
    <div v-for="(reg, index) in registros"
      :key="reg.date"
      class="card"
      @click="toggleExpand(index)">
      <div class="card-content">
        <h3>{{ reg.date }}</h3>
        <span class="icon" :class="{ 'up': expandedIndex === index }">&#9660;</span>
      </div>
      <div class="card-content" v-if="expandedIndex === index">
        <span>Peso: {{ reg.peso }}</span>
        <span> {{ reg.fatorAtividade }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { pacienteStore } from "@/stores/pacientes.js"

export default {
  data() {
    return {
      expandedIndex: null,
    }
  },
  computed: {
    ...mapState(pacienteStore, ['registros']),
  },
  methods: {
    toggleExpand(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>
.card-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.card {
  border: 1px solid #32a852;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s;
}

.card:hover {
  background-color: #32a852;
}

.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  transition: transform 0.6s;
}

.icon.up {
  transform: rotate(180deg);
}

.card p {
  margin-top: 10px;

}
</style>