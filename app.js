new Vue({
    el: '#vue-app',
    data: {
        health: 100,
        empty: false
    },
    methods: {
        punch: function() {

            this.health -= 20;
            if (this.health <= 0) {
                this.empty = true;
            }
            console.log(this.health);
        },
        restart: function() {
            this.health = 100;
            this.empty = false;
        }
    },
    computed: {

    }
})