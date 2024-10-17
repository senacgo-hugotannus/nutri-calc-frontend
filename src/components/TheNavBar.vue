<template>
    <div class="wrapper">
        <MainPage title="Nutri Calc" />
        <nav>
            <NCContainer>
                <div>
                    <slot></slot>
                </div>
            </NCContainer>
        </nav>
    </div>
</template>

<script>
import NCContainer from './NCContainer.vue';
import TheMainPage from './TheMainPage.vue';

export default {
    components: {
        NCContainer,
        MainPage: TheMainPage,
    },
}
</script>

<style scoped>
.wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
}
</style>