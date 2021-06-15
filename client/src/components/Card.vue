<template>
    <!-- card -->
    <div :id="task.id" class="card mb-3">
        <div class="card-body">
            <p>{{task.title}}</p>
            <div>
                <div class="float-start byCreated fw-lighter">
                    <p>By: {{task.User.username}}</p>
                    <p>Priority: {{task.priority}}</p>
                </div>
                <div class="float-end">
                    <button type="button" @click="getEditTask(task.id)" data-bs-toggle="modal" data-bs-target="#EditModal" class="btn btn-success">
                    Edit
                    </button>
                    <button type="button" @click="deleteTask(task.id)"  class="btn btn-danger">
                    Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- end Card -->
</template>

<script>
export default {
    name: 'Card',
    props: ['task'],
    methods: {
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        getEditTask(id) {
            this.$emit('getEditTask', id)
        }
    }

}
</script>

<style scoped>
    .byCreated{
        font-size: 70%;
    }
    p{
        font-size: 140%
    }
</style>