<script>
import { mapWritableState, mapActions } from 'pinia'
import NCPanel from '@/components/NCPanel.vue';
import NCInput from '@/components/NCInput.vue'
import { pacienteStore } from "@/stores/pacientes.js"
import { supabase } from '@/lib/supabaseClient';
export default {
  components: {
    NCPanel,
    NCInput,
  },
  unmounted() {
    this.salvarRegistro()
  },
  data() {
    return {
      peso: 0,
      fatorAtividade: 1.4,
      atividades: [
        { texto: "Bem leve", fator: 1.2 },
        { texto: "Leve", fator: 1.4 },
        { texto: "Moderado", fator: 1.6 },
        { texto: "Extenuante", fator: 1.9 },
        { texto: "Excecional", fator: 2.3 },
      ],
    }
  },
  computed: {
    ...mapWritableState(pacienteStore, ['altura', 'genero', 'idade']),
  },
  methods: {
    ...mapActions(pacienteStore, ['addRegistro']),
    async salvarRegistro() {
      const id = Math.floor(Math.random() * 100000);
      const now = new Date(Date.now());
      const data = now.toISOString().split('T')[0];
      const horario = now.toString().split(' ')[4];
      const { error } = await supabase
        .from('registros')
        .insert({ id, peso: this.peso, fator_atividade: this.fatorAtividade, data, horario })
      if (error) { console.log(error) }
    }
  }
}
</script>

<template>
  <h2>Dados do paciente</h2>
  <NCPanel>
    <NCInput :label="'Peso:'" type="number" step="0.5" v-model="peso" />
    <div class="input-group">
      <label>Altura:<input class="input-field" type="number" step="0.01" v-model="altura"></label>
    </div>
    <div class="input-group">
      <label>Idade:<input class="input-field" type="number" v-model="idade"></label>
    </div>
    <div class="input-group">
      <fieldset>
        <legend>Gênero:</legend>
        <label for="masc">Masculino</label>
        <input class="input-field" type="radio" id="masc" name="genero" value="masculino" v-model="genero">
        <label for="fem">Feminino</label>
        <input class="input-field" type="radio" id="fem" name="genero" value="Feminino" v-model="genero">
      </fieldset>
    </div>
    <div class="input-group">
      <label>Tipo de Atividade:
        <select class="input-field" v-model="fatorAtividade">
          <option v-for="tipo in atividades" :value="tipo.fator" :key="tipo.fator">
            {{ tipo.texto }}
          </option>
        </select>
      </label>
    </div>
    <button @click="salvarRegistro()">Salvar</button>
  </NCPanel>
</template>

<style>
div {
  margin: 8px 0;
}

input {
  width: 52px;
  text-align: left;
}

label,
p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
}
</style>