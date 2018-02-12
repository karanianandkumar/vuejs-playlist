var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: "Vue - one",

    },
    methods: {

    },
    computed: {
        greeting: function() {
            return "Greetings from Instance One";
        }
    }
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: "Vue - Two",
    },
    methods: {
        changeTitle: function() {
            one.title = "Title changed from 2 nd INstance..."
        }
    },
    computed: {
        greeting: function() {
            return "Greetings from Instance One";
        }
    }
});

two.title = "Title changed from outside of instance...";