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
import axios from 'axios';
const baseURL = "http://localhost:3000/listFilms"

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
  async created() {
    try {
      const res = await axios.get(baseURL)
      this.todos = res.data;
    } catch(e) {
      console.error(e)
    }
  },
  methods: {
    addbutton() {
      let div = this.$el.querySelector("#save")
      div.style.display = "block"
    },
    removebutton(){
      this.$el.querySelector("#save").style.display = "none"
    },
    async deleteEvent() {
      await axios.delete(baseURL+"/"+ this.event.id);
      const res = await axios.get(baseURL)
      this.todos = res.data;
  },
  async editEvent() {
      this.removebutton()
      const res = await axios.patch(baseURL+"/"+ this.event.id, this.list)
      await axios.get(baseURL)
      this.todos = res.data;
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
