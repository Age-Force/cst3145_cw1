const app = new Vue({
    el: '#app',
    data: {
        head: 'Activities Log',
        task: [],
        newTask1: '',
        newTask2: '',
        newTask3: ''
    },
    methods: {
        addTask: function() {
            this.task.push({
                title: this.newTask1,
                location: this.newTask2,
                price: this.newTask3,

                state: false
            });
            this.newTask = '';
            localStorage.setItem('admin-vue', JSON.stringify(this.task));
        },
        editTask: function(index){
            this.task[index].state = true;
            localStorage.setItem('admin-vue', JSON.stringify(this.task));
        },
        deleteTask: function(index){
            this.task.splice(index, 1);
            localStorage.setItem('admin-vue', JSON.stringify(this.task));
        }
    },
    created: function(){
        let dataDB = JSON.parse(localStorage.getItem('admin-vue'))
        if(dataDB === null){
            this.task = [];
        } else {
            this.task = dataDB;
        }
    }
});