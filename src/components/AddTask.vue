<template>
    <div>
      <button class="add-task" @click="openAddTaskForm" v-if="!isFormVisible">
        <img src="../assets/img/plus.png" alt="" />
        <span>Добавить</span>
      </button>
  
      <div class="add-task__form" v-else>
        <textarea
          v-model="taskDescription"
          placeholder="Введите текст..."

        ></textarea>
        <div class="add-task__actions">
            <button @click="closeAddTaskForm"><img src="../assets/img/cansel.png" alt=""></button>
          <button @click="addTask"><img src="../assets/img/check.png" alt=""></button>
          
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useBoardStore } from '../store/'; 
  const boardStore = useBoardStore();
  
  const isFormVisible = ref(false); 
  const taskDescription = ref(''); 
  

  function openAddTaskForm() {
    isFormVisible.value = true;
  }
  

  function closeAddTaskForm() {
    isFormVisible.value = false;
    taskDescription.value = ''; 
  }
  

  function addTask() {
    if (taskDescription.value.trim()) {
      const newTask = {
        id: Date.now(), 
        desc: taskDescription.value.trim(),
      };
  
      
      boardStore.columns[1].items.push(newTask);
      boardStore.sucsessToast='Задача создана в «Новые»'
      boardStore.editingElem = newTask

      closeAddTaskForm();
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .add-task {
    display: grid;
    grid-template-columns: 20px 1fr;
    gap: 4px;
    align-items: center;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
  
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 129%;
      text-align: left;
      color: #3d86f4;
    }
    &__form {
        display: flex;
        flex-direction: column;
        gap: 8px;
        textarea {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-family: inherit;
        font-size: 14px;
        height: fit-content;
        min-height: 52px;
        resize: vertical;
        }
        position: relative;
    }
    &__actions{
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 4px;
        right: 4px;
        button{
            height: 20px;
            width: 20px;
        }
    }
  

  }
  </style>