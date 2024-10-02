// https://play.vuejs.org/#eNqdV91S2zgUfpUzvkmg4IRAUuo12QEKXbaF7WyZval7IWzFiNqyx5JDGIaH2cvdmT4FL9YjyTI2cfgpwwzS0efzo3POp8Ots5/n7rykjuf4IixYLqcBZ2meFRLOyvSCFsdZkRIJsyJLoecOmkL1Ye+3gAecLvQXEZ2RMpFwG3CAMEM1nHIpPLhtK7vbUICISNJfM2CAgsqy4HYHQBLcEw+23LdjDVc/MeW0yDzonRIRlgnjWa8+YxGJKOJ3a0lOBWLfDmvBjMis2JdsXmFH7nZ9RqwY3f1qhYCeS7qQqCZwDmgKCZ3TwNkwmpRzoyqYJfSnx8idVcjTLKIFibIWerIKfbSQlJeEy7b2d6vxIQ1ZxknSwGPgDfy3anWn/iixTV8paYTJM6cxfUhWnS55yYQr0wtYN8v2DWNtaL2VfpaGq1SoVMHArE3mYX0dRo8UoKFVCkxlwN7eHvSOacq4qg34vXbQysCrRXUNLVux6A5rk/EY3sA7dzyxMWvf32AOdsdWVIWwCTvuZNcKu66k6UaXsYmrrG1tu7WWytqyqckDpmVJJzXg+OsP6hbHjaRpnhBJcQfgX46m77EGBUQZ5CRk2LfUH6DUVIMfsbkG4jIhFzSZflZ+9D/Ga57POFYKyJuc7gUO140eOCAkzXE/dMe4mW+mWOUJ7pX/gTP1B0aNVj4w2rsN7ZsA++nzloZbLVPmal5l7EQTwwo7D5r1Bb9K8Yf7/zV12QT7giY0lA2dpoJR6UMb+1kusXWnthz9QSVYhtRVtITBrGtT1p8Xu3zO8gwpHep2huP7H4KF5Ikg2v3fFQyCZ1mBUKnUM94gXrxib06SUl26OjVs0lKC1Ibcps40wcGdLm8b6C9GjlV+eP9vgveH9X9WyoLBIUnCZvnnVofICZ+enB56qFwtK3HreauDQMJTMeUFMrBAz1CkKrTkTN7Ux4PKIWWiw9b56QH0j/44wOp/gUXkk8cWRw2L30P1DDxn8gMReLWqHOP7/yQLsxeZjjHdr7LsDxoUhFshbxK1xMwYIkxJETPuwW6+gCHSGeYahxPdmvr8mkXy0oPxKF9osstJFDEee7BTCVSNbJKExaikYPGltEp0ISAF50ZRxAT6cePBLKHmy6tSSDa72Qwz5EEuPcD4Q7p5QeU1pVxDKuuj3aG2Zvi1CsHZcKTAb2csdq9ExnG80oYCRz2rLKHFX7pUseTr91XxVZJd/6llsihp9UTgN5c0/N4hvxILJQuczwUVtNDzhj2TeHdUmuOjL2d4EY1D7NYyQfQTh38jTSel8tHADkoeodsNnPb2RI+KeOnnQg8mKvO1o3acUGgcFQ+fCP3B3W13x75YeIuPx001p7YfLlWY4IUJEQLLTJdbzRjIFYa8/2H0uuKKupSXys++jV3DLCcpzou9pjtm8syLLFcTY0+3QW8DekmGpa5XdS+ojfasks7YQq1EqRZ6/OqcuBq+d8wGX804oLVtVNOXdoxGxs1KqK18c68yxvvYgYGz5iLDpf21xihiVu3PV01aOlBXZp90nF9QF4/7+sREXpk1XCyWrVQHHerrvWr9BUvL9LggoUK/ZzFT/0fYkM21NgZe9T4+i7fw6s1YORnZLnYVaXkemUla2P9pKjrAi/yoGa0iFBe5fDUyHqRBMBweICE+Joq7n+caV7E=

<script>
export default {
  data() {
    return {
      altura: 1.75,
      genero: 'Masculino',
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
    <label>Gênero:
      <select v-model="genero">
        <option>Feminino</option>
        <option>Masculino</option>
      </select>
    </label>
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