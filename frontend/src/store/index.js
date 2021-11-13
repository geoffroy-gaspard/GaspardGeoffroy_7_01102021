import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:3000/'
});

const store = new Vuex.Store({
    state: {
    },
    actions: {
        createAccount: ({commit}, userInfos) => {
            commit;
            instance.post('/users', userInfos)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
})

export default store;