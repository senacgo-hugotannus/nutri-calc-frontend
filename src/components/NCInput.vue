<template>
    <div>
        <label>{{ label }}<input :value="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
             :step="step" :type="type" class="input-field"/>
        </label>
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: null,
        label: null,
        type: null,
        step: null,
        placeholder: null
    },
}
</script>

<style scoped>
.input-field {
    width: min-content;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}
</style>
