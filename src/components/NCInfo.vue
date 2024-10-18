<template>
    <NCContainer>
        <div class="result">
            <div>
                <p>IMC:</p>
                <NCNumber :value="imc" :precision="1" class="Kg" />
            </div>
            <div>
                <p>TMB (EHB):</p>
                <NCNumber :value="tmb" :precision="2" class="Kcal" />
            </div>
            <div>
                <p>Gasto energético:</p>
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
</style>
