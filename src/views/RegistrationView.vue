<template>
    <div>
      <h1>Registro do Usuário</h1>
      <p></p>
    </div>
    <div class="card-list">
    <div 
      v-for="(item, index) in items" 
      :key="item.id" 
      class="card" 
      @click="toggleExpand(index)"
    >
      <div class="card-content">
        <h3>{{ item.title }}</h3>
        <span class="icon" :class="{'up': expandedIndex === index}">&#9660;</span>
      </div>
      <p v-if="expandedIndex === index">{{ item.details }}</p>
    </div>
  </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      expandedIndex: null,
      items: [
        { id: 1, title: '10/09/2024', details: 'IMC:22,9 TMB:918,75 GE:1.470' },
        { id: 2, title: '02/09/2024', details: 'IMC:32,2 TMB:878,56 GE:1.426' },
        { id: 3, title: '24/08/2024', details: 'IMC:22,9 TMB:900,45 GE:1.465' }
      ]
    };
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