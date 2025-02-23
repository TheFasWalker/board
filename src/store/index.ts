import { defineStore } from "pinia";

export const useBoardStore = defineStore('board',{
    state: () => ({
        columns: [
          {
            id: 1,
            title: 'На согласовании',
            color:'#FF99E9',
            items: [
              { id: 1, desc: 'Задача 1' },
              { id: 2, desc: 'Доработка меню' },
              { id: 3, desc: 'Описать правила поведения интерфейса' },
              { id: 4, desc: 'Создание задачи с  очень длинным текстом описания в несколько строк, заполняющую примерно половину всей высоты столбца' },
              { id: 5, desc: 'Создание задачи с  очень длинным текстом описания в несколько строк, заполняющую примерно половину всей высоты столбца' },
            ],
          },
          {
            id: 2,
            title: 'Новые',
            color:'#66B8FF',
            items: [
              { id: 6, desc: 'Создание тестового задания' },
            ],
          },
          {
            id: 3,
            title: 'В процессе',
            color:'#FFD466',
            items: [],
          },
          {
            id: 4,
            title: 'Готово',
            color:'#53C666',
            items: [],
          },
          {
            id: 5,
            title: 'Доработать',
            color:'#F76E85',
            items: [],
          },
        ],
        draggedItem: null, 
        deletePopupState:false,
        deletingElem : null
      }),
      actions: {
       openDeletePopup(id:string|number,rowId:string|number){
        const item = this.findItemById(id, rowId);
        if (item) {
          this.deletePopupState = true;
          this.deletingElem = item;
        }
        },
        deleteItem() {
          if (this.deletingElem) {
            
            const column = this.columns.find((col) =>
              col.items.some((item) => item.id === this.deletingElem.id)
            );
            if (column) {
              
              column.items = column.items.filter((item) => item.id !== this.deletingElem.id);
            }
            this.closeDeletePopup(); 
          }
        },

        findItemById(id: string | number, rowId: string | number) {
          const column = this.columns.find((col) => col.id === rowId);
          if (column) {
            return column.items.find((item) => item.id === id);
          }
          return null;
        },
        closeDeletePopup(){
          this.deletePopupState = false
          this.deletingElem=''
        },

        setDraggedItem(item) {
          this.draggedItem = item;
        },
       
        moveItemToColumn(columnId) {
          if (!this.draggedItem) return;
    
          
          this.columns.forEach((column) => {
            column.items = column.items.filter((item) => item.id !== this.draggedItem.id);
          });
    
         
          const targetColumn = this.columns.find((col) => col.id === columnId);
          if (targetColumn && !targetColumn.items.includes(this.draggedItem)) {
            targetColumn.items.push(this.draggedItem);
          }
    
         
          this.draggedItem = null;
        },
      },
    });