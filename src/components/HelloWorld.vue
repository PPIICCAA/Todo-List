<template>
  <div class="list">
        <div @click="addbutton()">
          <input @blur="removebutton()" @keyup.enter="editEvent()" class="new" v-model="list.title" >
        </div>
        <button id="save" @click="editEvent()">Save</button>
        <button @click="deleteEvent()">Delete</button>
      </div>
</template>

<script>
import { auth } from '@/apis/auth'


export default {
  name: 'HelloWorld',
  props: ["event"],
  data() {
    return {
      list: {
        title: this.event.title
      },
    }
  },
  methods: {
    addbutton() {
      let div = this.$el.querySelector("#save")
      div.style.display = "block"
    },
    removebutton(){
      let input = this.$el.querySelector("#save")
      setTimeout(function(){input.style.display = "none"},100);
      

    },
    async deleteEvent() {
      await auth.delete(this.event.id)
      // const res = await axios.get(baseURL)
      // this.todos = res.data;
      window.location.href = "/"
  },
  async editEvent() {
      this.removebutton() 
      const res = await auth.edit(this.event.id, this.list)
      // await axios.get(baseURL)
      // this.todos = res.data;
  },
  
    
  }
  
}
</script>
<style>
#save {
  display: none;
}
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
