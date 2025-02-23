<script setup lang="ts">
import RowWrapper from '@/components/RowWrapper.vue'
import TaskItem from '@/components/TaskItem.vue'
import { useBoardStore } from '@/store/index';

  const kanbanStore = useBoardStore();
  const { columns } = kanbanStore;

  function onDragStart(item:any) {
    kanbanStore.setDraggedItem(item);
  }

  function onDrop(columnId:any) {
    kanbanStore.moveItemToColumn(columnId);
  }
</script>

<template>
 <div class="body">
  <RowWrapper
  v-for="column in columns"
  :title="column.title"
  :key="column.id"
  :backgroundColor="column.color"
  @dragover.prevent
  @drop="onDrop(column.id)"
>
    <TaskItem 
    v-for="item in column.items"
    :desc="item?.desc"
    :key="item.id"
    draggable="true"
    @dragstart="onDragStart(item)"
    />

</RowWrapper>
 </div>
</template>

<style scoped>
.body{
  display:grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  height: 100vh;
}
</style>