<template>
    <NCContainer>
        <div class="navbar-inner">
            <MainPage title="Nutri Calc" />
            <nav>
                <slot></slot>
            </nav>
        </div>
    </NCContainer>
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

<style>
    navbar-inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0 auto;
    }
</style>