<template>
  <div>
      <div class="modal fade" id="AddModal" tabindex="-1" role="dialog" aria-labelledby="AddModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">ADD TASK</h5>
            </div>
            <div class="modal-body">
               <form>
                <div>
                    <div class="form-floating mb-3">
                        <input type="text" v-model="title" class="form-control" placeholder="ngapain kek">
                        <label>Title</label>
                    </div>
                    <label class="my-1 mr-2">Category</label>
                    <select v-model="category"  class="custom-select">
                        <option selected disabled>Category</option>
                        <option value="Backlog">Backlog</option>
                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                    <label class="my-1 mr-2">Priority</label>
                    <select v-model="priority" class="custom-select">
                        <option selected disabled>Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
            </form>
            </div>
            <div class="modal-footer">
                <button type="button" @click="clearAdd" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" @click="addTask(); clearAdd();" data-bs-dismiss="modal" class="btn btn-primary">Save</button>
            </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'AddModal',
    data() {
        return {
            title: '',
            priority: 'Priority',
            category: 'Category'
        }
    },
    methods: {
        addTask() {
            const { title, category, priority } = this
            this.$emit('addTask', { title, category, priority })
        },
        clearAdd() {
            this.title = '',
            this.priority = 'Priority',
            this.category = 'Category'
        }
    }
}
</script>

<style>

</style>