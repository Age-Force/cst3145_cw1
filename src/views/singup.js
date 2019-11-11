import Vue from 'vue'

Vue.use(signupApp)

var signupApp = new Vue({
    el: '#signup',
    data: {
        username: '',
        email: '',
        password: '',
    },
    
    methods: {
        onSubmit: function () {
            // this is to check if the email already exists
            var users = '';
            var newUsername = this.username;
            var newName = this.name;
            var newEmail = this.email;
            if (localStorage.getItem('users')) { // 'users' is an array of objects
                users = JSON.parse(localStorage.getItem('users'));
            }
            if (users) {
                if (users.some(function (user) {
                    return user.email === newEmail
                })) {
                    alert('Email or username already exists!');
                    return;
                }
                users.push({'username':newUsername, 'name':newName,'email': newEmail, 'password': this.password});
                localStorage.setItem('users', JSON.stringify(users));
                window.location.replace ("Subject.html");
                alert("welcome to AFTER SCHOOL EXTRAS ")
                return false;

            }
            else {
                users = [{'username':newUsername, 'name':newName,'email': newEmail, 'password': this.password}];
                localStorage.setItem('users', JSON.stringify(users));
            }
        }
    }
})