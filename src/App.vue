<script setup lang="ts">
import RowWrapper from '@/components/RowWrapper.vue'
</script>

<template>
 <div class="body">
  <RowWrapper
  title="На согласовании"
  backgroundColor="#FF99E9"/>
  <!-- <RowWrapper
  title="Новые"/>
  <RowWrapper
  title="В процессе"/>
  <RowWrapper
  title="Готово"/>
  <RowWrapper
  title="Доработать"/> -->

 </div>
</template>

<style scoped>
.body{
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
</style>
