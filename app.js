new Vue({
    el: '#vue-app',
    data: {
        firstName: "Anand",
        lastName: "Kumar",
        website: "https://www.google.com",
        websiteTag: '<a href="https://www.google.com" >Google using V-HTML</a>'
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.firstName + ' ' + this.lastName;
        }
    }
})