new Vue({
    el: '#vue-app',
    data: {
        firstName: "Anand",
        lastName: "Kumar"
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.firstName + ' ' + this.lastName;
        }
    }
})