<template>
  <div class="container">
    <form @submit.prevent class="form">
      <div class="img">Photo</div>
      <div class="form__control">
        <label for="name">Имя</label>
        <input id="name" type="text">
      </div>
      <div class="form__control">
        <label for="surname">Фамилия</label>
        <input id="surname" type="text">
      </div>
      <div class="form__control">
        <label for="birthday">Дата рождения</label>
        <input id="birthday" type="date">
      </div>
      <div class="form__control">
        <label for="town">Город</label>
        <select class="town__select" id="town" type="text">
          <option value="Orenburg" selected>Оренбург</option>
          <option value="Moscow">Москва</option>
          <option value="Saint-Petersburg">Санкт-Петербург</option>
          <option value="Omsk">Омск</option>
          <option value="Magnitogorsk">Магнитогорск</option>
        </select>
      </div>
      <button>Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #ffffff;
  width: 30%;
  padding: 80px 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 20px;
}
.img {
  align-self: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: darkgray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  user-select: none;
}
button {
  background-color: #284bc1;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  border: 2px solid white;
  padding: 10px 15px;
  cursor: pointer;
  width: 100%;
  transition: .2s;
}
button:hover {
  background-color: transparent;
  border-color: #284bc1;
  color: #284bc1;
}
.town__select {
  cursor: pointer;
  width: 100%;
  outline: none;
  background: transparent;
  border: 1px solid #284bc1;
  padding: 10px 15px;
}
.form__control {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
}
</style>