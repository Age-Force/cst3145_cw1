const app = new Vue({
    el: '#app',
    data: {
        title: 'Activities Log',
        task: [],
        newTask: ''
    },
    methods: {
        addTask: function() {
            this.task.push({
                name: this.newTask,
                state: false
            });
            this.newTask = '';
            localStorage.setItem('gym-vue', JSON.stringify(this.task));
        },
        editTask: function(index){
            this.task[index].state = true;
            localStorage.setItem('gym-vue', JSON.stringify(this.task));
        },
        deleteTask: function(index){
            this.task.splice(index, 1);
            localStorage.setItem('gym-vue', JSON.stringify(this.task));
        }
    },
    created: function(){
        let dataDB = JSON.parse(localStorage.getItem('gym-vue'))
        if(dataDB === null){
            this.task = [];
        } else {
            this.task = dataDB;
        }
    }
});