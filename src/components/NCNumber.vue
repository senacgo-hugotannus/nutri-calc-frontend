<template>
    <span>{{ formatNumber }}</span>
</template>

<script>
export default {
    props: {
        value: Number,
        precision: Number,
    },
    computed: {
        formatNumber() {
            return this.value.toLocaleString("pt-BR", {
                minimumFractionDigits: this.precision,
                maximumFractionDigits: this.precision,
            })
        }
    }
}  
</script>