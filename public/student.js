new Vue({
    el: '#studentReg',
    data: {
        username: '',
        email: '',
        password: '',
    },
    methods: {
        onSubmit: function () {
            // this is to check if the email already exists
            var Student = '';
            var newUsername = this.username;
            var newName = this.name;
            var newEmail = this.email;
            if (localStorage.getItem('Student')) { // 'Student' is an array of objects
                Student = JSON.parse(localStorage.getItem('Student'));
            }
            if (Student) {
                if (Student.some(function (Student) {
                    return Student.email === newEmail
                })) {
                    alert('Email or username already exists!');
                    return;
                }
                Student.push({'username':newUsername, 'name':newName,'email': newEmail, 'password': this.password});
                localStorage.setItem('Student', JSON.stringify(Student));
                window.location.replace ("search.html");
                alert("welcome to AFTER SCHOOL EXTRAS ")
                return false;
            }
            else {
                Student = [{'username':newUsername, 'name':newName,'email': newEmail, 'password': this.password}];
                localStorage.setItem('Student', JSON.stringify(Student));
            }
        }
    }
});