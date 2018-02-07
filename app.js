new Vue({
    el: '#vue-app',
    data: {
        available: true,
        nearby: false
    },
    methods: {

    },
    computed: {
        computedCss: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
})