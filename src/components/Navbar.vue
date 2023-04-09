<template>
  <div class="navbar">
    <div class="navbar__title">Red point test</div>
    <div class="navbar__menu">
      <router-link class="menu__item" to="/">Главная</router-link>
      <router-link class="menu__item" to="/login">Логин</router-link>
      <router-link class="menu__item" to="/profile">Профиль</router-link>
      <router-link class="menu__item" to="/ticket">Тикеты</router-link>
    </div>
  </div>
</template>

<script>
export default {
  setup() {

  }
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 5vh;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #284bc1;
}
.navbar__title {
  color: #fff;
  font-size: 20px;
}
.navbar__menu {
  margin-left: auto;
}
.menu__item {
  outline: none;
  background: none;
  border: 2px solid transparent;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  margin-right: 20px;
  cursor: pointer;
  border-radius: 18px;
  padding: 8px 12px;
  transition: .2s;
  text-decoration: none;
}
.menu__item:hover {
  border-color: #fff;
}
.menu__item.active {
  border-color: #fff;
}
</style>