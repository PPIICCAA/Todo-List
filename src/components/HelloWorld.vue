<template>
  <div class="list">
        <div v-if="!editMode"  @click="setEditMode">{{ list.title }}</div>
        <div v-else>
          <input @blur="editEvent()" @keyup.enter="editEvent()" class="new" v-model="list.title" >
        </div>
        <button id="#save" v-if="editMode" @click="editEvent()">Save</button>
        <button @click="deleteEvent()">Delete</button>
      </div>
</template>

<script>
import { auth } from '@/apis/auth'


export default {
  name: 'HelloWorld',
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      list: {
        title: null
      },
      editMode: false
    }
  },

  created(){
     this.list.title = this.event.title
  },

  methods: {
    setEditMode(){
      this.editMode = true
    },
    addbutton() {
      let div = this.$el.querySelector("#save")
      div.style.display = "block"
    },
    removebutton(){
      this.editMode = false
    },
    deleteEvent() {    
      this.$emit('remove', this.event.id )
  },
  async editEvent() {
      this.removebutton() 
      await auth.edit(this.event.id, this.list)
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
