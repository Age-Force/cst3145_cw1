
new Vue({
    el: '#parentReg',
    data: {
        username: '',
        name:'',
        email: '',
        password: '',
    },
    methods: {
        onSubmit: function () {
            // this is to check if the email already exists
            var parent = '';
            var newUsername = this.username;
            var newName = this.name;
            var newEmail = this.email;
            if (localStorage.getItem('parent')) { // 'users' is an array of objects
                parent = JSON.parse(localStorage.getItem('parent'));
            }
            if (parent) {
                if (parent.some(function (parent) {
                    return parent.email === newEmail
                })) {
                    alert('Email or username already exists!');
                    return;
                }
                parent.push({'username':newUsername, 'name':newName,'email': newEmail, 'password': this.password});
                localStorage.setItem('parent', JSON.stringify(parent));
                window.location.replace ("search.html");
                alert("welcome to AFTER SCHOOL EXTRAS ")
                return false;
            }
            else {
                parent = [{'username':newUsername, 'name':newName,'email': newEmail, 'password': this.password}];
                localStorage.setItem('parent', JSON.stringify(parent));
            }
        }
    }
});
