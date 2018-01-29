new Vue({
    el: '#vue-app',
    data: {
        number: 25,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc) {
            this.number += inc;
        },
        subtract: function(dec) {
            this.number -= dec;
        },
        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        linkClicked: function() {
            alert('You clicked on link...');
        }
    }
})