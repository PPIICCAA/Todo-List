<template>
  <div id="app">
    <h1>My List</h1>
    <div>
      <input type="text" v-model="todoName" @keyup.enter="addTodo">
      <button @click="addTodo()">Print</button>
    </div>
      <div class="list" v-for="todo of todos" :key="todo.id">
        <HelloWorld  :event="todo" />
      </div>
  </div>
  
</template>

<script>
import axios from 'axios';
import HelloWorld from "@/components/HelloWorld.vue"
const baseURL = "http://localhost:3000/listFilms"

export default {
  name: 'app',
  components: {
        HelloWorld
      },
  data() {
    return {
      todos: [],
      todoName: '',
      
    }
  },
  async created() {
    try {
      const res = await axios.get(baseURL)
      this.todos = res.data;
    } catch(e) {
      console.error(e)
    }
  },
  methods: {
    async addTodo() {
      const res = await axios.post(baseURL, { title: this.todoName })
      this.todos = [...this.todos, res.data]
      this.todoName = ''
    },
  }
  
}
</script>
<style>
.new {
  padding: 0;
  border: none;
}
.list {
  display: flex;
}
.save {
  border: 0 1 1;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
//