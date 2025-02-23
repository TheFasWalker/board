<template>
    <div class="">
        <button class="add-task">
            <img src="../assets/img/plus.png" alt="">
            <span>Добавить </span>
        </button>
    </div>

</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.add-task{
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 4px;
    span{
        font-weight: 400;
        font-size: 14px;
        line-height: 129%;
        text-align: center;
        color: #3d86f4;
        text-align: left;
    }

}
</style>