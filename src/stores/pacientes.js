import { defineStore } from 'pinia'

export const pacienteStore = defineStore('paciente', {
  
    state: () => {
      return {
        altura: 1.75,
        genero: 'Masculino',
        idade: 18,
        peso: 70,
        fatorAtividade: 1.6,
      }
    },
    getters: {
        ge(state) {
          return this.tmb * state.fatorAtividade;
        },
        imc(state) {
          return state.peso / state.altura ** 2;
        },
        tmb(state) {
          return state.genero === 'Feminino' ? this.tmbFeminino : this.tmbMasculino;
        },
        tmbFeminino(state) {
          return 655 + 9.56 * state.peso + 1.85 * state.altura - 4.68 * state.idade;
        },
        tmbMasculino(state) {
          return 66.5 + 13.8 * state.peso + 5 * state.altura - 6.8 * state.idade;
        },
    }
})