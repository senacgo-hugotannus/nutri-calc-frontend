<template>
    <div>
        <label>{{ label }}<input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" /></label>
    </div>
</template>

<script>
export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: [String, Number],
            required: true,
        },
        label: null,
        type: null,
        step: null,
        class: null,
        placeholder: null
    },
}
</script>