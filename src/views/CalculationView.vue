<script>
import { mapState, mapWritableState } from 'pinia'
import NCPanel from '@/components/NCPanel.vue';
import NCNumber from '@/components/NCNumber.vue';
import NCInput from '@/components/NCInput.vue'
import { pacienteStore } from "@/stores/pacientes.js"

export default {
  components: {
    NCNumber,
    NCPanel,
    NCInput,
  },
  data() {
    return {
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
    ...mapState(pacienteStore, ['ge', 'imc', 'tmb']),
    ...mapWritableState(pacienteStore, ['altura', 'fatorAtividade', 'genero', 'idade', 'peso']),
  },
}
</script>

<template>
  <h2>Dados do paciente</h2>
  <NCPanel>
    <div class="input-group">
      <NCInput :label="'Peso:'" type="number" step="0.5" v-model="peso" />
    </div>
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
        <input class="input-field" type="radio" id="masc" name="genero" value="masculino"
          v-model="genero">
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
  </NCPanel>
  <h2 class="h2">Cálculos Nutri Calc</h2>
  <NCPanel>
    <div class="result">
      <p>IMC:
        <NCNumber :value="imc" :precision="1" class="Kg" />
      </p>
      <p>TMB (EHB):
        <NCNumber :value="tmb" :precision="2" class="Kcal" />
      </p>
      <p>Gasto energético:
        <NCNumber :value="ge" :precision="0" class="Kcal" />
      </p>
    </div>
  </NCPanel>
</template>

<style>
div {
  margin: 8px 0;
}

input {
  width: 52px;
  text-align: right;
}

label,
p {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
}

.Kg::after {
  padding: 5px;
  content: "Kg/m²";
}

.Kcal::after {
  padding: 5px;
  content: "Kcal";
}
</style>