import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
	hostAPI: 'https://qjz.jiqiao.tech/api/',
	// indexShowLinks: false
};
new Vuex.Store({
    state: () => ({
      counter: 0,
      hostAPI: 'https://qjz.jiqiao.tech/api/JQCommonAccount',
    }),
    mutations: {
      increment(state) {
        state.counter++
      }
    },
    modules: {
      todos: {
        namespaced: true,
        state: () => ({
          list: []
        }),
        mutations: {
          add(state, { text }) {
            state.list.push({
              text,
              done: false
            })
          },
          remove(state, { todo }) {
            state.list.splice(state.list.indexOf(todo), 1)
          },
          toggle(state, { todo }) {
            todo.done = !todo.done
          }
        }
      }
    }
  })