<template>
    <div class="panel">
        <slot>

        </slot>
    </div>
</template>
<style scoped>
   .panel {
  max-width: 400px;
  margin: auto;
  padding: 40px;

  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
  font-family: Arial, sans-serif;
}
</style>