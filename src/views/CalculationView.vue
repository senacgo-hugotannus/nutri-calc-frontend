<script>
export default {
  data() {
    return {
      altura: 1.75,
      genero: '',
      idade: 18,
      peso: 70,
      fatorAtividade: 0,
      atividades:[
        { texto: "Bem leve", fator: 1.2 },
        { texto: "Leve", fator: 1.4 },
        { texto: "Moderado", fator: 1.6 },
        { texto: "Extenuante", fator: 1.9 },
        { texto: "Excecional", fator: 2.3 },
      ],
    }
  },

  computed: {
    ge () {
      return this.tmb * this.fatorAtividade;
    },
    imc () {
      return this.peso / this.altura ** 2;
    },
    tmb() {
      return this.genero === 'Feminino' ? this.tmbFeminino : this.tmbMasculino;
    },
    tmbFeminino() {
      return 655 + 9.56*this.peso + 1.85*this.altura - 4.68*this.idade;
    },
    tmbMasculino() {
      return 66.5 + 13.8*this.peso + 5*this.altura - 6.8*this.idade;
    },

    geView () { return this.ge.toFixed(1) },
    imcView () { return this.imc.toFixed(1) },
    tmbView () { return this.tmb.toFixed(2) },
  }
}
</script>

<template>
  <h2>Dados do paciente</h2>

  <div>
    <label>Peso:<input type="number" step="0.5" v-model="peso"></label>
  </div>

  <div>
    <label>Altura:<input type="number" step="0.01" v-model="altura"></label>
  </div>

  <div>
    <label>Idade:<input type="number" v-model="idade"></label>
  </div>

  <div>
    <fieldset>
      <legend>Gênero:</legend>
      <label for="masc">Masculino</label>
      <input type="radio" id="masc" name="genero" value="masculino" v-model="genero">
      <label for="fem">Feminino</label>
      <input type="radio" id="fem" name="genero" value="Feminino" v-model="genero">
    </fieldset>
  </div>

  <div>
    <label>Tipo de Atividade Física:
      <select v-model="fatorAtividade">
        <option v-for="tipo in atividades" :value="tipo.fator" :key="tipo.fator">
          {{ tipo.texto }}
        </option>
      </select>
    </label>
  </div>

  <h2>Cálculos Nutri Calc</h2>

  <p>IMC: <span>{{imcView}}</span></p>
  <p>TMB (EHB): <span>{{tmbView}}</span></p>
  <p>Gasto energético: <span>{{geView}}</span></p>
</template>

<style>
div {
  margin: 8px 0;
}

input {
  width: 52px;
  text-align: right;
}

label, p {
  display: flex;
  justify-content: space-between;
  width: 280px;
}
</style>