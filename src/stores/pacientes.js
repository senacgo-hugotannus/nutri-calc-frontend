import { defineStore } from 'pinia'

export const pacienteStore = defineStore('paciente', {
  
    state: () => {
      return {
    
        altura: 1.75,
        genero: 'Masculino',
        idade: 18,
      }
    },
  })