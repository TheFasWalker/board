<template>
    <div class="toast">
        <img src="../../assets/img/sucsess.png" alt="">
        <div class="toast__content">
            <button @click="deleteToast()">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1L1 9M1 1L9 9" stroke="#86949E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <h3>{{ kanbanStore.sucsessToast }}</h3>
            <div class="toast__desc">{{ kanbanStore.deletingElem.desc }}</div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { useBoardStore } from '@/store';
import { onMounted } from 'vue';
const kanbanStore = useBoardStore();
const {deleteToast} = kanbanStore
onMounted(()=>{
    setTimeout(()=>{
        deleteToast()
    },3000)
})




</script>
<style lang="scss" scoped>
    .toast{
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 99;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.06), 0 8px 8px 0 rgba(0, 0, 0, 0.08);
        background: #fff;
        border: 1px solid #e3e5e8;
        border-radius: 4px;
        border-left: 8px solid #22c33d;
        padding: 16px;
        display: grid;
        grid-template-columns: 65px 1fr;
        width: 400px;
        h3{
            font-weight: 584;
            font-size: 14px;
            line-height: 125%;
            color: #1c2530;
        }
        &__desc{
            font-weight: 400;
            font-size: 14px;
            line-height: 129%;
            color: #1c2530;
        }
        &__content{
            display: flex;
            flex-direction: column;
            gap: 8px;
            position: relative;
            button{
                position: absolute;
                top: -8px;
                right: -8px;
                height: 16px;
                width: 16px;
            }
        }
    }
</style>