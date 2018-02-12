Vue.component('greeting', {
    template: '<p>My name is {{name}} . <button @click="changeName">Change Name</button></p>',
    data: function() {
        return {
            name: 'Anand Kumar'
        }
    },
    methods: {
        changeName: function() {
            this.name = "Anand Kumar Karani";
        }
    }
});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
})