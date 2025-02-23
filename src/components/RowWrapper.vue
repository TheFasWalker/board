<template>
    <div class="row">
        <div class="row__header" :style="{ backgroundColor: backgroundColor }">
            <h2 class="row__title">{{ title }}</h2>
        </div>
        <div class="row__body">
            <slot></slot>
            <AddTaskButton/>
        </div>

    </div>
</template>
<script setup lang="ts">
import AddTaskButton from './AddTask.vue';

interface Props{
    title:string,
    backgroundColor:string
}
defineProps<Props>()
</script>
<style lang="scss" scoped>
.row{
    border: 1px solid #e3e5e8;
    background: #f7f7f7;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    max-height: 100vh;
    &__title{
        font-weight: 584;
        font-size: 14px;
        line-height: 125%;
        color: #1c2530;
    }
    &__header{
        height: 32px;
        width: 100%;
        padding: 7px 0; text-align: center;
    }
    &__body{
        padding: 8px 16px 0 8px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        overflow-y: auto;
        height: calc(100% - 40px);
    }
}

</style>