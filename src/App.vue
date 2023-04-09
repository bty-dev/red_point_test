<template>
  <Navbar/>
  <router-view v-slot="{ Component }">
    <suspense>
      <div>
        <component :is="Component" />
      </div>
    </suspense>
  </router-view>
</template>
<script>
import LoginPage from "@/pages/LoginPage";
import TicketsPage from "@/pages/TicketsPage";
import ProfilePage from "@/pages/ProfilePage";
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
    LoginPage,
    TicketsPage,
    ProfilePage,
  },
  setup() {

  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body {
  background-color: #e0e4e7;
}
label {
  font-size: 20px;
  margin-bottom: 5px;
}
input {
  outline: none;
  border: 1px solid #284bc1;
  padding: 10px 15px;
  margin-bottom: 2px;
  width: 100%;
}
</style>
