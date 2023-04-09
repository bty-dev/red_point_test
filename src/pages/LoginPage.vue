<template>
  <div class="container">
    <form @submit.prevent="submit" class="form">
      <h1 class="title">Авторизация</h1>

      <div class="form__control">
        <label for="login">Логин</label>
        <input type="text" id="login"
               v-model="form.login.value"
               :class="{invalid: !form.login.valid && form.login.touched}"
               @blur="form.login.blur">
        <small v-if="form.login.errors.required && form.login.touched">Логин должен быть указан!</small>
      </div>
      <div class="form__control">
        <label for="password">Пароль</label>
        <div style="position: relative; width: 100%">
          <input v-if="!passwordVisible" type="password" id="password"
                 v-model="form.password.value"
                 :class="{invalid: !form.password.valid && form.password.touched}"
                 @blur="form.password.blur">
          <input v-else type="text" id="password"
                 v-model="form.password.value"
                 :class="{invalid: !form.password.valid && form.password.touched}"
                 @blur="form.password.blur">
          <img v-if="passwordVisible" @click="passwordVisible = !passwordVisible" class="password__icon" src="../assets/hide.png" alt="show">
          <img v-else @click="passwordVisible = !passwordVisible" class="password__icon" src="../assets/show.png" alt="hide">
        </div>

        <small v-if="form.password.errors.required && form.password.touched">Пароль должен быть указан!</small>
        <small v-else-if="form.password.errors.minLength && form.password.touched">Пароль должен быть больше 4-ех символов!</small>
      </div>
      <button type="submit" :disabled="!form.valid">Login</button>
    </form>
  </div>
</template>
<script>
import {useForm} from "@/hooks/useForm";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";

const required = val => !!val.trim();
const minLength = number => val => val.trim().length >= number;

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const passwordVisible = ref(false);

    const form = useForm({
      login: {
        value: "",
        validators: {
          required,
        }
      },
      password: {
        value: "",
        validators: {
          required,
          minLength : minLength(4),
        }
      },
    });


    function submit() {
      store.dispatch('setAuth', true);
      router.push("/");
    }

    return {
      form,
      submit,
      passwordVisible,
    }
  }
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
.title {
  margin-bottom: 30px;
}
.form__control {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
  border-color: #284bc1;
  color: #284bc1;
  background-color: transparent;
}
button:disabled:hover {
  border-color: white;
  color: white;
  background-color: #284bc1;
}
button:disabled {
  opacity: .5;
  cursor: default;
}
.invalid {
  border-color: red;
}
small {
  color: red;
}
.password__icon {
  cursor: pointer;
  position: absolute;
  width: 30px;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
</style>