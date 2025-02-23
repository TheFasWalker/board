<template>
    <div class="task">
        <div class="task__desc">
            {{ desc }}
        </div>
        <div class="task__menu">
            <button class="task__btn" @click="toggleMenu"> <!-- Переименовываем метод -->
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53977 10.4602 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53977 9.16667 10C9.16667 10.4602 9.53976 10.8333 10 10.8333Z"
                        stroke="#86949E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M15.8333 10.8333C16.2936 10.8333 16.6667 10.4602 16.6667 10C16.6667 9.53977 16.2936 9.16667 15.8333 9.16667C15.3731 9.16667 15 9.53977 15 10C15 10.4602 15.3731 10.8333 15.8333 10.8333Z"
                        stroke="#86949E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M4.16667 10.8333C4.6269 10.8333 5 10.4602 5 10C5 9.53977 4.6269 9.16667 4.16667 9.16667C3.70643 9.16667 3.33333 9.53977 3.33333 10C3.33333 10.4602 3.70643 10.8333 4.16667 10.8333Z"
                        stroke="#86949E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>

            <div class="task__list" v-if="menu" @click.outside="closeMenu" ref="taskListRef"> <!-- Переносим @click.outside -->
                <button><img src="../assets/img/edit.png"> <span>Редактировать</span></button>
                <button @click="openDeletePopup(id, rowId)"><img src="../assets/img/trash.png">
                    <span>Удалить</span></button>
            </div>

        </div>


    </div>
</template>
<script setup lang="ts">
import { useBoardStore } from '@/store';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core' // Import the composable!

const kanbanStore = useBoardStore();
const { openDeletePopup } = kanbanStore;

const menu = ref(false)
interface Props {
    desc: string,
    rowId: string | number,
    id: string | number
}
defineProps<Props>()

const taskListRef = ref(null)

onClickOutside(taskListRef, () => {
  menu.value = false
})


const toggleMenu = () => {
  menu.value = !menu.value;
};

const closeMenu = () => {
    menu.value = false;
};
</script>



<style lang="scss" scoped>
    .task{
        border: 1px solid #c4cad4;
        border-radius: 4px;
        padding: 4px 8px 8px 8px;
        display: grid;
        grid-template-columns: 1fr 20px;
        &__desc{
            padding-top: 4px;
        }
        &__menu{
            position: relative;
        }
        &__btn{
            height: 20px;
            width: 20px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        &__list{
            background-color: #FFFFFF;
            display: block;
            top: 20px;
            right: 0;
            position: absolute;
            padding: 8px 0;
            width: 144px;
            z-index: 10;
            button{
                padding: 5px 10px;
                display: grid;
                grid-template-columns: 20px 1fr;
                gap:8px;
                width: 100%;
                font-weight: 400;
                font-size: 14px;
                line-height: 129%;
                color: #1c2530;
                text-align: left;
                &:hover{
                    background-color: #e1f1ff;
                }
            }
        }
    }
</style>
