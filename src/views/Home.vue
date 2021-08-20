<template>
  <div id="app">
    <h1>My List</h1>
    <div>
      <input type="text" v-model="todoName" @keyup.enter="addTodo">
      <button @click="addTodo()">Print</button>
    </div>
      <div class="list" v-for="todo of todos" :key="todo.id">
        <HelloWorld  :event="todo" @remove="handleRemove" />
      </div>
  </div>
  
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue"
import { auth } from '@/apis/auth'

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
  mounted() {
    this.getTodos()
  },
  methods: {
    async getTodos(){
      const res = await auth.getAll()
      this.todos = res.data;
    },
    async addTodo() {
      const res = await auth.create(this.todoName)
      this.todos = [...this.todos, res.data]
      this.todoName = ''
    },
    async handleRemove(id){
        await this.removeTodo(id)
        await this.getTodos()
    },
    async removeTodo(id) {
      try {
          await auth.delete(id)
      } catch (error) {
        console.log(error);
      }
    }
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