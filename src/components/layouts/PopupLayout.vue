<template>
    <div 
    class="popup"
    @click="missCkick"
    ref="popupContainer"
    >
        <div class="popup__wrapper">
            <button class="popup__close" @click="closeDeletePopup()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="#86949E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            <div class="popup__content">
            <h2>Удалить задачу ?</h2>
            <div class="">
                {{ kanbanStore.deletingElem.desc }}
            </div>
                <div class="popup__buttons">
                    <button @click="deleteItem">Удалить</button>
                    <button @click="closeDeletePopup()">Отменить</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import { useBoardStore } from '@/store';
    import { onMounted, onUnmounted, ref } from 'vue'
    const kanbanStore = useBoardStore();
    const { closeDeletePopup ,deleteItem} = kanbanStore;

    const popupContainer = ref<HTMLElement | null>(null)
    const emit = defineEmits(['close-popup'])
    const missCkick =()=>{
        if(event?.target == popupContainer.value){
            closeDeletePopup()

        }
    }
    const handleEsc = (event:KeyboardEvent)=>{
        if(event.key == 'Escape'){
            closeDeletePopup()
        }
    }
    onMounted(()=>{
        document.addEventListener('keydown',handleEsc)
    })
    onUnmounted(()=>{
        document.removeEventListener('keydown', handleEsc)
    })
</script>
<style lang="scss" scoped>
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
    h2{
        font-weight: 584;
        font-size: 24px;
        line-height: 125%;
        color: #1c2530;
    }
    &__wrapper{
        position: relative;
        border-radius: 8px;
        box-shadow: 0 32px 48px 0 rgba(0, 0, 0, 0.16), 0 16px 32px 0 rgba(0, 0, 0, 0.1);
        background: #fff;
        padding: 24px 40px 40px 40px;
        width: 500px;
        overflow: hidden;
    }
    &__content{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    &__close{
        position: absolute;
        top: 16px;
        right: 16px;
    }
    &__buttons{
        display: grid;
        grid-template-columns: 1fr 1fr ;
        gap: 16px;
        button{
            border: 1px solid #c4cad4;
            border-radius: 4px;
            padding: 8px 16px;
            font-weight: 400;
            font-size: 14px;
            line-height: 129%;
            color: #1c2530;
        }
    }
}
</style>