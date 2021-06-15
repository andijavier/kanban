<template>
  <div>
      <div class="modal fade" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="EditModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">EDIT TASK</h5>
            </div>
            <div class="modal-body">
               <form>
                <div>
                    <div class="form-floating mb-3">
                        <input type="text" v-model="detailTask.title" class="form-control" placeholder="ngapain kek">
                        <label>Title</label>
                    </div>
                    <select v-model="detailTask.category"  class="custom-select">
                        <option selected disabled>Category</option>
                        <option value="Backlog">Backlog</option>
                        <option value="Todo">Todo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                    <select v-model="detailTask.priority" class="custom-select">
                        <option selected disabled>Priority</option>
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
            </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="clearEdit" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="editTask(detailTask.id); clearEdit();" data-bs-dismiss="modal">Save changes</button>
            </div>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'EditModal',
    props: ['detailTask'],
    methods: {
        editTask(id) {
            this.$emit('editTask', id)
        },
        clearEdit(){
            this.$emit('clearEdit')
        }
    }
}
</script>

<style>

</style>