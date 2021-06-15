<template>
  <div id="home">
      <!-- home -->
        <div class="container" style="margin-top: 9vh;">
            <div class="row">
                <Category v-for="(categor, i) in categories" 
                :key="i"
                :tasks="tasks"
                :categor="categor"
                @getEditTask="getEditTask"
                @deleteTask="deleteTask"
                @move="move"
                ></Category>
            </div>
        </div>
        <!-- Modal -->
        <AddModal @addTask="addTask"></AddModal>
        <EditModal :detailTask="detailTask" @editTask="editTask" @clearEdit="clearEdit"></EditModal>
        <!-- end Modal -->
        <!-- End home -->
  </div>
</template>

<script>
import Category from '../components/Category'
import AddModal from '../components/AddModal'
import EditModal from '../components/EditModal'
export default {
    name: 'HomePage',
    data() {
        return {
        categories: ['Backlog', 'Todo', 'Doing', 'Done']
        }
    },
    components: {
        Category,
        AddModal,
        EditModal
    },
    props: ['tasks', 'detailTask'],
    methods: {
        addTask(data) {
            this.$emit('addTask', data)
        },
        getEditTask(id) {
            this.$emit('getEditTask', id)
        },
        editTask(id) {
            this.$emit('editTask', id)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        clearEdit() {
            this.$emit('clearEdit')
        },
        move(data) {
            this.$emit('move', data)
        }
    }
}
</script>

<style>

</style>