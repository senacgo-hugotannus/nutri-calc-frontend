<template>
    <NCContainer>
        <div class="result">
            <div class="div-info">
                <p class="title">IMC:</p>
                <NCNumber :value="imc" :precision="1" class="Kg" />
            </div>
            <div class="div-info">
                <p class="title">TMB (EHB):</p>
                <NCNumber :value="tmb" :precision="2" class="Kcal" />
            </div>
            <div class="div-info">
                <p class="title">Gasto energético:</p>
                <NCNumber :value="ge" :precision="0" class="Kcal" />
            </div>
        </div>
    </NCContainer>
</template>

<script>
import NCContainer from './NCContainer.vue';
import NCNumber from './NCNumber.vue';
import { mapState, mapWritableState } from 'pinia'
import { pacienteStore } from "@/stores/pacientes.js"

export default {
    components: {
        NCNumber,
        NCContainer,
    },
    computed: {
        ...mapState(pacienteStore, ['ge', 'imc', 'tmb']),
        ...mapWritableState(pacienteStore, ['altura', 'fatorAtividade', 'genero', 'idade', 'peso']),
    },
}
</script>

<style scoped>
.Kg::after {
    padding: 5px;
    content: "Kg/m²";
}

.Kcal::after {
    padding: 5px;
    content: "Kcal";
}

.result {
    display: flex;
    justify-content: space-around;
}

.div-info {
    margin: 20px;
}

.result {
  font-size: 18px;
  text-align: left;
  margin-top: 20px;
}

.title {
    font-weight: 1000;
    color: hsla(160, 100%, 37%, 1);
}
</style>
