<template>
    <div>
        <Navbar @changePage="changePage" :page="page"></Navbar>
        <LoginPage v-if="page === 'login'" @googleLogin="googleLogin" @login="login"></LoginPage>
        <RegistPage v-else-if="page === 'register'" @register="register"></RegistPage>
        <HomePage v-else-if="page === 'home'" 
        :tasks="tasks" 
        @addTask="addTask"
        @getEditTask="getEditTask"
        @deleteTask="deleteTask"
        :detailTask="detailTask"
        @editTask="editTask"
        @clearEdit="clearEdit"
        @move="move"
        ></HomePage>
        <NotFoundPage v-else></NotFoundPage>
    </div>
</template>

<script>
import axios from 'axios';
import HomePage from './pages/Home'
import Navbar from './components/Navbar'
import LoginPage from './pages/Login'
import RegistPage from './pages/Register'
import NotFoundPage from './pages/NotFound'
export default {
    data() {
        return {
            page: 'login',
            tasks: [],
            detailTask: {}
        };
    },
    name: 'App',
    components: {
        HomePage,
        Navbar,
        LoginPage,
        RegistPage,
        NotFoundPage

    },
    methods: {
        login(data) {
            const { email, password } = data
            axios({
                method: 'POST',
                url: 'https://kanban-vieer.herokuapp.com/login',
                data: { 
                    email,
                    password
                }
            })
            .then(({data}) => {
                localStorage.setItem('access_token', data.access_token);
                this.fetchData()
                this.changePage('home')
            })
            .catch(err => {
                console.log(err);
            })
        },
        googleLogin(data) {
            const id_token = data
            axios({
                method: 'POST',
                url: 'https://kanban-vieer.herokuapp.com/googlelogin',
                data: { 
                   id_token
                }
            })
            .then(({data}) => {
                localStorage.setItem('access_token', data.access_token);
                this.fetchData()
                this.changePage('home')
            })
            .catch(err => {
                console.log(err);
            })
        },
        register(data) {
            const { email, password, username, organization } = data
            axios({
                method: 'POST',
                url: 'https://kanban-vieer.herokuapp.com/register',
                data: {
                    email,
                    password,
                    username,
                    organization
                }
            })
            .then(() => {
                this.changePage('login')
            })
            .catch(err => {
                console.log(err);
            })
        },
        changePage(page) {
            this.page = page
        },
        fetchData() {
            axios({
                method: 'GET',
                url: 'https://kanban-vieer.herokuapp.com/tasks',
                headers: {
                    access_token: localStorage.access_token
                }
            })
            .then(({data}) => {
                this.tasks = data
            })
            .catch(err => {
                console.log(err);
            })
        },
        addTask(data) {
            const { title, category, priority } = data
            axios({
                method: 'POST',
                url: 'https://kanban-vieer.herokuapp.com/tasks',
                data: {
                    title,
                    category,
                    priority
                },
                headers: {
                    access_token: localStorage.access_token
                }
            })
            .then(() => {
                this.fetchData()
            })
            .catch(err => {
                console.log(err);
            })
        },
        getEditTask(id) {
            axios({
                method: 'GET',
                url: 'https://kanban-vieer.herokuapp.com/tasks/'+id,
                headers: {
                    access_token: localStorage.access_token
                }
            })
            .then(({data}) => {
                this.detailTask = data
            })
            .catch(err => {
                console.log(err);
            })
        },
        editTask(id) {
            axios({
                method: 'PUT',
                url: 'https://kanban-vieer.herokuapp.com/tasks/'+id,
                data: {
                    title: this.detailTask.title,
                    category: this.detailTask.category,
                    priority: this.detailTask.priority
                },
                headers: {
                    access_token: localStorage.access_token
                }
            })
            .then(() => {
                this.fetchData()
            })
            .catch(err => {
                console.log(err);
            })
        },
        deleteTask(id) {
            axios({
                method: 'DELETE',
                url: 'https://kanban-vieer.herokuapp.com/tasks/'+id,
                headers: {
                    access_token: localStorage.access_token
                }
            })
            .then(() => {
                this.fetchData()
            })
            .catch(err => {
                console.log(err);
            })
        },
        move(data) {
            const id = +data.id
            const category = data.category
            axios({
                method: 'PATCH',
                url: 'https://kanban-vieer.herokuapp.com/tasks/'+id,
                headers: {
                    access_token: localStorage.access_token
                },
                data: {
                    category
                }
            })
            .then(() => {
                this.fetchData()
            })
            .catch(err => {
                console.log(err);
            })
        },
        clearEdit() {
            this.detailTask = {}
        }
    },
    created() {
        if (localStorage.access_token) {
            this.changePage('home')
            this.fetchData()
        } else {
            this.changePage('login')
        }
    }
}
</script>

<style>

</style>