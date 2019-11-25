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
            var Admin = '';
            var newUsername = this.username;
            var newName = this.name;
            var newEmail = this.email;
            if (localStorage.getItem('Admin')) { // 'users' is an array of objects
                Admin = JSON.parse(localStorage.getItem('Admin'));
            }
            if (Admin) {
                if (Admin.some(function (Admin) {
                    return Admin.email === newEmail
                })) {
                    alert('Email or username already exists!');
                    return;
                }
                Admin.push({'username':newUsername, 'name':newName,'email': newEmail, 'password': this.password});
                localStorage.setItem('Admin', JSON.stringify(Admin));
                window.location.replace ("Subject.html");
                alert("welcome to AFTER SCHOOL EXTRAS")
                return false;
            }
            else {
                Admin = [{'username':newUsername, 'name':newName,'email': newEmail, 'password': this.password}];
                localStorage.setItem('Admin', JSON.stringify(Admin));
            }
        }
    }
});