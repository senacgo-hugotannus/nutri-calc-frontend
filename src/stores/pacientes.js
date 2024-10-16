import { defineStore } from 'pinia'

export const PacienteStore = defineStore('Paciente', {
  
    state: () => {
      return {
    
        altura: 1.75,
        genero: 'Masculino',
        idade: 18,
      }
    },
  })