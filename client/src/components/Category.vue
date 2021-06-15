<template>
      <!-- listCard -->
    <div class="col-sm-12 col-md-3 col-lg-3 col-xl-3">
        <div class="bg-dark text-center pb-3 ps-2 pe-2 rounded">
            <div class="title mb-3 text-capitalized" style="font-size: 3vh; color: azure;">{{categor}}</div>
            <div class="content border-bottom border-warning" style="max-height: 70vh; overflow-y: scroll">
                <draggable v-model="groupedTasks" group="people" @add="move($event, categor)" @start="isDragging=false">
                    <transition-group>
                        <Card v-for="task in groupedTasks" 
                        class="item"
                        :key="task.id"
                        :task="task"
                        @getEditTask="getEditTask"
                        @deleteTask="deleteTask"
                        ></Card>
                    </transition-group>
                </draggable>
            </div>
            <!-- Button trigger modal -->
            <button type="button" class="btn mt-3 btn-primary" data-bs-toggle="modal" data-bs-target="#AddModal">
            Add Task
            </button>
        </div>
    </div>
    <!-- end listCard -->
</template>

<script>
import Card from './Card'
import draggable from 'vuedraggable'
export default {
    name: 'Category',
    components: {
        Card,
        draggable
    },
    data() {
        return {
            idTask: ''
        }
    },
    props: ['tasks', 'categor'],
    methods: {
        getEditTask(id){
            this.$emit('getEditTask', id)
        },
        deleteTask(id){
            this.$emit('deleteTask', id)
        },
        log(evt) {
            console.log(evt, 'change loggg');
            const idTask = evt.moved.element.id;
            this.$emit('move', idTask)
        },
        move(event, categor) {
            this.$emit('move', {category: categor, id: event.item.attributes.id.value})
            console.log(event.item.attributes.id.value);
            console.log(categor, '<<<=======< categor');
        }
    },
    computed: {
        groupedTasks: {
            get: function() {
                return this.tasks.filter(task => task.category === this.categor)
            },
            set: function() {
                // 
            }
        }
    }
}
</script>

<style>

</style>