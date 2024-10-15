<template>
    <div>
        <label>{{ label }}<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :step="step" :type="type"/></label>
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
        class: null,
        placeholder: null
    },
}
</script>