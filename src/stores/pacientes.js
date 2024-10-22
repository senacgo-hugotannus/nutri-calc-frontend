import { defineStore } from 'pinia';

export const pacienteStore = defineStore('paciente', {
  state: () => {
    return {
      altura: 1.75,
      genero: 'Masculino',
      idade: 18,
      // peso: 80,
      // fatorAtividade: 1.2,
      registros: [
        { peso: 90, fatorAtividade: 'Atividade Moderada', date: '10/10/2024' },
        { peso: 92, fatorAtividade: 'Atividade Intensa', date: '28/09/2024' },
        { peso: 97, fatorAtividade: 'Atividade Leve', date: '13/09/2024' },
        { peso: 100, fatorAtividade: 'Atividade Leve', date: '20/08/2024' },
        { peso: 98, fatorAtividade: 'Atividade Moderada', date: '10/08/2024' },
        { peso: 96, fatorAtividade: 'Atividade Leve', date: '29/07/2024' },
      ],
    };
  },
  getters: {
    ultimoRegistro: (state) => {
      return state.registros[0]; 
    },
  },
});
