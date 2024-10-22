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
    <p>Peso: {{ ultimoRegistro.peso }}</p>
    <p>Fator de Atividade: {{ ultimoRegistro.fatorAtividade }}</p>
    <p>Data: {{ ultimoRegistro.date }}</p>
</template>

<script>
import NCContainer from './NCContainer.vue';
import NCNumber from './NCNumber.vue';
import { mapState, mapWritableState } from 'pinia';
import { pacienteStore } from "@/stores/pacientes.js";

export default {
    name: 'NCInfo',
    props: {
        peso: Number,
        fatorAtividade: Number,
    },
    components: {
        NCNumber,
        NCContainer,
    },  
    computed: {
        ...mapState(pacienteStore, ['ultimoRegistro']),
        ...mapWritableState(pacienteStore, ['altura', 'genero', 'idade',]),
        ge() {
            return this.tmb * this.ultimoRegistro.fatorAtividade;
        },
        imc() {
            return this.ultimoRegistro.peso / this.altura ** 2;
        },
        tmb() {
            return this.genero === 'Feminino' ? this.tmbFeminino : this.tmbMasculino;
        },
        tmbFeminino() {
            return 655 + 9.56 * this.ultimoRegistro.peso + 1.85 * this.altura - 4.68 * this.idade;
        },
        tmbMasculino() {
            return 66.5 + 13.8 * this.ultimoRegistro.peso + 5 * this.altura - 6.8 * this.idade;
        },
    },
};
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
