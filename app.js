new Vue({
    el: '#vue-app',
    data: {
        age: 20,
        a: 0,
        b: 0
    },
    methods: {
        /* addToA: function() {
            console.log('INSIDE A');
            return this.age + this.a;
        },
        addToB: function() {
            console.log('INSIDE B');
            return this.age + this.b;
        } */
    },
    computed: {
        addToA: function() {
            console.log('INSIDE A');
            return this.age + this.a;
        },
        addToB: function() {
            console.log('INSIDE B');
            return this.age + this.b;
        }
    }
})