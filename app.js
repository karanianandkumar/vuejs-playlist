new Vue({
    el: "#vue-app",
    data: {
        favFood: " Nothing.."
    },
    methods: {
        checkRefValue: function() {
            console.log(this.$refs.divRef.innerText);
            this.favFood = this.$refs.input.value;
        }
    }
})