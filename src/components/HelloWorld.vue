<template>
  <div class="hello">
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      title:"First Vue Cli app"
    }
  },
  methods:{
    greeting:function(){
      return "Have a great day~!!!.. Don't stop coding....";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
