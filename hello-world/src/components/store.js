import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

Vue.use(vuex, axios);

export default new vuex.Store({
    state: {
        list: [],
        loading: false,
        error: ''
    },
    actions: {
        loadList({ commit }) {
            commit('SET_LIST_LOADING', true)
            axios
                .get("https://picsum.photos/v2/list")
                .then(res => {
                    commit('SET_LIST', res.data)
                    commit('SET_LIST_LOADING', false)
                })
                .catch(err => {
                    commit('SET_LIST_LOADING', err)
                });
        }
    },
    mutations: {
        SET_LIST_LOADING(state, payload) {
            state.loading = payload
        },
        SET_LIST(state, payload) {
            state.list = payload
        },
        SET_LIST_ERROR(state, payload) {
            state.error = payload
        }
    }
})