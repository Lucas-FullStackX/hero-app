<template>
  <HelloWorld />
  <Pagination />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Pagination from "./components/Pagination.vue";

@Options({
  components: {
    HelloWorld,
    Pagination,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #fafafa;
}
h1,
h2,
h3,
h4 {
  color: #fff;
}
</style>
