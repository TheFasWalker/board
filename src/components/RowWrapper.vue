<template>
    <div class="row">
        <div class="header" :style="{ backgroundColor: backgroundColor }">
            <h2 class="row__title">{{ title }}</h2>
        </div>
        <slot>

        </slot>
    </div>
</template>
<script setup lang="ts">
interface Props{
    title:string,
    backgroundColor:string
}
defineProps<Props>()
</script>
<style lang="scss" scoped>
.row{
    padding: 8px 16px 8px 8px;
    background: #f7f7f7;
    border-radius: 8px 8px 0 0;
    &__title{
        font-weight: 584;
        font-size: 14px;
        line-height: 125%;
        color: #1c2530;
    }
}

</style>