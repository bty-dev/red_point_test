import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            isAuth: false,
        }
    },
    getters: {
        getIsAuth(state) {
            return state.isAuth;
        }
    },
    mutations: {
        setAuth(state, payload) {
            state.isAuth = payload;
        }
    },
    actions: {
        setAuth(context, payload) {
            context.commit("setAuth", payload);
        }
    }
})

export default store;