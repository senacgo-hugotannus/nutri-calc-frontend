<template>
    <div>
        <div>
            <label>{{ imcLabel }}<span> {{ imcValue }}</span></label>
        </div>
        <div>
            <label>{{ tmbLabel }}<span> {{ tmbValue }}</span></label>
        </div>
        <div>
            <label>{{ geLabel }}<span> {{ geValue }}</span></label>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tmbLabel: Text,
        geLabel: Text,
        imcLabel: Text,
        tmbValue: Number,
        geValue: Number,
        imcValue: Number,
    }
}
</script>