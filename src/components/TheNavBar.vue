<template>
    <nav>
        <NCContainer>
            <div>
                <slot></slot>
            </div>
        </NCContainer>
    </nav>
</template>

<script>
import NCContainer from './NCContainer.vue';

export default {
    components: {
        NCContainer,
    },
}
</script>