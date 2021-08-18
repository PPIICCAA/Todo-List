import Vue from 'vue'
import Vuex from 'vuex'
import { auth } from '@/apis/auth'
import api from "./api"
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
      addTodo(state, todos) {
       state.todos = todos
      }
  },
  actions: {
      async addTodo({ commit, getters }, todo) {
        console.log("action ok")
        if (!todo){
            console.log("no ok")
            return
        }
        const result = await api.addTodo(todo)

    

        if(result){

            const todos = {... getters.todos}

            todos.push(todo)

            commit("addTodo", todos)
        }
        else console.error("Could not add todo")
      }
  },
  getters: {
     todos: (state) => state.todos 
  }
})
export default store