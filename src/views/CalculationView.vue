<script>
import NCPanel from '@/components/NCPanel.vue';
import NCNumber from '@/components/NCNumber.vue';
import NCInput from '@/components/NCInput.vue'

export default {
  components: {
    NCNumber,
    NCPanel,
    NCInput,
  },
  data() {
    return {
      altura: 1.75,
      genero: 'Masculino',
      idade: 18,
      peso: 70,
      fatorAtividade: 1.6,
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
    ge() {
      return this.tmb * this.fatorAtividade;
    },
    imc() {
      return this.peso / this.altura ** 2;
    },
    tmb() {
      return this.genero === 'Feminino' ? this.tmbFeminino : this.tmbMasculino;
    },
    tmbFeminino() {
      return 655 + 9.56 * this.peso + 1.85 * this.altura - 4.68 * this.idade;
    },
    tmbMasculino() {
      return 66.5 + 13.8 * this.peso + 5 * this.altura - 6.8 * this.idade;
    },
  },
}
</script>

<template>
  <h2>Dados do paciente</h2>
  <NCPanel>
    <div class="input-group">
      <NCInput :label="'Peso:'" type="number" step="0.5" v-model="peso" :class="input - field" />
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