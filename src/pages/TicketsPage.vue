<template>
  <div v-if="isOpen" class="modal__wrapper">
    <div class="modal__content">
      <div class="form__control">
        <label for="id">Id</label>
        <input id="id" type="text">
      </div>
      <div class="form__control">
        <label for="title">Заголовок</label>
        <input id="title" type="text">
      </div>
      <div class="form__control">
        <label for="desc">Описание</label>
        <input id="desc" type="text">
      </div>
      <div class="btns__wrapper">
        <button class="controls__btn save_btn" @click="toggleOpen">Добавить</button>
        <button class="controls__btn close_btn" @click="toggleOpen">Закрыть</button>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="table__wrapper">
      <table class="table">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
        <tr v-for="ticket in tickets" :key="ticket.id">
          <td>{{ticket.id}}</td>
          <td>{{ticket.title}}</td>
          <td>{{ticket.body}}</td>
        </tr>
      </table>
    </div>
    <button @click="toggleOpen" class="add__ticket">
      +
    </button>
  </div>
</template>
<script>
import {useTickets} from "@/hooks/useTickets";
import {ref} from "vue";

export default {
  async setup() {
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    }


    const {tickets} = await useTickets();
    return {
      tickets,
      isOpen,
      toggleOpen,
    }
  }
}
</script>
<style scoped>
.table {
  border: 1px solid #284bc1;
  border-collapse: collapse;
  text-align: center;
  width: 100%;
}
td, th {
  padding: 10px 20px;
  border: 1px solid #284bc1;
}
.container {
  padding: 5vh 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.table__wrapper {
  padding: 10px;
  background-color: #fff;
  width: 80%;
  height: 85vh;
  overflow-y: scroll;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.add__ticket {
  cursor: pointer;
  position: absolute;
  right: 10px;
  bottom: 5vh;
  font-size: 50px;
  padding: 10px 55px;
  outline: none;
  background-color: #284bc1;
  color: #fff;
  border: 2px solid #284bc1;
  transition: .3s;
}
.add__ticket:hover {
  background-color: transparent;
  color: #284bc1;
}
.modal__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .6);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal__content {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  padding: 50px 80px;
}
.form__control {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
}
.controls__btn {
  outline: none;
  padding: 10px 15px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  background-color: #284bc1;
  color: #fff;
  border: none;
  min-width: 100px;
  cursor: pointer;
  transition: .2s;
}
.controls__btn:hover {
  transform: scale(.95);
}
.save_btn {
  background-color: green;
}
.close_btn {
  background-color: darkred;
}
.btns__wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>